"use strict"

let n1=1545.5
console.log(n1.toLocaleString('pt-br', {style: 'currency', currency: 'brl'}))
console.log(n1.toLocaleString('pt-br', {style: 'currency', currency: 'eur'}))
console.log(n1.toLocaleString('pt-br', {style: 'currency', currency: 'usb'}))