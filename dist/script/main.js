(()=>{"use strict";document.querySelectorAll(".nav_menu").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const t=e.target.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})}))})),(()=>{const e=document.querySelector('[name="form-callback"]'),t=document.querySelectorAll(".callback-btn"),c=document.querySelector(".modal-overlay"),o=document.querySelector("#callback"),n=document.querySelector(".span_state"),l=t=>{("IMG"===t.target.tagName||t.target.classList.contains("modal-overlay"))&&(n.textContent="",e.reset(),c.style.display="none",o.style.display="none")};t.forEach((e=>{e.addEventListener("click",(()=>{c.style.display="block",o.style.display="block",document.addEventListener("click",l)}))})),document.removeEventListener("click",l)})(),(()=>{const e=document.querySelector('[name="form-callback"]'),t=document.querySelector(".span_state");let c;e.addEventListener("submit",(o=>{o.preventDefault();const n=new FormData(e),l={};c=!0,n.forEach(((e,t)=>{""==e&&(c=!1),l[t]=e})),c&&(t.textContent="Идет отправка ваших данных...",(async e=>await fetch("https://jsonplaceholder.typicode.com/todos",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}).then((e=>e.json())))(l).then((e=>{console.log(e),t.textContent="Ваши данные отправлены"})).catch((e=>{console.log(e),t.style.color="red",t.textContent="Произошла ошибка!"})),e.reset())}))})(),(()=>{const e=document.querySelector('[name="name"]'),t=document.querySelector('[name="telNum"]');e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\а-яА-Я\s]/g,"")})),t.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\d?\+]/g,"")}))})(),(()=>{const e=document.querySelectorAll(".item");let t=0;setInterval((()=>{e[t].classList.add("hidden"),2!==t?t++:t=0,e[t].classList.remove("hidden")}),3e3)})(),(()=>{const e=document.querySelector(".up"),t=document.querySelector(".services-section ");document.addEventListener("scroll",(()=>{let c=t.getBoundingClientRect().y;c<=0?e.style.display="block":c>=300&&(e.style.display="none")})),e.addEventListener("click",(t=>{t.preventDefault();const c=e.getAttribute("href");document.querySelector(c).scrollIntoView({behavior:"smooth",block:"start"})}))})(),(()=>{const e=document.querySelector(".accordeon"),t=e.querySelectorAll(".element"),c=e.querySelectorAll(".element-content");t.forEach(((e,o)=>{e.addEventListener("click",(()=>{e.classList.contains("active")?(e.classList.remove("active"),c[o].style.height="",c[o].style.padding=""):(t.forEach(((e,t)=>{e.classList.remove("active"),c[t].style.height="",c[t].style.padding=""})),e.classList.add("active"),c[o].style.height=c[o].scrollHeight+50+"px",c[o].style.padding="20px")}))}))})()})();