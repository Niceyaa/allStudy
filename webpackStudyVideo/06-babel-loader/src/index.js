import {hw} from './hw'
import p1Png from './assets/p1.png'
import p1Svg from './assets/p2.svg'
import testTxt from './assets/test.txt'
import p3Jpg from './assets/p3.jpg'
import './style.css'
import './style.less'

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