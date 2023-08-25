import aStyle from './a.module.css'
const div = document.createElement('div')

div.innerText = '组件a'

div.className = aStyle.footer

document.body.appendChild(div)