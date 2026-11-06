/* ==========================================================================
   SAGAR SHARMA — PORTFOLIO DATA
   Single source for every page. Source of truth: CANDIDATE MASTER DATA BANK.
   Rules carried over from the data bank:
   - Case-study numbers are estimates / projections / market sizing — never results.
   - Zepto is an independent case study, not work done for Zepto.
   - Vadilal is the challenger (~20%) to Amul (~45%).
   - No "900+ personas", no "95% alignment", no "98% consistency", no 3.8 → 4.x claim.
   ========================================================================== */

window.SITE = {
  name: "Sagar Sharma",
  role: "Strategy & Brand",
  email: "sagar380208@gmail.com",
  phone: "+91 77259 41004",
  linkedin: "https://www.linkedin.com/in/sagar0sharma/",
  linkedinLabel: "linkedin.com/in/sagar0sharma",
  city: "Delhi — open to relocation",
};

/* Slide decks available per project: images/<id>/NN.jpg (full) + NN_t.jpg (thumb) */
window.DECK = {
  asianpaints:18, bata:18, bikaji:29, bournvita:13, cerave:5, dabur:5, dettol:16,
  essilor:4, gcal:25, generalmills:3, maggi:12, motul:20, nivea:3, occasion:14,
  vadilal:16, vip:10, zepto:10, clean:5
};
/* Projects whose slides are PNG exports with no separate thumbnail */
window.DECK_PNG = { clean:true };

window.REPORTS = {
  hul:  {file:"reports/Sagar_Sharma_HUL_Market_Benchmarking_Report.pdf", pages:12,
         label:"Market Benchmarking Report", note:"Redseer IMPACT framework · 14 data tables · three-scenario model"},
  nani: {file:"reports/Sagar_Sharma_Nanis_Kitchen_Brand_Launch.pdf", pages:11,
         label:"Brand Launch Blueprint", note:"Positioning · portfolio · GTM · unit economics"},
  boat: {file:"reports/Sagar_Sharma_boAt_Brand_Audit.pdf", pages:10,
         label:"Brand Audit", note:"Brand archaeology · positioning map · vulnerability analysis"}
};

window.CATS = ["Brand Strategy","Growth & Turnaround","Go-to-Market","Category & Portfolio","Consumer & Campaign","Product Strategy","Data & Analytics"];

/* --------------------------------------------------------------------------
   EXPERIENCE (real roles — past tense, real outcomes only)
   -------------------------------------------------------------------------- */
window.EXPERIENCE = [
  {
    id:"hanbai",
    org:"Hanbai Consultancy", orgSub:"(EdTech · IIMX)",
    role:"CEO's Office Intern", domain:"AI-powered management education",
    dates:"Apr ’25 – Jun ’25", place:"Mumbai · in-office",
    color:"#2F4A3A",
    intro:[
      "A product-and-GTM role inside the CEO's office for IIMX — an AI app that turns a topic prompt into a personalised management worksheet for Indian professionals.",
      "I relocated to Mumbai for it. The work ran end to end: user interviews and focus groups, personas, a content engine, a launch funnel, and a go-to-market plan I asked permission to build."
    ],
    points:[
      ["Personas, not guesses","Ran user interviews, focus groups and surveys, then specified three learner personas across B2B, B2B2C and B2C — each with budget, usage pattern and decision process."],
      ["900+ modules","Built a structured AI-prompt framework (role, instructions, good/bad examples, constraints) and used it to produce 900+ management modules and worksheets grounded in Indian business cases."],
      ["Focus-group validation","Designed an AIDA funnel with a 50%-locked sample worksheet as the lead magnet. In focus-group validation, 20–25% of targeted leads converted."],
      ["Engagement that compounded","Engagement grew 5–10% week on week during the trial — compounding to roughly 40% over the trial period."],
      ["A GTM nobody assigned","Asked to build a launch-ready GTM strategy as a competitive contingency, presented it to a 5–7 member board review, and won near-unanimous endorsement to proceed if the product launches."],
      ["A practice layer, not more content","Conceived a peer-learning ‘virtual workshop’ concept for the app — from a survey insight that introverts and English learners will speak to a phone, not a room. Positioned it against Coursera-style content libraries. Concept and GTM design only; not built."]
    ],
    personas:[
      ["Learning Head Prashant","B2B · 35–50","Head of L&D, 500–5,000 employees","₹500–1,500 / employee / yr"],
      ["Corporate Learner Raj","B2B2C · 25–35","Mid-level engineer / analyst, Tier 1–2","₹2,000–5,000 / month, sponsored"],
      ["Ambitious Student Ananya","B2C · 20–28","Engineering / MBA, placement prep","₹800–2,000 / month"]
    ],
    funnel:[["Awareness","Infographics, memes, social ads, blogs"],["Interest","Email + sample worksheet, 50% locked"],["Desire","Heat-map-triggered full worksheets, share-gating"],["Action","Monthly plan + 7-day free trial"]]
  },
  {
    id:"toletglobe",
    org:"To-Let Globe", orgSub:"(Real estate)",
    role:"Business Strategy Intern — Team Lead", domain:"Growth strategy · employer branding",
    dates:"Jan ’25 – May ’25", place:"Remote",
    color:"#6A2A28",
    intro:[
      "Two consecutive roles at one company. I joined on brand strategy, then moved up to lead a three-person business strategy team.",
      "I was due to roll off when my Mumbai internship began, but the role still had no owner — so I stayed on remotely and kept the strategy workstream running outside Hanbai hours."
    ],
    sub:[
      {role:"Business Strategy Intern — Team Lead", dates:"Mar 2025 – May 2025"},
      {role:"Brand Strategy Intern", dates:"Jan 2025 – Mar 2025"}
    ],
    points:[
      ["+105% brand reach","Led a 3-member team to design an integrated growth strategy across digital channels, with explicit targeting logic. Brand reach grew 105%, tracked on dashboards I built."],
      ["+60% qualified leads","The same targeting work lifted qualified leads by 60% — lead quality, not just volume, was the original problem."],
      ["12 opportunities adopted","Market research and dashboard analysis surfaced 12 growth opportunities that leadership adopted."],
      ["A lagging-indicator problem","Diagnosed that poor public employer reviews were lagging behind internal improvements. Designed a one-week feedback pilot and proposed a six-month internal-feedback workstream — post-project reviews and multi-stakeholder escalation ladders."],
      ["Brand, made consistent","As Brand Strategy Intern: analysed customer feedback, redesigned the brand framework, and set up KPI tracking to keep brand execution consistent across channels."]
    ],
    kpis:[["+105%","Brand reach"],["+60%","Qualified leads"],["12","Opportunities adopted"],["3","Person team led"]]
  }
];

window.EDUCATION = [
  {deg:"PGDM — Marketing & Strategy", org:"Institute of Management Technology (IMT), Nagpur", dates:"2024 – 2026", score:"75.4% (CGPA 6.93 / 10)", note:"Graduated April 2026"},
  {deg:"Bachelor of Commerce", org:"S.S. Jain Subodh College, Jaipur", dates:"2018 – 2021", score:"65%", note:"The commerce base behind the P&L, ROI and financial models in my case work"}
];

window.LEADERSHIP = [
  {role:"General Secretary — Centre for Sustainability", org:"IMT Nagpur", dates:"2024 – 2026",
   points:["Ran a QR-based digital campaign that lifted engagement 30% and reached 200+ people.",
           "Used audience segmentation to plan a campus event — participation rose 20%.",
           "Coordinated a 10-member team across stakeholder logistics for the sustainability event."]}
];

window.ACHIEVEMENTS = [
  {title:"Winner", what:"STRATBUZZ Business Strategy Competition", year:"2024"},
  {title:"2nd Runner-Up", what:"DRISTICONE Case Analysis Challenge", year:"2024"},
  {title:"Anundoram Borooah Award", what:"Awarded out of 3.89 lakh students", year:"2015"}
];

window.CERTS = [
  {name:"Google Data Analytics", issuer:"Google · Coursera", skills:"SQL · Data visualisation", color:"#2F4A3A"},
  {name:"Data Driven Decision Making", issuer:"PwC", skills:"Analytics for decisions", color:"#7A2E2A"},
  {name:"Inbound Marketing", issuer:"HubSpot Academy", skills:"Content · funnel · lifecycle", color:"#A0673F"},
  {name:"Leadership Skills", issuer:"IIM Ahmedabad", skills:"Leading teams", color:"#3F5A85"},
  {name:"Advanced Excel for Business", issuer:"Professional certification", skills:"Modelling · analysis", color:"#5A2E52"}
];

window.SKILLS = [
  ["Strategy & consulting", "Problem structuring, growth strategy, GTM design, market entry, portfolio & brand architecture, occasion strategy, competitive benchmarking"],
  ["Analysis", "Financial modelling, P&L analysis, ROI modelling, funnel analysis, 5-Why root cause, TAM/SAM/SOM, scenario modelling, social listening, user research"],
  ["Tools", "Excel, PowerPoint, SQL (CTEs, window functions, stored procedures), Tableau (LOD, parameters), Power BI (DAX, Power Query, RLS), Python (Pandas, Seaborn)"],
  ["Working style", "Client communication, stakeholder alignment, data storytelling"]
];

/* --------------------------------------------------------------------------
   CASE STUDIES — STRATEGY (independent / academic work)
   Fields: id, brand, sub, tags, line, stats[[value,label]], blocks[{t,p,pull,table,ul}]
   color  — tile colour on the home page
   feature — shown as a large block on the home page
   -------------------------------------------------------------------------- */
