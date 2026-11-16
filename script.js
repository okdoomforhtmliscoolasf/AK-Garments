
document.addEventListener('DOMContentLoaded',()=>{
 const toggle=document.querySelector('.menu-toggle'),panel=document.querySelector('.mobile-panel');
 if(toggle&&panel){toggle.addEventListener('click',()=>{const open=panel.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'×':'☰';});panel.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{panel.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰';}));}
 const nodes=document.querySelectorAll('.reveal');
 if('IntersectionObserver' in window){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});nodes.forEach(n=>io.observe(n));}else nodes.forEach(n=>n.classList.add('visible'));
 const form=document.querySelector('#wholesale-form');
 if(form){form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;
  const d=new FormData(form);
  const lines=['Hello AK Garments, I would like to make a wholesale enquiry.','',`Name: ${d.get('name')}`,`Business / Shop: ${d.get('business')}`,`Phone / WhatsApp: ${d.get('phone')}`,`City: ${d.get('city')}`,`Interested in: ${d.get('category')}`,`Estimated quantity: ${d.get('quantity')||'Not specified'}`,`Preferred contact time: ${d.get('time')||'Not specified'}`,`Message: ${d.get('message')||'Not specified'}`,'','Please contact me to discuss the enquiry.'];
  const url='https://wa.me/919082277289?text='+encodeURIComponent(lines.join('\n'));
  const note=document.querySelector('.success-note');if(note){note.style.display='block';note.textContent='Your enquiry is ready. WhatsApp will open in a new tab so you can review and send the message to Ilyas.';}
  const w=window.open(url,'_blank','noopener,noreferrer');if(!w)window.location.href=url;
 });}
});
