// 编译工具方法
const compileUtil = {
    getVal(vm, expr) {
        return expr.split('.').reduce((data, currentVal) => {
            // console.log('data,currentVal',data,currentVal)
            return data[currentVal]
        }, vm.$data)
    },
    // 处理 v-text
    text(node, vm, expr) { // expr：msg 
        let val
        if (expr.indexOf('{{') !== -1) {
            val = expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
                // console.log(args)
                return this.getVal(vm, args[1])
            })
        } else {
            val = this.getVal(vm, expr)
        }
        this.updater.textUpdater(node, val)
    },
    html(node, vm, expr) {
        const val = this.getVal(vm, expr)
        this.updater.htmlUpdater(node, val)
    },
    model(node, vm, expr) {
        const val = this.getVal(vm, expr)
        this.updater.modelUpdater(node, val)
    },
    on(node, vm, expr, eventName) {
        let fn = vm.$options.methods && vm.$options.methods[expr]
        node.addEventListener(eventName,fn.bind(vm))
    },
    // 定义一个更新的函数
    updater: {
        textUpdater(node, value) {
            node.textContent = value
        },
        htmlUpdater(node, value) {
            node.innerHTML = value
        },
        modelUpdater(node, value) {
            node.value = value
        }
    }
}
// 编译指令类
class Compile {
    constructor(el, vm) {
        this.el = this.isElementNode(el) ? el : document.querySelector(el)
        this.vm = vm
        console.log('fragment', this.el)
        // 1.获取页面的文档碎片对象，放入内存中会减少页面的回流和重绘
        const fragment = this.node2Fragment(this.el)
        // 2.编译模板
        this.compile(fragment)
        // 3.将文档碎片对象放入页面中
        this.el.appendChild(fragment)
    }
    // 判断节点类型
    isElementNode(node) {
        return node.nodeType === 1 // nodeType === 1 表示是元素
    }
    // 获取页面的文档碎片对象
    node2Fragment(el) {
        const f = document.createDocumentFragment()
        let firstChild
        while (firstChild = el.firstChild) {
            f.appendChild(firstChild)
        }
        return f
    }
    // 编译模板
    compile(fragment) {
        // let childNodes = fragment.childNodes
        [...fragment.childNodes].forEach((child) => {
            if (this.isElementNode(child)) {
                // 编译元素节点
                // console.log('元素节点',child)
                this.compileElement(child)

            } else {
                // 编译文本节点
                // console.log("文本节点",child)
                this.compileText(child)
            }
            if (child.childNodes && child.childNodes.length > 0) {
                this.compile(child)
            }
        })
    }
    // 判断是原生属性还是 指令
    isDerective(attr) {
        return attr.startsWith('v-')
    }
    // 编译元素
    compileElement(node) {
        // 解析属性
        [...node.attributes].map(attr => {
            const {
                name,
                value
            } = attr
            // 根据不同的属性名进行处理 原生属性不用处理 只用处理 v- 开头的指令 属性
            if (this.isDerective(name)) {
                const [, directive] = name.split('-')
                const [dirName, eventName] = directive.split(':')
                // 根据不同的指令进行处理   数据驱动视图
                compileUtil[dirName](node, this.vm, value, eventName)
                // 删除元素上面的 指令 属性
                node.removeAttribute('v-' + directive)
            }else if (name.startsWith('@')) {
                const [,eventName] = name.split('@')
                compileUtil['on'](node, this.vm, value, eventName)
            }
        })
    }
    // 编译文本节点
    compileText(node) {
        const content = node.textContent
        if (/\{\{(.+?)\}\}/.test(content)) {
            compileUtil['text'](node, this.vm, content)
        }
    }
}

// 模板类
class MVue {
    constructor(options) {
        this.$el = options.el
        this.$data = options.data
        this.$options = options

        if (this.$el) {
            // 1.实现一个观察器 --- 观察数据
            new Observer(this.$data)
            // 2.实现一个指令解析器
            new Compile(this.$el, this)
        }

    }
}