window.PROJECTS = [
{
  id:`zepto`, brand:`Zepto`, sub:`Enterprise GTM Playbook · Quick commerce`, tags:[`Go-to-Market`,`Growth & Turnaround`],
  color:`#3B1F5C`, feature:true, date:`Dec ’25`, label:`Unit economics`,
  line:`An independent enterprise GTM playbook: cut time-to-market 30%, scale into Tier-2/3, and reach EBITDA breakeven across five monetisation streams.`,
  stats:[[`₹11,110 Cr`,`FY25 GOV base`],[`+150%`,`YoY growth velocity`],[`≤45 days`,`CAC payback target`]],
  role:`Independent case study. I built the playbook end to end — market scoring, monetisation map, unit-economics levers, private-label formula and a Q1–Q4 roadmap. Zepto figures are public or modelled; targets are mine.`,
  blocks:[
    {t:`The Brief`,p:`I built an independent enterprise GTM playbook for Zepto (December 2025) — a company-wide roadmap to reduce time-to-market by 30% and accelerate Tier-2/3 cluster expansion, anchored to an ₹11,110 crore FY25 revenue base growing at 150% YoY.`},
    {t:`Micro-Market Scoring Framework`,ul:[
      `Standardised Tier-2/3 site selection combining income-density heatmaps with 1.5–2.0 km SLA radii optimised for the sub-10-minute promise.`,
      `Hyperlocal OOH plus WhatsApp geo-blasts two weeks pre-launch.`,
      `Target: 1,000+ orders/day/store in matured clusters.`]},
    {t:`Five-Stream Monetisation Map`,table:{h:[`Stream`,`Economics`,`Priority`],r:[
      [`Merchant commission`,`10–20%`,`Core`],[`Delivery fees`,`₹15–40/order`,`Core`],
      [`Retail media ads`,`~15% contribution`,`Highest-priority lever`],
      [`Owned brands`,`25–40% gross margin`,`Highest-priority lever`],
      [`Zepto Pass membership`,`2x order frequency`,`Retention lock-in`]]}},
    {t:`Two New Verticals I Scoped`,ul:[
      `<b>Zepto Café</b> — a QSR layer on existing dark-store infrastructure. 148+ item menu, 100 cafés/month rollout velocity, ₹160 Cr current GMV, ₹1,000 Cr ARR target. The logic is sunk logistics cost: near-zero marginal expansion expense.`,
      `<b>Zepto Atoms</b> — a B2B data SaaS vertical monetising pin-code-level purchase data. Real-time market share and sales insight for FMCG brands, targeting ~70% gross margin and 100+ paying brands by Q3.`]},
    {t:`Fixing the Unit Economics`,pull:`FY24: ₹4,454 Cr revenue at a −28% net loss margin. Growth was never the problem. Margin per order was.`,p:`A three-lever framework: AOV and mix uplift (+₹50/order via personalisation bundles), fulfilment optimisation (route density and batching, targeting ₹35–45/order cost), and monetisation per order (+2% EBITDA from retail media and private label).`},
    {t:`The Private Label 20-20-20 Formula`,ul:[
      `Price 20% below indexed brands, deliver +20% gross margin uplift, launch with 20 hero SKUs across staples, beverages and personal care.`,
      `90-day cycle: supply & QA → merchandising → scale. PMF gates of 35% repeat rate and a 4.3-star minimum before category expansion.`,
      `Mix trajectory from ~8% to a 15% target by Q4. Meat and seafood flagged as high-risk on freshness trust gaps.`]},
    {t:`Q1–Q4 Execution Roadmap`,steps:[
      [`Q1`,`Tier-2/3 pilot launches; Café scale to 300+ locations.`],
      [`Q2`,`Retail Media scale; Private Label V1.`],
      [`Q3`,`Café P&L positive in 70% of sites.`],
      [`Q4`,`EBITDA positive in 85% of dark stores; CAC payback ≤45 days.`]],
      p:`90-day sprints throughout: delist the bottom 10% of slow-movers, A/B test dark-store zoning for peak-hour SLA, a dynamic fee engine for sub-₹200 orders, and in-app end-cap merchandising for the Relish private label.`},
    {t:`Acquisition + Retention`,ul:[
      `<b>Acquisition:</b> hyperlocal OOH around dark-store radii, UPI/bank cashback co-ops (Cred, GPay), geo-lift precision campaigns.`,
      `<b>Retention:</b> Zepto Pass lock-in (2x order frequency), WhatsApp/push lifecycle CRM for D30 cohort win-back, NPS-led service recovery.`,
      `<b>Targets:</b> CAC payback ≤45 days in metros, ≤60 days in Tier-2/3, and +2 orders/month in engaged cohorts.`]},
    {t:`North Star Dashboard`,table:{h:[`Metric`,`Value`],r:[
      [`GOV`,`₹11,110 Cr (+150% YoY)`],[`Contribution margin`,`8–10% (+400 bps vs FY24)`],
      [`On-time delivery (<10 min)`,`99.2%`],[`D30 retention`,`65%`],
      [`CAC payback`,`42 days blended`],[`Zepto Pass penetration`,`32%`]]}}
  ]
},
{
  id:`vip`, brand:`VIP Bags`, sub:`Project R-30 · Rajasthan zone turnaround`, tags:[`Growth & Turnaround`],
  color:`#1E2A5A`, feature:true, date:`Jan ’26`, label:`Zone P&L`,
  line:`A ₹12.42 Cr quarterly loss, traced to inventory bloat and a product mix that missed a category shift. A full zone recovery plan.`,
  stats:[[`₹12.42 Cr`,`Q3 FY25 net loss diagnosed`],[`+600 bps`,`Projected margin expansion`],[`24% → 31%`,`Market share target`]],
  role:`My most operationally concrete case — real geography, a real competitor and channel mechanics down to the dealer counter. All targets are projections.`,
  blocks:[
    {t:`The Diagnosis`,p:`Traced a ₹12.42 crore net loss in Q3 FY25 for VIP Bags' Rajasthan zone to two root causes — soft-luggage inventory bloat and competitor discounting — then built a full zone turnaround strategy, Project R-30, to recover profitability by FY27.`},
    {t:`The Category Shift Behind It`,pull:`Consumers moved from fabric to polycarbonate. The zone's shelves didn't.`,p:`Safari's ~30% market share and 16.5% YoY growth was the primary competitive threat — and the zone's SKU mix was still weighted to the losing format.`},
    {t:`Three Underserved Revenue Segments`,steps:[
      [`01`,`<b>Destination weddings</b> — 4.8 million weddings in the Oct–Dec 2024 window.`],
      [`02`,`<b>Domestic luxury tourists</b> — growing +15%.`],
      [`03`,`<b>Kota student migrants</b> — approximately 120,000 a year.`]],
      p:`Each got its own go-to-market approach rather than one zone-wide push.`},
    {t:`The 70-30 Rule — Product Mix Reset`,table:{h:[`Allocation`,`Share`,`Rationale`],r:[
      [`Hard-shell`,`70%`,`Follows the polycarbonate shift`],
      [`Premium (Carlton)`,`20%`,`Business travel, margin tier`],
      [`Utility (Aristocrat)`,`10%`,`Volume floor`],
      [`Projected gross margin`,`42% → 48%`,`+600 bps`]]}},
    {t:`Execution Levers`,ul:[
      `<b>30-day flash clearance</b> of non-moving soft luggage via Van Melas in Tier-2 towns (Pali, Barmer), targeting ₹15 Cr liquidation to free working capital.`,
      `<b>Three hero SKU bundles</b> for FY26 — Skybags "Drip" Series (youth), VIP Heritage Nested Set (wedding trousseau, ATV ₹18,000), Carlton Premium (business travel).`,
      `<b>Gold Dealer Program</b> — the top 25 high-velocity counters in Jaipur, Jodhpur and Udaipur get priority stocking and a 2% kicker, in exchange for 60% shelf dominance.`,
      `<b>Institutional channel</b> — direct tie-ups with Rajasthan's top 10 wedding planners for bulk trousseau orders.`,
      `<b>"VIP On-Call"</b> — 4-hour repair turnaround, 24-hour replacement guarantee. A 15% price-premium justifier that a Mumbai-HQ competitor structurally can't match.`]},
    {t:`Targets & Governance`,table:{h:[`Metric`,`Baseline`,`Target`],r:[
      [`Zone EBITDA`,`₹4.2 Cr (Q1)`,`₹9.2 Cr by Q4 FY27`],
      [`Inventory days`,`47`,`32 (−32%)`],
      [`Revenue growth`,`—`,`+12% YoY`],
      [`Market share vs Safari`,`24%`,`31%`]]},
      p:`Weekly geo-tagged dealer shelf audits, monthly hard-vs-soft SKU velocity dashboards, and WhatsApp-bot analytics tracking the 4-hour SLA — the part most turnaround decks leave out.`}
  ]
},
{
  id:`occasion`, brand:`Bournvita · Knorr · Glucon-D`, sub:`Occasion expansion trilogy`, tags:[`Consumer & Campaign`,`Category & Portfolio`],
  color:`#8E1430`, feature:true, label:`Consumer insight`,
  line:`Three brands where consumers had already invented a new use. The strategy was to legitimise it — not to reposition.`,
  stats:[[`3 brands`,`Format innovations`],[`₹0 R&D`,`Same formula, new format`],[`5-risk`,`Guardrail framework each`]],
  role:`My most original work. Every insight here came from social listening — Reddit, Twitter and search queries — rather than desk research. All market sizes are my estimates.`,
  blocks:[
    {t:`The Common Method`,pull:`Find what people already do off-label. Legitimise it in a new format. Leave the core equity alone.`,p:`Each one started with listening rather than a brief — looking for the gap between how a brand positions itself and how people actually use it. All three unlock incremental revenue without repositioning risk.`},
    {t:`Bournvita — The Dessert Condiment`,ul:[
      `People eat the powder raw and sprinkle it on ice cream and toast — visible in Reddit/Twitter threads and searches like "bournvita ice cream topping" and "eating bournvita raw".`,
      `The gap: positioned as "Tan Ki Shakti", a kids' health drink — consumed for its malt crunch as a post-dinner indulgence.`,
      `Sized a SAM of ₹650–₹1,200 Cr (8–12% topping attach on India's ₹8,100–₹9,900 Cr at-home ice cream market) and a Year-2 SOM of ₹16–₹63 Cr. Margin-accretive at ₹0.79/g vs ₹0.4–0.5/g for refill jars.`,
      `<b>Bournvita Crunch</b> — same formula in a table-top PET shaker, moved from the Health Food aisle to Dessert/Freezer. "How do you crunch?" UGC Reels and a 1L vanilla brick bundle for trial.`]},
    {t:`Knorr — The Umami Delivery System`,ul:[
      `A frequency trap: positioned as a 4 PM winter soup for sick days, while latent behaviour wanted an everyday seasoning.`,
      `Reframed: Knorr is not a soup brand — it's an untapped umami delivery system.`,
      `Sized against the ₹3,000–₹4,000 Cr seasoning-enhancer TAM. SAM ~₹1,890 Cr (31.5M urban households × 12 uses/year × ₹5); Year-2 SOM ₹90–₹100 Cr at 5% share.`,
      `<b>Knorr Umami Boost</b> — flavour-first, no thickeners, a 3–4g ₹5 sachet at parity with Maggi Masala-e-Magic. Moved to spice-aisle eye level, clip-strips in noodle and rice aisles, and a B2B line to street vendors and canteens.`]},
    {t:`Glucon-D — Confectionery in a Pharma Pack`,ul:[
      `Positioned as instant energy for summer exhaustion — while kids lick the powder raw for the fizzy sherbet feel. Reddit nostalgia threads (512 upvotes, 103 comments) and searches like "fizz on tongue" back it up.`,
      `Sized against the ₹9,000–₹11,000 Cr sugar confectionery TAM — 4.5x the ₹2,000 Cr energy-powder market. A conservative 0.5–1% capture gives ₹45–₹110 Cr incremental revenue.`,
      `<b>Glucon-D Fizz Stix</b> — zero-R&D format innovation: the same powder in moisture-proof straws, three flavours, ₹2 a stick. From the medicine cabinet to school-canteen checkouts and kirana candy jars.`]},
    {t:`The Guardrails — Applied to All Three`,table:{h:[`Risk`,`Guardrail`],r:[
      [`Equity dilution`,`Distinct sub-brands with explicit category disclaimers`],
      [`Sugar & health scrutiny`,`Serve sizes stated up front (5g ≈ 20 kcal; 3g ≈ 12 kcal), no health claims`],
      [`Regulatory`,`FSSAI compliance, age guidance, no therapeutic claims on confectionery`],
      [`Product integrity`,`Silica anti-caking caps, high-barrier straws, 90% humidity stress tests`],
      [`Cannibalisation & retail`,`Separate aisles = separate need-states; pitched as incremental aisle revenue`]]}}
  ]
},
{
  id:`gcal`, brand:`Google Calendar`, sub:`Independent case study · Product strategy · Productivity OS`, tags:[`Product Strategy`],
  color:`#1F3A30`, feature:true, label:`Product`,
  line:`Users don't need a better planner. They need a feedback loop between what they intended and what actually happened.`,
  stats:[[`200+`,`User interviews I ran`],[`3 weeks`,`Diary studies`],[`+15%`,`Productivity target`]],
  role:`Independent case study, not Google work. My strongest product work. I personally conducted the 200+ user interviews and ran three-week diary studies, then designed the architecture and prototypes.`,
  blocks:[
    {t:`Problem Discovery`,p:`Intention doesn't equal execution. 67% of users feel unproductive daily, rely on an average of 4.2 apps, and use their calendar only for meetings (80%). The planning layer exists; nothing closes the loop behind it.`},
    {t:`Research`,steps:[
      [`200+`,`User interviews, conducted personally.`],
      [`3 wks`,`Diary studies — longitudinal, not one-off.`],
      [`3`,`Competitors mapped: RescueTime, Forest, Toggl Track.`]]},
    {t:`The Insight`,pull:`Users don't need a planner. They need a feedback loop.`,p:`No product integrates time tracking, focus, reflection and calendar in one place. Each solves a quarter of the problem — which is why people run four apps and still feel unproductive.`},
    {t:`Plan → Do → Reflect`,steps:[
      [`Plan`,`<b>Smart Time Tracker</b> — auto-tracks usage via Android and Chrome, comparing planned against actual.`],
      [`Do`,`<b>Focus Sessions</b> — calendar blocks become deep-work sessions with DND and Pomodoro.`],
      [`Reflect`,`<b>Productivity Journal</b> — a daily reflection with AI-generated insights.`]]},
    {t:`Technical Architecture`,table:{h:[`Layer`,`Choice`],r:[
      [`Frontend`,`Android · Chrome extension · Web`],[`Intelligence`,`On-device ML classification + Gemini API`],[`Data`,`SQLite locally · Firestore / BigQuery for aggregates`]]}},
    {t:`Privacy Strategy`,p:`On-device processing, only aggregated data synced, user-controlled privacy levels. In a category built on surveillance, privacy is the differentiator — not a compliance checkbox.`},
    {t:`Prototypes Built`,p:`A calendar heatmap of planned vs actual, a daily dashboard, an AI assistant panel, and a mobile reflection UI.`}
  ]
},
{
  id:`bikaji`, brand:`Bikaji Foods`, sub:`Revenue diversification & brand architecture`, tags:[`Category & Portfolio`,`Brand Strategy`],
  color:`#A0673F`, feature:true, label:`Brand architecture`,
  line:`70% of revenue from one category — and a heritage so strong it denies the brand permission to enter any other.`,
  stats:[[`70%+`,`Revenue concentration`],[`₹27,000 Cr`,`Diversification target`],[`+160 bps`,`Projected margin expansion`]],
  role:`Independent case study. Diagnosis, geographic segmentation, a house-of-brands recommendation and a financial model. Figures are estimates and projections.`,
  blocks:[
    {t:`The Concentration Risk`,p:`Revenue mix and portfolio analysis at ₹17,000+ crore scale showed 70%+ dependence on ethnic snacks — a concentration risk that also caps the ceiling.`},
    {t:`The Heritage Brand Trap`,pull:`The equity that sells bhujia is the same equity that blocks sweets and western snacks.`,p:`Benchmarked against Haldiram's: a structural gap in perception, shelf dominance and category leadership. Bikaji owns tea-time — and loses celebration (sweets) and impulse (chips) moments entirely.`},
    {t:`Category-Level Diagnosis`,ul:[
      `<b>Packaged sweets (₹5,000 Cr opportunity)</b> — low category recall, shelved next to namkeen instead of the mithai aisle, festive-only demand, confused messaging.`,
      `<b>Western snacks (4–5% growth vs 8–10% market)</b> — no distinct sub-brand, weak impulse placement, low innovation cadence.`]},
    {t:`Root Cause`,p:`Mono-brand stretch across multiple categories: equity dilution, poor marketing ROI, weak triggers outside the core. Of ₹430 crore in spend, 75% reinforced ethnic snacks while the high-growth categories stayed underfunded.`},
    {t:`Geographic Insight`,table:{h:[`Market type`,`States`,`Characteristic`],r:[
      [`Core`,`Rajasthan, Bihar, Assam`,`Strong legacy perception, low flexibility`],
      [`Focus`,`UP, Delhi, Karnataka`,`1.5x growth potential, malleable perception`]]},
      p:`In focus states the brand has no fixed meaning yet — first impressions can be shaped deliberately through sub-branding.`},
    {t:`The Recommendation`,steps:[
      [`01`,`Move from mono-brand to a <b>House of Brands</b> — a ₹27,000 Cr diversification path.`],
      [`02`,`3-year GTM: sub-brand launches, POS restructuring across 50,000 outlets, quick-commerce scale-up.`],
      [`03`,`Financial model projecting 56% revenue growth and +160 bps margin on a ₹545 Cr investment plan.`]],
      p:`Feasibility benchmarked against multi-brand execution at Unilever, Nestlé and ITC.`}
  ]
},
{
  id:`clean`, brand:`India Cleanliness Movement`, sub:`Viral growth strategy · Behavioural economics`, tags:[`Consumer & Campaign`,`Growth & Turnaround`],
  color:`#4B2BB8`, feature:true, date:`Feb ’26`, label:`Behaviour design`,
  line:`Turning civic duty into a self-sustaining status game — a creator-economy engine that works even if people are selfish.`,
  stats:[[`R ≥ 1.2`,`Loop metric to validate`],[`20 cities`,`Phase-3 scale`],[`₹0`,`Funding dependency`]],
  role:`Independent strategy deck. I designed the psychological model, the content protocol, the ward-level scaling playbook and the risk framework. All targets are projections.`,
  blocks:[
    {t:`The Premise`,pull:`Don't ask for altruism. Offer status — and let the algorithm do the recruiting.`,p:`A behavioural-economics framework to operationalise cleanliness through the creator economy. Creators clean because it builds their personal brand, not only because it's good.`},
    {t:`Six Psychological Drivers`,table:{h:[`Driver`,`How it shows up`],r:[
      [`Greed & status`,`Creators trade 30 minutes of labour for followers and validation`],
      [`Identity & pride`,`"My gali > your gali" — locality pride as a competitive scoreboard`],
      [`Social proof`,`Visible before/after metrics: kg removed, time taken`],
      [`Guilt & relief`,`Viewers get low-friction outs — share, tag, comment`],
      [`Reciprocity`,`Public thanks, stitched shout-outs, leaderboards`],
      [`Variable rewards`,`Algorithm spikes for dramatic transformations`]]}},
    {t:`The Cyclic Value Loop`,steps:[
      [`1`,`Creator films hook → clean → proof → reveal, tags location.`],
      [`2`,`Viewers engage — guilt or pride trigger; saves and shares.`],
      [`3`,`Velocity pushes content to non-followers.`],
      [`4`,`New creators copy the format; ward rivalry kicks in.`],
      [`5`,`More spots cleaned; local shops donate supplies.`],
      [`6`,`Leaderboards and shout-outs validate status. Repeat.`]],
      p:`Viral math (target): 100,000 seed views × 1.5% share rate → 1,500 shares; 0.2% creator conversion → 200 new posts; ~4,000,000 new views at a 20K average.`},
    {t:`Content & Platform Protocol`,ul:[
      `<b>Standard formats (20–45s):</b> Glow-Up Clean (hero), Drain-Run Test (visual ASMR), the ₹99 Kit Challenge (accessibility), Tag Your Ward (rivalry).`,
      `<b>Mandatory for trust:</b> geo-tag and timestamp, a visible disposal end-point, PPE on camera.`,
      `<b>Strictly prohibited:</b> faces of litterers, medical waste on camera, political symbols.`,
      `<b>Platform roles:</b> Instagram for community, YouTube Shorts for search and scale, LinkedIn for CSR legitimacy.`]},
    {t:`Scaling — Ward-Level Cells`,p:`Each ward runs a micro-cell — a Ward Leader with a Creator, Fixer, Logger and Recruiter — equipped with a "brand-in-a-box" kit. A monthly Ward Cup league turns participation into rivalry; inter-RWA and school leagues extend it.`,
      steps:[[`P0`,`2 weeks — brand kit, overlay templates, 20 pilot creators.`],[`P1`,`4 weeks — 3 wards/city, 300 posts, loop metric R ≥ 1.2.`],[`P2`,`8–12 weeks — 30 wards, launch the Ward Cup, local media.`],[`P3`,`Q3–Q4 — 20 cities, state dashboards, inter-city challenges.`]]},
    {t:`What Kills It — and the Fixes`,table:{h:[`Failure point`,`Fix`],r:[
      [`Staged heroism`,`Raw clips and disposal proof required`],
      [`Safety incidents`,`Mandatory PPE and a "no touch" list`],
      [`Political hijacking`,`Zero tolerance on flags and logos`],
      [`Virtue signalling`,`70/20/10 rule — action / process / talk`]]}},
    {t:`90-Day City Targets`,table:{h:[`Metric`,`Target`],r:[[`Tagged posts`,`5,000`],[`Spots cleaned`,`1,200`],[`R-factor (viral)`,`1.3`],[`Creator retention`,`35%`]]},
      p:`Sustainable monetisation without cash bounties: ₹299 affiliate starter kits and capped brand integrations for cleaning brands after product-market fit.`}
  ]
},
{
  id:`asianpaints`, brand:`Asian Paints`, sub:`Home Care 360 · Category expansion`, tags:[`Category & Portfolio`,`Growth & Turnaround`],
  color:`#7A2E2A`,
  line:`Share falling, margins compressing, and a product bought once every seven years. The pivot from product company to services platform.`,
  stats:[[`59% → 52%`,`Share erosion diagnosed`],[`−365 bps`,`EBITDA decline`],[`~40%`,`Estimated cost advantage`]],
  blocks:[
    {t:`The Problem`,ul:[
      `Analysed the ₹5.1T–₹8.5T Indian home services market for growth beyond decorative paints amid category saturation.`,
      `Diagnosed share erosion from 59% to 52% and a 365 bps EBITDA decline, driven by Birla Opus and JSW entering and sustained pricing pressure.`,
      `85% of revenue from decorative paints, with repaint cycles lengthening to 7–10 years.`]},
    {t:`Why Previous Diversification Failed`,p:`Beautiful Homes and Sleek Kitchens show the pattern: operational complexity, fragmented execution, and no service standardisation. Adjacencies kept launching without a delivery model underneath them.`},
    {t:`The Consumer Journey Gap`,pull:`Home services in India is a category defined by what goes wrong. That's exactly why a trusted brand can win it.`,p:`Four pain points nobody owns: trust deficit, opaque pricing, inconsistent execution, no post-service accountability.`},
    {t:`Home Care 360`,ul:[
      `A full-stack ecosystem — painting, waterproofing, deep cleaning, pest control, minor repairs.`,
      `<b>Tiered service model</b> (Essential, Premium, Luxury) across mass, urban middle-class and affluent segments.`,
      `<b>AMC subscriptions</b> — from one purchase every 7 years to engagement 3–4 times a year.`,
      `Value drivers: higher LTV, greater share of wallet, predictable annuity revenue.`]},
    {t:`Why Asian Paints Specifically`,p:`It leverages infrastructure already paid for — 70,000+ dealers, 143 warehouses, 90,000+ outlets — for an estimated ~40% lower cost than standalone service players, with R&D synergies into cleaning chemicals and pest control at ₹50–75 Cr capex.`},
    {t:`Brand Consequence`,p:`From "Home Beautification" to "Home Care & Maintenance." Less romantic, far more defensible — a brand people think about twice a decade becomes one they deal with every quarter.`}
  ]
},
{
  id:`bata`, brand:`Bata`, sub:`Youth-centric brand transformation`, tags:[`Brand Strategy`,`Consumer & Campaign`],
  color:`#9A3324`,
  line:`A brand Gen Z associates with their parents. Repositioning, a new sub-brand, and a creator-led growth engine.`,
  stats:[[`~₹35B`,`Category revenue`],[`+15%`,`Projected consideration, 16–30`],[`25%`,`Projected revenue from new line`]],
  blocks:[
    {t:`The Constraint`,p:`Against Nike, Adidas and Puma in Indian footwear (~₹35B), the growth constraint was clear: weak Gen Z relevance from a "parent brand" perception, low cultural connect, and poor digital discovery.`},
    {t:`The Consumer Reality`,p:`Gen Z carries $250B in spending power, and 58% of its discovery is influencer-driven. A brand invisible in that layer isn't competing — it's absent.`},
    {t:`The White Space`,pull:`"Affordable Cool" — under ₹4,000, combining style, sustainability and accessibility. Nobody credibly owns it.`},
    {t:`Repositioning`,p:`From "utility footwear" to "accessible style + sustainability", through one platform line: <b>Everyday style, responsibly made.</b>`},
    {t:`Product — BATA ECHO`,ul:[
      `A Gen Z sub-brand: retro-modern sneakers in recycled PET, bamboo fibre and bio-foam, with a circular lifecycle.`,
      `Priced at $60–$90 — affordable, still aspirational.`,
      `AR try-ons, app-based customisation, digital product passports.`]},
    {t:`Growth Engine`,ul:[
      `<b>Always-on Creator Engine</b> — 500+ micro-influencers a month.`,
      `Short-form video, campus drops, behind-the-scenes storytelling; an ambassador programme across 50 universities.`,
      `Social commerce: shoppable video, live drops, a Discord community.`,
      `Phygital retail: AR mirrors, smart shelves, online-to-offline journeys.`]},
    {t:`Projected Impact`,table:{h:[`Metric`,`Projection`],r:[
      [`Brand consideration, age 16–30`,`+15%`],[`D2C revenue mix`,`20%`],
      [`Store conversion rate`,`+8%`],[`BATA ECHO revenue contribution`,`25% within 24–36 months`]]}}
  ]
},
{
  id:`bournvita`, brand:`Bournvita (Mondelez)`, sub:`₹500 Cr turnaround strategy`, tags:[`Growth & Turnaround`],
  color:`#5A2E52`,
  line:`Awareness above 90%, repeat purchase collapsing. A trust problem dressed up as a marketing problem.`,
  stats:[[`₹500 Cr`,`Modelled revenue unlock`],[`14 months`,`Modelled payback`],[`+300 bps`,`Modelled margin impact`]],
  blocks:[
    {t:`Funnel Diagnosis`,p:`Awareness at 90%+, consideration declining, repeat in critical decline. Customers try but don't stay — which rules out a media problem and points at the product and its credibility.`},
    {t:`Root Cause — 5-Why`,pull:`Stuck between "taste" and "nutrition", committing to neither — and losing on both.`,p:`High sugar perception (~6.4g per serving) → viral backlash → an outdated formulation.`},
    {t:`Consumer Evidence`,ul:[
      `78% willing to pay more for healthier options; 65% prefer natural ingredients.`,
      `Switching driven by sugar and transparency — not price or availability.`,
      `Benchmarked against Horlicks, Complan and new-age nutrition brands.`]},
    {t:`Three Growth Levers`,steps:[
      [`01`,`<b>Portfolio reformulation</b> — Naturals (clean label), Pro (high protein, adult), Focus (students).`],
      [`02`,`<b>Adult expansion</b> — professionals, fitness users, 40+ wellness via e-com 45% / pharma 30% / MT 25%.`],
      [`03`,`<b>Trust GTM</b> — QR ingredient transparency, third-party certification, nutritionist validation, sampling.`]]},
    {t:`Financial Model`,table:{h:[`Item`,`Modelled value`],r:[
      [`Revenue unlock`,`₹500 Cr`],[`Investment`,`₹65 Cr`],[`Payback`,`14 months`],
      [`Margin impact`,`+300 bps`],[`Brand trust`,`+15%`],[`PDP conversion`,`+20%`],[`Repeat rate`,`+10%`]]}},
    {t:`Risk Framework`,p:`Taste rejection, competitor reaction, cost inflation and regulation — mitigated by phased sugar reduction instead of one shock reformulation, channel defence, and controlled PR and influencer sequencing.`}
  ]
},
{
  id:`maggi`, brand:`Nestlé Maggi`, sub:`₹1,200 Cr growth strategy`, tags:[`Growth & Turnaround`,`Category & Portfolio`],
  color:`#B4532A`,
  line:`Repeat purchase fell from 68% to 28%. Taste fatigue, and a portfolio that ignored regional India.`,
  stats:[[`68% → 28%`,`Repeat purchase drop`],[`₹1,200 Cr`,`Opportunity sized`],[`2.8x`,`Projected ROI`]],
  blocks:[
    {t:`The Problem`,p:`Retention decline and regional relevance gaps in a ₹4,500 crore instant noodles market — a category Maggi created and now defends on habit alone.`},
    {t:`Root Cause`,pull:`One national flavour in a country of regional palates is a slow leak, not a sudden failure.`,p:`Funnel and root-cause analysis traced the repeat drop from 68% to 28% to taste fatigue and no localised SKUs.`},
    {t:`Three-Pronged Strategy`,steps:[
      [`01`,`<b>Regional flavour expansion</b> — 15 SKUs mapped to regional taste profiles.`],
      [`02`,`<b>Premium health portfolio</b> — for the segment leaving the category.`],
      [`03`,`<b>Omnichannel GTM</b> — Q-commerce pilots, subscriptions, CRM-driven retention loops.`]]},
    {t:`Competitive Benchmarking`,p:`Yippee, Top Ramen and Ching's Secret share the same two gaps — regionalisation and premiumisation. Whoever moves first takes the segment.`},
    {t:`The Model`,p:`A revenue model linking each lever to the ₹1,200 crore opportunity, with a projected 2.8x ROI and 14-month break-even.`}
  ]
},
{
  id:`dettol`, brand:`Reckitt / Dettol`, sub:`Oral care market entry`, tags:[`Go-to-Market`,`Category & Portfolio`],
  color:`#2E5E4E`,
  line:`Taking a germ-protection brand into mouthwash — a low-penetration category where the leaders have an adoption problem.`,
  stats:[[`₹300 Cr`,`Opportunity identified`],[`28.5%`,`Projected ROI`],[`21 months`,`Projected payback`]],
  blocks:[
    {t:`The Opportunity`,p:`A market entry strategy for Dettol into Indian oral care — a ₹300 crore opportunity in a low-penetration, high-growth segment where germ-protection equity transfers cleanly.`},
    {t:`Sizing & Whitespace`,pull:`The category's leaders built the barrier themselves. The burn is why people stop using mouthwash.`,p:`TAM/SAM/SOM analysis and benchmarking against Listerine and Colgate Plax surfaced the whitespace: <b>high efficacy with low irritation</b>.`},
    {t:`Product Answer`,p:`An alcohol-free CPC + Zinc formula addressing both adoption barriers — burning sensation and safety concerns. Here the product is the strategy, not the advertising.`},
    {t:`Full-Funnel GTM`,steps:[
      [`01`,`Dentist advocacy for professional credibility.`],
      [`02`,`Influencer trials and sampling for consideration.`],
      [`03`,`E-commerce bundles with existing Dettol SKUs.`],
      [`04`,`Metros → top 30 cities → national, chemist-first.`]]},
    {t:`Financials`,table:{h:[`Metric`,`Projection`],r:[
      [`3-year revenue`,`₹275 Cr`],[`Gross margin`,`50%`],[`ROI`,`28.5%`],[`Payback`,`21 months`]]}}
  ]
},
{
  id:`vadilal`, brand:`Vadilal`, sub:`Challenger brand audit vs Amul`, tags:[`Brand Strategy`,`Category & Portfolio`],
  color:`#C27C2C`,
  line:`A ₹300B category, a challenger at less than half the leader's share, and 150+ SKUs that need editing rather than extending.`,
  stats:[[`~20% vs ~45%`,`Vadilal vs Amul share`],[`150+`,`SKUs audited`],[`+150 bps`,`Share target`]],
  blocks:[
    {t:`The Audit`,p:`A full challenger audit of Vadilal against category leader Amul across India's ₹300B ice cream market — market share (Vadilal ~20% vs Amul ~45%), distribution strength, and portfolio strategy.`},
    {t:`Portfolio Finding`,pull:`Range without role is just working capital.`,p:`150+ SKUs across 25+ categories. The recommendation was subtractive: shift toward high-margin premium and health-focused SKUs instead of adding breadth.`},
    {t:`Consumer Whitespace`,p:`Nostalgia, health-consciousness and impulse trends point to premium indulgence and take-home — where Amul's value positioning gives it less permission to follow.`},
    {t:`Three Growth Levers`,steps:[
      [`01`,`<b>Premiumisation</b> — margin over volume.`],
      [`02`,`<b>Q-commerce</b> — SKU optimisation for 10-minute delivery, geo-targeted performance marketing.`],
      [`03`,`<b>Tier-2/3</b> — asset-light freezer deployment and rural distributor incentives, rather than matching Amul's network head-on.`]]},
    {t:`Roadmap`,p:`A 12–18 month go-to-market roadmap targeting +150 bps market share, with recommendations across pricing, product innovation and channel expansion.`}
  ]
},
{
  id:`motul`, brand:`Motul India`, sub:`5-year strategic expansion`, tags:[`Growth & Turnaround`,`Go-to-Market`],
  color:`#A31F24`,
  line:`A premium specialist in a market defended by distribution moats and price wars. Don't fight for the mass — own the specialism.`,
  stats:[[`₹1,800–2,500 Cr`,`Revenue target`],[`18–22%`,`Target CAGR`],[`~₹350 Cr`,`Planned capex`]],
  blocks:[
    {t:`The Market Read`,p:`In a $7B+ lubricants market, the barriers to mass entry are structural: distribution moats, price wars and OEM lock-ins. Attacking them head-on destroys capital for a premium brand.`},
    {t:`The Positioning Choice`,pull:`Don't compete for the mass market. Own the specialisms the incumbents can't serve profitably.`,p:`Premium synthetics, EV fluids and high-performance two-wheelers — where technical credibility beats distribution scale.`},
    {t:`Five-Pillar Growth Roadmap`,steps:[
      [`01`,`Rural hub-and-spoke expansion.`],[`02`,`A D2C digital ecosystem.`],[`03`,`EV product innovation.`],
      [`04`,`Subscriptions with CRM-driven retention.`],[`05`,`A content-led acquisition funnel.`]]},
    {t:`Financial & Risk Framework`,p:`Scenario-based projections with ~₹350 Cr capex and a profitability path, plus mitigation for pricing pressure, supply-chain volatility and counterfeits — the underrated threat to premium lubricants in India.`}
  ]
},
{
  id:`generalmills`, brand:`General Mills`, sub:`Honey Nut Cheerios · India GTM`, tags:[`Go-to-Market`],
  color:`#C9A227`,
  line:`Launching a breakfast cereal in a country that largely doesn't eat breakfast cereal. Sizing, a price ladder, and trial.`,
  stats:[[`₹38,720 Cr`,`Estimated cereal market`],[`8.2%`,`CAGR 2025–30`],[`₹10 – ₹499`,`Pricing ladder`]],
  blocks:[
    {t:`Market Assessment`,p:`Sized the Indian breakfast cereal market at an estimated ₹38,720 crore, growing at 8.2% CAGR to 2030, with ready-to-eat at 74% share.`},
    {t:`The Consumer Gap`,steps:[[`25%`,`Skip breakfast — a time problem.`],[`72%`,`Eat a nutritionally poor breakfast.`],[`3%`,`Treat breakfast as essential.`]],
      p:`The entry point is the convenience-plus-health gap. Neither alone is enough.`},
    {t:`Value Proposition`,p:`"Ready in 60 seconds" convenience, whole-grain-and-honey taste, and heart health. The taste layer matters most — it's what breaks the habit barrier.`},
    {t:`Three-Phase Entry`,steps:[
      [`P1`,`0–6 months: Mumbai, Delhi NCR, Bengaluru via Amazon, Flipkart, Zepto, Reliance Smart, Nature's Basket.`],
      [`P2`,`Tier-2 cities, school and office sampling, quick-commerce bundles.`],
      [`P3`,`Kirana general trade, festival and family packs.`]]},
    {t:`Pricing & KPIs`,p:`₹10 trial packs up to ₹499 family packs — trial at negligible risk, then scale. Targets: 4–7% e-commerce conversion, 100+ key accounts, three-metro dominance before expansion.`}
  ]
},
{
  id:`essilor`, brand:`EssilorLuxottica`, sub:`Tier 2/3 cluster expansion`, tags:[`Go-to-Market`],
  color:`#2D4F7C`,
  line:`An asset-light partner model to reach small-town India without building the infrastructure to serve it.`,
  stats:[[`95%`,`Target fill rate`],[`>65%`,`Lens attach target`],[`₹3.8L`,`Target store productivity / mo`]],
  blocks:[
    {t:`The Model`,p:`A cluster-based expansion into Tier 2/3 cities through an asset-light partner model — growth without the capital intensity of owned infrastructure.`},
    {t:`Channel Architecture`,pull:`In small-town optical retail, availability is the whole game.`,p:`Authorised partners + regional distributors + micro-warehousing, designed for a 95% fill rate and 48–72 hour turnaround.`},
    {t:`Product & Pricing`,p:`Frame-lens bundling to push lens attach above 65% while lifting retailer margins to 35–40%. The retailer economics have to work first — they are the distribution.`},
    {t:`90-Day Execution Playbook`,steps:[[`01`,`Distributor onboarding.`],[`02`,`Retail activation.`],[`03`,`Sell-out acceleration via eye camps and digital footfall drivers.`]]},
    {t:`KPI Framework`,table:{h:[`Metric`,`Target`],r:[
      [`Store productivity`,`₹3.8L / month`],[`Distributor ROI`,`≥18%`],[`Inventory health`,`≥12 turns / year`],[`Fill rate`,`95%`],[`TAT`,`48–72 hrs`]]}}
  ]
},
{
  id:`dabur`, brand:`Dabur`, sub:`Portfolio-led growth · Ayurveda repositioning`, tags:[`Category & Portfolio`,`Brand Strategy`],
  color:`#4E6B2F`,
  line:`Repositioning Ayurveda from heritage remedy to science-backed performance wellness — for a generation that wants proof.`,
  stats:[[`3-tier`,`Category architecture`],[`+15%`,`Premiumisation mix target`],[`3.5M`,`Urban households targeted`]],
  blocks:[
    {t:`The Reposition`,p:`Ayurveda as <b>science-backed performance wellness</b> for Gen Z and millennials — a cohort that respects traditional efficacy but wants clinical validation before it pays a premium.`},
    {t:`Three-Tier Category Architecture`,table:{h:[`Tier`,`Role`],r:[[`Core`,`Volume and reach`],[`Premium`,`Margin expansion`],[`D2C Lab`,`Innovation and speed`]]},
      p:`Each tier has a defined job. Without that, portfolio decisions default to whoever argues loudest.`},
    {t:`Innovation Pipeline`,p:`A 12-month pipeline across functional gummies, adaptogens and RTD beverages — mapped to emerging needs, not to existing manufacturing lines.`},
    {t:`Go-to-Market`,pull:`If the shelf doesn't carry the evidence, "science-backed" is just a claim on a pack.`,p:`D2C, quick commerce and modern trade, with proof-based retail experiences and influencer seeding.`},
    {t:`Growth Levers`,steps:[[`+15%`,`Premiumisation mix.`],[`3.5M`,`Urban households acquired.`],[`Trust`,`Clinical validation — competitors can copy a format, not a body of evidence.`]]}
  ]
},
{
  id:`nivea`, brand:`Nivea Men`, sub:`90-day Instagram growth strategy`, tags:[`Consumer & Campaign`],
  color:`#1D3C8C`,
  line:`A global brand losing the engagement battle to a domestic challenger. A creator operating model to close it.`,
  stats:[[`90 days`,`Execution window`],[`+50%`,`Engagement target`],[`125+`,`Creators in the model`]],
  blocks:[
    {t:`The Gap`,p:`A 90-day Instagram strategy to close Nivea Men's engagement gap against Beardo — creator-led and community-first.`},
    {t:`Diagnosis`,pull:`Brand-quality content in a feed that rewards volume and authenticity.`,p:`Benchmarking showed two gaps: low creator velocity and poor platform-native fit.`},
    {t:`Creator Operating Model`,table:{h:[`Tier`,`Count`,`Role`],r:[
      [`Macro`,`5`,`Reach and credibility anchors`],[`Micro`,`20`,`Category depth and frequency`],[`UGC creators`,`100+`,`Volume at an authentic register`]]}},
    {t:`Content & Engagement`,p:`Reels-first: 70% UGC, 20% collaborations. Engagement loops — UGC challenges, live sessions, exclusive drops — so participation compounds instead of needing fresh paid reach each cycle.`},
    {t:`Phased Rollout`,steps:[[`Pilot`,`Test formats and creators.`],[`Scale`,`Double down on what moves.`],[`Optimise`,`Target +50% engagement, 2x average reel views.`]]}
  ]
},
{
  id:`cerave`, brand:`CeraVe`, sub:`Super Bowl campaign deconstruction`, tags:[`Consumer & Campaign`],
  color:`#2B6CA3`,
  line:`32 billion impressions — and a conversion architecture that wasn't built to catch them.`,
  stats:[[`32B`,`Impressions in the funnel`],[`3 phases`,`Virality architecture`],[`0`,`CRM capture points found`]],
  blocks:[
    {t:`The Deconstruction`,p:`The CeraVe Super Bowl campaign navigated one central trade-off: clinical authority against cultural relevance, across a 32-billion-impression viral funnel.`},
    {t:`The Virality Architecture`,steps:[[`Seed`,`Pattern interruption to break feed autopilot.`],[`Amplify`,`In-group dynamics — participation that feels like belonging.`],[`Resolve`,`The reveal that pays off the mystery.`]]},
    {t:`Where It Leaked`,pull:`A viral spike with no CRM capture is rented attention. You pay for it once and it leaves.`,ul:[
      `No CRM capture to turn reach into owned audience.`,
      `No product-education sequence behind the awareness event.`,
      `No retail integration at the point of purchase.`]},
    {t:`What I Designed Instead`,p:`A post-viral growth system: retargeting funnels sequenced to the three phases, and owned-audience capture built into the campaign rather than bolted on after the spike.`}
  ]
},
{
  id:`hul`, brand:`Hindustan Unilever`, sub:`Market benchmarking · Redseer IMPACT framework`, tags:[`Category & Portfolio`,`Growth & Turnaround`],
  color:`#1F4E8C`,
  line:`The leader grows at 2% while the market grows at 17%. A three-horizon defence against channel, D2C and rural disruption.`,
  stats:[[`₹63,121 Cr`,`FY25 revenue`],[`2%`,`Underlying sales growth`],[`₹7,800 Cr`,`Aggressive-case upside`]],
  blocks:[
    {t:`The Hook`,p:`India's ₹21.3 lakh crore FMCG market is in its biggest structural shift in decades. HUL still leads — ₹63,121 crore revenue in FY25, 9 in 10 households. But quick commerce now takes 70–75% of e-grocery orders, D2C brands hit ₹100 crore in under three years, and in 2025 rural India overtook urban in premium FMCG consumption.`},
    {t:`The Market Size Paradox`,pull:`The category compounds at 17.3%. HUL grew underlying sales 2%. That gap is market share leaving the building.`},
    {t:`Peer Benchmarking, FY25`,table:{h:[`Company`,`Revenue (₹Cr)`,`EBITDA %`,`Vol growth`,`Rural share`],r:[
      [`HUL`,`63,121`,`23.1%`,`2%`,`35–40%`],[`Nestlé India`,`22,037`,`24.8%`,`3%`,`30–35%`],
      [`ITC (FMCG-Others)`,`21,982`,`9.8%`,`4.8%`,`40–45%`],[`GCPL`,`15,073`,`20.2%`,`7%`,`30–35%`],
      [`Dabur`,`12,885`,`20.2%`,`5%`,`45–50%`],[`Marico`,`9,876`,`19.5%`,`4%`,`35–40%`]]}},
    {t:`The Counterintuitive Finding`,pull:`Urban brand fragmentation is accelerating faster than rural — unbranded volumes grew 8.4% in urban vs 2.3% in rural.`,p:`Urban consumers are the ones trying D2C and unbranded alternatives through quick commerce and social feeds, while rural consumers upgrade to established premium brands. Defend urban through the D2C portfolio; push premium in rural through Shikhar.`},
    {t:`Three-Horizon Defence`,steps:[
      [`H1`,`<b>0–12 months, quick commerce:</b> 50–100 QC-specific SKUs, top-500 dark-store placement, 2-hour replenishment in the top 5 metros.`],
      [`H2`,`<b>12–24 months, D2C:</b> 2–3 more acquisitions; scale Minimalist to ₹1,000 Cr with 40% offline mix; an internal incubator.`],
      [`H3`,`<b>24–36 months, rural:</b> Shikhar 2.0 predictive forecasting; 200 region-specific micro-SKUs; Shakti Ammas as micro-influencers.`]]},
    {t:`Scenario Model`,table:{h:[`Scenario`,`Conservative`,`Base`,`Aggressive`],r:[
      [`Revenue CAGR FY26–28`,`4–5%`,`6–8%`,`10–12%`],[`Incremental revenue by FY28`,`₹4,200 Cr`,`₹5,800 Cr`,`₹7,800 Cr`],
      [`EBITDA margin change`,`−50 bps`,`Flat`,`+150 bps`],[`Payback`,`4–5 yrs`,`3–4 yrs`,`2–3 yrs`]]}},
    {t:`Method Note`,p:`Built on Redseer's IMPACT framework, triangulated across NielsenIQ, IBEF, IMARC, exchange filings, Zomato and Swiggy disclosures, MCA filings and Kantar. Limitations are stated in the report: no primary research, derived private-company financials, estimated margins where undisclosed.`}
  ]
},
{
  id:`nani`, brand:`Nani's Kitchen`, sub:`Mock brand launch · Premium ready-to-cook masala`, tags:[`Go-to-Market`,`Brand Strategy`],
  color:`#B5562F`,
  line:`A trust vacuum opened in Indian spices. This is the brand I'd build into it — positioning, portfolio, GTM and unit economics.`,
  stats:[[`₹86,930 Cr`,`Spices market, 2024`],[`₹25 Cr`,`Year-3 revenue plan`],[`₹8 Cr`,`Seed requirement`]],
  blocks:[
    {t:`The Opening`,pull:`"Woh waali khushboo, phir se" — that aroma, once again.`,p:`India's spices market was ₹86,930 crore in 2024, growing at 9.2% CAGR. Then, in April 2024, Singapore and Hong Kong pulled MDH and Everest products over ethylene oxide. Trust stopped being a hygiene factor and became a competitive advantage.`},
    {t:`The Insight Hierarchy`,table:{h:[`Level`,`Insight`],r:[
      [`Surface`,`People want convenient cooking solutions`],
      [`Deeper`,`They feel guilty about not cooking like their mothers did`],
      [`Strategic`,`They want the shortcut to taste like a loving act, not a compromise`]]}},
    {t:`Positioning`,p:`For urban millennials who miss their grandmother's cooking: premium ready-to-cook masalas from recipes collected from real grandmothers, with traceable ingredients. Priced at ₹120–180/100g — between mass (₹30–80) and organic (₹150–250).`},
    {t:`Two Defensible Mechanisms`,ul:[
      `<b>The Nani Story.</b> Every pack names a real grandmother, her village and her recipe, with a QR video and a disclosed 5% revenue share to her family. Competitors can copy a format; they can't copy the people.`,
      `<b>Transparency architecture.</b> Farm-source traceability per ingredient, batch lab reports covering EtO and heavy metals, NABL-accredited testing on every batch.`]},
    {t:`Go-to-Market, Phased`,steps:[
      [`P1`,`Months 1–6: D2C + Zepto, Blinkit, Instamart in Mumbai, Delhi-NCR, Bangalore.`],
      [`P2`,`Months 7–12: premium grocers; Pune, Hyderabad, Chennai.`],
      [`P3`,`Year 2+: selective modern trade on premium shelves only.`]],
      p:`Launch campaign "Find Your Nani": consumers nominate a grandmother's recipe, the community votes, winners become the next SKUs — the campaign and the R&D pipeline are the same thing.`},
    {t:`Financial Plan`,table:{h:[`Metric`,`Year 1`,`Year 2`,`Year 3`],r:[
      [`Revenue (₹ Cr)`,`3.5`,`12`,`25`],[`SKUs`,`6`,`12`,`20`],[`Cities`,`3`,`8`,`15`],[`Gross margin`,`45%`,`50%`,`55%`],[`EBITDA`,`−25%`,`−5%`,`+12%`]]}}
  ]
},
{
  id:`boat`, brand:`boAt`, sub:`Brand audit · Audio & wearables`, tags:[`Brand Strategy`],
  color:`#C0392B`,
  line:`How a cable maker became India's default audio brand — and why the positioning that built it now caps it.`,
  stats:[[`~33%`,`Audio market share`],[`₹3,118 Cr`,`FY24 revenue`],[`−7.9%`,`FY24 growth`]],
  blocks:[
    {t:`The Context`,p:`boAt went from an indestructible iPhone cable in 2014 to roughly 33% of India's audio market by 2024. The founding insight: young Indians wanted audio that worked as a visible identity marker. In 2016 the ₹1,000–5,000 band had no dominant brand. boAt took it.`},
    {t:`The Tension`,pull:`"boAt is great value" is a compliment that becomes a cage.`,p:`Brand permission doesn't extend upward. Revenue tells the story: hypergrowth through FY22, then +17%, then −7.9%.`},
    {t:`The Growth Trajectory`,table:{h:[`Year`,`Revenue (₹ Cr)`,`Growth`,`Phase`],r:[
      [`FY19`,`92`,`—`,`Launch`],[`FY20`,`500`,`+443%`,`Hypergrowth`],[`FY22`,`2,886`,`+477%`,`Market capture`],
      [`FY23`,`3,377`,`+17%`,`Maturation`],[`FY24`,`3,118`,`−7.9%`,`Recalibration`]]}},
    {t:`Four Structural Vulnerabilities`,steps:[
      [`01`,`<b>Premiumisation dilemma</b> — the value equity blocks the upmarket move.`],
      [`02`,`<b>Innovation perception gap</b> — real R&D reads as catching up.`],
      [`03`,`<b>The March 2024 data breach</b> — 7.5M customer records, timed against IPO prep.`],
      [`04`,`<b>Supply chain & competition</b> — 25–30% still offshore; Noise and Apple closing in.`]]},
    {t:`What I Recommended`,ul:[
      `<b>A distinct premium sub-brand</b> rather than stretching boAt upmarket — the Lexus/Acura architecture.`,
      `<b>A visible innovation narrative</b> — a boAt Sound Lab researching Indian acoustic preferences.`,
      `<b>Turn "Boatheads" into a mechanism</b> — early access, co-creation, a loyalty programme with real benefits.`,
      `<b>Rebuild trust deliberately</b> — third-party security certification and CEO-level accountability.`]}
  ]
},
{
  id:`cadbury`, brand:`Cadbury × SRK`, sub:`Campaign deconstruction · Diwali 2021`, tags:[`Consumer & Campaign`],
  color:`#4A1D6B`,
  line:`A brand gave away its most expensive asset to 85,000 small shops — and got back more than any ad could have bought.`,
  stats:[[`+32%`,`Sales vs −30% expected`],[`85,000+`,`Stores given free ads`],[`$1.5M`,`Earned PR value`]],
  blocks:[
    {t:`The One-Sentence Summary`,pull:`Cadbury gave Shah Rukh Khan's endorsement away to 85,000+ local businesses — using AI to make him name each store personally.`},
    {t:`The Business Reality`,p:`Diwali is roughly 45% of Cadbury Celebrations' annual sales. In 2020–21 the category was down sharply, gifting was expected to fall 30%, and the small retailers who drive 80%+ of Celebrations sales were struggling.`},
    {t:`The Tension Most Analyses Miss`,p:`Cadbury's gift packs compete with local mithai shops. Consumers wanted to support local. Rather than hide from that conflict, the campaign resolved it in public: yes, we're a big company — and an ally of the ecosystem we sell through.`},
    {t:`The Inverse Celebrity Logic`,p:`In the store-specific versions SRK never mentions Cadbury. He talks about the local shop. That takes brand confidence — trusting people to remember who enabled the generosity without being told.`},
    {t:`The Results`,table:{h:[`Metric`,`Result`],r:[
      [`Sales growth`,`+32% (vs an expected −30%)`],[`Average stock per store`,`+26%`],[`PR value`,`$1.5 million`],
      [`Stores benefited`,`85,000+`],[`Recognition`,`Cannes Titanium Lion — India's first`]]}},
    {t:`What I Took From It`,steps:[[`01`,`Tension is opportunity.`],[`02`,`Sometimes the best use of a celebrity is not using them for yourself.`],[`03`,`Technology serves emotion — the "how", never the "what".`],[`04`,`Purpose has to be operational, not stated.`]]}
  ]
}
];

