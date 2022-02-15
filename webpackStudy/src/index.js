import _ from 'lodash'
import './style.css'
import AI from './ai.jpg'
import Data from './data.xml'
import Note from './data.csv'

import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

function component(){
    const element = document.createElement('div')
    element.innerHTML = _.join(['hello','webpack'],' ')
    element.classList.add('hello')
    const myIcon = new Image()
    myIcon.src = AI
    element.appendChild(myIcon)

    console.log(Data)
    console.log(Note)

    return element
}
document.body.appendChild(component())