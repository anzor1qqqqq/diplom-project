(()=>{"use strict";document.querySelectorAll(".nav_menu").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const t=e.target.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})}))})),(()=>{const e=document.querySelectorAll(".callback-btn"),t=document.querySelector(".modal-overlay"),n=document.querySelector("#callback"),o=document.querySelector(".span_state"),c=e=>{("IMG"===e.target.tagName||e.target.classList.contains("modal-overlay"))&&(o.textContent="",t.style.display="none",n.style.display="none")};e.forEach((e=>{e.addEventListener("click",(()=>{t.style.display="block",n.style.display="block",document.addEventListener("click",c)}))})),document.removeEventListener("click",c)})(),(()=>{const e=document.querySelector('[name="form-callback"]'),t=document.querySelector(".span_state");let n;e.addEventListener("submit",(o=>{o.preventDefault();const c=new FormData(e),a={};n=!0,c.forEach(((e,t)=>{""==e&&(n=!1),a[t]=e})),n&&(t.textContent="Идет отправка ваших данных...",(async e=>await fetch("https://jsonplaceholder.typicode.com/todos",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}).then((e=>e.json())))(a).then((e=>{console.log(e),t.textContent="Ваши данные отправлены"})).catch((e=>{console.log(e),t.style.color="red",t.textContent="Произошла ошибка!"})),e.reset())}))})(),(()=>{const e=document.querySelector('[name="name"]'),t=document.querySelector('[name="telNum"]');e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\а-яА-Я\s]/g,"")})),t.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\d?\+]/g,"")}))})()})();