/* --------------------------------------------------------------------------
   DATA & ANALYTICS PROJECTS (self-directed, real datasets, real outputs)
   -------------------------------------------------------------------------- */
window.DATA_PROJECTS = [
  {id:`d-warehouse`, tool:`SQL`, brand:`SQL Data Warehouse`, sub:`Medallion architecture · Bronze → Silver → Gold`, color:`#2F4A3A`, mock:`sql`,
   line:`Siloed CRM and ERP sales data consolidated into one governed source of truth.`,
   stats:[[`3`,`Layers built`],[`Weeks → minutes`,`Report prep time`],[`Star`,`Schema delivered`]],
   S:`Sales data lived in disconnected CRM and ERP systems — no single point of truth.`,
   T:`Design and build a scalable Medallion Architecture to improve traceability, quality and reporting speed.`,
   A:[`<b>Bronze:</b> automated raw CSV ingestion with BULK INSERT and stored procedures, TRY…CATCH error handling and execution logging.`,
      `<b>Silver:</b> deduplication with window functions, type casting, null handling with IS NULL and COALESCE.`,
      `<b>Gold:</b> business-ready star-schema views, multi-source LEFT JOINs, surrogate keys via ROW_NUMBER().`],
   R:`In this self-directed build, report preparation moves from weeks of manual work to minutes, with a governed data catalogue and lineage.`,
   code:`CREATE OR ALTER PROCEDURE bronze.load_bronze AS\nBEGIN\n  BEGIN TRY\n    TRUNCATE TABLE bronze.crm_cust_info;\n    BULK INSERT bronze.crm_cust_info\n    FROM 'datasets/source_crm/cust_info.csv'\n    WITH (FIRSTROW = 2, FIELDTERMINATOR = ',');\n  END TRY\n  BEGIN CATCH\n    PRINT 'Load failed: ' + ERROR_MESSAGE();\n  END CATCH\nEND`},
  {id:`d-hr`, tool:`Tableau`, brand:`HR Analytics Dashboard`, sub:`Tableau · 15 charts · LOD expressions`, color:`#7A2E2A`, mock:`bars`,
   line:`An end-to-end HR dashboard — from requirements and mock-ups to a published Tableau Public build.`,
   stats:[[`15`,`Interactive charts`],[`~25%`,`Pay-gap pattern surfaced`],[`2`,`Summary / detail views`]],
   S:`HR managers needed one tool to track employee lifecycles and departmental performance.`,
   T:`Build a dynamic multi-view dashboard from requirements → high-fidelity mock-ups → deployment.`,
   A:[`Calculated fields with FIXED LOD expressions and IF/CASE logic for active, hired and terminated employees.`,
      `Sparklines for trends, heat maps for education vs performance, pie-in-pie for gender ratios.`,
      `Floating containers, show/hide filter menus, custom navigation between summary and detail.`],
   R:`A 15-chart interactive dashboard on Tableau Public. It surfaced a pay-gap pattern in which female PhD holders in the dataset earned ~25% more than male counterparts — an observed pattern in this dataset, not a general claim.`},
  {id:`d-powerbi`, tool:`Power BI`, brand:`Power BI Star Schema`, sub:`Data modelling · DAX · Row-level security`, color:`#C9A227`, mock:`schema`,
   line:`A chaotic many-to-many model rebuilt as a clean galaxy schema — without breaking the business metrics.`,
   stats:[[`−20%`,`File size`],[`1`,`Shared date dimension`],[`RLS`,`By user region`]],
   S:`An inherited model had many-to-many relationships and circular filter directions, producing wrong numbers.`,
   T:`Turn it into a high-performance star (galaxy) schema while protecting core metrics.`,
   A:[`Power Query shaping: unpivot for inventory snapshots, append/merge to unify order headers and details.`,
      `A shared date dimension via CALENDARAUTO() for cross-fact comparison across sales, inventory and budget.`,
      `Row-level security with DAX filter expressions restricting data by user region.`],
   R:`File size cut 20% by removing redundant hash keys; a centralised measures table standardised reporting.`},
  {id:`d-movies`, tool:`Python`, brand:`Movie Revenue Correlation`, sub:`Python · Pandas · Seaborn · hypothesis testing`, color:`#3F5A85`, mock:`scatter`,
   line:`I set out to prove production-company prestige drives box office. The data disproved it.`,
   stats:[[`5,000+`,`Records cleaned`],[`0.7+`,`Budget & votes correlation`],[`Low`,`Production-company effect`]],
   S:`Which features — budget, genre, production company — most drive a film's gross revenue?`,
   T:`Test the hypothesis that production-company prestige is the primary driver, in an automated Jupyter pipeline.`,
   A:[`Cleaned and pre-processed 5,000+ records in Pandas — type conversion, deduplication.`,
      `Encoded categorical variables with cat.codes so they could enter the correlation matrix.`,
      `Visualised with Seaborn regplots and a correlation heatmap.`],
   R:`The hypothesis failed. Budget and user votes showed the strongest correlation with revenue (0.7+); production-company influence was statistically low. I follow the evidence, not the prior.`,
   code:`df['company'] = df['company'].astype('category').cat.codes\ncorr = df.corr(method='pearson', numeric_only=True)\nsns.heatmap(corr, annot=True, cmap='rocket_r')\n# budget, votes ↔ gross : 0.7+  (strongest)\n# company       ↔ gross : low   (hypothesis rejected)`},
  {id:`d-covid`, tool:`SQL + Tableau`, brand:`COVID-19 Exploration & Dashboard`, sub:`SQL CTEs · window functions · Tableau forecasting`, color:`#5A2E52`, mock:`line`,
   line:`A global dataset explored in SQL, then handed to a public Tableau dashboard with forecasting.`,
   stats:[[`~2%`,`Global case fatality rate`],[`~10%`,`US population infected`],[`4`,`Dashboard views`]],
   S:`A global COVID-19 dataset with mortality and vaccination data, in inconsistent types.`,
   T:`Quantify the likelihood of dying if infected, find the highest infection rates by population, and publish it accessibly.`,
   A:[`Self-joins, CTEs, temp tables and window functions for rolling vaccination counts per country.`,
      `Aggregates and CAST to fix type inconsistencies in death-percentage calculations.`,
      `Permanent views for BI hand-off; a Tableau dashboard with geographic roles and time-series forecasting.`],
   R:`~2% global death rate among confirmed cases (deaths ÷ confirmed cases); ~10% of the US population infected (infections ÷ population). Published on Tableau Public with regional drill-down and a year-end forecast.`},
  {id:`d-nashville`, tool:`SQL`, brand:`Nashville Housing Cleaning`, sub:`SQL · string functions · CTEs`, color:`#A0673F`, mock:`sql`,
   line:`A messy property dataset made usable for market analysis.`,
   stats:[[`35`,`Missing addresses filled`],[`104`,`Duplicates removed`],[`3`,`Address fields atomised`]],
   S:`Inconsistent formats, missing addresses and duplicate rows.`,
   T:`Produce a clean, analysis-ready dataset.`,
   A:[`Populated 35 missing property addresses via a self-join on Parcel ID.`,
      `Split address strings into Address, City and State with SUBSTRING, CHARINDEX and PARSENAME.`,
      `Standardised categorical values (e.g. "Sold as Vacant") with CASE.`],
   R:`104 duplicate entries removed with CTEs and window functions — a fully usable dataset.`,
   code:`WITH dupes AS (\n  SELECT *, ROW_NUMBER() OVER (\n    PARTITION BY ParcelID, PropertyAddress,\n                 SalePrice, SaleDate, LegalReference\n    ORDER BY UniqueID) AS rn\n  FROM nashville_housing)\nDELETE FROM dupes WHERE rn > 1;  -- 104 rows`},
  {id:`d-eda`, tool:`SQL`, brand:`EDA & Data Profiling`, sub:`SQL · INFORMATION_SCHEMA · cardinality`, color:`#2E5E4E`, mock:`bars`,
   line:`A first-pass profile of a new sales database — structure, boundaries and the metrics that matter.`,
   stats:[[`101`,`Columns mapped`],[`37`,`Months of orders`],[`69%`,`Revenue from Bikes`]],
   S:`A new database of customers, products and sales with no documentation.`,
   T:`Profile cardinality, date boundaries and headline business metrics.`,
   A:[`Mapped structure through INFORMATION_SCHEMA — 101 columns.`,
      `DISTINCT and GROUP BY for dimension cardinality — product hierarchies, six countries.`,
      `DATEDIFF between first and last orders for the business time span; a UNION ALL key-metrics report.`],
   R:`100% of registered customers had placed orders; the Bikes category drove 69% of total revenue.`},
  {id:`d-segment`, tool:`SQL`, brand:`Customer Segmentation`, sub:`SQL · LAG · running totals · gold-layer views`, color:`#1E2A5A`, mock:`bars`,
   line:`Customers segmented by lifespan and spend into a 360-degree reporting view.`,
   stats:[[`3`,`Segments: VIP / Regular / New`],[`14,000`,`Customers in "New"`],[`YoY`,`via LAG`]],
   S:`Sales tracking existed; behavioural insight didn't.`,
   T:`Segment customers and products by spending behaviour over time.`,
   A:[`Running monthly totals and moving averages with SUM/AVG window functions.`,
      `Year-over-year comparison with LAG.`,
      `CASE logic segmenting customers into VIP, Regular and New by lifespan and spend thresholds; recency, AOV and monthly spend in one gold-layer view.`],
   R:`"New" was the largest segment at 14,000 customers — enabling lifecycle-stage targeting.`},
  {id:`d-sales`, tool:`Tableau`, brand:`Sales Performance & YoY`, sub:`Tableau parameters · dual axis · Figma layouts`, color:`#8E1430`, mock:`line`,
   line:`A two-view executive dashboard where any year can become "the current year".`,
   stats:[[`2`,`Views: summary / detail`],[`Any year`,`Selectable baseline`],[`Figma`,`Custom layouts`]],
   S:`Stakeholders needed to compare sales year over year to see seasonality and growth.`,
   T:`Build a dynamic dashboard with a selectable comparison year.`,
   A:[`Parameters and calculated fields so every current-vs-previous metric recalculates on a year toggle.`,
      `Dual-axis sparklines with window functions marking monthly max and min.`,
      `Bar-in-bar subcategory comparison; a FIXED LOD histogram of customer order frequency; Figma-built backgrounds.`],
   R:`An interactive executive tool for deep-dives into weekly trends and profit discrepancies.`}
];

