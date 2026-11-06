/* ==========================================================================
   SAGAR SHARMA — PORTFOLIO · shared rendering
   Pages declare <body data-page="home|case|resume">. Content lives in data.js.
   ========================================================================== */
(function(){
"use strict";

const S = window.SITE;
const $  = (s,r)=>(r||document).querySelector(s);
const $$ = (s,r)=>Array.from((r||document).querySelectorAll(s));
const NN = n => String(n).padStart(2,"0");
const slide = (id,n,thumb) => window.DECK_PNG[id]
  ? `images/${id}/${NN(n)}.png`
  : `images/${id}/${NN(n)}${thumb?"_t":""}.jpg`;
const deckCount = id => window.DECK[id] || 0;
const allWork = () => window.PROJECTS.concat(window.DATA_PROJECTS.map(d=>Object.assign({tags:["Data & Analytics"]},d)));
const find = id => allWork().concat(window.WORK_CASES).find(p=>p.id===id);
/* flat, indexable case pages; GitHub Pages serves them without .html */
const LOCAL = /^(localhost|127\.|$)/.test(location.hostname);
const pageUrl = n => LOCAL ? `${n}.html` : n;
const caseUrl = id => pageUrl(`case-${id}`);
/* lower-case the first letter of a caption, but leave acronyms (FY31, GMV, NPV) alone */
const lcFirst = t => { t = String(t); return /^[A-Z]{2}/.test(t) ? t : t.charAt(0).toLowerCase() + t.slice(1); };
const esc = s => String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const page = document.body.dataset.page;

/* ---------------- NAV + FOOTER ---------------- */
function chrome(crumb){
  const navHtml = `
  <a class="skip" href="#main">Skip to content</a>
  <header class="nav"><div class="wrap nav-in">
    <a class="brand" href="index.html"><b>${S.name}</b><span class="sq" aria-hidden="true"></span><span class="mono">${S.role}</span></a>
    <button class="burger" aria-label="Menu" aria-expanded="false" aria-controls="navlinks"><span></span><span></span><span></span></button>
    <nav class="nav-links" id="navlinks" aria-label="Primary">
      <a href="index.html#experience">Experience</a>
      <a href="index.html#work">Cases</a>
      <a href="index.html#data">Data</a>
      <a href="index.html#how">How I work</a>
      <a href="resume.html" ${page==="resume"?'aria-current="page"':""}>Resume</a>
      <a href="cv.html" ${page==="cv"?'aria-current="page"':""}>CV</a>
      <a class="nav-mail" href="mailto:${S.email}?subject=Hello%20Sagar">Email me</a>
    </nav>
    <a class="nav-cta" href="mailto:${S.email}?subject=Hello%20Sagar">Say hello →</a>
  </div></header>
  ${crumb ? `<nav class="crumb" aria-label="Breadcrumb"><div class="wrap"><a href="index.html">Home</a><span>/</span>${crumb}</div></nav>` : ""}`;
  document.body.insertAdjacentHTML("afterbegin", navHtml);

  const foot = `
  <footer class="foot"><div class="wrap">
    <div class="foot-in">
      <a href="mailto:${S.email}">${S.email}</a>
      <p class="foot-name">sagar sharma</p>
      <div class="r"><a href="${S.linkedin}" target="_blank" rel="noopener">linkedin</a><a href="resume.html">resume</a><a href="index.html#work">work</a></div>
    </div>
    <nav class="foot-topics mono" aria-label="Focus areas">${Object.keys(window.TOPICS).map(k=>`<a href="${pageUrl(k)}">${window.TOPICS[k].h1}</a>`).join("")}</nav>
    <div class="foot-base mono"><span>${S.city}</span><span>PGDM · IMT Nagpur · 2026</span></div>
  </div></footer>`;
  document.body.insertAdjacentHTML("beforeend", foot);

  const b = $(".burger"), l = $("#navlinks");
  b.addEventListener("click",()=>{ const o=l.classList.toggle("open"); b.setAttribute("aria-expanded",o); });
  const shut = () => { l.classList.remove("open"); b.setAttribute("aria-expanded","false"); };
  $$("#navlinks a").forEach(a=>a.addEventListener("click",shut));
  document.addEventListener("keydown",e=>{ if(e.key==="Escape" && l.classList.contains("open")){ shut(); b.focus(); } });
  document.addEventListener("click",e=>{ if(l.classList.contains("open") && !e.target.closest(".nav")) shut(); });
}

/* ---------------- REVEAL ---------------- */
function reveal(){
  if(!("IntersectionObserver" in window)){ $$(".rv").forEach(e=>e.classList.add("in")); return; }
  const io = new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target);} }),{rootMargin:"0px 0px -8% 0px"});
  $$(".rv").forEach(e=>io.observe(e));
}

/* ---------------- LIGHTBOX ---------------- */
let lb = null, lbId = null, lbI = 1, lbN = 0, lbFrom = null;
function lightbox(){
  if(lb) return;
  document.body.insertAdjacentHTML("beforeend",`
  <div class="lb" role="dialog" aria-modal="true" aria-label="Slide viewer">
    <div class="lb-top"><span class="lb-t"></span><button class="lb-x" aria-label="Close">×</button></div>
    <div class="lb-stage"><button class="lb-nav lb-p" aria-label="Previous slide">←</button><img alt=""><button class="lb-nav lb-n" aria-label="Next slide">→</button></div>
    <div class="lb-strip"></div>
  </div>`);
  lb = $(".lb");
  $(".lb-x").onclick = closeLb;
  $(".lb-p").onclick = ()=>showLb(lbI-1);
  $(".lb-n").onclick = ()=>showLb(lbI+1);
  lb.addEventListener("click",e=>{ if(e.target===lb || e.target.classList.contains("lb-stage")) closeLb(); });
  document.addEventListener("keydown",e=>{
    if(!lb.classList.contains("open")) return;
    if(e.key==="Escape") closeLb();
    if(e.key==="ArrowRight") showLb(lbI+1);
    if(e.key==="ArrowLeft") showLb(lbI-1);
    if(e.key==="Tab"){ const f = $$("button",lb), a = f[0], z = f[f.length-1];
      if(e.shiftKey && document.activeElement===a){ e.preventDefault(); z.focus(); }
      else if(!e.shiftKey && document.activeElement===z){ e.preventDefault(); a.focus(); } }
  });
}
function openLb(id,n){
  lightbox(); lbFrom = document.activeElement; lbId=id; lbN=deckCount(id);
  const p = find(id);
  $(".lb-strip").innerHTML = Array.from({length:lbN},(_,i)=>`<button data-i="${i+1}" aria-label="Slide ${i+1}"><img src="${slide(id,i+1,true)}" alt="" loading="lazy"></button>`).join("");
  $$(".lb-strip button").forEach(b=>b.onclick=()=>showLb(+b.dataset.i));
  lb.dataset.brand = p ? p.brand : "";
  lb.classList.add("open"); document.body.style.overflow="hidden";
  showLb(n); $(".lb-x").focus();
}
function showLb(n){
  lbI = ((n-1+lbN)%lbN)+1;
  $(".lb-stage img").src = slide(lbId,lbI,false);
  $(".lb-stage img").alt = `${lb.dataset.brand} — slide ${lbI} of ${lbN}`;
  $(".lb-t").textContent = `${lb.dataset.brand} · ${NN(lbI)} / ${NN(lbN)}`;
  $$(".lb-strip button").forEach(b=>b.classList.toggle("on",+b.dataset.i===lbI));
  const on = $(".lb-strip button.on"); if(on) on.scrollIntoView({block:"nearest",inline:"center"});
}
function closeLb(){ lb.classList.remove("open"); document.body.style.overflow=""; if(lbFrom && lbFrom.focus) lbFrom.focus(); }

