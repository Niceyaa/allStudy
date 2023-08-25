import bStyle from './b.module.css'

console.log('bStyle', bStyle)

const div = document.createElement('div')

div.innerText = '组件b'

div.className = bStyle.footer

document.body.appendChild(div)