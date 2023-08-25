<template>
    <div class="container">
        <header @scroll="scroll" id="header" ref="headerRef">
            <div @touchstart="navHandler($event, idx)" @touchend="navEndHandler($event, idx)"
                :class="{ 'nav-item': true, 'active': idx === currentIdx }" v-for="(nav, idx) in navs" :key="idx">
                {{ nav }}
            </div>
        </header>
        <main :style="{ transform: `translateX(${mainTranX}px)` }">
            <div @touchstart="startHandler" @touchend="endHandler($event, idx)" @touchmove="moveHandler($event, idx)"
                class="content" v-for="(nav, idx) in navs" :key="idx">{{ nav
                }}的内容</div>
        </main>
    </div>
</template>
<script setup>
import { ref, reactive } from 'vue'

const headerRef = ref()

const navs = reactive(['标题1', '标题2', '标题3', '标题4', '标题5', '标题6', '标题7', '标题8'])

const currentIdx = ref(0)

const timer = ref(0)

const pageWidth = document.body.clientWidth

// main 偏移距离
const mainTranX = ref(0)

// 开始x
const startX = ref(0)
// 结束x
const endX = ref(0)
// 移动过程中保存的上一次的x
const moveTargetX = ref(0)

// 标题栏点击事件
const navHandler = (ev, idx) => {
    console.log('headerRef', headerRef.value.offsetWidth)
    timer.value = new Date().getTime()
    // currentIdx.value = idx
    // // return
    // mainTranX.value = -pageWidth * idx

    // // 滑动居中
    // const { target } = ev
    // const { offsetWidth, offsetLeft } = target
    // const scLeft = offsetLeft - pageWidth / 2 + offsetWidth / 2
    // console.log('ev', ev)
    // document.getElementById('header').scrollLeft = scLeft
}


// 标题栏点击事件
const navEndHandler = (ev, idx) => {
    const endTimer = new Date().getTime()
    if (endTimer - timer.value > 300) return
    currentIdx.value = idx
    // return
    mainTranX.value = -pageWidth * idx

    // 滑动居中
    const { target } = ev
    const { offsetWidth, offsetLeft } = target
    const scLeft = offsetLeft - pageWidth / 2 + offsetWidth / 2
    console.log('ev', ev)
    document.getElementById('header').scrollLeft = scLeft
}

const scroll = () => {
    console.log('滚动事件')
}

const startHandler = (ev) => {
    const { changedTouches } = ev
    const [curTouch] = changedTouches
    const { clientX } = curTouch
    startX.value = clientX
    moveTargetX.value = clientX
    console.log('start------开始时的x坐标', clientX)
}


const moveHandler = (ev, idx) => {
    const { changedTouches } = ev
    const [curTouch] = changedTouches
    const { clientX } = curTouch
    const distanceX = clientX - moveTargetX.value
    // 处理第一个右滑和最后一个左滑的特殊情况
    if (idx === 0 && clientX - startX.value > 0) {
        return
    } else if (idx === navs.length - 1 && clientX - startX.value < 0) {
        return
    }
    moveTargetX.value = clientX
    mainTranX.value = mainTranX.value + distanceX
    console.log('moveTargetX.value', mainTranX.value, moveTargetX.value)
    console.log('move--------离开时坐标距离', clientX - startX.value)
    // console.log('move-ev', ev, distanceX)
}


const endHandler = (ev, idx) => {
    const { changedTouches } = ev
    const [curTouch] = changedTouches
    const { clientX } = curTouch
    endX.value = clientX
    const distanceX = endX.value - startX.value
    const distanceXAbs = Math.abs(distanceX)
    const movedXAbs = Math.abs(moveTargetX.value - startX.value)
    if (distanceXAbs > 100) {
        if (distanceX > 0) {
            // 右滑
            if (idx === 0) return
            mainTranX.value = mainTranX.value + pageWidth - movedXAbs
            currentIdx.value = idx - 1
        } else {
            // 左滑
            if (idx === navs.length - 1) return
            mainTranX.value = mainTranX.value - pageWidth + movedXAbs
            currentIdx.value = idx + 1
        }
    } else {
        mainTranX.value = -pageWidth * idx
    }
    console.log('end----------坐标距离比对', distanceXAbs, movedXAbs)
    // console.log('end-ev', ev, idx, mainTranX.value, movedXAbs)
}
</script>
<style lang="less">
.container {
    width: 100%;
    height: 100%;
    overflow: hidden;

    header {
        position: relative;
        display: flex;
        width: 100%;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid red;
        overflow: scroll;
        transition: all .5s;

        &::-webkit-scrollbar {
            display: none;
        }


        .nav-item {
            min-width: 100px;
            text-align: center;

            &.active {
                color: red;
                font-weight: bold;
            }
        }
    }

    main {
        position: relative;
        display: flex;
        // width: 100%;
        width: fit-content;
        height: calc(100% - 40px);
        transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);

        .content {
            // min-width: 390px;
            min-width: 100%;
            height: 100%;

            &:nth-child(2) {
                background: red;
            }

            &:nth-child(3) {
                background: blue;
            }

            &:nth-child(4) {
                background: green;
            }
        }
    }
}
</style>