/* ---------------- MOCK VISUALS (HTML "screens" for tiles) ---------------- */
function mockFor(d){
  if(d.shot) return `<div class="mock mock-shot"><img src="${d.shot}" alt="" loading="lazy"></div>`;
  if(d.mock==="sql" && d.code){
    const c = esc(d.code).replace(/\b(SELECT|FROM|WITH|AS|CREATE|OR|ALTER|PROCEDURE|BEGIN|END|TRY|CATCH|BULK|INSERT|TRUNCATE|TABLE|DELETE|WHERE|OVER|PARTITION|BY|ORDER|ROW_NUMBER|PRINT)\b/g,'<span class="kw">$1</span>');
    return `<div class="mock"><div class="mock-h"><i></i><i></i><i></i>&nbsp;${esc(d.tool)}</div><pre class="code">${c}</pre></div>`;
  }
  if(d.mock==="line"){
    return `<div class="mock"><div class="mock-h"><i></i><i></i><i></i>&nbsp;${esc(d.tool)}</div>
      <svg viewBox="0 0 200 100" preserveAspectRatio="none" style="width:100%;height:calc(100% - 32px);display:block">
        <path d="M0 80 C30 70 40 40 70 50 S120 20 140 30 S180 10 200 14" fill="none" stroke="var(--red)" stroke-width="2"/>
        <path d="M0 88 C30 84 50 70 80 72 S130 56 160 60 S190 50 200 52" fill="none" stroke="var(--ink-3)" stroke-width="1.5" stroke-dasharray="3 3"/>
        <line x1="0" y1="99" x2="200" y2="99" stroke="var(--rule)"/></svg></div>`;
  }
  if(d.mock==="scatter"){
    let dots=""; for(let i=0;i<34;i++){const x=6+i*5.6, y=90-i*2.2+(Math.sin(i*2.3)*12); dots+=`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.2" fill="var(--ink-3)"/>`;}
    return `<div class="mock"><div class="mock-h"><i></i><i></i><i></i>&nbsp;regplot · budget × gross</div>
      <svg viewBox="0 0 200 100" style="width:100%;height:calc(100% - 32px);display:block">${dots}
      <line x1="4" y1="94" x2="196" y2="18" stroke="var(--red)" stroke-width="2"/></svg></div>`;
  }
  if(d.mock==="schema"){
    const box=(x,y,t,hi)=>`<rect x="${x}" y="${y}" width="56" height="26" rx="4" fill="${hi?"var(--red)":"var(--paper-2)"}"/><text x="${x+28}" y="${y+16.5}" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="8" fill="${hi?"#fff":"var(--ink)"}">${t}</text>`;
    return `<div class="mock"><div class="mock-h"><i></i><i></i><i></i>&nbsp;model view</div>
      <svg viewBox="0 0 200 110" style="width:100%;height:calc(100% - 32px);display:block">
      <g stroke="var(--ink-3)" stroke-width="1"><line x1="100" y1="55" x2="38" y2="22"/><line x1="100" y1="55" x2="162" y2="22"/><line x1="100" y1="55" x2="38" y2="90"/><line x1="100" y1="55" x2="162" y2="90"/></g>
      ${box(10,9,"dim_date")}${box(134,9,"dim_prod")}${box(10,77,"dim_cust")}${box(134,77,"dim_region")}${box(72,42,"fact_sales",true)}</svg></div>`;
  }
  const hs=[40,62,48,80,55,92,70,58,76,44];
  return `<div class="mock"><div class="mock-h"><i></i><i></i><i></i>&nbsp;${esc(d.tool||"dashboard")}</div>
    <div class="minibars" style="height:calc(100% - 32px)">${hs.map((h,i)=>`<i class="${i===5?"hi":""}" style="height:${h}%"></i>`).join("")}</div></div>`;
}

function expTile(e){
  if(e.id==="hanbai"){
    return `<div class="tile" style="--c:${e.color}" aria-hidden="true"><div class="sqbg"></div>
      <div class="mock" style="left:-22%;top:9%;width:78%">
        <div class="mock-h"><i></i><i></i><i></i>&nbsp;IIMX · personas</div>
        <div class="mock-b">${e.personas.map(p=>`<div class="persona"><div class="av">${p[0][0]}</div><div><b>${p[0]}</b><span>${p[1]} · ${p[2]}</span><span class="bud">${p[3]}</span></div></div>`).join("")}</div>
      </div>
      <div class="mock" style="right:-10%;bottom:16%;width:64%">
        <div class="mock-h"><i></i><i></i><i></i>&nbsp;Launch funnel · AIDA</div>
        <div class="mock-b funnel">${e.funnel.map(f=>`<div><b>${f[0]}</b><span>${f[1].split(",")[0]}</span></div>`).join("")}</div>
      </div>
      <span class="lbl r">${e.dates}</span></div>`;
  }
  return `<div class="tile" style="--c:${e.color}" aria-hidden="true"><div class="sqbg"></div>
    <div class="mock" style="left:-20%;top:12%;width:92%">
      <div class="mock-h"><i></i><i></i><i></i>&nbsp;${e.kpiTitle||"Growth dashboard"}</div>
      <div class="mock-b"><div class="kpis">${e.kpis.map(k=>`<div class="kpi"><b>${k[0]}</b><span>${k[1]}</span></div>`).join("")}</div>
      ${e.noSpark?"":`<svg class="spark" viewBox="0 0 200 46" preserveAspectRatio="none" style="width:100%"><path d="M0 40 L20 38 L40 36 L60 33 L80 30 L100 26 L120 21 L140 17 L160 12 L180 8 L200 4" fill="none" stroke="var(--red)" stroke-width="2"/><path d="M0 40 L20 38 L40 36 L60 33 L80 30 L100 26 L120 21 L140 17 L160 12 L180 8 L200 4 L200 46 L0 46Z" fill="var(--red)" opacity=".08"/></svg>`}</div>
    </div>
    <span class="lbl">${e.tileLbl||"Remote"}</span><span class="lbl r">${e.dates}</span></div>`;
}

/* ---------------- STACKING SLIDER ----------------
   Each card sticks under the nav and the next one slides over it. A card taller
   than the screen scrolls until its bottom shows, then sticks, so nothing is cut off. */
