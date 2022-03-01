import { hw } from './hw'
import p1Png from './assets/p1.png'
import p1Svg from './assets/p2.svg'
import testTxt from './assets/test.txt'
import p3Jpg from './assets/p3.jpg'
import './style.css'
import './style.less'

import _ from 'lodash'

hw()

let img = document.createElement('img')
img.src = p1Png
document.body.appendChild(img)

let imgSvg = document.createElement('img')
imgSvg.src = p1Svg
document.body.appendChild(imgSvg)

let tTxt = document.createElement('div')
tTxt.textContent = testTxt
document.body.appendChild(tTxt)

let imgJpg = document.createElement('img')
imgJpg.src = p3Jpg
document.body.appendChild(imgJpg)

document.body.classList.add('hello')

console.log('index', _.join(['a', 'b', 'c'], '、'))

let button = document.createElement("button")
button.textContent = '点我动态加载mathFn'
button.addEventListener('click', () => {
    // 动态导入-懒加载
    // 预获取 webpackPrefetch：true 会在头部添加一个 <link rel='prefetch' as='script' href='url'> 会自动在浏览器页面资源加载完成之后去加载这个资源文件
    // import(/*webpackChunkName:"math" , webpackPrefetch:true*/'./mathFn.js').then(({add})=>{
    import(/*webpackChunkName:"math" , webpackPreload:true*/'./mathFn.js').then(({ add }) => {
        console.log(add(4, 5))
    })
})
document.body.appendChild(button)
