/* ==========================================================================
   MOTION — one scroll language for every page and every screen size
   · siblings that reveal together are staggered 80ms apart
   · a thin brick-red progress line tracks the read
   · the hero plays its entrance once; its objects part and fade on scroll
   ========================================================================== */
(function(){
"use strict";
/* ?still renders the page fully settled (used for screenshots) */
if(/[?&]still(=|&|$)/.test(location.search)) document.documentElement.classList.add("still");
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches || document.documentElement.classList.contains("still");

/* stagger — index each .rv among its .rv siblings */
const seen = new Map();
document.querySelectorAll(".rv").forEach(el => {
  const p = el.parentElement, n = seen.get(p) || 0;
  el.style.setProperty("--d", Math.min(n, 6) * 80 + "ms");
  seen.set(p, n + 1);
});

/* reading progress */
const bar = document.createElement("div");
bar.className = "sprog"; bar.setAttribute("aria-hidden", "true");
document.body.appendChild(bar);

/* hero */
const hero = document.querySelector(".hx");
const fig = hero && hero.querySelector(".hx-fig");
const notes = hero && hero.querySelector(".hx-side");
const scene = hero && hero.querySelector(".scene-hero");
const img = fig && fig.querySelector("img");
function layout(){
  if(!hero || !fig) return;
  const hr = hero.getBoundingClientRect(), fr = fig.getBoundingClientRect();
  /* the thread runs from under the notes to the hero's bottom edge */
  if(notes){ const nb = notes.getBoundingClientRect().bottom; hero.style.setProperty("--thread", Math.max(28, Math.round(hr.bottom - nb - 22)) + "px"); }
  /* stacked layout: the sand band starts at Sagar's chin line, as on desktop */
  hero.style.setProperty("--band", Math.round(fr.top - hr.top + fr.height * .52) + "px");
  window.dispatchEvent(new Event("hero:layout"));
}

let queued = false;
function frame(){
  queued = false;
  const y = window.scrollY, max = document.documentElement.scrollHeight - window.innerHeight;
  bar.style.transform = "scaleX(" + (max > 0 ? Math.min(1, y / max) : 0) + ")";
  if(hero){
    const k = Math.min(1, y / Math.max(1, hero.offsetHeight));
    window.__heroScroll = k;
    if(!reduce && k <= 1){
      hero.style.setProperty("--ty", (y * -.05).toFixed(1) + "px");
      if(scene) scene.style.opacity = Math.max(0, 1 - k * 1.6).toFixed(3);   /* objects fade before they reach the text */
    }
  }
}
const onScroll = () => { if(!queued){ queued = true; requestAnimationFrame(frame); } };
window.addEventListener("scroll", onScroll, {passive:true});
window.addEventListener("resize", () => { layout(); onScroll(); });

if(img){ if(img.complete) layout(); else img.addEventListener("load", layout); }
if(document.fonts && document.fonts.ready) document.fonts.ready.then(layout);
layout(); frame();

/* start the hero entrance once the photo can be shown sharp */
const go = () => document.documentElement.classList.add("ready");
if(img && !img.complete){ img.addEventListener("load", go); setTimeout(go, 1600); } else requestAnimationFrame(go);
})();