function stack(cards){
  if(!cards.length) return;
  const nav = ($(".nav")||{offsetHeight:0}).offsetHeight;
  const calm = matchMedia("(prefers-reduced-motion: reduce)").matches || /[?&]still/.test(location.search);
  const fx = () => {
    if(calm) return;
    const vh = window.innerHeight;
    cards.forEach((c,i)=>{
      const nx = cards[i+1]; if(!nx) return;
      const d = nx.getBoundingClientRect().top - Math.max(parseFloat(c.style.top),0);
      c.style.setProperty("--p", Math.min(1, Math.max(0, 1 - d/Math.max(240, vh*.8))).toFixed(3));
    });
  };
  const layout = () => {
    const vh = window.innerHeight;
    cards.forEach((c,i)=>{
      const base = nav + 8 + Math.min(i,6)*6, h = c.offsetHeight;
      const v = (h + base > vh - 8 ? Math.min(base, vh - h - 8) : base) + "px";
      if(c.style.top !== v) c.style.top = v;
    });
    fx();
  };
  let q = false;
  window.addEventListener("scroll", ()=>{ if(!q){ q = true; requestAnimationFrame(()=>{ q = false; fx(); }); } }, {passive:true});
  /* keyboard: a focused link must not stay hidden under a later card */
  const shown = e => { const r = e.getBoundingClientRect(), y = r.top + r.height/2; if(y < nav || y > window.innerHeight) return false;
    const hit = document.elementFromPoint(r.left + r.width/2, y); return !!hit && (e === hit || e.contains(hit)); };
  cards.forEach(c => c.addEventListener("focusin", e => {
    const t = e.target, m = c.previousElementSibling;
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      if(!m || shown(t)) return;
      window.scrollTo({top: m.getBoundingClientRect().top + window.scrollY - nav - 8, behavior:"instant"});
      const b = t.getBoundingClientRect().bottom - window.innerHeight + 16;
      if(b > 0) window.scrollBy({top:b, behavior:"instant"});
    }));
  }));
  window.addEventListener("resize", layout);
  if("ResizeObserver" in window){ const ro = new ResizeObserver(layout); cards.forEach(c=>ro.observe(c)); }
  layout();
}

