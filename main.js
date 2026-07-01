/* ============================================================
   UCON BBQ & Chili Cook-Off: Shared site JavaScript
   ============================================================ */

/* ---- Mobile menu ---- */
function toggleMobileMenu(){
  var menu=document.getElementById('mobileMenu');
  var btn=document.getElementById('hamburger');
  if(menu) menu.classList.toggle('open');
  if(btn){
    btn.classList.toggle('open');
    btn.setAttribute('aria-expanded', btn.classList.contains('open') ? 'true' : 'false');
  }
}
document.addEventListener('click',function(e){
  var menu=document.getElementById('mobileMenu');
  var btn=document.getElementById('hamburger');
  if(menu&&menu.classList.contains('open')&&!menu.contains(e.target)&&btn&&!btn.contains(e.target)){
    menu.classList.remove('open');
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded','false');
  }
});

/* ---- Highlight the current page in the nav ---- */
document.addEventListener('DOMContentLoaded',function(){
  var path=window.location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('[data-nav]').forEach(function(el){
    if(el.getAttribute('data-nav')===path){ el.classList.add('active'); }
  });
});

/* ---- Countdown to event ---- */
/* Event: August 6, 2026, 4:30 PM PDT (UTC-7) */
document.addEventListener('DOMContentLoaded',function(){
  var grid=document.getElementById('cd-days');
  if(!grid) return;
  var target=new Date('2026-08-06T16:30:00-07:00');
  function pad(n){return String(n).padStart(2,'0');}
  function update(){
    var diff=target-new Date();
    if(diff<=0){
      document.getElementById('cd-days').textContent='0';
      document.getElementById('cd-hours').textContent='00';
      document.getElementById('cd-mins').textContent='00';
      document.getElementById('cd-secs').textContent='00';
      return;
    }
    document.getElementById('cd-days').textContent=Math.floor(diff/86400000);
    document.getElementById('cd-hours').textContent=pad(Math.floor((diff%86400000)/3600000));
    document.getElementById('cd-mins').textContent=pad(Math.floor((diff%3600000)/60000));
    document.getElementById('cd-secs').textContent=pad(Math.floor((diff%60000)/1000));
  }
  update();
  setInterval(update,1000);
});

/* ---- FAQ accordion ---- */
function toggleAcc(btn){
  var body=btn.nextElementSibling;
  var isOpen=btn.classList.contains('open');
  document.querySelectorAll('.acc-hdr.open').forEach(function(h){
    h.classList.remove('open');
    h.setAttribute('aria-expanded','false');
    h.nextElementSibling.classList.remove('open');
  });
  if(!isOpen){
    btn.classList.add('open');
    btn.setAttribute('aria-expanded','true');
    body.classList.add('open');
  }
}

/* ---- Scroll to top ---- */
document.addEventListener('DOMContentLoaded',function(){
  var btn=document.getElementById('scrollTop');
  if(!btn) return;
  window.addEventListener('scroll',function(){
    if(window.scrollY>500){ btn.classList.add('visible'); }
    else{ btn.classList.remove('visible'); }
  });
});

/* ---- Respect reduced-motion for the autoplay video ---- */
document.addEventListener('DOMContentLoaded',function(){
  var v=document.querySelector('.event-video');
  if(!v) return;
  v.muted=true;
  var p=v.play(); if(p&&p.catch){p.catch(function(){});}
  var btn=document.getElementById('heroVideoToggle');
  if(btn){
    btn.addEventListener('click',function(){
      if(v.paused){ v.play(); btn.innerHTML='<i class="ti ti-player-pause" aria-hidden="true"></i>'; btn.setAttribute('aria-label','Pause background video'); }
      else { v.pause(); btn.innerHTML='<i class="ti ti-player-play" aria-hidden="true"></i>'; btn.setAttribute('aria-label','Play background video'); }
    });
  }
});

/* ---- Photo lightbox (with prev/next navigation) ---- */
document.addEventListener('DOMContentLoaded',function(){
  var tiles=document.querySelectorAll('.photo-mosaic .p-tile, .champ-card[data-full]');
  if(!tiles.length) return;

  var box=document.createElement('div');
  box.className='lightbox';
  box.innerHTML=
    '<button class="lightbox-close" aria-label="Close photo">&times;</button>'+
    '<button class="lightbox-nav lightbox-prev" aria-label="Previous photo">&#8249;</button>'+
    '<img alt="Enlarged event photo">'+
    '<button class="lightbox-nav lightbox-next" aria-label="Next photo">&#8250;</button>'+
    '<div class="lightbox-counter"></div>';
  document.body.appendChild(box);

  var img=box.querySelector('img');
  var closeBtn=box.querySelector('.lightbox-close');
  var prevBtn=box.querySelector('.lightbox-prev');
  var nextBtn=box.querySelector('.lightbox-next');
  var counter=box.querySelector('.lightbox-counter');
  var lastTrigger=null;

  /* Build array of {src, trigger} only for tiles that have images */
  var items=[];
  tiles.forEach(function(t){
    var src=t.getAttribute('data-full')||(t.querySelector('img')&&t.querySelector('img').src);
    if(src) items.push({src:src,trigger:t});
  });
  var current=0;

  function show(idx){
    current=idx;
    img.src=items[current].src;
    counter.textContent=(current+1)+' / '+items.length;
    prevBtn.style.display=items.length>1?'flex':'none';
    nextBtn.style.display=items.length>1?'flex':'none';
  }
  function open(idx,trigger){
    lastTrigger=trigger;
    show(idx);
    box.classList.add('open');
    closeBtn.focus();
  }
  function close(){
    box.classList.remove('open');
    img.src='';
    if(lastTrigger){lastTrigger.focus();lastTrigger=null;}
  }

  items.forEach(function(item,idx){
    item.trigger.addEventListener('click',function(){open(idx,item.trigger);});
    item.trigger.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();open(idx,item.trigger);}});
  });

  prevBtn.addEventListener('click',function(e){e.stopPropagation();show((current-1+items.length)%items.length);});
  nextBtn.addEventListener('click',function(e){e.stopPropagation();show((current+1)%items.length);});
  closeBtn.addEventListener('click',close);
  box.addEventListener('click',function(e){if(e.target===box)close();});
  document.addEventListener('keydown',function(e){
    if(!box.classList.contains('open')) return;
    if(e.key==='Escape') close();
    if(e.key==='ArrowLeft') show((current-1+items.length)%items.length);
    if(e.key==='ArrowRight') show((current+1)%items.length);
  });
});


/* ---- Transparent hero nav turns solid on scroll (home only) ---- */
(function(){
  var h=document.querySelector('header.nav-over-hero');
  if(!h) return;
  function onScroll(){ h.classList.toggle('scrolled', window.scrollY>60); }
  onScroll();
  window.addEventListener('scroll',onScroll,{passive:true});
})();
