(function(){
  const key='nte-cookie-consent';
  const measurementId='G-Z87X1YFE0G';
  const banner=document.getElementById('cookie-banner');
  const saved=localStorage.getItem(key);
  function loadAnalytics(){
    if(window.__nteAnalyticsLoaded) return;
    window.__nteAnalyticsLoaded=true;
    window.dataLayer=window.dataLayer||[];
    window.gtag=function(){window.dataLayer.push(arguments)};
    window.gtag('js',new Date());
    window.gtag('config',measurementId);
    const script=document.createElement('script');
    script.async=true;
    script.src='https://www.googletagmanager.com/gtag/js?id='+measurementId;
    document.head.appendChild(script);
  }
  if(saved==='optional-accepted') loadAnalytics();
  if(!saved && banner) banner.hidden=false;
  document.querySelectorAll('[data-consent]').forEach(button=>button.addEventListener('click',()=>{
    const accepted=button.dataset.consent==='accept';
    localStorage.setItem(key,accepted?'optional-accepted':'optional-rejected');
    if(accepted) loadAnalytics();
    if(banner) banner.hidden=true;
  }));
})();