/* ---------------- HOME ---------------- */
function home(){
  chrome(null);
  const main = $("#main");
  const feats = window.FEATURED.map(find);

  main.innerHTML = `
  <section class="hero hx" aria-label="Introduction">
    <span class="hx-band" aria-hidden="true"></span>
    <canvas class="scene scene-hero" data-scene="hero" aria-hidden="true"></canvas>
    <div class="hx-avail mono"><i></i>Open to new roles</div>
    <h1 class="hx-title"><span class="vh">Sagar Sharma: </span><span class="hx-w hx-w1">hey,</span><span class="hx-w hx-w2">i’m sagar</span></h1>
    <div class="hx-notes">
      <p class="hx-note"><b>Business × Marketing × Analytics.</b> I frame the business problem, analyse the data and recommend what to do.</p>
      <div class="hx-side mono">PGDM, IMT Nagpur ’26.<br>Polycab India trainee: <a href="#experience">15+ new outlets, ~20% monthly personal sales growth</a>.<br><a class="hx-go" href="#fit">Hiring? Pick the role →</a></div>
    </div>
    <svg class="hx-curve" viewBox="0 0 160 180" aria-hidden="true"><path d="M4 150 C 60 150, 120 120, 150 6" fill="none" stroke="var(--red)" stroke-width="1.2"/></svg>
    <figure class="hx-fig"><img src="assets/img/suit.webp" alt="Sagar Sharma in a navy suit" width="1023" height="1537" fetchpriority="high" decoding="async"></figure>
    <span class="hero-thread" aria-hidden="true"></span>
  </section>

  <section class="sec sec-first" id="experience"><div class="wrap">
    <div class="sec-head rv">
      <div><p class="eyebrow">Experience</p><h2 class="display">the real <em>jobs</em></h2></div>
      <div class="sec-side">
        <p class="lede">Three companies, four roles: my current Polycab India traineeship and two internships in 2025. The business results on this site come from here.</p>
        <canvas class="scene scene-sm" data-scene="funnel" aria-hidden="true"></canvas>
      </div>
    </div>
    ${window.EXPERIENCE.map(e=>`
    <article class="feat rv">
      <div>
        <h3 class="feat-title">${e.org}<span class="soft">${e.orgSub}</span></h3>
        <div class="feat-meta">
          <div class="k">${e.role}<span class="muted">${e.domain}</span><span class="muted">${e.place}</span></div>
          <div>${e.intro.map(p=>`<p>${p}</p>`).join("")}
            ${e.sub?`<div class="exp-sub">${e.sub.map(s=>`<span><b>${s.role}</b> · ${s.dates}</span>`).join("")}</div>`:""}
            ${e.caseId?`<a class="feat-cta" href="${caseUrl(e.caseId)}">Read the full story <span class="arr">→</span></a>`:""}</div>
        </div>
      </div>
      ${expTile(e)}
    </article>
    <div class="points rv">${e.points.map(p=>`<div class="point"><h3>${p[0]}</h3><p>${p[1]}</p></div>`).join("")}</div>`).join("")}
  </div></section>

  <section class="sec fit" id="fit"><div class="wrap">
    <div class="sec-head rv">
      <div><p class="eyebrow">For recruiters and referrers</p><h2 class="display">hiring for <em>which role?</em></h2></div>
      <p class="lede">Pick one. You get the real experience and the three cases that matter for it, plus a link to send on.</p>
    </div>
    <div class="fit-tabs rv" role="group" aria-label="Choose a role">${window.ROLES.map(r=>`<button class="chip" data-r="${r.id}" aria-pressed="false">${r.name}</button>`).join("")}</div>
    <div class="fit-panel rv" aria-live="polite"></div>
  </div></section>

<section class="sec" id="work"><div class="wrap">
    <div class="sec-head rv">
      <div><p class="eyebrow">Selected case studies</p><h2 class="display">the <em>thinking</em></h2><p class="stk-hint mono" aria-hidden="true">Keep scrolling: ${feats.length} cases stack up ↓</p></div>
      <p class="lede">Independent strategy cases: diagnosis, sizing, positioning, GTM and the model underneath. None is client work. Treat every forward-looking number as my estimate or projection.</p>
    </div>
    <nav class="stk-jump" aria-label="Jump to a case">${feats.map((p,i)=>`<a href="#case-${p.id}"><span class="n">${NN(i+1)}</span>${p.brand}</a>`).join("")}</nav>
    <div class="stk">
      ${feats.map((p,i)=>{
        const n = deckCount(p.id);
        return `<span class="stk-mark" id="case-${p.id}"></span>
      <article class="stk-card" style="--c:${p.color}">
        <a class="stk-pic" href="${caseUrl(p.id)}" tabindex="-1" aria-hidden="true">
          ${n?`<img src="${slide(p.id,1,false)}" srcset="${slide(p.id,1,true)} 620w, ${slide(p.id,1,false)} 1800w" sizes="(max-width:900px) 92vw, 56vw" width="1800" height="1013" alt="" loading="lazy" decoding="async">`:""}
        </a>
        <div class="stk-body">
          <p class="stk-no mono"><sup>(${NN(i+1)})</sup> ${p.brand} · ${p.label||""}</p>
          <h3 class="stk-hook">${p.hook}</h3>
          <p class="stk-line">${p.line}</p>
          <dl class="feat-stats">${p.stats.map(s=>`<div><dt>${lcFirst(s[1])}</dt><dd>${s[0]}</dd></div>`).join("")}</dl>
          <p class="stk-foot"><a class="feat-cta" href="${caseUrl(p.id)}">Open the ${esc(p.brand)} case <span class="arr">→</span></a><span class="stk-tag mono">${p.note?"Illustrative case":"Independent case, not client work"}</span></p>
        </div>
      </article>`;}).join("")}
    </div>
  </div></section>

<section class="sec" id="data"><div class="wrap">
    <div class="sec-head rv">
      <div><p class="eyebrow">Data &amp; analytics</p><h2 class="display">the <em>analysis</em></h2></div>
      <div class="sec-side">
        <p class="lede">Self-directed builds, not employer work: SQL warehouses, Tableau, Power BI and Python. This is where the strategy gets checked.</p>
        <canvas class="scene scene-sm" data-scene="bars" aria-hidden="true"></canvas>
      </div>
    </div>
    <div class="dgrid">${window.DATA_PROJECTS.map(d=>`
      <a class="dcard rv" href="${caseUrl(d.id)}">
        <div class="dt" style="--c:${d.color}">${mockFor(d)}<span class="lbl">${d.tool}</span></div>
        <h3>${d.brand}</h3><p>${d.line}</p>
        <span class="mono">${d.stats[0][0]} ${lcFirst(d.stats[0][1])}</span>
      </a>`).join("")}</div>
  </div></section>

  <section class="sec" id="all"><div class="wrap">
    <div class="rv">
      <p class="eyebrow">Everything</p>
      <h2 class="display" style="font-size:clamp(36px,5vw,64px);margin-bottom:28px">every case study</h2>
      <div class="filters" role="group" aria-label="Filter case studies"></div>
      <div class="wlist"></div>
      <button class="btn ghost wmore" type="button"></button>
    </div>
  </div></section>

<section class="sec" id="credentials"><div class="wrap">
    <div class="sec-head rv">
      <div><p class="eyebrow">Credentials</p><h2 class="display">the <em>paper</em> trail</h2></div>
      <p class="lede">Degrees, certifications, competitions and the campus role I held for two years.</p>
    </div>
    <div class="cred">
      <div class="rv">
        <p class="subhead">Education</p>
        <div class="edu">${window.EDUCATION.map(e=>`<div class="row"><div><b>${e.deg}</b><span class="s">${e.org}</span><span class="s" style="font-size:14px">${e.note}</span></div><div class="score">${e.score}<small>${e.dates}</small></div></div>`).join("")}</div>
        <p class="subhead">Competitions &amp; awards</p>
        <div class="clist">${window.ACHIEVEMENTS.map(a=>`<div class="citem"><span class="dot"></span><div><b>${a.title}</b><span class="s">${a.what}</span></div><span class="yr">${a.year}</span></div>`).join("")}</div>
      </div>
      <div class="rv">
        <p class="subhead">Certifications</p>
        <div class="clist">${window.CERTS.map(c=>`<div class="citem" style="--c:${c.color}"><span class="dot"></span><div><b>${c.name}</b><span class="s">${c.issuer} · ${c.skills}</span></div><span class="yr"></span></div>`).join("")}</div>
        <p class="subhead">Leadership</p>
        <div class="clist">${window.LEADERSHIP.map(l=>`<div class="citem"><span class="dot"></span><div><b>${l.role}</b><span class="s">${l.org}</span>
          <ul style="margin:10px 0 0;padding-left:18px;color:var(--ink-2);font-size:16px">${l.points.map(x=>`<li>${x}</li>`).join("")}</ul></div><span class="yr">${l.dates}</span></div>`).join("")}</div>
      </div>
    </div>
  </div></section>

  <section class="sec" id="how" style="border-bottom:0"><div class="wrap wwm">
    <div class="rv">
      <p class="eyebrow">What it’s like</p>
      <h2 class="display">working with me</h2>
      <div class="ph ph-poster"><img src="assets/img/hero.webp" alt="Sagar Sharma beside a framed vintage Parle Poppins advertisement" loading="lazy"></div>
      <p class="ph-cap">A personal photo. The poster is not my work.</p>
    </div>
    <div class="wwm-body rv" style="padding-top:clamp(0px,4vw,48px)">
      <p><b>I start with behaviour, not the brief.</b> The best ideas I’ve had came from watching what people already do — kids licking Glucon-D off their palms, people sprinkling Bournvita on ice cream — and from 200+ conversations about why a calendar doesn’t make anyone productive.</p>
      <p><b>I’d rather defend a smaller number than a bigger one I can’t.</b> Forward-looking figures in my case studies are estimates or projections. The achieved results on this site come from my job and internships, in the Experience section.</p>
      <p class="u"><b>I ask permission to do work nobody assigned.</b> At Hanbai I built a launch GTM as a competitive contingency, then defended it in front of a five-to-seven member board review.</p>
      <p><b>When a role has no owner, I tend to become it.</b> At To-Let Globe I stayed on remotely to keep the strategy workstream running while I was full-time in Mumbai.</p>
      <p><b>I build the strategy and the spreadsheet.</b> A commerce degree and a habit of writing SQL mean the model under the slide is usually mine too.</p>
      <p>I do my best work on real commercial problems, with people who are direct with me. I’m open to new roles.</p>
      <div class="cv-actions"><a class="btn" href="mailto:${S.email}?subject=Hello%20Sagar">Email me</a><a class="btn ghost" href="resume.html">View resume</a></div>
    </div>
  </div></section>`;

  /* role lens: real experience and three cases for the chosen role */
  { const panel = $(".fit-panel"), btns = $$(".fit-tabs .chip");
    const show = id => {
      const r = window.ROLES.find(x=>x.id===id) || window.ROLES[0];
      btns.forEach(b=>b.setAttribute("aria-pressed", b.dataset.r===r.id));
      const link = location.origin + location.pathname + "?role=" + r.id + "#fit";
      panel.innerHTML = `
        <div class="fit-why">
          <h3>${r.pitch}</h3>
          <p class="subhead">Real experience</p>
          <ul>${r.real.map(x=>`<li>${x}</li>`).join("")}</ul>
          <p class="fit-tools mono">${r.tools}</p>
        </div>
        <div class="fit-cases">
          <p class="subhead">Read these three</p>
          ${r.cases.map(find).map(p=>`<a class="fit-case" href="${caseUrl(p.id)}"><b>${p.brand}</b><span>${p.line}</span><i aria-hidden="true">→</i></a>`).join("")}
          <div class="cv-actions">
            <a class="btn" href="mailto:${S.email}?subject=${encodeURIComponent(r.name + " role")}">Email about this role</a>
            <a class="btn ghost" href="resume.html">Resume</a>
            <button class="btn ghost fit-share" type="button" data-link="${link}">Copy link to send on</button>
          </div>
        </div>`;
    };
    $(".fit-tabs").addEventListener("click", e=>{ const b = e.target.closest(".chip"); if(b) show(b.dataset.r); });
    panel.addEventListener("click", e=>{
      const b = e.target.closest(".fit-share"); if(!b) return;
      const done = () => { b.textContent = "Link copied"; setTimeout(()=>{ b.textContent = "Copy link to send on"; }, 2200); };
      if(navigator.clipboard) navigator.clipboard.writeText(b.dataset.link).then(done, ()=>window.prompt("Copy this link", b.dataset.link));
      else window.prompt("Copy this link", b.dataset.link);
    });
    show(new URLSearchParams(location.search).get("role"));
  }
  stack($$(".stk-card"));

/* index list + filters */
  const list = allWork();
  const counts = {}; list.forEach(p=>p.tags.forEach(t=>counts[t]=(counts[t]||0)+1));
  const cats = ["All"].concat(window.CATS.filter(c=>counts[c]));
  const fb = $(".filters");
  fb.innerHTML = cats.map(c=>`<button class="chip" aria-pressed="${c==="All"}" data-c="${c}">${c}<span class="n">${c==="All"?list.length:counts[c]}</span></button>`).join("");
  const more = $(".wmore"); let open = false;
  const draw = c => {
    const all = list.filter(p=>c==="All"||p.tags.includes(c));
    const items = open ? all : all.slice(0,8);
    more.hidden = all.length <= 8;
    more.textContent = open ? "Show fewer" : `Show all ${all.length}`;
    more.dataset.c = c;
    $(".wlist").innerHTML = items.map((p,i)=>{
      const n = deckCount(p.id);
      return `<a class="witem" href="${caseUrl(p.id)}">
        <span class="no">${NN(i+1)}</span>
        <h3>${p.brand}<small>${p.sub}</small></h3>
        <p>${p.line}</p>
        <span class="stat">${p.stats[0][0]}<small>${p.stats[0][1]}</small></span>
        <span class="go">→</span>
      </a>`;}).join("");
  };
  fb.addEventListener("click",e=>{
    const b = e.target.closest(".chip"); if(!b) return;
    $$(".chip",fb).forEach(x=>x.setAttribute("aria-pressed",x===b));
    open = false; draw(b.dataset.c);
  });
  more.addEventListener("click",()=>{ open = !open; draw(more.dataset.c); });
  draw("All");
}

