<template>
    <div class="container">
        <header>
            <div @touchstart="navHandler(idx)" :class="{ 'nav-item': true, 'active': idx === currentIdx }"
                v-for="(nav, idx) in navs" :key="idx">{{ nav }}</div>
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

const navs = reactive(['标题1', '标题2', '标题3', '标题4'])

const currentIdx = ref(0)

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
const navHandler = idx => {
    currentIdx.value = idx
    mainTranX.value = -pageWidth * idx
}


const startHandler = (ev) => {
    const { changedTouches } = ev
    const [curTouch] = changedTouches
    const { clientX } = curTouch
    startX.value = clientX
    moveTargetX.value = 0
    console.log('开始时的x坐标', clientX)
}


const moveHandler = (ev, idx) => {
    const { changedTouches } = ev
    const [curTouch] = changedTouches
    const { clientX } = curTouch
    if (moveTargetX.value === 0) {
        moveTargetX.value = clientX
        return
    }
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
    console.log('离开时坐标距离', clientX - startX.value)
    // console.log('move-ev', ev, distanceX)
}


const endHandler = (ev, idx) => {
    const { changedTouches } = ev
    const [curTouch] = changedTouches
    const { clientX } = curTouch
    console.log('clientX', clientX)
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
    console.log('坐标距离比对', distanceXAbs, movedXAbs)
    console.log('end-ev', ev, idx, mainTranX.value, movedXAbs)
}
</script>
<style lang="less">
.container {
    width: 100%;
    height: 100%;
    overflow: hidden;

    header {
        display: flex;
        width: 100%;
        border-bottom: 1px solid red;

        .nav-item {
            flex: 1;
            height: 40px;
            line-height: 40px;
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
            min-width: 390px;
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