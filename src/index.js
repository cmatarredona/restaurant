import {loadContact, loadInfo, loadMenu, loadPage} from "./restaurante.js";
const page=document.getElementById("content");
document.getElementById("info").innerHTML=loadInfo();
page.innerHTML=loadPage();
document.getElementById("home").addEventListener(
    "click",
    ()=>{
        page.innerHTML=loadPage();
    }
)
document.getElementById("contact").addEventListener(
    "click",
    ()=>{
        page.innerHTML=loadContact();
    }
)
document.getElementById("menu").addEventListener(
    "click",
    ()=>{
        page.innerHTML=loadMenu();
    }
)