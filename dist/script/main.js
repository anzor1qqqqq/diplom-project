(()=>{"use strict";document.querySelectorAll(".nav_menu").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const t=e.target.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})}))})),(()=>{const e=document.querySelector('[name="form-callback"]'),t=document.querySelectorAll(".callback-btn"),l=document.querySelector(".modal-overlay"),c=document.querySelector("#callback"),o=document.querySelector(".span_state"),n=document.querySelectorAll('[href="#application"]'),r=t=>{("IMG"===t.target.tagName||t.target.classList.contains("modal-overlay"))&&(o.textContent="",e.reset(),l.style.display="none",c.style.display="none")};t.forEach((e=>{e.addEventListener("click",(()=>{l.style.display="block",c.style.display="block",document.addEventListener("click",r)}))})),n.forEach((e=>{e.addEventListener("click",(()=>{l.style.display="block",c.style.display="block",document.addEventListener("click",r)}))})),document.removeEventListener("click",r)})(),(()=>{const e=document.querySelector('[name="form-callback"]'),t=document.querySelector(".span_state");let l;e.addEventListener("submit",(c=>{c.preventDefault();const o=new FormData(e),n={};l=!0,o.forEach(((e,t)=>{""==e&&(l=!1),n[t]=e})),l&&(t.textContent="Идет отправка ваших данных...",(async e=>await fetch("https://jsonplaceholder.typicode.com/todos",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}).then((e=>e.json())))(n).then((e=>{console.log(e),t.textContent="Ваши данные отправлены"})).catch((e=>{console.log(e),t.style.color="red",t.textContent="Произошла ошибка!"})),e.reset())}))})(),(()=>{const e=document.querySelector('[name="name"]'),t=document.querySelector('[name="telNum"]');e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\а-яА-Я\s]/g,"")})),t.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\d?\+]/g,"")}))})(),(()=>{const e=document.querySelectorAll(".item");let t=0;setInterval((()=>{e[t].classList.add("hidden"),2!==t?t++:t=0,e[t].classList.remove("hidden")}),3e3)})(),(()=>{const e=document.querySelector(".up"),t=document.querySelector(".services-section ");document.addEventListener("scroll",(()=>{let l=t.getBoundingClientRect().y;l<=0?e.style.display="block":l>=300&&(e.style.display="none")})),e.addEventListener("click",(t=>{t.preventDefault();const l=e.getAttribute("href");document.querySelector(l).scrollIntoView({behavior:"smooth",block:"start"})}))})(),(()=>{const e=document.querySelector(".accordeon"),t=e.querySelectorAll(".element"),l=e.querySelectorAll(".element-content");t.forEach(((e,c)=>{e.addEventListener("click",(()=>{e.classList.contains("active")?(e.classList.remove("active"),l[c].style.height="",l[c].style.padding=""):(t.forEach(((e,t)=>{e.classList.remove("active"),l[t].style.height="",l[t].style.padding=""})),e.classList.add("active"),l[c].style.height=l[c].scrollHeight+50+"px",l[c].style.padding="20px")}))}))})(),(()=>{const e=document.querySelectorAll(".col-md-4"),t=document.querySelector(".arrow-left"),l=document.querySelector(".arrow-right"),c=document.querySelector(".services-arrow");let o=0,n=0;window.screen.availWidth<1e3?(e.forEach((e=>{e.style.right="0px"})),c.style.display="none"):(c.style.display="",(()=>{e.forEach((t=>{t.classList.contains("no-active")?(o+=e[0].offsetWidth,t.style.right="-"+o+"px"):t.style.right="0px"}));let c=parseInt(e[5].style.right);l.addEventListener("click",(()=>{e.forEach((t=>{c=parseInt(e[5].style.right),0!==c&&(o=parseInt(t.style.right),t.style.right=o+t.offsetWidth+"px")}))})),t.addEventListener("click",(()=>{e.forEach((t=>{c=parseInt(e[5].style.right),n="-"+3*t.offsetWidth,c!==+n&&(o=parseInt(t.style.right),t.style.right=o-t.offsetWidth+"px")}))}))})())})()})();