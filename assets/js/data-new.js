/* ==========================================================================
   SAGAR SHARMA — PORTFOLIO DATA, PART 3 (loads after data-extra.js)
   The six newest case studies (October 2026), placed first on the site.
   Source: the decks in Documents/Prrrrr/New Projects (PDF + slide screenshots).
   Rules (same as the rest of the site):
   - Independent case studies, never work for the named company.
   - Every forward-looking figure is modelled / estimated / projected — never a result.
   - Where the decks disagree with themselves, the figure that is internally consistent is used.
   ========================================================================== */
(function(){
const W = window;

W.CATS.splice(W.CATS.indexOf("Product Strategy"), 0, "Corporate Strategy");

/* slides + full-deck PDFs ------------------------------------------------- */
Object.assign(W.DECK, {ather:8, blinkitgm:7, merger:8, snitch:7, vi:10, zinga:7});
Object.assign(W.REPORTS, {
  ather:{file:"reports/Sagar_Sharma_Ather_Tier2-3_Expansion.pdf", pages:8, label:"Board decision deck", note:"Market sizing · store plan · four plays · base/bear/bull model · risks · kill criteria"},
  blinkitgm:{file:"reports/Sagar_Sharma_Blinkit_Growth_Marketing_ROI.pdf", pages:7, label:"Growth & marketing ROI deck", note:"Funnel leak · unit economics · reallocation · A/B test plan · roadmap"},
  merger:{file:"reports/Sagar_Sharma_Eternal_Blinkit_Integration_Playbook.pdf", pages:8, label:"Integration playbook", note:"Governing thought · evidence · 12-month roadmap · KPI dashboard · source register"},
  snitch:{file:"reports/Sagar_Sharma_Snitch_Segmentation_Positioning.pdf", pages:7, label:"Segmentation & positioning brief", note:"Four segments · weighted targeting · perceptual map · 4Ps · roadmap"},
  vi:{file:"reports/Sagar_Sharma_Vi_Profitability_Turnaround.pdf", pages:10, label:"Profitability turnaround diagnostic", note:"Profit tree · EBITDA bridge · peer benchmark · three sized levers · roadmap"},
  zinga:{file:"reports/Sagar_Sharma_Zinga_Pricing_GTM.pdf", pages:7, label:"Pricing & GTM deck", note:"Willingness-to-pay · channel scorecard · positioning · SKU ladder · risks"}
});

/* the six projects -------------------------------------------------------- */
const NEW = [
{
  id:`ather`, brand:`Ather Energy`, sub:`Tier-2/3 expansion strategy · Electric two-wheelers`, tags:[`Go-to-Market`,`Growth & Turnaround`,`Corporate Strategy`],
  color:`#0F5F3B`, feature:true, date:`Oct ’26`, label:`Market expansion`,
  line:`How a premium EV brand opens India's Tier-2/3 cities without diluting what it is worth in the metros. A board-style expansion case, modelled at ₹4,800 Cr of incremental FY31 revenue.`,
  stats:[[`₹4,800 Cr`,`Modelled incremental FY31 revenue`],[`₹4,200 Cr`,`Base-case NPV at 14% (modelled)`],[`1,800–2,000`,`Stores by FY31, from 700`]],
  role:`Independent case study — not work for Ather Energy. I sized the market two ways, designed the entry playbook, built the bear / base / bull financial case and wrote the board decision card. Market and company figures are public; the forecasts are my models.`,
  blocks:[
    {t:`The Question`,pull:`Can Ather extend the franchise downstream without unravelling what the brand is worth in metros?`,p:`Ather built a premium metro franchise — 700 stores and 548 service centres, clustered in the South, with Rest-of-India share under 10%. Bajaj's sub-₹1L Chetak and TVS's dealer density now press on that frontier. The case frames two paths: stay in the metros and plateau near ₹8,000 Cr, or push into Tier-2/3 and reach about ₹15,000 Cr by FY31.`},
    {t:`Sizing the Prize`,pull:`Two independent builds of the Tier-2/3 pool land at ₹38,750 Cr and ₹24,500 Cr. I anchored the model on the lower one.`,p:`The top-down build multiplies India's 2W base by EV penetration, Tier-2/3 share and blended ASP. The bottom-up build counts 95 named cities plus a semi-urban belt. The ~37% gap is because top-down counts every Tier-2/3 EV sale, while bottom-up counts only cities Ather's three-tier network can plausibly serve. Cross-check: NITI Aayog puts Tier-2 and Tier-3 at about 55% of 2W EV sales by FY28.`},
    {t:`The Store Plan`,table:{h:[`Format`,`Role`,`Stores by FY31`],r:[
      [`Experience Centres`,`Full sales, service and Ather Grid flagship — Tier-1 and metro-adjacent Tier-2`,`350`],
      [`Ather Studios`,`Partnership-serviced anchors in Tier-2 — the workhorse of the expansion`,`900`],
      [`Satellite touchpoints`,`Test-ride and delivery hubs in Tier-3; low capex, partner-run`,`750`]]},
      p:`National share moves from about 14% to about 22% by FY31, and the share has to migrate out of the South. Adding 18 points of Rest-of-India share takes roughly four times the units of defending an extra 5 points in the South.`},
    {t:`Four Plays, One Rule`,ul:[
      `<b>Product and price:</b> a five-rung ladder tuned to income tier — Konarc ₹1.0L, Rizta S ₹1.21L, Rizta Z+ ₹1.45L, 450X ₹1.65L, 450 Apex ₹1.95L. The shared rule: segment the product before segmenting the geography.`,
      `<b>Charging:</b> densify Ather Grid by tier, from 6,000+ chargers today to a target of 18,000 by FY31 — one charger per 35 vehicles in Tier-1, per 70 in Tier-2 hubs, per 130 in Tier-3.`,
      `<b>Service:</b> a hub-and-satellite model — one full-service hub per Tier-2 anchor city (about ₹3 Cr capex) with 30+ partner-run satellites (about ₹50L each), against Bajaj's 3,800+ touchpoints.`,
      `<b>Financing:</b> pooled NBFC loans targeting about 7.5% all-in against 10% today, an Ather insurance bundle, and a Battery-as-a-Service pilot in FY28 that cuts entry price by about 30%.`]},
    {t:`The Financial Case`,table:{h:[`Scenario`,`FY31 revenue`,`FY31 EBITDA`,`NPV`],r:[
      [`Bear`,`₹10,500 Cr`,`+₹400 Cr`,`₹1,100 Cr`],
      [`Base`,`₹15,000 Cr`,`+₹1,150 Cr`,`₹4,200 Cr`],
      [`Bull`,`₹19,000 Cr`,`+₹2,000 Cr`,`₹8,100 Cr`]]},
      p:`The base case takes Ather from ₹3,823 Cr in FY26 to about ₹15,000 Cr by FY31: IRR of 32%, payback of 3.8 years, a 14% discount rate and a conservative terminal value (7× EBITDA, 2% growth). All figures are modelled.`},
    {t:`Five Ways It Fails`,ul:[
      `<b>Competitor matches price</b> (high likelihood, high impact): sign exclusive NBFC and battery-swap bundles in the top 30 Tier-2 cities first, rather than reacting.`,
      `<b>Subsidy phase-out:</b> hedge with the BaaS pilot and build to 30% LFP cells by FY30.`,
      `<b>Service-network cost overruns:</b> capex-light satellites with fee-per-service; close any city under 50% utilisation after six months.`,
      `<b>Brand dilution from the mass play:</b> show Konarc and Rizta in dedicated Studios, not flagship Experience Centres; audit the brand quarterly.`,
      `<b>Cash burn before FY28 break-even:</b> phase capex and raise ₹700–900 Cr on an EBITDA-positive read.`]},
    {t:`The Decision: Go, With Phasing`,pull:`Segment the geography together with the product — don't take the brand downstream by accident.`,steps:[
      [`100 days`,`Pick 30 Tier-2 cities, lock partners, anchor one NBFC at about 7.5%.`],
      [`Year 1`,`Reach 700 → 1,200 stores; pilot Battery-as-a-Service in five cities.`],
      [`Year 3`,`2,000 stores, about 22% national share, about ₹15,000 Cr revenue.`]],
      p:`Three kill criteria: South metro share down more than 400 bps over four consecutive quarters; under six months of opex in cash after Q1 FY28 with no line of sight to EBITDA; or a sub-₹90k rival SKU reaching 30% of national 2W EV share. The ask to the board: approve the three-tier playbook, a ₹250–350 Cr capex envelope over FY27–28, and a quarterly review against those criteria.`}
  ]
},
{
  id:`blinkitgm`, brand:`Blinkit`, sub:`Growth-marketing ROI · Same spend, different shape`, tags:[`Growth & Turnaround`,`Consumer & Campaign`],
  color:`#D1560A`, feature:true, date:`Oct ’26`, label:`Growth ROI`,
  line:`Hold the ₹500 Cr marketing budget flat, move paid acquisition into retention, and free about ₹1,200 Cr of GMV — a modelled growth-marketing case for India's quick-commerce leader.`,
  stats:[[`~₹1,200 Cr`,`GMV freed at the same budget (modelled)`],[`+8 pp`,`90-day repeat rate (modelled)`],[`−29%`,`Blended CAC (modelled)`]],
  role:`Independent case study — not work for Blinkit or Eternal. I diagnosed the funnel, estimated unit economics where the company does not disclose them (and said so on the slide), designed the reallocation, two A/B tests and a 12-month roadmap. Costs and lifts are working estimates anchored to public benchmarks.`,
  blocks:[
    {t:`The Brief`,p:`Blinkit leads Indian quick commerce at about 48% category share and turned Adjusted EBITDA positive in Q4 FY26 (+₹37 Cr, 0.3% of NOV). But ad spend rose 163% year on year to ₹502 Cr in FY25 while net loss widened to ₹930 Cr, and management itself named "poor-quality growth" as the headline risk. The question: where does the next ₹500 Cr of marketing go so that Blinkit keeps growing fast while protecting its bridge to a 5–6% steady-state margin?`},
    {t:`Where the Leak Is`,pull:`The leak isn't at the top of the funnel. It's between order 2 and order 5.`,p:`About 47% of new users churn before their fifth order — the moment usage becomes a habit. On an indexed funnel of 100 aware users, 38 install and 22 order, but only about 6.7 are still repeating at 90 days. Blinkit does not disclose this funnel, so I estimated it from public and benchmark data and labelled it that way. WhatsApp win-back reactivates 25–35% of lapsed users, against 8–12% for email.`},
    {t:`Channel Economics`,table:{h:[`Per customer`,`Today (est.)`,`After reallocation`],r:[
      [`Acquisition cost (CAC)`,`₹120`,`~₹85`],
      [`Payback period`,`~14 months`,`≤ 10 months`],
      [`24-month LTV ÷ CAC`,`3.2×`,`Higher with repeat`],
      [`Net order value`,`₹525`,`Held (guardrail)`]]},
      p:`Paid install isn't broken — retention channels are simply about three times better per rupee. Verdicts by channel: CRM and WhatsApp, referral, and tier-2 creators — scale; paid social and paid search — hold; offline and out-of-home — cut.`},
    {t:`Same Spend, Different Shape`,table:{h:[`Share of ₹500 Cr budget`,`Before`,`After`],r:[
      [`CRM / WhatsApp`,`10%`,`26%`],
      [`Influencer / creator`,`15%`,`28%`],
      [`Offline / out-of-home`,`13%`,`3%`]]},
      p:`Roughly 35% of paid acquisition moves into CRM, referral and tier-2 creator launches while the total budget stays flat. The principle: a reactivated user avoids the cost of buying the same slot again. Modelled on a baseline of about ₹2 lakh Cr annualised GMV, with a ±25% sensitivity band.`},
    {t:`Three Levers`,ul:[
      `<b>WhatsApp lifecycle nudges between orders 2 and 5:</b> coupon ladders, free delivery auto-applied above ₹149, recipe-of-the-day nudges. Expected lift of 5–8 pp for about ₹35 Cr.`,
      `<b>A 25-city creator-led launch wave:</b> 10–20 micro-creators per city in a four-week burst, timed to a hyperlocal dark-store launch. About ₹70 Cr for roughly 0.9M extra orders a month.`,
      `<b>A referral-wallet revamp with a halo tier:</b> single-tier ₹75 becomes three tiers of ₹50 / ₹100 / ₹200 tied to the third and sixth order. About +1.5 pp for ₹20 Cr.`]},
    {t:`Proving It Before Scaling`,table:{h:[`Test`,`Design`,`Decision rule`],r:[
      [`01 · WhatsApp win-back`,`Holdout versus a three-message burst at days 7, 30 and 75; 240k users per arm, 8 weeks`,`Promote at +5 pp with p < 0.05 and CAC ≤ ₹80`],
      [`02 · Tier-2 city creator`,`Five paired cities, 100k+ users each; creator-led versus metro-style paid social; 16 weeks`,`Stage to the 25-city wave on +5 pp repeat with payback ≤ 12 months`]]},
      p:`Guardrails are written in before launch: unsubscribe rate at or below 1.5%, net order value not eroded by more than 5 pp, and any lever that drags contribution per order is paused within 14 days. An eight-tile dashboard tracks funnel conversion, CAC and LTV by channel, cohort retention and test results.`},
    {t:`Modelled Net Uplift`,pull:`Same marketing spend, twelve months: +8 pp on 90-day repeat, +1.7M monthly transacting users, about ₹1,200 Cr of freed GMV and a 29% lower blended CAC.`},
    {t:`Roadmap, Kill Criteria and Decisions`,steps:[
      [`Months 0–2`,`Fix the leak: stand up the four-flow WhatsApp journey, instrument first-five-order cohorts, run Test 01.`],
      [`Months 2–4`,`Reallocate: move spend into CRM and creators, launch the referral halo tier, run Test 02.`],
      [`Months 4–12`,`Scale winners: roll Test 02 into the 25-city wave and sunset offline spend.`]],
      p:`Kill criterion at week 16: 90-day repeat under +3 pp, or blended CAC not below ₹100. Four risks are named — a discount war from rivals, regulatory pressure on "10-minute" framing, order-value erosion in tier-2, and dark-store compliance at scale. Three decisions are asked of leadership this month: approve the reallocation into CRM and WhatsApp within 60 days, greenlight the creator wave, and cut out-of-home spend once Test 01 reads at week 8.`}
  ]
},
{
  id:`merger`, brand:`Eternal × Blinkit`, sub:`Post-merger integration · A 12-month playbook`, tags:[`Corporate Strategy`,`Growth & Turnaround`],
  color:`#8B7311`, feature:true, date:`Oct ’26`, label:`Integration`,
  line:`Four years after a ₹4,447 Cr all-stock deal, how does Blinkit turn a scale lead into a margin moat? A 12-month integration playbook, written top-down in the Minto pyramid style.`,
  stats:[[`₹4,447 Cr`,`2022 all-stock deal value`],[`2,443 → ~3,000`,`Dark stores in 12 months`],[`₹4,000–5,000 Cr`,`Modelled Adj. EBITDA run-rate`]],
  role:`Independent case study — not work for Eternal. I framed the single governing thought, built the three supporting arguments, sized the value-capture ledger and risks, and designed the four-phase roadmap and KPI dashboard. Savings ranges are illustrative estimates, and the deck says so.`,
  blocks:[
    {t:`The Question`,pull:`Blinkit's lead is contestable, not yet defensible.`,p:`In Q1 FY27 Blinkit's Adjusted EBITDA turned positive at +0.6% of NOV (+₹102 Cr) on NOV of ₹17,132 Cr, up 86% year on year, with 2,443 dark stores. The question: over the next 12 months, which four workstreams, in what sequence, take Blinkit towards the high end of a 5–6% steady-state margin while defending share against a tougher, well-funded field? Capital is not the constraint (₹18,857 Cr of cash). Execution quality, per-store productivity outside the metros and inventory-led regulatory exposure are.`},
    {t:`The Governing Thought`,pull:`Use the next 12 months to convert scale into a margin moat — closing the path to 5–6% Adj. EBITDA on a ₹1.4–1.6 lakh Cr NOV base while stepping the network to about 3,000 dark stores.`,ul:[
      `<b>Scale has compounded:</b> 377 dark stores in FY23 to 2,443 now; NOV up about 3.1× in 24 months; first place in 8 of the top 10 cities.`,
      `<b>Margin has inflected:</b> five quarters from −1.3% to +0.6% of NOV, with steady-state guidance lifted towards 6%.`,
      `<b>Competition has hardened:</b> Flipkart Minutes overtook Instamart in August 2026, Amazon plans a $3B push, and inventory-led FDI risk is unresolved.`]},
    {t:`The Non-Obvious Insight`,pull:`Per-store productivity — not store count — decides whether 3,000 dark stores create value.`,p:`Average NOV per store per day held at about ₹7.7 lakh in FY25 even as store count rose 147%. If tier-2 stores slip below ₹6 lakh a day, the whole network turns value-destructive; each ₹1 lakh a day of shortfall across 600 stores is worth about ₹220 Cr of NOV a year. That is the threshold I track, rather than headline order growth.`},
    {t:`What Is Booked and What Remains`,table:{h:[`Lever`,`Realised`,`Next 12 months`,`Confidence`],r:[
      [`Dark-store density`,`2,443 stores built`,`~3,000 by Mar-27`,`High`],
      [`Per-store productivity`,`~₹7.7 lakh a day held`,`Hold ₹7.5 lakh or more`,`High`],
      [`Ad monetisation`,`Take-rate 23.3%`,`+100–150 bps via self-serve and search ads`,`High`],
      [`Tier-2/3 footprint`,`100+ cities in FY25`,`Largest remaining lever`,`Medium–High`],
      [`Working capital`,`Hyperpure scaled`,`FDI risk overhang`,`Risk-flagged`]]}},
    {t:`Competition and Risks`,ul:[
      `<b>The field:</b> top-10-city dark-store counts (Aug 2026) — Blinkit 969, Zepto 828, Flipkart Minutes 627, Instamart 615. National GMV share clusters at 46–52% Blinkit, 27–29% Zepto and 21–22% Instamart.`,
      `<b>Regulatory:</b> inventory-led FDI for domestic e-commerce remains closed. The hedge is a third-party-seller migration playbook for non-perishable SKUs, ready to fire if the rule tightens.`,
      `<b>Capex:</b> about ₹6,000–7,500 Cr to reach 3,000 stores — cash-feasible, but gated by per-store productivity: defer stores forecast below ₹5 lakh a day.`,
      `<b>Why the plan could fail:</b> per-store productivity slips; FDI tightens; ad take-rate stalls. Each has a named check that would catch it.`]},
    {t:`The Twelve-Month Roadmap`,steps:[
      [`M0–2 · Mobilize`,`PMO under the CFO's office; baseline dashboard live; tier-1 saturation study; FDI contingency playbook drafted.`],
      [`M2–5 · Quick wins`,`+150 net metro stores; ad-stack pilot; loyalty handoff with Zomato Gold; close 30–40 sub-threshold stores. About ₹150–250 Cr run-rate.`],
      [`M5–9 · Redesign`,`+400 tier-2/3 stores behind the productivity gate; Hyperpure fresh SKUs; full ad-stack rollout. About ₹1,000–1,500 Cr run-rate.`],
      [`M9–12 · Embed`,`About 3,000 stores; ROCE above 40% disclosed; year-two playbook signed off. About ₹4,000–5,000 Cr run-rate.`]],
      p:`Run-rates are illustrative analyst estimates on a base of roughly ₹70,000–80,000 Cr FY27 NOV; the appendix shows the sensitivity (for example, 5% margin on ₹85,000 Cr of NOV is about ₹4,250 Cr). Three decisions are asked of the CEO within 60 days: a ₹1,800–2,400 Cr tier-2 capex envelope gated on per-store productivity, a 12-month programme to lift ad take-rate by 100 bps, and the FDI insurance playbook.`}
  ]
},
{
  id:`snitch`, brand:`Snitch`, sub:`Segmentation & positioning · D2C menswear`, tags:[`Brand Strategy`,`Consumer & Campaign`,`Category & Portfolio`],
  color:`#7E1A0A`, feature:true, date:`Oct ’26`, label:`Segmentation`,
  line:`Plant the flag, then defend it: choose one customer — the metro 22–30 “Design-First Man” — to take a ₹900 Cr D2C menswear brand towards ₹1,400 Cr by FY28.`,
  stats:[[`₹900 → ₹1,400 Cr`,`FY26 base to FY28 target`],[`#1 of 4`,`Segments, five-axis weighted score`],[`₹120–200 Cr`,`Modelled 18-month impact`]],
  role:`Independent case study — not work for Snitch. I built the four-segment model, scored and weighted it, drew the perceptual map, wrote the positioning statement and 4P translation, and set the roadmap and decisions. Segment sizes and scores are my estimates, triangulated from public financials and catalogues.`,
  blocks:[
    {t:`The Brief`,p:`Snitch grew revenue 82-fold in five years — from ₹11 Cr in FY21 to ₹900 Cr in FY26 (unaudited, +80% year on year) — while staying near breakeven, with a repeat rate of about 45% and inventory turns of 45–60 days. The complication: it sells to everyone from a 21-year-old in Surat to a 33-year-old architect in Bengaluru, yet its ad spend, store roll-out and discount cadence do not yet act differently across them. The question: at ₹1,000 Cr scale, which customer do we plant our flag with, and which do we honestly defer?`},
    {t:`Four Corners and an Empty Middle`,table:{h:[`Peer`,`FY25 revenue`,`Anchor`],r:[
      [`The Souled Store`,`₹492 Cr`,`Pop-culture licensing — same customer base, but licence-dependent`],
      [`Bewakoof`,`₹175 Cr`,`Mass-priced and quirky; operating losses widened`],
      [`Bonkers Corner`,`₹123 Cr`,`Streetwear; profitable but narrow`],
      [`XYXX`,`₹192 Cr`,`Premium innerwear and basics; profitable but narrow`]]},
      p:`No one owns "daily drop, design-first, premium but accessible" for the metro 22–30 man. That white space, plus Snitch's own inventory turns and repeat rate, is the case for focus.`},
    {t:`Four Candidate Segments`,table:{h:[`Segment`,`Who`,`Est. share of revenue`,`Willingness to pay`,`The call`],r:[
      [`Design-First Man`,`Men 22–30 in tier-1 and tier-2 metros; style-aware, not premium-rich`,`~35%`,`₹800–1,800`,`Primary target`],
      [`Crisp Commuter`,`Working professionals 26–35; office-to-dinner polish`,`~20%`,`₹1,200–2,500`,`Phase 2`],
      [`Tier-2 Trend Hunter`,`Men 19–28, tier-2/3 aspirational; discount-responsive`,`~30%`,`₹399–899`,`Run with discipline, don't lead`],
      [`Quiet Replacement Buyer`,`Men 28–40 replenishing basics`,`~15%`,`₹399–799`,`Defended, not marketed`]]}},
    {t:`Picking the Beach-Head`,pull:`Four segments, scored on five axes. The Design-First Man is the only one to score a perfect 5 on four of them.`,table:{h:[`Segment`,`Size`,`Growth`,`Profit`,`Brand fit`,`Competitive gap`],r:[
      [`Design-First Man`,`4`,`5`,`5`,`5`,`5`],
      [`Tier-2 Trend Hunter`,`4`,`5`,`3`,`3`,`2`],
      [`Crisp Commuter`,`3`,`3`,`4`,`3`,`3`],
      [`Quiet Replacement Buyer`,`4`,`3`,`3`,`4`,`1`]]},
      p:`Scores are 1–5, weighted with size and brand fit highest and profit potential second. The call: concentrate paid spend on the Design-First Man for 18 months. Phase 2 (the Crisp Commuter tier) opens once his share passes 45% and repeat clears 50%; tier-2 expansion becomes its own programme only after metro NPS passes 50 and the ₹1,500–2,500 tier is profitable.`},
    {t:`Positioning and the 4Ps`,pull:`Plant the flag where no one is sitting — premium, drop-led, without licence dependency.`,p:`For style-aware men 22–30 who want distinctive but affordable everyday style, Snitch is the design-forward, daily-drop menswear brand. Unlike Bewakoof, not mass-quirky; unlike Souled Store, no licensed pop culture; unlike XYXX, basics that are drop-led. Result: a monthly wardrobe refresh.`,ul:[
      `<b>Product:</b> keep the daily-drop cadence and add a ₹1,500–2,500 premium tier, across roughly 7,000 SKUs.`,
      `<b>Price:</b> lift average order value from about ₹950 to about ₹1,150 over four quarters; cap mass promotions at 12%.`,
      `<b>Place:</b> 200+ stores by FY27, including 12 metro "drop-stores"; extend Snitch Quick to eight cities.`,
      `<b>Promotion:</b> drop-led creator narratives, 28 a quarter; cut mass-sale events.`]},
    {t:`Roadmap, Risks and Decisions`,steps:[
      [`Q1`,`Foundation: brand audit, segment lock, a 600-customer qualitative panel.`],
      [`Q2`,`Product: design the first 50 SKUs of the premium tier; reset pricing and cap promotions.`],
      [`Q3`,`Stores: pilot 12 metro drop-stores; grow from 115 to 180 stores.`],
      [`Q4`,`Narrative: 28 creator-drops a quarter, brand-led rather than promo-led.`]],
      p:`Modelled impact: ₹120–200 Cr of incremental revenue over 18 months — the low end if the brand-fit curve simply holds, the high end if the premium tier reaches 18% of orders. Three risks could break the case: price compression from ₹399 quick-commerce copycats, rivals scaling licensed drops faster than expected, and inventory turns slipping past 70 days as SKUs and stores expand. Four decisions are asked of leadership: confirm the primary segment, approve the premium tier, approve the 200+ store plan, and approve brand-led marketing.`}
  ]
},
{
  id:`vi`, brand:`Vodafone Idea (Vi)`, sub:`Profitability turnaround diagnostic · Telecom`, tags:[`Growth & Turnaround`,`Corporate Strategy`],
  color:`#16204A`, feature:true, date:`Oct ’26`, label:`Turnaround`,
  line:`Close half the ₹69 ARPU gap to Airtel, take cost out of the network and free working capital — about ₹8,500 Cr of modelled EBITDA by FY29. A 24-month diagnostic written for a CFO office.`,
  stats:[[`₹69`,`Per-subscriber ARPU gap to Airtel`],[`~₹8,500 Cr`,`Base-case EBITDA uplift by FY29 (modelled)`],[`43% → 51%`,`Adj. EBITDA margin, FY26 to FY29 target`]],
  role:`Independent case study — written as a note to a CFO office, not work for Vi. I built the profit tree and FY25→FY26 EBITDA bridge, benchmarked three peers, sized three levers with owners and confidence, and set a three-phase roadmap and risk register. Bridge values are derived attributions within ±10%, as the deck states.`,
  blocks:[
    {t:`The Question`,pull:`ARPU is the lever, margin is the symptom, time is the constraint.`,p:`Vi is the third private operator, with 192.8M subscribers, a customer ARPU of ₹190 and FY26 revenue of ₹44,873 Cr. The AGR ruling and a ₹45,000 Cr three-year capex plan open a 24-month window of policy clarity. The complication: ARPU sits ₹69 a month below Airtel's ₹264, Adjusted EBITDA margin trails by about 1,700 bps, and the underlying Q1 FY27 loss was still ₹3,754 Cr. The question: how does Vi close the gap by half within 24 months, restore underlying profitability, and stay financed through the cycle?`},
    {t:`The Non-Obvious Insight`,pull:`FY26's reported profit of ₹51,970 Cr is an accounting one-off. Strip out the ₹57,491 Cr AGR derecognition and Vi's underlying Q1 FY27 loss was still ₹3,754 Cr — the case stands on operating fundamentals, not balance-sheet relief.`},
    {t:`The Gap to Airtel`,table:{h:[`Metric`,`Vi`,`Airtel`,`Gap`],r:[
      [`Customer ARPU, Q1 FY27`,`₹195`,`₹264`,`₹69`],
      [`Adj. EBITDA margin, FY26`,`43.1%`,`60.1%`,`~1,700 bps`],
      [`4G population coverage`,`86.3%`,`~95%`,`~9 pts`],
      [`Customer ARPU growth, YoY`,`+10.2%`,`+5.6%`,`Vi growing faster`]]},
      p:`Airtel is best-in-class on ARPU, margin and coverage; Jio leads on scale; Vi leads on growth velocity. The combined signal: Vi has the room and the subscriber base — the gap is monetisation, not infrastructure. A profit tree across subscribers, ARPU, mix, opex and margin shows the gap is split between price (about ₹60 per subscriber a month), premium mix and per-subscriber cost intensity, not volume.`},
    {t:`What the EBITDA Bridge Says`,pull:`FY25 to FY26: Adjusted EBITDA up ₹876 Cr, from ₹18,127 Cr to ₹19,003 Cr. ARPU did the heavy lifting — and ARPU alone cannot close 1,700 bps.`,p:`ARPU contributed roughly ₹1,400 Cr of the year's gain, while the 5.4M subscribers lost cost about ₹400 Cr. Opex rose only ₹426 Cr against ₹1,302 Cr more revenue — real leverage, but small. So the FY27–29 lever mix has to tilt towards cost and working capital, not pricing alone.`},
    {t:`Three Named Levers`,table:{h:[`Lever`,`What moves`,`EBITDA (₹ Cr, base)`,`Confidence`],r:[
      [`1 · Revenue`,`Lift blended ARPU ₹195 → ₹227 via re-tiered entry plans, a postpaid sales motion and 5G premium plans`,`3,500–7,000 (~5,500)`,`High — internal data shows low elasticity`],
      [`2 · Cost`,`Cut network opex per subscriber about 8% across 566,376 sites: energy efficiency, AI-driven operations, tower contract renewal, shared back-haul`,`800–2,200 (~1,500)`,`Medium — counterparty risk on tower contracts`],
      [`3 · Assets and working capital`,`Spectrum trade, fibre sale-leaseback, vendor financing, selective spectrum sharing`,`500–1,800, plus ₹3,000–4,500 Cr one-time cash`,`Medium — execution-heavy`]]},
      p:`Base case: about ₹8,500 Cr of added EBITDA and about ₹3,750 Cr of one-time cash by FY29, taking EBITDA to about ₹27,500 Cr (about ₹29,000 Cr if tariffs move) and margin to 51%. Each ₹10 of ARPU is worth roughly ₹2,300 Cr of revenue and ₹1,000 Cr of EBITDA at current margins.`},
    {t:`The Roadmap`,steps:[
      [`Sep ’26 – Dec ’26`,`Quick wins: reposition entry plans and renegotiate the top vendor contracts. ARPU ₹195 → ₹200; about ₹800–1,200 Cr run-rate.`],
      [`Dec ’26 – Jun ’27`,`Build: 5G to 60% population coverage, a postpaid motion, AI-driven network operations. ARPU → ₹210; margin 46%.`],
      [`Jul ’27 – Mar ’29`,`Scale: 5G to 95%+, spectrum redeployment and fibre sale-leaseback. ARPU → ₹227; margin 51%.`]]},
    {t:`Risks and the Decision`,ul:[
      `<b>Subscriber stabilisation reverses (medium):</b> the first net adds in eight quarters are fragile. Test packs in four circles first; pause price actions if monthly net adds turn negative for two months.`,
      `<b>Phase-2 capex overruns the ₹45,000 Cr envelope (high):</b> stage-gate each phase with a fixed envelope; use vendor financing; pull forward sale-leaseback if the envelope breaches 110%.`,
      `<b>Tower-contract renegotiation breaks down (medium):</b> prepay four quarters to unlock a discount and line up regional fallbacks.`,
      `<b>The decision asked:</b> approve about ₹5,600 Cr of net Phase-1 and early Phase-2 spend, and authorise the CFO to lead the tower-contract renegotiation, with a 30-day checkpoint.`]}
  ]
},
{
  id:`zinga`, brand:`ZINGA`, sub:`Pricing & go-to-market · Premium D2C snacks`, tags:[`Go-to-Market`,`Growth & Turnaround`],
  color:`#2F6E84`, feature:true, date:`Oct ’26`, label:`Pricing & GTM`,
  line:`Reprice the starter SKU to ₹149, reweight acquisition towards quick commerce and keep the ingredient story: a pricing and GTM case for a premium D2C snack brand, modelled at ₹15 Cr ARR by week 52.`,
  stats:[[`1.2% → 2.7%`,`Trial velocity target`],[`₹199 → ₹149`,`Starter SKU price`],[`₹15 Cr`,`Modelled ARR at week 52`]],
  role:`Independent case study. I framed the problem with SCQA, built the willingness-to-pay anchor, the four-channel scorecard and the positioning pillars, then designed the SKU ladder and a phased roadmap with go / no-go gates. Survey, cohort and P&L inputs are the case's working assumptions.`,
  blocks:[
    {t:`The Brief`,pull:`Every first order loses money before repeat — payback never closes inside 60 days.`,p:`India's premium-healthy D2C snack category is growing at about 19% a year, and quick commerce is already 12% of urban snack orders. ZINGA launched in 2023 with a ₹199 starter SKU, about 60% above the category median. Trial has plateaued at 1.2% of 8 lakh site visits, against a category median of 2.6%; CAC is ₹420 against a first-order value of ₹215; monthly burn is ₹1.8 Cr with an 11-month runway. The question: how should ZINGA reprice its starter SKU and reweight channels to lift trial without a bridge round?`},
    {t:`Anchoring the Price`,pull:`₹149 sits 26% above the cost floor and inside the willingness-to-pay corridor of ₹99–₹199, which peaks at ₹139.`,table:{h:[`Anchor`,`Price`],r:[
      [`Variable cost per unit`,`₹58`],
      [`Cost floor, including minimum margin`,`₹118`],
      [`Competitor median`,`₹120`],
      [`Peak willingness to pay`,`₹139`],
      [`Recommended anchor`,`₹149`]]},
      p:`The corridor comes from four Van Westendorp questions on a 1,200-respondent metro panel (a case input). Modelled elasticity is −1.4: a 25% price cut lifts trial by about 35% and recovers roughly ₹2.4 Cr of incremental ARR over 12 months.`},
    {t:`Where to Acquire`,pull:`Quick commerce returns ₹2.40 of contribution per rupee of acquisition, against ₹1.10 on marketplaces.`,table:{h:[`Channel`,`Reach`,`CAC / order`,`Net margin`,`Contribution per ₹ of acquisition`],r:[
      [`D2C site`,`38%`,`₹95`,`22%`,`₹2.10`],
      [`Quick commerce`,`28%`,`₹110`,`18%`,`₹2.40`],
      [`Marketplaces`,`65%`,`₹155`,`9%`,`₹1.10`],
      [`Instagram Shop`,`22%`,`₹70`,`27%`,`₹1.85`]]},
      p:`The recommended 12-month acquisition mix is 35% D2C, 35% quick commerce, 15% marketplaces and 15% Instagram Shop — quick commerce first for price-elastic trial customers who reload weekly, marketplaces for conversion.`},
    {t:`Premium Without the Price Tag`,pull:`Premium lives in the ingredient story, not the price tag.`,p:`In the case's recall test (Bengaluru, n = 600), unaided brand recall fell from 84% to 71% at ₹149 — a 13 pp drop that unlocked 2.3× trial velocity, with recovery projected inside four weeks of an ingredient-led relaunch. Recommended line: "Ancient grain. Downtown speed."`,ul:[
      `<b>Ancient-grain ingredient:</b> millet, ragi and jowar, read in three seconds or less on pack.`,
      `<b>Named-origin sourcing:</b> specific farms in Hassan and Davangere printed on the back panel.`,
      `<b>Clean-label function:</b> no palm oil, under 120 mg sodium per serve, no MSG, an FSSAI clean-label badge.`,
      `<b>Matte-kraft packaging:</b> recyclable kraft, debossed wordmark, no plastic overwrap.`]},
    {t:`The Ladder and the Rollout`,steps:[
      [`W0–W8`,`Pilot in Bengaluru and Mumbai, quick-commerce only, 25% of budget. Gate: trial ≥ 2.0% and LTV:CAC ≥ 1.5.`],
      [`W8–W20`,`Add Delhi NCR and Hyderabad, 50% of budget, bring in marketplaces and D2C. Gate: trial ≥ 2.4% and retention ≥ 35%.`],
      [`W20–W52`,`Add Pune and Chennai, full budget, subscription as the default. Gate: trial 2.7% and CAC payback ≤ 10 weeks.`]],
      p:`A three-rung SKU ladder: ₹149 starter (a 60 g trial pack, 55% of weekly orders), ₹249 family (a 4 × 60 g variety pack, 32%) and ₹399 subscribe (a monthly box with free shipping, 13%). Modelled at week 52: ₹15 Cr run-rate ARR (7.3× the FY26 baseline), an 8-week CAC payback and a 22% blended contribution margin.`},
    {t:`Risks and Sign-offs`,ul:[
      `<b>Premium-brand dilution (medium):</b> the cut may read as a discount. Keep ₹199 only as a limited "Reserve" edition and lead the campaign with the ingredient story, not the price drop.`,
      `<b>Quick-commerce dependency (medium):</b> platforms can reprice or delist without notice. Negotiate six-metro exclusive assortment contracts with a 14-day listing lock.`,
      `<b>Repeat-rate failure (high):</b> repeat is 23% against a 38% target. Default the subscribe toggle at checkout, trigger a WhatsApp reorder at day 14, and add loyalty points on the third purchase.`,
      `<b>Five decisions</b> are asked of founder, finance, marketing, supply and legal between 9 November and 9 December: the ₹149 price, the 35 / 35 / 15 / 15 mix, the positioning refresh, the exclusive quick-commerce contracts, and subscribe-by-default.`]}
  ]
}
];

/* one line that makes a reader want to open the case */
const HOOKS = {
  ather:`Can a premium brand go mass without losing the premium?`,
  blinkitgm:`Same ₹500 Cr budget. About ₹1,200 Cr more GMV.`,
  merger:`Store count makes the headline. Per-store productivity makes the moat.`,
  snitch:`Plant the flag, then defend it.`,
  vi:`A ₹51,970 Cr profit that wasn't. The real fix is a ₹69 gap.`,
  zinga:`Cut the price. Keep the premium.`
};
W.SITE.url = `sagar380208-sh.github.io`;
NEW.forEach(p => { p.hook = HOOKS[p.id]; });

/* put the six first; they are the featured block on the home page --------- */
W.PROJECTS.forEach(p => { delete p.feature; });
NEW.forEach(p => { p.feature = true; });
W.PROJECTS.unshift(...NEW);
{ const v = W.PROJECTS.find(p => p.id === `vip`);
  v.feature = true; v.hook = `A ₹12.42 Cr quarterly loss. A zone plan to win it back.`; }
const hm = W.PROJECTS.find(p => p.id === `blinkitgm`);
hm.hook = `Same ₹500 Cr budget. A modelled ₹1,200 Cr more GMV.`;
W.PROJECTS.find(p => p.id === `zinga`).note = `Illustrative case. The survey, cohort and P&L inputs shown in the slides are the case's working assumptions, not client or field data.`;

/* order of the home page case slider */
/* Polycab India: real job, from Sagar's source document. Keep "~", "est." and "not yet run". */
W.EXPERIENCE.unshift({
  id:`polycab`, caseId:`polycab`,
  org:`Polycab India`, orgSub:`(Wires, cables, lighting)`,
  role:`Trainee, Territory Sales Manager track`, domain:`Field sales · Lighting, then Wires & Switchgear`,
  dates:`Jun ’26 – present`, place:`East Delhi, North Delhi, Bhagirath Palace`,
  color:`#7A2E2A`, kpiTitle:`Field results`, tileLbl:`Delhi`, noSpark:true,
  intro:[`As a Polycab India trainee in Delhi, I found outlets that had never stocked Polycab lighting and converted 15+ of them, growing my personal sales about 20% month on month. I built my own pricing tool to close deals on the spot and designed a WhatsApp plan to keep retailers selling.`],
  sub:[{role:`Lighting`,dates:`retail outlet acquisition and sell-in`},{role:`Wires & Switchgear`,dates:`current posting`}],
  kpis:[[`15+`,`New outlets converted`],[`~20%`,`Month-on-month personal sales growth`],[`10+`,`Outlet visits a day`],[`~35%`,`Faster deal closing with my pricing tool (est.)`]],
  points:[
    [`Outlet acquisition`,`Listed outlets across East Delhi, North Delhi and Bhagirath Palace that had never stocked Polycab lighting, then won 15+ of them owner by owner.`],
    [`Beats by productivity`,`Planned daily beats around outlet productivity, so high-potential outlets got more visits, at 10+ outlet visits a day.`],
    [`Pricing tool`,`Built an HTML tool showing price points, scheme slabs, scan points and deductions, so every deal is worked out and negotiated during the meeting.`],
    [`Retailer community plan`,`Designed zone-wise WhatsApp groups that celebrate the monthly top 3 sellers of key SKUs, to keep retailers competing and reordering (proposed, not yet run).`]
  ]
});
W.WORK_CASES = [{
  id:`polycab`, work:true, brand:`Polycab India`, sub:`Field sales · Territory Sales Manager track`, tags:[`Field sales`,`Growth`],
  color:`#7A2E2A`, date:`Jun ’26 – present`, label:`Field sales`,
  line:`Converted 15+ new outlets in Delhi and grew my sales ~20% a month by finding where Polycab was missing.`,
  stats:[[`15+`,`New outlets converted`],[`~20%`,`Month-on-month personal sales growth`],[`10+`,`Outlet visits a day`],[`~35%`,`Faster deal closing with my pricing tool (est.)`]],
  role:`I joined Polycab India in June 2026 as a trainee on the Territory Sales Manager track, starting in Lighting and moving to Wires & Switchgear. My territory covers East Delhi, North Delhi and Bhagirath Palace, working with 2 distributors.`,
  note:`Outlet, visit and growth figures are my own counts. The 35% is my estimate. The WhatsApp plan is proposed, not yet run.`,
  blocks:[
    {t:`The context`,pull:`A strong brand with gaps on the shelf: many Delhi outlets had never stocked Polycab lighting.`,ul:[
      `<b>The problem</b> Retailers already sold rival lighting brands and had no reason to switch. Each deal needed a price, a scheme slab and deductions worked out, which slowed every meeting.`,
      `<b>Why it mattered</b> Delhi lighting overall was scaling from about ₹1 Cr to ₹2 Cr a month during my time there, so every new outlet added to a growing base.`,
      `<b>My job</b> Find the outlets Polycab was missing, convince the owners, and keep them reordering through the distributors.`]},
    {t:`Winning outlets the brand was missing`,pull:`Converted 15+ new outlets that had never stocked Polycab lighting, and grew my personal sales about 20% month on month.`,ul:[
      `<b>Action</b> Walked East Delhi, North Delhi and Bhagirath Palace to list outlets without Polycab lighting, pitched owners directly, and followed up until the first order was placed through a distributor.`,
      `<b>Context</b> Delhi lighting was growing from about ₹1 Cr to ₹2 Cr a month, and new outlets were the fastest way to add to it.`]},
    {t:`Planning beats by outlet productivity`,pull:`A steady rhythm of 10+ outlet visits a day.`,ul:[
      `<b>Action</b> Planned daily beats around outlet productivity, so high-potential outlets got more visits than low-potential ones.`,
      `<b>Context</b> With a large territory and limited hours, visiting in the right order mattered as much as visiting more.`]},
    {t:`A pricing and scheme tool to close on the spot`,pull:`Deals calculated and negotiated in the meeting itself, an estimated 35% faster than working them out by hand.`,ul:[
      `<b>Action</b> Built a simple HTML tool on my own that shows price points, scheme slabs, scan points and deductions for any order size.`,
      `<b>Context</b> Every retailer meeting needed this maths, and doing it by hand slowed the conversation and cost deals.`]},
    {t:`A plan to keep retailers selling`,pull:`A self-initiated retention plan proposed to the team (not yet run).`,ul:[
      `<b>Action</b> Designed zone-wise retailer WhatsApp groups across Delhi that recognise the monthly top 3 sellers of key SKUs, to build friendly competition and show that new Polycab lighting products sell.`,
      `<b>Context</b> Winning an outlet is only half the job; it has to keep reordering. I also work with 2 distributors to keep stock and reorders moving.`]},
    {t:`Skills shown`,pull:`Field sales taught me the growth funnel in its rawest form: find, convert, retain, one owner at a time.`,table:{h:[`What I did at Polycab`,`Skill it shows`,`Same job in growth marketing`],r:[
      [`Listed and won outlets missing the brand`,`Acquisition, gap analysis`,`Finding and converting untapped user segments`],
      [`Planned beats by outlet productivity`,`Prioritisation by value`,`Allocating spend to the highest-return channels`],
      [`Built the pricing and scheme tool`,`Problem solving, self-built tools`,`Removing friction from the conversion step`],
      [`Designed the WhatsApp top-sellers plan`,`Retention and community design`,`CRM, loyalty and referral loops`],
      [`Negotiated with owners face to face`,`Customer insight, persuasion`,`Messaging that answers real objections`]]}}
  ]
}];
W.IMPACT.polycab = {what:`Found outlets that had never stocked Polycab lighting, converted 15+ of them, and built my own tool to work out deals during the meeting.`,
  impact:`New outlets added to a growing Delhi lighting base, and my personal sales grew about 20% month on month.`};
W.LEARN.polycab = {role:`My own territory work as a trainee: listing and pitching outlets, planning beats, building the pricing tool and designing the retailer plan, working with 2 distributors.`,
  learned:`Winning an outlet is only half the job; it has to keep reordering. Field sales taught me the growth funnel in its rawest form: find, convert, retain, one owner at a time.`,
  kw:[`Field sales`,`Outlet acquisition`,`Beat planning`,`Channel partners`,`Pricing tool`,`Retention design`]};

W.DATA_PROJECTS.find(d => d.id === `d-hotels`).shot = `assets/img/proof-hotels.jpg`;
W.FEATURED = [`vi`,`blinkitgm`,`ather`,`vip`,`snitch`,`merger`,`zinga`];

/* "hiring for which role?" Real experience only; cases are labelled as independent on their pages */
W.ROLES = [
  {id:`growth`, name:`Growth Analyst`, pitch:`I look for the leak before asking for more budget, and I design the test that proves the fix.`,
   real:[`Polycab India: converted 15+ outlets that had never stocked Polycab lighting; personal sales grew about 20% month on month.`,`To-Let Globe: +105% brand reach and +60% qualified leads as Team Lead of a three-person strategy team.`,`Hanbai: 5–10% weekly engagement growth during trial, compounding to about 40% over the trial period.`],
   tools:`Cohort and funnel analysis · CAC / LTV · A/B test design · dashboards`, cases:[`polycab`,`blinkitgm`,`zepto`]},
  {id:`marketing`, name:`Marketing Analyst`, pitch:`I read the funnel and the customer together, then say where the next rupee should go.`,
   real:[`To-Let Globe: +105% brand reach and +60% qualified leads from a cross-channel strategy, tracked on dashboards I built.`,`Hanbai: in focus-group validation, 20–25% of targeted leads converted through a funnel I designed.`,`Polycab India: designed a zone-wise retailer WhatsApp recognition plan to drive repeat orders (proposed, not yet run).`],
   tools:`Funnel analysis · segmentation · social listening · Excel · Tableau`, cases:[`blinkitgm`,`occasion`,`d-segment`]},
  {id:`strategy`, name:`Strategy / Business Analyst`, pitch:`I frame the business question, size the options and state the numbers that should stop the plan.`,
   real:[`Hanbai CEO's Office: self-initiated a GTM strategy and presented it to a 5–7 member board review, which endorsed it to proceed if the product launched.`,`To-Let Globe: identified 12 growth opportunities adopted by leadership, through market research and dashboard analysis.`,`Winner, STRATBUZZ Business Strategy Competition (2024).`],
   tools:`Problem structuring · market sizing · scenario modelling · Excel · SQL · Power BI`, cases:[`vi`,`vip`,`ather`]}
];

/* focus-area landing pages */
W.TOPICS = {
  "data-analytics":{title:`Data analytics projects`, h1:`Data analytics`, desc:`SQL warehouse, Tableau and Power BI dashboards, Python analysis and a hotels MIS: self-directed data analytics projects by Sagar Sharma.`,
    intro:[`Ten self-directed builds across SQL, Tableau, Power BI, Python and Excel. They include a medallion data warehouse, a customer segmentation view, a Domestic Hotels MIS and a movie-revenue analysis that disproved its own hypothesis.`,
      `These are practice builds, not employer work. Each page sets out the question, the method, what the data showed and what I learned.`],
    real:`In my internship at To-Let Globe I implemented KPI tracking and built the performance dashboards behind a cross-channel growth strategy.`,
    ids:[`d-warehouse`,`d-hotels`,`d-segment`,`d-hr`,`d-powerbi`,`d-movies`,`d-covid`,`d-sales`,`d-nashville`,`d-eda`]},
  "growth-marketing-analytics":{title:`Growth and marketing analytics`, h1:`Growth & marketing analytics`, desc:`Funnel diagnosis, unit economics, pricing and campaign analysis: independent growth and marketing analytics cases by Sagar Sharma.`,
    intro:[`Where does the funnel leak, what does a customer cost, and which channel returns most per rupee? These cases work through those questions for consumer and quick-commerce businesses.`,
      `All of them are independent case studies, not client work. Forward-looking numbers are my estimates or projections.`],
    real:`At Polycab India I converted 15+ outlets that had never stocked Polycab lighting, and my personal sales grew about 20% month on month. At To-Let Globe a cross-channel growth strategy I led with a three-person team brought +105% brand reach and +60% qualified leads.`,
    ids:[`polycab`,`blinkitgm`,`zepto`,`zinga`,`occasion`,`maggi`,`bournvita`,`clean`,`d-segment`]},
  "brand-strategy":{title:`Brand strategy case studies`, h1:`Brand strategy`, desc:`Segmentation, positioning and brand audits across fashion, food and consumer electronics: independent brand strategy cases by Sagar Sharma.`,
    intro:[`Segmentation, positioning, brand audits and portfolio architecture across menswear, footwear, audio, snacks and home-cooking brands.`,
      `All of them are independent case studies, not client work. Forward-looking numbers are my estimates or projections.`],
    real:`As Brand Strategy Intern at To-Let Globe I analysed customer feedback, redesigned the brand framework and implemented KPI tracking across channels.`,
    ids:[`snitch`,`boat`,`nani`,`bata`,`bikaji`,`vadilal`,`dabur`]},
  "business-strategy-analysis":{title:`Business and strategy analysis`, h1:`Business & strategy analysis`, desc:`Profit trees, turnaround diagnostics, market sizing and post-merger integration: independent business analysis cases by Sagar Sharma.`,
    intro:[`Profit trees, EBITDA bridges, zone P&L diagnosis, market sizing, scenario models and integration roadmaps, built around one question: what should the business do next?`,
      `All of them are independent case studies, not client work. Forward-looking numbers are my estimates or projections.`],
    real:`In the CEO's Office at Hanbai Consultancy I self-initiated a go-to-market strategy and presented it to a 5–7 member board review, which endorsed it to proceed if the product launched.`,
    ids:[`vi`,`vip`,`merger`,`ather`,`hul`,`asianpaints`,`motul`]}
};

/* overview card: what I did / why it matters ------------------------------ */
Object.assign(W.IMPACT, {
  ather:{what:`Sized the Tier-2/3 EV market two ways, designed a three-format store plan and four plays, and built a bear / base / bull financial case with kill criteria.`,
    impact:`Gives a board a phased route to roughly ₹15,000 Cr of revenue that protects metro brand value: a price ladder that segments the product before the geography, a hub-and-satellite service model, and explicit stop signals.`},
  blinkitgm:{what:`Located the real leak in Blinkit's funnel — between order 2 and order 5 — and redesigned a flat ₹500 Cr budget around retention, with two A/B tests to prove it first.`,
    impact:`Frees growth without raising spend: a modelled +8 pp of 90-day repeat, about ₹1,200 Cr of GMV and a 29% lower CAC, with kill criteria set before a rupee moves.`},
  merger:{what:`Framed a single governing thought for the post-merger integration of Blinkit into Eternal, backed it with three arguments, and sequenced a four-phase, 12-month roadmap with gates and owners.`,
    impact:`Turns a scale lead into durable margin by managing the one metric that decides it — per-store productivity — so the move to about 3,000 dark stores adds value instead of cost.`},
  snitch:{what:`Compared four customer segments across five scored axes, picked one beach-head, and wrote the positioning and 4P translation to defend it.`,
    impact:`Ends “everyone is our customer” spending: one primary segment for 18 months, two phases gated by triggers, and a modelled ₹120–200 Cr of incremental revenue.`},
  vi:{what:`Built a profit tree, an EBITDA bridge and a three-peer benchmark for Vodafone Idea, then sized three levers — revenue, cost and working capital — with owners, confidence and a phased roadmap.`,
    impact:`Shows where a turnaround actually comes from: ARPU alone can't close the margin gap, so cost and asset levers are sized beside it, with a clear decision asked of the CFO office.`},
  zinga:{what:`Built the willingness-to-pay anchor, a four-channel scorecard and an ingredient-led positioning for a premium D2C snack brand, then turned them into a SKU ladder with go / no-go gates.`,
    impact:`Lifts trial without a bridge round: a price inside the customer's corridor, spend moved to the channel that returns most per rupee, and gates at weeks 8, 20 and 52 that stop the plan if it isn't working.`}
});

/* contribution · learning · keywords --------------------------------------- */
Object.assign(W.LEARN, {
  ather:{role:`Independent case study. I did the market sizing (top-down and bottom-up, reconciled), the store and share plan, the four plays, the three-scenario financial model, the risk register and the board decision card.`,
    learned:`Expansion is a product problem before it is a geography problem. A cheaper scooter in a new city is the easy part; keeping the premium brand intact in the cities you already own is what decides whether the plan is worth doing. And a good plan states when to stop.`,
    kw:[`Market sizing`,`Market expansion`,`Scenario modelling`,`NPV / IRR`,`Pricing ladder`,`Risk and kill criteria`]},
  blinkitgm:{role:`Independent case study. I diagnosed the funnel, estimated unit economics (and marked the estimates), designed the budget reallocation and the two A/B tests, and wrote the roadmap and kill criteria.`,
    learned:`More acquisition spend is rarely the answer when the leak is in retention. When a company doesn't disclose the data, the honest move is to triangulate, bound each figure and show the range — and to design a test that proves the idea before scaling it.`,
    kw:[`Growth marketing`,`Funnel and cohort analysis`,`Unit economics (CAC / LTV)`,`Retention / CRM`,`A/B test design`,`Budget reallocation`]},
  merger:{role:`Independent case study. I wrote the governing thought and supporting arguments, built the value-capture ledger and competitive evidence, and designed the four-phase roadmap, KPI dashboard and sensitivity table.`,
    learned:`Answer first. Writing the conclusion as one falsifiable sentence — with a number, a date and a named check — forces every slide to earn its place. The lever that matters is rarely the headline one: here it was productivity per store, not store count.`,
    kw:[`Post-merger integration`,`Minto pyramid`,`Value-capture ledger`,`Competitive analysis`,`KPI dashboard`,`Roadmap and gating`]},
  snitch:{role:`Independent case study. I built the segmentation, scored it, drew the perceptual map, and wrote the positioning statement, 4P translation, roadmap and decisions.`,
    learned:`Focus is a decision to disappoint other customers on purpose. Scoring segments on explicit axes makes that choice defensible, and writing down the triggers for the next phase keeps the plan honest about what it is deferring.`,
    kw:[`Segmentation & targeting`,`Positioning`,`Perceptual mapping`,`4Ps`,`D2C / menswear`,`Competitive benchmarking`]},
  vi:{role:`Independent case study. I built the profit tree and EBITDA bridge, benchmarked three peers, sized the three levers with owners and confidence, and set the roadmap, risk register and the decision asked.`,
    learned:`Read the headline number before you believe it: a ₹51,970 Cr reported profit was an accounting one-off, and the underlying loss told the real story. And a bridge shows where past gains came from — which is how you see that the next ones have to come from somewhere else.`,
    kw:[`Turnaround strategy`,`Profit tree`,`EBITDA bridge`,`Peer benchmarking`,`Financial modelling`,`Telecom`]},
  zinga:{role:`Independent case study. I framed the problem (SCQA), built the price anchor, channel scorecard and positioning pillars, designed the SKU ladder and go / no-go gates, and wrote the risks and sign-offs.`,
    learned:`A price is a claim about value, so the story has to carry it: premium moves from "expensive" to "credible" through ingredient, origin and packaging, not the tag. And every plan needs gates — numbers that say continue or stop.`,
    kw:[`Pricing strategy`,`Willingness to pay`,`Channel economics`,`Go-to-market`,`Positioning`,`SKU architecture`]}
});
})();
