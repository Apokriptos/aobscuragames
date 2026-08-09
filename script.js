const menuButton = document.querySelector('.mobile-menu');
const nav = document.querySelector('.nav-right');
if(menuButton && nav){
  menuButton.addEventListener('click',()=>nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
}
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')});
},{threshold:.06});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const themeButton=document.querySelector('.theme-dot');
if(themeButton){themeButton.addEventListener('click',()=>document.body.classList.toggle('extra-dark'))}