/* --------------------------------------------------------------------------
   OVERVIEW CARD — "What I did / How I did it / Why it matters" per case.
   what: one line on the work. impact: what it would change for the business.
   (How = the analysis steps, taken from the block titles automatically.)
   -------------------------------------------------------------------------- */
window.IMPACT = {
  zepto:{what:`Built an independent enterprise GTM playbook for quick commerce — expansion, monetisation and unit economics in one roadmap.`,
    impact:`Gives a leadership team a sequenced plan to grow into Tier-2/3 without growing losses: margin levers ranked, a private-label formula with PMF gates, and payback targets to hold teams to.`},
  vip:{what:`Diagnosed a loss-making sales zone and built Project R-30 — a turnaround down to SKU mix, dealers and service.`,
    impact:`Shows a zonal team how to take back margin and share from a faster competitor: a projected +600 bps gross margin, inventory days cut from 47 to 32, and governance that makes the plan stick in the field.`},
  occasion:{what:`Found three off-label consumer behaviours through social listening and turned each into a sub-brand concept.`,
    impact:`Incremental revenue without repositioning risk or new R&D — sized opportunities, a format and placement plan for each, and a five-risk guardrail so the core brand stays protected.`},
  gcal:{what:`Ran 200+ user interviews and three-week diary studies, then designed a productivity-OS concept on top of Google Calendar.`,
    impact:`Turns a meetings tool into a daily habit: a closed Plan → Do → Reflect loop, a privacy-first architecture, and a measurable +15% productivity target to validate against.`},
  bikaji:{what:`Diagnosed a heritage brand's concentration risk and recommended a move to a house-of-brands architecture.`,
    impact:`Unlocks sweets and western snacks without diluting the core: a 3-year GTM, geographic prioritisation, and a model projecting 56% revenue growth on a ₹545 Cr plan.`},
  clean:{what:`Designed a creator-economy engine that turns cleaning a street into a status game people want to play.`,
    impact:`A civic movement that sustains itself without funding: a viral loop with a measurable R-factor, ward-level cells that scale city by city, and guardrails against the ways such movements usually die.`},
  asianpaints:{what:`Diagnosed share and margin erosion and proposed a pivot from paint company to home-services platform.`,
    impact:`Converts a purchase made once in seven years into 3–4 touchpoints a year, using dealer and warehouse infrastructure already paid for.`},
  bata:{what:`Repositioned a "parent brand" for Gen Z with a new sub-brand and a creator-led growth engine.`,
    impact:`A route back into the 16–30 consideration set: a white-space position, a product line built for it, and projected gains in consideration, D2C mix and store conversion.`},
  bournvita:{what:`Traced a repeat-purchase collapse to a trust problem and built a ₹500 Cr turnaround plan.`,
    impact:`Fixes the leak instead of buying more awareness: a reformulated portfolio, a new adult segment, and trust-led GTM, modelled at a 14-month payback.`},
  maggi:{what:`Diagnosed falling repeat purchase and built a regional-flavour and premium growth strategy.`,
    impact:`Re-engages lapsing buyers with flavours that fit their region, modelled at a ₹1,200 Cr opportunity and 2.8x projected ROI.`},
  dettol:{what:`Built a market-entry strategy taking Dettol into mouthwash through an alcohol-free formula.`,
    impact:`Enters a low-penetration category by removing its main adoption barrier, with a chemist-first rollout and a projected 21-month payback.`},
  vadilal:{what:`Audited a challenger ice-cream brand against the category leader and found where it can win.`,
    impact:`Plays where the leader is weakest instead of matching it head-on — premium, Q-commerce and asset-light Tier-2/3 — targeting +150 bps share.`},
  motul:{what:`Built a 5-year expansion plan for a premium lubricant brand in a market of price wars.`,
    impact:`Grows on specialism rather than scale, with scenario-modelled revenue of ₹1,800–2,500 Cr and a counterfeit-risk plan.`},
  generalmills:{what:`Built the India launch plan for a breakfast cereal in a market that mostly skips cereal.`,
    impact:`Lowers the trial barrier with a ₹10 entry pack and sampling, then scales in phases from three metros to kirana.`},
  essilor:{what:`Designed an asset-light Tier-2/3 expansion model with a channel, pricing and KPI framework.`,
    impact:`Reaches small-town customers without building owned infrastructure, with retailer economics designed to work first.`},
  dabur:{what:`Repositioned Ayurveda as science-backed wellness through a three-tier portfolio.`,
    impact:`Gives each tier a defined job — volume, margin, innovation — and a premiumisation path targeting 3.5M urban households.`},
  nivea:{what:`Built a 90-day creator operating model to close an engagement gap against a domestic challenger.`,
    impact:`Moves from brand-produced content to creator volume, targeting +50% engagement and 2x average reel views.`},
  cerave:{what:`Deconstructed a viral Super Bowl campaign and found where its attention leaked.`,
    impact:`A post-viral system that turns a spike of attention into owned audience and repeat revenue.`},
  hul:{what:`Benchmarked the market leader against peers and disruptors using the Redseer IMPACT framework.`,
    impact:`A three-horizon defence across quick commerce, D2C and rural, with conservative-to-aggressive scenarios for leadership to choose between.`},
  nani:{what:`Designed a brand from scratch for the trust gap opened by the 2024 spice recalls.`,
    impact:`A launch-ready brand with positioning, portfolio, phased GTM and unit economics — defensible because competitors can't copy the people behind it.`},
  boat:{what:`Audited a category-defining brand whose value positioning now caps its growth.`,
    impact:`A way upmarket that protects the core: a separate premium sub-brand, a visible innovation story and a trust rebuild.`},
  cadbury:{what:`Deconstructed an award-winning campaign to find the strategy underneath it.`,
    impact:`Five lessons I can reuse — above all, that the best use of a brand asset is sometimes giving it away.`}
};
