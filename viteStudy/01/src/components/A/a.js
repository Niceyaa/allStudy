import aStyle from './a.module.css'
const div = document.createElement('div')

div.innerText = '组件a'

div.className = aStyle.footer

fetch('/api/users', {

    method: 'post'
}).then(res => {
    console.log('res', res)
}).catch(err => {
    console.log('err', err)
})

document.body.appendChild(div)