/* ---------------- CASE STUDY — rendered as a deck of slide cards ---------------- */
const MARK = `<svg class="mark" viewBox="0 0 26 26" aria-hidden="true"><text x="2" y="21" font-family="EB Garamond,Georgia,serif" font-size="24" fill="currentColor">s</text><rect x="17" y="5" width="5" height="5" fill="var(--red)"/></svg>`;
const NUM_RE = /(₹\s?[\d][\d,.]*(?:\s?(?:lakh crore|crore|Cr|L|B|M|K))?|\$[\d][\d,.]*\s?[BMK]?|[+−-]?\d[\d,.]*\s?(?:%|bps|x|Cr|M|B|K|km|days|months|weeks|g|kcal)?\+?)/g;
const strip = s => String(s).replace(/<[^>]+>/g,"");

/* grey sentence, key part in ink — numbers first, else the closing clause */
function emph(t){
  if(/</.test(t)) return t;
  const r = t.replace(NUM_RE, (m, g, off) => {
    const prev = t[off-1] || "", next = t.slice(off+m.length, off+m.length+2);
    return (/[A-Za-z0-9\/]/.test(prev) || /^[A-Za-z0-9]|^[-\/][A-Za-z0-9]/.test(next)) ? m : "<b>"+m+"</b>";
  });
  if(r !== t) return r;
  const k = Math.max(t.lastIndexOf(". ", t.length-3), t.lastIndexOf(" — "), t.lastIndexOf(": "));
  if(k > 12) return t.slice(0, k+1) + " <b>" + t.slice(k+1).trim() + "</b>";
  return "<b>" + t + "</b>";
}
/* serif statement with an italic tail, like "…of the *mental healthcare industry.*" */
function italicTail(t){
  const w = strip(t).split(" ");
  const cut = Math.max(1, Math.ceil(w.length * .55));
  return w.slice(0, cut).join(" ") + " <em>" + w.slice(cut).join(" ") + "</em>";
}
function parseItems(ul){
  return ul.map(x=>{
    const m = x.match(/^<b>(.+?)<\/b>\s*[—:–-]?\s*([\s\S]*)$/);
    return m ? {h:m[1].replace(/[.:]\s*$/,""), p:m[2]} : {h:null, p:x};
  });
}
const isNumeric = rows => rows.every(r => /\d/.test(r[1]));

