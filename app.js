// Basic helpers
const $ = (sel)=>document.querySelector(sel);

document.addEventListener('DOMContentLoaded', ()=>{
  // Year in footer
  $('#year').textContent = new Date().getFullYear();

  // Mobile menu
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('#nav');
  burger?.addEventListener('click', ()=>{
    const expanded = burger.getAttribute('aria-expanded') === 'true' || false;
    burger.setAttribute('aria-expanded', (!expanded).toString());
    nav.classList.toggle('show');
  });

  // Hide splash after animation as fallback
  setTimeout(()=>{
    const s = document.getElementById('splash');
    if(s){ s.style.display = 'none'; }
  }, 3200);
});

// Lightweight mailto "send" to open default client
function handleSubmit(e){
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  const subject = encodeURIComponent('Neue Anfrage über fms-boehmisch.de');
  const body = encodeURIComponent(`Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`);
  window.location.href = `mailto:info@fms-boehmisch.de?subject=${subject}&body=${body}`;
  form.reset();
  alert('Danke! Ihr E-Mail-Programm öffnet sich. Alternativ nutzen Sie die Kontaktangaben rechts.');
  return false;
}
