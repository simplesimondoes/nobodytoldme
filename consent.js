(function(){
  const key='nte-cookie-consent';
  const banner=document.getElementById('cookie-banner');
  const saved=localStorage.getItem(key);
  if(!saved && banner) banner.hidden=false;
  document.querySelectorAll('[data-consent]').forEach(button=>button.addEventListener('click',()=>{
    localStorage.setItem(key,button.dataset.consent==='accept'?'optional-accepted':'optional-rejected');
    if(banner) banner.hidden=true;
  }));
})();
