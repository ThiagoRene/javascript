"use strict"

function carregar(){

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//var hora = 8
msg.innerHTML = `Agora são ${hora} horas`

if(hora >= 0 && hora <12){
    img.src = 'imagens/manha.png'
    document.body.style.background = '#edd9b5'
} 
else if (hora >=12 && hora<=18){
    img.src = 'imagens/tarde.png'
    document.body.style.background='#EA9A7F'
} 
else {
    img.src = 'imagens/noite.png'
    document.body.style.background ="grey"
}
}