// ==UserScript==
// @name         Bot for Ya220321
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @match        https://crushdrummers.ru/*
// @grant        none
// ==/UserScript==

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
let sites = {"xn----7sbab5aqcbiddtdj1e1g.xn--p1ai":["Как звучит флейта","Танец барабанов","Валторна","Тромбон","Кларнет","Фагот","Саксофон"],
    "crushdrummers.ru":["Барабанное шоу","Заказать шоу барабанщиков","Барабанное шоу в Москве"]
}
let site = Object.keys(sites)[Math.floor(Math.random()*Object.keys(sites).length)];//получить ключи обектов Object.keys(sites)
let keywords = sites[site];
let randomIndex = Math.floor(Math.random()*keywords.length);
let keyword = keywords[randomIndex];
let yaInput = document.getElementsByName('text')[0];// NodeList length 1
let button = document.getElementsByClassName('button')[0];// Tag <button> has class button. HTMl Coll length 2.
let links = document.links;
let button_next = document.getElementsByClassName('pager__item_kind_next')[0];// HTML Collection length 1
if(button!=undefined){
    let i = 0;
    document.cookie = "site="+site;
    let timerId = setInterval(()=>{
        yaInput.value += keyword[i++];
        if(i==keyword.length){
            clearInterval(timerId);
            button.click();
        }
    },500);
}else if (location.hostname == "yandex.ru"){
    site = getCookie("site");
    let nextYaPage = true;
    let currentYaPage = document.getElementsByClassName('pager__item_kind_page')[1].innerText;
    for(let i=0; i<links.length; i++){
        let link = links[i];
        if(link.href.indexOf(site)!=-1){
            nextYaPage = false;
            link.removeAttribute('target');
            link.click();
            break;
        }
    }
    if(nextYaPage && currentYaPage<8) setTimeout(()=>{button_next.click()},1500);
    else if(currentYaPage == 8) location.href = "https://yandex.ru/";
    }else{
    setInterval(()=>{
        if(Math.random()>=0.8) location.href = "https://yandex.ru/";
        let link = links[Math.floor(Math.random()*links.length)];
        if(link.href.indexOf(location.hostname)!=-1){
           link.click();}
        },3000);
}
