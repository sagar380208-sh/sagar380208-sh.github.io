/* ==========================================================================
   3D "CLAY" OBJECTS — three.js (r128, local, loaded after the page by site.js)
   Canvases opt in with data-scene="hero|funnel|bars|star".
   If three.js fails to load, the canvases simply stay empty.
   ========================================================================== */
(function(){
"use strict";
if(!window.THREE) return;
const T = window.THREE;
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const C = {red:0xB8382A, cream:0xEFE3D0, ink:0x2A2420, ochre:0xC98B4A, green:0x2F4A3A, sage:0x9DB09A, blue:0x3F5A85, plum:0x5A2E52};
const clay = c => new T.MeshStandardMaterial({color:c, roughness:.78, metalness:0});

function stage(canvas, fov){
  const r = new T.WebGLRenderer({canvas, antialias:true, alpha:true, powerPreference:"low-power"});
  r.setPixelRatio(Math.min(window.devicePixelRatio||1, 2));
  r.outputEncoding = T.sRGBEncoding;
  r.toneMapping = T.NoToneMapping;
  const scene = new T.Scene();
  const cam = new T.PerspectiveCamera(fov||35, 1, .1, 100);
  scene.add(new T.HemisphereLight(0xFFF6EA, 0x6E5E50, .75));
  const key = new T.DirectionalLight(0xFFFFFF, .85); key.position.set(4,6,5); scene.add(key);
  const rim = new T.DirectionalLight(0xFFD9C2, .3); rim.position.set(-5,2,-3); scene.add(rim);
  return {r, scene, cam};
}

function run(canvas, setup){
  const s = stage(canvas, setup.fov);
  const tick = setup.build(s);
  let visible = true, raf = 0, t0 = performance.now(), mx = 0, my = 0, moved = false;

  const size = () => {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    if(!w || !h) return;
    s.r.setSize(w, h, false);
    s.cam.aspect = w/h; s.cam.updateProjectionMatrix();
    if(setup.onResize) setup.onResize(s, w, h);
    s.r.render(s.scene, s.cam);
  };
  const loop = now => {
    raf = 0;
    if(!visible) return;
    const ts = (now - t0)/1000;
    if(setup.mouse && !moved){ mx = Math.sin(ts*.35)*.45; my = Math.cos(ts*.27)*.25; }
    tick(ts, mx, my);
    s.r.render(s.scene, s.cam);
    if(!reduce) raf = requestAnimationFrame(loop);
  };
  const kick = () => { if(!raf) raf = requestAnimationFrame(loop); };

  if("ResizeObserver" in window) new ResizeObserver(size).observe(canvas); else window.addEventListener("resize", size);
  if(setup.relayout) window.addEventListener(setup.relayout, size);
  if("IntersectionObserver" in window){
    new IntersectionObserver(es => { visible = es[0].isIntersecting; if(visible) kick(); }).observe(canvas);
  }
  if(setup.mouse && !reduce){
    window.addEventListener("pointermove", e => {
      if(e.pointerType === "touch") return;
      moved = true;
      mx = (e.clientX / window.innerWidth) * 2 - 1;
      my = (e.clientY / window.innerHeight) * 2 - 1;
    }, {passive:true});
  }
  size();
  if(reduce) tick(1.2, 0, 0);
  kick();
}

/* ---------- reusable pieces ---------- */
function pieChart(){
  const g = new T.Group();
  const parts = [[0, 2.3, C.red], [2.3, 1.9, C.cream], [4.2, 2.083, C.ochre]];
  parts.forEach(([a, len, col], i) => {
    const m = new T.Mesh(new T.CylinderGeometry(1, 1, .38, 48, 1, false, a, len), clay(col));
    const mid = a + len/2;
    m.position.set(Math.sin(mid)*(i===0?.12:0), 0, Math.cos(mid)*(i===0?.12:0));
    m.position.y = i===0 ? .08 : 0;
    g.add(m);
  });
  return g;
}
function barChart(n, colors){
  const g = new T.Group();
  const base = new T.Mesh(new T.BoxGeometry(n*.42 + .25, .12, .7), clay(C.cream));
  base.position.y = -.06; g.add(base);
  const bars = [];
  for(let i = 0; i < n; i++){
    const h = .5 + i*.32;
    const b = new T.Mesh(new T.BoxGeometry(.28, 1, .28), clay(colors[i % colors.length]));
    b.userData.h = h;
    b.position.set((i - (n-1)/2)*.42, h/2, 0);
    b.scale.y = h;
    g.add(b); bars.push(b);
  }
  g.userData.bars = bars;
  return g;
}
function starShape(){
  const sh = new T.Shape(), pts = 5, R = 1, r = .45;
  for(let i = 0; i < pts*2; i++){
    const rad = i%2 ? r : R, a = i/(pts*2) * Math.PI*2 + Math.PI/2;
    const x = Math.cos(a)*rad, y = Math.sin(a)*rad;
    i ? sh.lineTo(x, y) : sh.moveTo(x, y);
  }
  const geo = new T.ExtrudeGeometry(sh, {depth:.32, bevelEnabled:true, bevelThickness:.12, bevelSize:.1, bevelSegments:6});
  geo.center();
  return new T.Mesh(geo, clay(C.red));
}
function float(o, t, amp, speed, phase){ o.position.y = o.userData.y0 + Math.sin(t*speed + phase)*amp; }

/* ---------- scenes ---------- */
const SCENES = {
  /* Hero: a scatter of strategy objects drifting around the headline */
  hero: {
    fov: 30, mouse: true, relayout: "hero:layout",
    build({scene, cam}){
      cam.position.set(0, 0, 16);
      scene.userData.spread = 1; scene.userData.ymul = 1;
      const items = [];
      const add = (obj, x, y, z, rot) => {
        obj.userData = Object.assign(obj.userData||{}, {x0:x, y0:y, z0:z, rot});
        obj.position.set(x, y, z); scene.add(obj); items.push(obj); return obj;
      };
      /* hero shapes: kept around the centred headline and portrait */
      const pie = add(pieChart(), -4.6, 2.4, -1, [.55, .4, 0]); pie.rotation.x = .9; pie.scale.setScalar(.9);
      const bars = add(barChart(4, [C.green, C.sage, C.ochre, C.red]), 5.6, 2.7, 1, [.15, -.5, 0]); bars.scale.setScalar(.8);
      const cube = add(new T.Mesh(new T.BoxGeometry(.8,.8,.8), clay(C.red)), 7.3, 1.5, 1, [.6,.8,.2]);
      const torus = add(new T.Mesh(new T.TorusGeometry(.55, .22, 24, 64), clay(C.cream)), -2.1, 3.6, 0, [1.1,.3,0]);
      const ball = add(new T.Mesh(new T.SphereGeometry(.36, 32, 32), clay(C.ink)), 0.4, 4.0, -1, [0,0,0]);
      const cone = add(new T.Mesh(new T.ConeGeometry(.4, .85, 40), clay(C.ochre)), -7.5, 2.9, 0, [.3,0,.4]);
      const ring = add(new T.Mesh(new T.TorusGeometry(.32, .1, 16, 48), clay(C.red)), 3.3, 3.7, -3, [.4,.9,0]);
      const pill = add(new T.Mesh(new T.CylinderGeometry(.26,.26,1,32), clay(C.blue)), -7.4, -0.6, -2, [.7,0,.9]);
      items.forEach((o,i) => { o.userData.ph = i*1.37; o.rotation.set(o.userData.rot[0], o.userData.rot[1], o.userData.rot[2]); });
      items.forEach(o => Object.assign(o.userData, {dx:o.userData.x0, dy:o.userData.y0, dz:o.position.z, ds:o.scale.x}));
      Object.assign(scene.userData, {items, pie, bars, cube, torus, ball, cone, ring, pill});

      return (t, mx, my) => {
        const sc = window.__heroScroll || 0;
        items.forEach((o, i) => {
          o.position.y = o.userData.y0 * scene.userData.ymul + Math.sin(t*.7 + o.userData.ph)*.22 + sc*.5;
          o.rotation.z = o.userData.rot[2] + sc*(i%2 ? 1.4 : -1.4);
          o.position.x = o.userData.x0 * scene.userData.spread + mx*(.25 + i*.03) + sc*(o.userData.x0 >= 0 ? 3 : -3);   /* part to the sides as you scroll */
          o.rotation.y = o.userData.rot[1] + t*(.18 + (i%3)*.06);
          if(o !== pie && o !== bars) o.rotation.x = o.userData.rot[0] + t*.12;
        });
        cam.position.x += ((mx*.5) - cam.position.x)*.04;
        cam.position.y += ((-my*.35) - cam.position.y)*.04;
        cam.lookAt(0,0,0);
        const bs = bars.userData.bars;
        bs.forEach((b,i) => { const k = 1 + Math.sin(t*1.1 + i*.9)*.08; b.scale.y = b.userData.h*k; b.position.y = b.userData.h*k/2; });
      };
    },
    onResize({scene, cam, r}, w, h){
      const U = scene.userData, items = U.items;
      const hero = r.domElement.parentElement;
      const stacked = window.innerWidth < 900 || (window.innerWidth < 1100 && window.innerHeight > window.innerWidth);
      if(!stacked || !hero){
        cam.position.z = 16;
        U.ymul = .84;                                               /* keep clear of the hero's bottom edge */
        U.spread = Math.min(1, Math.max(.42, (w/h)/1.9));
        items.forEach(o => { o.visible = o === U.pie || o === U.bars; o.userData.x0 = o.userData.dx; o.userData.y0 = o.userData.dy; o.position.z = o.userData.dz; o.scale.setScalar(o.userData.ds); });
        U.ball.visible = false;                                     /* no clear spot for it beside the arch */
        return;
      }
      /* phone: same objects, placed in the empty space around title, photo and notes */
      cam.position.set(0, 0, 16); U.ymul = 1; U.spread = 1;
      const halfH = Math.tan(T.MathUtils.degToRad(cam.fov/2)) * 16, halfW = halfH * (w/h);
      const px = h / (2*halfH), k = (w < 600 ? 34 : 48) / px;                       /* ~same on-screen size on every phone */
      const hr = hero.getBoundingClientRect();
      const box = sel => { const el = hero.querySelector(sel); if(!el) return null; const q = el.getBoundingClientRect(); return {l:q.left-hr.left, t:q.top-hr.top, r:q.right-hr.left, b:q.bottom-hr.top, w:q.width, h:q.height}; };
      const spans = Array.from(hero.querySelectorAll(".hx-w")).map(e => e.getBoundingClientRect().right - hr.left);
      const title = box(".hx-title"), card = box(".hx-fig"), note = box(".hx-note");
      const tr = spans.length ? Math.max(...spans) : w*.7;
      const put = (o, x, y, s) => {
        if(x == null || y == null){ o.visible = false; return; }
        o.visible = true;
        o.userData.x0 = (x/w*2 - 1) * halfW; o.userData.y0 = -(y/h*2 - 1) * halfH;
        o.position.z = 0; o.scale.setScalar(o.userData.ds * k * s);
      };
      const side = w - tr;                                          /* room right of the name */
      put(U.pie,  side > 70 ? tr + side/2 : null, title ? title.t + title.h*.2 : null, 1);
      put(U.cube, side > 70 ? tr + side/2 : null, title ? title.t + title.h*.72 : null, .95);
      /* either side of the arch */
      const gl = card ? card.l : 0, gr = card ? w - card.r : 0, okL = gl > 60, okR = gr > 60;
      put(U.ring,  okL ? gl/2 : null,          card ? card.t + card.h*.12 : null, .85);
      put(U.pill,  okL ? gl/2 : null,          card ? card.t + card.h*.48 : null, .75);
      put(U.torus, okL ? gl/2 : null,          card ? card.t + card.h*.84 : null, .75);
      put(U.ball,  okR ? card.r + gr/2 : null, card ? card.t + card.h*.24 : null, .85);
      put(U.cone,  okR ? card.r + gr/2 : null, card ? card.t + card.h*.6 : null, .75);
      put(U.bars,  okR ? card.r + gr/2 : null, card ? card.t + card.h*.92 : null, .7);
    }
  },

  /* Experience: a stacked funnel — awareness to action */
  funnel: {
    fov: 32,
    build({scene, cam}){
      cam.position.set(0, 1.6, 7.2); cam.lookAt(0, .1, 0);
      const g = new T.Group();
      const cols = [C.cream, C.sage, C.ochre, C.red];
      cols.forEach((c, i) => {
        const top = 1.35 - i*.3, bot = top - .26;
        const m = new T.Mesh(new T.CylinderGeometry(top, bot, .42, 56), clay(c));
        m.position.y = 1.1 - i*.56; m.userData.y0 = m.position.y;
        g.add(m);
      });
      const drop = new T.Mesh(new T.SphereGeometry(.16, 24, 24), clay(C.ink));
      drop.userData.y0 = -1.25; g.add(drop);
      g.rotation.x = .12;
      scene.add(g);
      return t => {
        g.rotation.y = t*.35;
        g.children.forEach((m, i) => { if(i < 4) m.position.y = m.userData.y0 + Math.sin(t*1.2 - i*.6)*.05; });
        drop.position.y = -1.0 - ((t*.6) % 1)*.8;
        drop.scale.setScalar(1 - ((t*.6) % 1)*.4);
      };
    }
  },

  /* Data: a 3D bar chart that grows and turns */
  bars: {
    fov: 32,
    build({scene, cam}){
      cam.position.set(3.6, 3.0, 5.6); cam.lookAt(0, .9, 0);
      const g = barChart(5, [C.cream, C.sage, C.blue, C.ochre, C.red]);
      g.scale.setScalar(1.25);
      scene.add(g);
      const bs = g.userData.bars;
      return t => {
        g.rotation.y = Math.sin(t*.4)*.6;
        bs.forEach((b, i) => {
          const grow = Math.min(1, Math.max(.05, (t - i*.18)*1.4));
          const h = b.userData.h * grow * (1 + Math.sin(t*1.3 + i)*.06);
          b.scale.y = h; b.position.y = h/2;
        });
      };
    }
  },

  /* Case pages: the red star beside "My role" */
  star: {
    fov: 30,
    build({scene, cam}){
      cam.position.set(0, 0, 6.2);
      const s = starShape(); scene.add(s);
      return t => { s.rotation.y = t*.9; s.rotation.x = Math.sin(t*.7)*.25; };
    }
  }
};

document.querySelectorAll("canvas[data-scene]").forEach(cv => {
  const def = SCENES[cv.dataset.scene];
  if(!def || !cv.offsetWidth) return;
  try{ run(cv, def); }catch(e){ /* WebGL unavailable — leave canvas blank */ }
});
})();