function tableHtml(tb, title){
  return `<div class="tcard"><div class="th"><span>${title}</span><em>●</em></div><table class="stbl"><thead><tr>${tb.h.map(x=>`<th>${x}</th>`).join("")}</tr></thead>
    <tbody>${tb.r.map(r=>`<tr>${r.map((c,j)=>`<td data-l="${esc(tb.h[j])}" class="${j>0 && /\d/.test(c) && tb.h.length<=3 ? "n":""}">${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}
function cmpCards(tb){
  return `<div class="axis"><span>${tb.h[0]}</span><hr><span class="r">${tb.h[tb.h.length-1]}</span></div>
  <div class="cmp">${tb.r.map((r,i)=>`<div class="cc ${i===tb.r.length-1?"hi":""}"><h3>${r[0]}</h3>${r.slice(1).map((c,j)=>`<div class="kv"><small>${tb.h[j+1]}</small><span>${c}</span></div>`).join("")}</div>`).join("")}</div>`;
}
function checksHtml(tb){
  return `<div class="checks">${tb.r.map(r=>`<div class="ck"><h3>${r[0]}</h3><p>${r.slice(1).join(" · ")}</p></div>`).join("")}</div>`;
}
function listHtml(ul){
  const it = parseItems(ul), labelled = it.filter(i=>i.h).length;
  if(labelled >= Math.ceil(it.length/2))
    return `<div class="checks ${it.length<3?"one":""}">${it.map(i=>`<div class="ck">${i.h?`<h3>${i.h}</h3>`:""}<p>${i.p}</p></div>`).join("")}</div>`;
  return `<ul class="ticks">${ul.map(x=>`<li><span>${x}</span></li>`).join("")}</ul>`;
}
function tilesHtml(steps){
  return `<div class="tiles">${steps.map(s=>`<div class="t"><span class="n">${s[0]}</span><p>${s[1]}</p></div>`).join("")}</div>`;
}
function stackHtml(stats){
  return `<div class="stack">${stats.map(s=>`<div><b>${s[0]}</b><span>${s[1]}</span></div>`).join("")}</div>`;
}
function beforeAfter(stats){
  const s = stats.find(x => /\d[\d.]*\s*%?\s*→\s*\d/.test(x[0]));
  if(!s) return "";
  const m = s[0].match(/([\d.]+)\s*%?\s*→\s*([\d.]+)/);
  const a = parseFloat(m[1]), b = parseFloat(m[2]), mx = Math.max(a,b) || 1;
  const [ta, tb] = s[0].split("→").map(x=>x.trim());
  return `<div class="ba" data-ba>
    <div class="row"><span>Before</span><div class="bar"><i data-w="${(a/mx*100).toFixed(1)}">${ta}</i></div></div>
    <div class="row after"><span>${/target|projected/i.test(s[1])?"Target":"After"}</span><div class="bar"><i data-w="${(b/mx*100).toFixed(1)}">${tb}</i></div></div>
  </div><p class="ba-cap">${s[1]}</p>`;
}

/* one content block → one slide card */
function blockCard(b, ctx){
  const onlyPull = b.pull && !b.p && !b.ul && !b.table && !b.steps;
  if(onlyPull) return {cls:"warm solo", eb:b.t, html:`<p class="serif">${italicTail(b.pull)}</p>`};
  if(b.pull && b.p && !b.ul && !b.table && !b.steps)
    return {cls:"warm", eb:b.t, html:`<div class="two"><p class="say">${emph(b.p)}</p><p class="serif">${italicTail(b.pull)}</p></div>`};

  const head = b.pull ? `<h2>${emph(b.pull)}</h2>` : `<h2 class="big">${b.t}</h2>`;
  const intro = b.p ? `<p>${b.p}</p>` : "";

  /* text-only block: the first one gets the project's stat stack, like a "problem" slide */
  if(!b.ul && !b.table && !b.steps){
    if(!ctx.stackUsed){
      ctx.stackUsed = true;
      return {cls:"", eb:b.t, html:`<div class="two rule"><div>${head}${intro}</div>${stackHtml(ctx.p.stats)}</div>`};
    }
    return {cls:"", eb:b.t, html:`${head}${intro}`};
  }

  let body = "";
  if(b.table){
    const tb = b.table, cols = tb.h.length;
    if(cols === 2 && isNumeric(tb.r))
      return {cls:"", eb:b.t, html:`<div class="two rule"><div>${head}${intro}</div>${tableHtml(tb, b.t)}</div>`};
    if(cols === 2) body = checksHtml(tb);
    else if(cols <= 4 && tb.r.length <= 5) body = cmpCards(tb);
    else body = tableHtml(tb, b.t);
  }
  if(b.steps) body = tilesHtml(b.steps) + body;
  if(b.ul) body += (body?`<div class="gap"></div>`:"") + listHtml(b.ul);
  const tail = b.steps && b.p ? `<div class="gap"></div><p>${b.p}</p>` : "";
  return {cls:"", eb:b.t, html:`${head}${b.steps ? "" : intro}${body}${tail}`};
}

function coverCard(p, isData, n){
  const imp = window.IMPACT[p.id] || {};
  const visual = p.work ? `<div class="bigstats">${p.stats.map(s=>`<div><b>${s[0]}</b><span>${s[1]}</span></div>`).join("")}</div>` : n
    ? `<div class="shot" data-lb="1"><img src="${slide(p.id,1,false)}" alt="${esc(p.brand)} — title slide"></div>`
    : `<div class="noshot" style="--c:${p.color}">${isData ? mockFor(p).replace('class="mock"','class="mock" style="left:9%;right:9%;top:12%;bottom:12%"') : `<canvas class="scene" data-scene="star" style="position:absolute;inset:0;width:100%;height:100%" aria-hidden="true"></canvas>`}</div>`;
  const feats = p.work ? p.tags.concat(["Current job"]) : (isData ? [p.tool,"Self-directed","Real dataset"] : p.tags.concat([n ? n+" slide deck" : "Written report", "Independent case study"]));
  return {cls:"cover", eb:p.work?"Real work":isData?"Data project":"Case study", html:`
    <div class="two">
      <div><h1>${p.brand}</h1><p class="sub">${p.sub}</p>${visual}</div>
      <div class="side">
        <span class="pill"><i></i>${p.date ? p.date + " · " : ""}${p.work ? "Field sales" : isData ? "Analytics build" : "Strategy case study"}</span>
        <p class="lead">${p.line}</p>
        ${p.note?`<p class="case-note">${p.note}</p>`:""}
        <p>${isData ? p.T : (p.role || imp.what || "")}</p>
        ${p.work ? "" : `<div class="bigstats">${p.stats.map(s=>`<div><b>${s[0]}</b><span>${s[1]}</span></div>`).join("")}</div>`}
      </div>
    </div>
    <div class="feats">${feats.map(f=>`<span>${f}</span>`).join("")}</div>`};
}

/* "how I contributed / what I learned / keywords" — one card for every project */
function learnCard(p){
  const L = (window.LEARN||{})[p.id]; if(!L) return null;
  return {cls:"", eb:"My part · what I learned", html:`
    <div class="two rule">
      <div><h2>How I <b>contributed.</b></h2><p>${L.role}</p></div>
      <div><h2>What I <b>learned.</b></h2><p>${L.learned}</p></div>
    </div>
    <div class="feats kwrow">${L.kw.map(k=>`<span>${k}</span>`).join("")}</div>`};
}
function filesCard(p){
  const f = (window.FILES||{})[p.id]; if(!f) return null;
  return {cls:"", eb:"Files", html:`<h2>Open the <b>work itself.</b></h2>
    ${f.map(x=>`<div class="report" style="border-radius:16px;margin-top:14px"><span class="ic ${/.xlsx$/.test(x.file)?"xls":/.html$/.test(x.file)?"html":""}"></span><div><b>${x.label}</b><span>${x.note}</span></div><a class="btn" href="${x.file}" target="_blank" rel="noopener">${x.cta}</a></div>`).join("")}`};
}

function caseStudy(){
  const id = document.body.dataset.id || new URLSearchParams(location.search).get("id");
  const p = find(id);
  const main = $("#main");
  if(!p){
    chrome(`<span class="here">Not found</span>`);
    main.innerHTML = `<section class="sec"><div class="wrap"><h1 class="display">nothing <em>here</em></h1><p class="lede" style="margin-top:20px">That case study doesn’t exist. <a href="index.html#work">See all work →</a></p></div></section>`;
    return;
  }
  const isData = !!p.S;
  if(!document.body.dataset.id) document.title = `${p.brand}: ${p.work?"field sales work":p.S?"data project":"independent case study"} | ${S.name}`;
  chrome(`<a href="index.html#${p.work?"experience":isData?"data":"work"}">${p.work?"Experience":isData?"Data":"Work"}</a><span>/</span><span class="here">${esc(p.brand)}</span>`);
  const n = deckCount(p.id), rep = window.REPORTS[p.id], imp = window.IMPACT[p.id] || {};
  const cards = [coverCard(p, isData, n)];

  if(isData){
    cards.push({cls:"", eb:"The problem", html:`<div class="two rule"><div><h2>${emph(p.S)}</h2><p>${p.T}</p></div>${stackHtml(p.stats)}</div>`});
    cards.push({cls:"", eb:"How I did it", html:`<h2 class="big">What I built</h2>${listHtml(p.A)}`});
    if(p.code) cards.push({cls:"", eb:"Under the hood", html:`<h2>A look at <b>the code</b>.</h2><pre class="codecard">${esc(p.code)}</pre>`});
    cards.push({cls:"warm", eb:"The result", html:`<div class="two"><p class="say">${p.R}</p><p class="serif">${italicTail(p.line)}</p></div>`});
    const fc = filesCard(p); if(fc) cards.push(fc);
    const lc = learnCard(p); if(lc) cards.push(lc);
  } else {
    /* overview slot — filled once we know which card each block landed on */
    cards.push(null);
    const ctx = {p, stackUsed:false}, map = [];
    p.blocks.forEach((b,i)=>{
      cards.push(blockCard(b, ctx)); map.push([b.t, cards.length]);
      if(n > 1 && i % 3 === 2 && i < p.blocks.length-1){
        const k = Math.min(n, 2 + Math.floor(i/3));
        cards.push({cls:"", eb:`From the original deck · slide ${NN(k)}`, html:`<div class="orig" data-lb="${k}"><img src="${slide(p.id,k,false)}" alt="${esc(p.brand)} — slide ${k}" loading="lazy"></div>`});
      }
    });
    cards[1] = {cls:"", eb:"Overview", html:`
      <h2>What I did, <b>how I did it</b>, and why it matters.</h2>
      <div class="cols3">
        <div class="rulecol"><h3>What I did</h3><p>${imp.what || p.line}</p></div>
        <div class="rulecol"><h3>How I did it</h3><ol>${map.map(m=>`<li><a href="#s-${m[1]}">${m[0]}</a></li>`).join("")}</ol></div>
        <div class="rulecol"><h3>Why it matters</h3><p>${imp.impact || ""}</p></div>
      </div>
      <div class="chips">${p.stats.map(s=>`<span><i>↗</i>${s[0]} <span style="color:var(--slide-2)">${lcFirst(s[1])}</span></span>`).join("")}</div>`};

    const ba = beforeAfter(p.stats);
    if(!p.work) cards.push({cls:"", eb:"Impact", html:`
      <div class="two rule">
        <div><h2>What this would change <b>for the business.</b></h2><p>${imp.impact || p.line}</p>
          <p style="font-size:13px">Forward-looking figures are my estimates and projections from an independent case study — not realised results.</p></div>
        <div>${ba || stackHtml(p.stats)}</div>
      </div>`});
    const lc2 = learnCard(p); if(lc2) cards.push(lc2);
    if(rep) cards.push({cls:"", eb:"Full report", html:`<h2>Read the complete <b>${rep.label.toLowerCase()}</b>.</h2>
      <div class="report" style="border-radius:16px"><span class="ic"></span><div><b>${rep.label}</b><span>${rep.pages} pages · ${rep.note}</span></div><a class="btn" href="${rep.file}" target="_blank" rel="noopener">Open PDF ↗</a></div>`});
    if(n) cards.push({cls:"", eb:"The original deck", html:`<h2 class="big">All ${n} slides</h2><p style="margin-bottom:24px">The deck as I built it. Click any slide to flip through.</p>
      <div class="thumbs">${Array.from({length:n},(_,i)=>`<button data-lb="${i+1}" aria-label="${NN(i+1)}: open slide"><img src="${slide(p.id,i+1,true)}" alt="" loading="lazy"><span>${NN(i+1)}</span></button>`).join("")}</div>`});
  }

  const total = cards.length;
  const pool = isData ? window.DATA_PROJECTS : window.PROJECTS;
  const idx = pool.findIndex(x=>x.id===p.id);
  const prev = pool[(idx-1+pool.length)%pool.length], next = pool[(idx+1)%pool.length];

  main.innerHTML = `<div class="stage"><div class="deckcol">
    ${cards.map((c,i)=>`<span class="s-mark" id="s-${i+1}"></span><section class="sl rv ${c.cls}" aria-label="${esc(strip(c.eb))}">
      <p class="eb"><span>${c.eb}</span><span class="pg">${NN(i+1)} / ${NN(total)}</span></p>${c.html}${MARK}</section>`).join("")}
    <nav class="deck-next" aria-label="More case studies"><a href="${caseUrl(prev.id)}"><span class="mono">← Previous</span><b>${prev.brand}</b></a><a href="${caseUrl(next.id)}"><span class="mono">Next →</span><b>${next.brand}</b></a></nav>
  </div></div>
  <nav class="rail" aria-label="Slides">${cards.map((c,i)=>`<a href="#s-${i+1}" aria-label="Slide ${i+1}: ${esc(strip(c.eb))}"></a>`).join("")}</nav>`;

  if(n) main.addEventListener("click",e=>{ const t=e.target.closest("[data-lb]"); if(t) openLb(p.id,+t.dataset.lb); });

  /* slides stack as you scroll; rail follows; before/after bars animate in */
  stack($$(".sl"));
  const rail = $$(".rail a"), marks = $$(".s-mark");
  const onRail = () => { const m = window.innerHeight*.5; let k = 0; marks.forEach((x,i)=>{ if(x.getBoundingClientRect().top <= m) k = i; }); rail.forEach((a,j)=>a.classList.toggle("on", j===k)); };
  window.addEventListener("scroll", onRail, {passive:true}); onRail();
  if("IntersectionObserver" in window){
    const io = new IntersectionObserver(es=>es.forEach(e=>{
      if(e.isIntersecting) $$("[data-ba] i", e.target).forEach(b=>b.style.width = b.dataset.w + "%");
    }),{rootMargin:"-30% 0px -30% 0px"});
    $$(".sl").forEach(s=>io.observe(s));
  } else $$("[data-ba] i").forEach(b=>b.style.width = b.dataset.w + "%");
}

/* ---------------- FOCUS-AREA PAGE ---------------- */
function topic(){
  const t = window.TOPICS[document.body.dataset.topic];
  chrome(`<span class="here">${t.h1}</span>`);
  $("#main").innerHTML = `
  <section class="sec" style="border-bottom:0"><div class="wrap">
    <div class="sec-head rv">
      <div><p class="eyebrow">Focus area</p><h1 class="display">${t.h1}</h1></div>
      <div>${t.intro.map(x=>`<p class="lede" style="margin-bottom:1em">${x}</p>`).join("")}</div>
    </div>
    <p class="topic-real rv"><b>Real experience.</b> ${t.real} <a href="index.html#experience">See experience →</a></p>
    <div class="wlist rv">${t.ids.map(find).map((p,i)=>`<a class="witem" href="${caseUrl(p.id)}">
      <span class="no">${NN(i+1)}</span><h2>${p.brand}<small>${p.sub}</small></h2><p>${p.line}</p>
      <span class="stat">${p.stats[0][0]}<small>${p.stats[0][1]}</small></span><span class="go">→</span></a>`).join("")}</div>
    <div class="cv-actions rv"><a class="btn" href="mailto:${S.email}?subject=Hello%20Sagar">Email me</a><a class="btn ghost" href="resume.html">Resume</a><a class="btn ghost" href="index.html#fit">Find my fit for your role</a></div>
  </div></section>`;
}

/* ---------------- RESUME ---------------- */
function resume(){
  chrome(`<span class="here">Resume</span>`);
  const E = window.EXPERIENCE;
  $("#main").innerHTML = `
  <article class="cv cv-page">
    <div class="cv-top">
      <div>
        <h1 class="cv-name">${S.name}</h1>
        <p><b>Business × Marketing × Analytics.</b> PGDM in Marketing &amp; Strategy, IMT Nagpur, on a commerce degree.</p>
        <p>I frame the business problem, analyse the data in Excel, SQL, Tableau, Power BI or Python, and recommend what to do. Currently a Polycab India trainee on the Territory Sales Manager track; open to new roles.</p>
      </div>
      <div class="cv-contact">${S.city}<br><a href="mailto:${S.email}">${S.email}</a><br><a href="tel:${S.phone.replace(/\s/g,"")}">${S.phone}</a><br><a href="${S.linkedin}" target="_blank" rel="noopener">${S.linkedinLabel}</a><br><a href="https://${S.url}">${S.url}</a></div>
      <div class="cv-photo"><img src="assets/img/portrait.webp" alt="Sagar Sharma"></div>
    </div>
    <div class="cv-actions"><a class="btn" href="${window.DOWNLOADS.resume.file}" download>Download one-page resume (PDF)</a><a class="btn ghost" href="cv.html">Need the detailed CV?</a><a class="btn ghost" href="index.html#work">See the work</a></div>

    <div class="cv-cols">
      <div>
        <h2>Experience</h2>
        <div class="cv-job"><div class="hd"><b>Trainee, Territory Sales Manager track · Polycab India</b><span>Jun ’26 – present</span></div>
          <ul>
            <li>Converted <b>15+ new outlets</b> across East Delhi, North Delhi and Bhagirath Palace that had never stocked Polycab lighting; personal sales grew <b>about 20% month on month</b>.</li>
            <li>Built an HTML pricing and scheme tool to calculate and negotiate deals during the meeting (<b>est. 35% faster</b>).</li>
            <li>Made 10+ outlet visits a day on beats planned by outlet productivity, working with 2 distributors; proposed a retailer WhatsApp recognition plan (not yet run).</li>
          </ul></div>
        <div class="cv-job"><div class="hd"><b>CEO’s Office Intern — Hanbai Consultancy LLP</b><span>Apr ’25 – Jun ’25</span></div>
          <ul>
            <li>Ran user interviews, focus groups and surveys for <b>IIMX</b>, an AI management-education app; specified <b>three learner personas</b> across B2B, B2B2C and B2C.</li>
            <li>Built an AI-prompt content framework and produced <b>900+ management modules and worksheets</b>.</li>
            <li>Designed an AIDA launch funnel; in focus-group validation, <b>20–25% of targeted leads</b> converted, with <b>5–10% weekly engagement growth</b> during trial, compounding to ~40% over the trial.</li>
            <li>Self-initiated a launch GTM as a competitive contingency; presented to a <b>5–7 member board review</b> and secured near-unanimous endorsement to proceed if launched.</li>
            <li>Conceived and positioned a peer-learning virtual-workshop concept against Coursera-style content platforms (concept and GTM design).</li>
          </ul></div>
        <div class="cv-job"><div class="hd"><b>Business Strategy Intern — Team Lead · To-Let Globe</b><span>Mar ’25 – May ’25</span></div>
          <ul>
            <li>Led a 3-member team to design a cross-channel growth strategy with targeting logic — <b>+105% brand reach</b> and <b>+60% qualified leads</b>, tracked on dashboards I built.</li>
            <li>Identified <b>12 growth opportunities</b> adopted by leadership.</li>
            <li>Designed a one-week employee-feedback pilot and proposed a six-month internal-feedback workstream to address lagging employer reviews. Remote.</li>
          </ul></div>
        <div class="cv-job"><div class="hd"><b>Brand Strategy Intern · To-Let Globe</b><span>Jan ’25 – Mar ’25</span></div>
          <ul><li>Analysed customer feedback, redesigned the brand framework and implemented KPI tracking to keep brand execution consistent across channels.</li></ul></div>

        <h2 style="margin-top:44px">Selected projects</h2>
        ${[["vi","Vodafone Idea — profitability turnaround diagnostic","Profit tree and EBITDA bridge; three levers sized to about ₹8,500 Cr of modelled EBITDA by FY29 (independent case)."],
           ["ather","Ather Energy — Tier-2/3 expansion strategy","Two-way market sizing, store plan and bear / base / bull model: about ₹4,800 Cr modelled incremental FY31 revenue (independent case)."],
           ["zepto","Zepto — independent enterprise GTM playbook","Five-stream monetisation map, unit-economics levers and a Q1–Q4 roadmap targeting CAC payback ≤45 days (modelled)."],
           ["gcal","Google Calendar — productivity OS concept","Personally ran 200+ user interviews and 3-week diary studies; designed a Plan → Do → Reflect architecture and prototypes."],
           ["vip","VIP Bags — Rajasthan zone turnaround","Diagnosed a ₹12.42 Cr quarterly loss; 70-30 mix reset projecting +600 bps gross margin."],
           ["occasion","Bournvita · Knorr · Glucon-D — occasion expansion","Social-listening-led sub-brand concepts; Bournvita topper SAM sized at ₹650–1,200 Cr."],
           ["d-warehouse","SQL data warehouse — medallion architecture","Self-directed Bronze/Silver/Gold build that takes report prep from weeks of manual work to minutes."]]
          .map(x=>`<div class="cv-job"><div class="hd"><b><a href="${caseUrl(x[0])}" style="text-decoration:none">${x[1]}</a></b></div><ul><li>${x[2]}</li></ul></div>`).join("")}
      </div>
      <aside class="cv-side">
        <h2>Education</h2>
        ${window.EDUCATION.map(e=>`<p><b>${e.deg}</b><br>${e.org}<br>${e.dates} · ${e.score}</p>`).join("")}
        <h2>Skills &amp; tools</h2>
        ${window.SKILLS.map(s=>`<p><b>${s[0]}.</b> ${s[1]}</p>`).join("")}
        <h2>Certifications</h2>
        ${window.CERTS.map(c=>`<p><b>${c.name}</b> — ${c.issuer}</p>`).join("")}
        <h2>Achievements</h2>
        ${window.ACHIEVEMENTS.map(a=>`<p><b>${a.title}</b> — ${a.what} (${a.year})</p>`).join("")}
        <h2>Leadership</h2>
        ${window.LEADERSHIP.map(l=>`<p><b>${l.role}</b>, ${l.org} (${l.dates})</p>`).join("")}
      </aside>
    </div>
  </article>`;
}

/* ---------------- CV (World Bank format) ---------------- */
function cv(){
  chrome(`<span class="here">CV</span>`);
  $("#main").innerHTML = `
  <section class="cvpage"><div class="wrap">
    <div class="cvhead">
      <div><p class="eyebrow">Curriculum vitae</p><h1 class="display" style="font-size:clamp(40px,6vw,76px)">Sagar Sharma: the <em>full</em> picture</h1>
      <p class="lede" style="margin-top:18px">A detailed CV in the World Bank consultant format — qualifications, employment record with duties and accomplishments, every assignment, tools, training and honours.</p></div>
      <div class="cv-actions" style="margin:0"><a class="btn" href="${window.DOWNLOADS.cv.file}" download>Download detailed CV (PDF)</a><a class="btn ghost" href="resume.html">One-page resume instead</a></div>
    </div>
    <div class="paper" id="cvpaper">${window.CVDOC.cvHTML().replace(/<p class="kick">[^<]*<\/p>/,"").replace(/<h1>/,'<p class="docname">').replace(/<\/h1>/,"</p>")}</div>
  </div></section>`;
}

/* ---------------- BOOT ---------------- */
if(page==="home") home();
else if(page==="case") caseStudy();
else if(page==="resume") resume();
else if(page==="cv") cv();
else if(page==="topic") topic();
reveal();
if(location.hash){ const t=document.getElementById(location.hash.slice(1)); if(t) setTimeout(()=>t.scrollIntoView(),60); }
document.dispatchEvent(new CustomEvent("site:ready"));

/* a deep link can land short while images and fonts settle, so aim again after load */
if(location.hash) window.addEventListener("load", ()=>{ const t = document.getElementById(location.hash.slice(1)); if(t) t.scrollIntoView(); });

/* three.js is optional decoration: fetch it after load, and only if a visible canvas wants it */
const load3d = () => {
  const c = navigator.connection || {};
  if(c.saveData || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if(!$$("canvas[data-scene]").some(x=>x.offsetWidth)) return;
  const add = (src, then) => { const s = document.createElement("script"); s.src = src; s.onload = then; document.body.appendChild(s); };
  const v = (($("script[src*='site.js']")||{}).src||"").split("?")[1] || "";
  add("assets/js/three.min.js?"+v, ()=>add("assets/js/three-scenes.js?"+v));
};
if(document.readyState === "complete") setTimeout(load3d, 600); else window.addEventListener("load", ()=>setTimeout(load3d, 600));
})();
