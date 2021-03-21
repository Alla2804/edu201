// ==UserScript==
// @name         Bot for Ya
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @grant        none
// ==/UserScript==

let keywords = ["Как звучит флейта","Валторна","Тромбон","Кларнет","Фагот","Гобой","Саксофон"];
let randomIndex = Math.floor(Math.random()*keywords.length);
let keyword = keywords[randomIndex];
let yaInput = document.getElementsByName('text')[0];// NodeList length 1
let button = document.getElementsByClassName('button')[0];// Tag <button> has class button. HTMl Collection length 2.
let links = document.links;
let button_next = document.getElementsByClassName('pager__item_kind_next')[0];// HTML Collection length 1
if(button!=undefined){
    let i = 0;
    let timerId = setInterval(()=>{
        yaInput.value += keyword[i++];
        if(i==keyword.length){
            clearInterval(timerId);
            button.click();
        }
    },800);
}else{
    let nextYaPage = true;
    for(let i=0; i<links.length; i++){
        let link = links[i];
        if(link.href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai")!=-1){
            nextYaPage = false;
            link.removeAttribute('target');// Target(_blank) of tag <a> is deleted
            link.click(); // Кликаем по ссылке
            break; // Прерываем цикл
        }
    }
    if(nextYaPage)button_next.click();
}
