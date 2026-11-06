/* ==========================================================================
   SAGAR SHARMA — PORTFOLIO DATA, PART 2 (loads after data.js)
   Adds: the hotels MIS project, richer data-project detail, and for EVERY
   project the two things a hiring manager asks next:
     LEARN[id] = { role: how I contributed · learned: what I took away · kw: keywords }
   Same integrity rules as data.js — estimates stay estimates, no invented results.
   ========================================================================== */
(function(){
const W = window, D = W.DATA_PROJECTS;
const get = id => D.find(d => d.id === id);

W.SITE.role = "Business × Marketing × Analytics";

/* ---------- richer detail on existing data projects ---------- */
(function(){
  const w = get("d-warehouse");
  w.A.push(`<b>Quality gate:</b> a Gold-layer validation procedure enforcing primary-key uniqueness, referential integrity between the fact table and its dimensions, and null / range checks on sales fields — plus a data catalogue documenting dependencies, keys and Bronze-to-Gold lineage.`);
  w.stats = [[`3`,`Layers built`],[`Weeks → minutes`,`Report prep time`],[`3`,`Automated quality checks`]];

  const h = get("d-hr");
  h.A.push(`<b>Requirements first:</b> user stories ("which departments lose the most people?") turned into a four-container wireframe in Draw.io — KPI band, navigation, main charts, supporting charts — then a dark theme with one colour for active metrics and one for terminations and risk.`);
  h.A.push(`<b>Detail you only notice when it's missing:</b> custom tooltips with a mini bar chart inside, and an employee table that carries gender icons, status flags and tenure bars in-row using a dummy-axis trick.`);
  h.code = `// Headcount status — one definition, used everywhere\nIF ISNULL([Termination Date]) OR [Termination Date] > TODAY()\nTHEN 'Active' ELSE 'Terminated' END\n\n// Tenure in years\nDATEDIFF('year', [Hire Date], ISNULL([Termination Date], TODAY()))\n\n// Age band\nIF DATEDIFF('year',[Birth Date],TODAY()) < 25 THEN '<25'\nELSEIF DATEDIFF('year',[Birth Date],TODAY()) <= 34 THEN '25-34'\n/* … 35-44 · 45-54 · 55+ */ END`;

  const p = get("d-powerbi");
  p.A.push(`<b>Junk dimension:</b> low-cardinality flags (order channel, shipping method, priority) pulled out of the wide fact table into one dimension, slimming the fact table.`);
  p.A.push(`<b>Two dates, one calendar:</b> an inactive Ship Date relationship switched on inside a measure with USERELATIONSHIP, so one date table served order and ship views.`);
  p.code = `Revenue PY =\nCALCULATE([Total Revenue], SAMEPERIODLASTYEAR(Dim_Date[Date]))\n\nYoY Revenue Growth % =\nDIVIDE([Total Revenue] - [Revenue PY], [Revenue PY], 0)\n\nRevenue by Ship Date =\nCALCULATE([Total Revenue],\n  USERELATIONSHIP(Fact_Sales[ShipDate], Dim_Date[Date]))\n\n-- Row-level security: each manager sees only their region\nDim_Store[Region] = LOOKUPVALUE(Security_Table[Region],\n  Security_Table[UserEmail], USERPRINCIPLENAME())`;
  p.mock = "sql";

  get("d-eda").S = `A new sales database of customers, products and orders — over $29M in revenue across 18,000+ customers — with no documentation.`;
  get("d-nashville").S = `56,000+ raw property records with inconsistent date formats, missing addresses, comma-packed address strings and duplicate rows.`;

  const s = get("d-segment");
  s.mock = "sql";
  s.A.push(`<b>One view for the business:</b> recency, average order value and monthly spend consolidated into a permanent Gold-layer customer report that Tableau and Power BI can read directly.`);
  s.code = `CASE\n  WHEN lifespan_months >= 12 AND total_spend >= 5000 THEN 'VIP'\n  WHEN lifespan_months >= 12 AND total_spend <  5000 THEN 'Regular'\n  ELSE 'New'\nEND AS customer_segment\n\n-- month-over-month with LAG\nmonthly_revenue - LAG(monthly_revenue, 1)\n  OVER (ORDER BY sales_month) AS mom_growth`;

  const y = get("d-sales");
  y.mock = "sql";
  y.code = `// Parameter [Select Year] drives every metric\nIF YEAR([Order Date]) = [Select Year]     THEN [Sales] ELSE 0 END  // current\nIF YEAR([Order Date]) = [Select Year] - 1 THEN [Sales] ELSE 0 END  // prior\n\n(SUM([Current Year Sales]) - SUM([Prior Year Sales]))\n  / SUM([Prior Year Sales])                                       // YoY %\n\n{ FIXED [Customer ID] : COUNTD([Order ID]) }       // orders per customer`;
})();

/* ---------- NEW: Domestic hotels category performance MIS ---------- */
D.push({
  id:`d-hotels`, tool:`SQL · Excel · Dashboard`, brand:`Domestic Hotels MIS`, sub:`Category performance · 58 Goibibo-listed properties · five markets`,
  color:`#1F5C63`, mock:`bars`,
  line:`A supply-side MIS dashboard that shows where a hotel category is thin, weak or silent — and refuses to invent numbers the data doesn't hold.`,
  stats:[[`58`,`Properties analysed`],[`1,408`,`Rooms of listed supply`],[`0%`,`List parking, pool or accessibility`]],
  S:`A domestic-hotels category team needs to know where supply is deep, where quality is slipping and which listing gaps cost bookings. The only data available was a public scrape — no prices, no bookings, no GMV.`,
  T:`Turn the Goibibo-listed StayEase dataset (250 properties, 99 cities; 58 in scope across Goa, Jaipur, Manali, Udaipur and Jodhpur) into a decision-ready category MIS — and propose how to measure what the data can't show.`,
  A:[`<b>Cleaned and cut in SQL:</b> room facilities were parsed into amenity flags (breakfast, parking, WiFi, pool, AC, accessibility, restaurant, room service, heater), room types banded into price-tier proxies and ratings into bands.`,
     `<b>Six analyses, one workbook:</b> supply depth, amenity coverage, room-category mix, rating bands, location mix and a Goa property-level watchlist — each on its own sheet, with a README stating source and limits.`,
     `<b>One MIS page:</b> KPI strip plus seven charts, each titled with the finding it supports, not the metric it plots.`,
     `<b>A measurement plan instead of made-up funnel numbers:</b> room nights booked, listing-to-booking conversion, ranking factors, amenity-fill rate and review velocity — each with a definition, a data source and a Goa pilot target.`],
  R:`Parking, pool and accessibility were listed by 0% of properties in every market, breakfast by 33% blended, and Jaipur had 3 of its 8 properties rated below 3.0 — the worst tail risk in the set. Goa carried 31 of the 58 properties, with a fix-or-delist watchlist of those rated under 3.5. Prices, GMV and conversion are not in the source, so none are reported.`,
  code:`-- amenity coverage by destination (% of properties listing it)\nSELECT city,\n  ROUND(100.0*AVG(f_breakfast),0) AS breakfast_pct,\n  ROUND(100.0*AVG(f_parking),0)   AS parking_pct,\n  ROUND(100.0*AVG(f_wifi),0)      AS wifi_pct,\n  ROUND(100.0*AVG(f_accessible),0) AS accessible_pct\nFROM hotels\nWHERE city IN ('Goa','Jaipur','Manali','Udaipur','Jodhpur')\nGROUP BY city;`,
  files:[
    {label:`Open the MIS dashboard`, note:`Interactive · 7 charts · watchlist · proposed funnel metrics`, file:`downloads/MIS_Dashboard_Domestic_Hotels.html`, cta:`Open ↗`},
    {label:`Analysis workbook`, note:`6 analysis sheets + README with source and integrity notes`, file:`downloads/Domestic_Hotels_Analysis.xlsx`, cta:`Download`}
  ]
});

/* ---------- CONTRIBUTION · LEARNING · KEYWORDS — every project ---------- */
W.LEARN = {
/* ---- data ---- */
"d-warehouse":{role:`Self-directed, end to end. I designed the three layers, wrote the ingestion procedures and cleansing rules, built the Gold-layer views and surrogate keys, and set up the validation checks and the catalogue.`,
  learned:`A warehouse is a trust machine. The unglamorous parts — logging, repeatable loads, referential-integrity checks — are what make a number believable, and surrogate keys keep reporting independent from messy source systems.`,
  kw:[`Medallion architecture`,`ETL`,`Stored procedures`,`Star schema`,`Data quality`,`Data lineage`,`Surrogate keys`]},
"d-hr":{role:`Self-directed. I translated user stories into a wireframe, defined every headcount metric as a calculated field, built all 15 charts and designed the navigation and filter behaviour in Tableau.`,
  learned:`The metric definition is the dashboard: deciding what "active" means mattered more than any chart. And a surprising finding — like the PhD pay pattern — is a reason to re-check the data, and to word it as what this dataset shows, not what the world does.`,
  kw:[`Tableau`,`LOD expressions`,`Dashboard UX`,`HR analytics`,`Wireframing`,`Calculated fields`,`Heat maps`]},
"d-powerbi":{role:`Self-directed. I audited the inherited model, reshaped the sources in Power Query, rebuilt the relationships as a star (galaxy) schema, wrote the date table and measures, and secured it with row-level security.`,
  learned:`Most "wrong numbers" are modelling problems, not DAX problems. Get the grain and the relationships right — one-to-many, one direction — and the measures become short enough to trust.`,
  kw:[`Power BI`,`Star schema`,`DAX`,`Power Query`,`Row-level security`,`Data modelling`,`Time intelligence`]},
"d-movies":{role:`Self-directed. I framed the hypothesis before touching the data, wrote the cleaning and encoding pipeline, ran the correlation analysis and reported the result — including that it went against my starting assumption.`,
  learned:`Say the hypothesis out loud first, then let the data kill it if it must. Reporting that production-company prestige did not drive revenue was the most useful outcome of the project.`,
  kw:[`Python`,`Pandas`,`Seaborn`,`Hypothesis testing`,`Correlation analysis`,`Data cleaning`]},
"d-covid":{role:`Self-directed across both halves: the SQL exploration (joins, CTEs, temp tables, window functions, views) and the Tableau dashboard it fed.`,
  learned:`Two rates with two different denominators — infections ÷ population and deaths ÷ confirmed cases — answer two different questions. Knowing which denominator you are using is what separates an analysis from a chart.`,
  kw:[`SQL`,`CTEs`,`Window functions`,`Tableau`,`Forecasting`,`Geographic mapping`]},
"d-nashville":{role:`Self-directed. I profiled the problems, then wrote each fix — self-join to fill addresses, string parsing, CASE standardisation and a CTE-based de-duplication.`,
  learned:`Cleaning is a sequence of small, checkable decisions. Counting what each step changed — 35 addresses filled, 104 duplicates removed — is what makes the cleaned dataset auditable.`,
  kw:[`SQL`,`Data cleaning`,`String functions`,`Window functions`,`CTEs`,`Deduplication`]},
"d-eda":{role:`Self-directed. I wrote the profiling queries — schema discovery, cardinality, date boundaries — and the consolidated key-metrics report.`,
  learned:`Profile before you analyse. Two minutes of cardinality checks showed every registered customer had ordered and that one category carried 69% of revenue — context that shapes every later question.`,
  kw:[`SQL`,`Data profiling`,`INFORMATION_SCHEMA`,`Cardinality analysis`,`Business metrics`]},
"d-segment":{role:`Self-directed. I defined the segmentation logic and thresholds, built the running-total and year-over-year analysis, and packaged the result as a permanent reporting view.`,
  learned:`Segmentation turns a customer list into a plan. Finding that "New" was the largest group by far meant lifecycle-stage targeting mattered more than chasing the top spenders.`,
  kw:[`SQL`,`Customer segmentation`,`Window functions`,`LAG`,`Reporting views`]},
"d-sales":{role:`Self-directed. I designed both views, wrote the parameter and LOD logic, built the dual-axis sparklines and designed the layout cards in Figma.`,
  learned:`One parameter can replace ten static charts. Letting the user choose the baseline year shifts a dashboard from reporting to exploring — as long as every metric recalculates from the same definition.`,
  kw:[`Tableau`,`Parameters`,`LOD expressions`,`YoY analysis`,`Dashboard UX`,`Figma`]},
"d-hotels":{role:`Independent analysis. I framed the questions, wrote the SQL and the six workbook analyses, built the MIS page, and wrote the measurement plan — and the integrity note on what the data cannot say.`,
  learned:`The honest limit is part of the deliverable. With no prices, bookings or GMV in the source, I proxied price with room tier and proposed how to measure conversion — rather than inventing a funnel.`,
  kw:[`SQL`,`Excel`,`MIS dashboard`,`Category analysis`,`Supply analysis`,`Data integrity`,`Metric design`]},

/* ---- strategy ---- */
zepto:{role:`An independent case study — not work done for or with Zepto. I mapped the five monetisation streams, diagnosed the unit economics, and built the scoring framework, roadmap, Private Label formula and metrics dashboard.`,
  learned:`Growth in quick commerce is a margin question before it is a reach question. Ranking the levers by what they add to EBITDA — retail media and private label first — turns a long wish-list into a sequence.`,
  kw:[`Unit economics`,`GTM playbook`,`Private label`,`CAC payback`,`Retail media`,`Quick commerce`]},
vip:{role:`Independent case study. I diagnosed the zone P&L, then built Project R-30 — product mix, clearance, dealer programme, service moat and governance.`,
  learned:`A loss is rarely one problem. Inventory bloat, a category shift and a competitor's margin play had to be solved together — and a plan only survives if the field can measure it weekly.`,
  kw:[`P&L diagnosis`,`Inventory strategy`,`Channel strategy`,`Product mix`,`Governance`,`Sales strategy`]},
occasion:{role:`Independent case study. I found the behaviours through Reddit and Twitter listening and search-query analysis, then sized each opportunity and designed the sub-brand, format, placement and risk guardrails.`,
  learned:`The most valuable insight is what people already do with your product. Desk research would have missed it; social listening found it. And every bold sub-brand needs a guardrail for each way it could hurt the parent.`,
  kw:[`Social listening`,`Occasion strategy`,`TAM / SAM / SOM`,`Sub-brand design`,`Consumer insight`,`Risk guardrails`]},
gcal:{role:`I personally conducted the 200+ user interviews and the three-week diary studies, then defined the Plan → Do → Reflect architecture, the privacy model and the prototypes.`,
  learned:`Users don't need another planner — they need a feedback loop. Diary studies showed what people actually do, which is rarely what they say in an interview.`,
  kw:[`User research`,`Product strategy`,`Product architecture`,`Competitive analysis`,`Privacy by design`,`Prototyping`]},
bikaji:{role:`Independent case study. I ran the portfolio and revenue-mix analysis, diagnosed the "Heritage Brand Trap", and built the house-of-brands strategy, 3-year GTM and financial model.`,
  learned:`Brand permission is both an asset and a cage. One brand stretched across many categories dilutes equity and wastes marketing spend — the fix is architecture, not more advertising.`,
  kw:[`Brand architecture`,`Portfolio strategy`,`Financial modelling`,`GTM roadmap`,`Competitive benchmarking`]},
clean:{role:`Independent strategy deck. I designed the psychological model, the content protocol, the ward-level scaling playbook and the risk framework.`,
  learned:`Movements scale when taking part is a status game, not a duty — and when someone has designed for the ways such movements usually die.`,
  kw:[`Behavioural economics`,`Creator economy`,`Growth loops`,`Campaign design`,`Risk framework`]},
asianpaints:{role:`Independent case study. I sized the market, diagnosed share and margin erosion, mapped the consumer journey and built the Home Care 360 pivot and its tiered service model.`,
  learned:`A category leader's biggest risk can sit inside its own success: 85% of revenue in one slowing category. The pivot turns a purchase made once in seven to ten years into a recurring relationship, using assets already paid for.`,
  kw:[`Category strategy`,`Market sizing`,`Diversification`,`Consumer journey`,`Recurring revenue`]},
bata:{role:`Independent case study. I analysed the footwear market, defined the "Affordable Cool" white space, and designed the BATA ECHO sub-brand, creator engine and phygital retail plan.`,
  learned:`Legacy perception is a positioning problem, not a product problem. Bata needed a separate space for Gen Z rather than a facelift of the parent brand.`,
  kw:[`Brand repositioning`,`Gen Z strategy`,`Product architecture`,`Digital GTM`,`Creator marketing`]},
bournvita:{role:`Independent case study. I ran the funnel and 5-Why analysis, then designed the three-pillar turnaround — reformulated portfolio, adult segment and trust-led GTM — with the financial model.`,
  learned:`The funnel showed the problem was repeat, not awareness: customers try but don't stay. So the fix had to be trust, not reach.`,
  kw:[`Root-cause analysis`,`Funnel analysis`,`Portfolio reformulation`,`Financial modelling`,`Trust-led GTM`]},
maggi:{role:`Independent case study. I diagnosed the repeat-purchase decline through funnel and root-cause analysis, designed the three-pronged growth strategy and built the revenue model.`,
  learned:`Repeat purchase falling from 68% to 28% pointed to taste fatigue and missing regional relevance. The lever was localisation, not louder advertising.`,
  kw:[`Retention analysis`,`Regionalisation`,`Revenue modelling`,`Omnichannel GTM`,`Competitive benchmarking`]},
dettol:{role:`Independent case study. I sized the opportunity with TAM / SAM / SOM, benchmarked competitors, designed the product portfolio and full-funnel GTM, and built the three-year financial model.`,
  learned:`Entering a category is mostly about removing the one barrier consumers feel — here, the burn of alcohol-based mouthwash. TAM / SAM / SOM kept the ambition honest.`,
  kw:[`Market entry`,`TAM / SAM / SOM`,`Portfolio design`,`Full-funnel GTM`,`Financial modelling`]},
vadilal:{role:`Independent case study. I audited the brand against the category leader, built the SWOT-led framework and the 12–18 month go-to-market roadmap.`,
  learned:`As a challenger at about 20% against a leader at about 45%, you win by choosing where the leader is weakest — not by matching it everywhere.`,
  kw:[`Brand audit`,`SWOT`,`Portfolio architecture`,`Distribution strategy`,`Q-commerce`]},
motul:{role:`Independent case study. I analysed the lubricants market and its barriers, set the specialist positioning, and built the five-pillar roadmap, scenario model and risk framework.`,
  learned:`In a market defined by distribution moats and price wars, specialism — premium synthetics, EV fluids, performance two-wheelers — is a more defensible route than scale.`,
  kw:[`Market entry`,`Competitive moats`,`Scenario modelling`,`D2C strategy`,`Positioning`]},
generalmills:{role:`Independent case study. I built the India launch strategy — market sizing, consumer insight, three-phase entry plan and pricing architecture.`,
  learned:`In a category with low habit, lower the trial barrier first — a ₹10 pack and sampling — before asking for a family-pack commitment.`,
  kw:[`Market entry`,`GTM strategy`,`Pricing architecture`,`Consumer insight`,`Sampling`]},
essilor:{role:`Independent case study. I designed the cluster-based expansion model, channel architecture, pricing and bundling logic, 90-day playbook and KPI framework.`,
  learned:`An asset-light partner model works only if the economics work for the partner first: retailer margin and fill rate before store count.`,
  kw:[`Distribution strategy`,`Channel architecture`,`Pricing`,`KPI design`,`Execution planning`]},
dabur:{role:`Independent case study. I designed the three-tier portfolio, the 12-month innovation pipeline and the multi-channel GTM.`,
  learned:`Giving each tier of a portfolio a distinct job — volume, margin, innovation — keeps premium experiments from being judged by mass-market rules.`,
  kw:[`Portfolio architecture`,`Innovation pipeline`,`Premiumisation`,`Multi-channel GTM`]},
nivea:{role:`Independent case study. I benchmarked the gap, designed the creator operating model and Reels-first content strategy, and phased the 90-day roadmap.`,
  learned:`On social, volume of native, creator-made content beats polished brand content. The operating model — 5 macro, 20 micro and 100+ UGC creators — matters more than any single post.`,
  kw:[`Social strategy`,`Creator operations`,`Content strategy`,`Engagement design`]},
cerave:{role:`Independent analysis. I reverse-engineered the three-phase virality architecture and designed the post-viral growth system.`,
  learned:`A viral spike is not a business. Without CRM capture, education sequencing and retail integration, awareness evaporates.`,
  kw:[`Campaign analysis`,`Behavioural economics`,`Funnel design`,`Brand equity`]},
hul:{role:`Prepared the full benchmarking report following Redseer Consulting's IMPACT framework — source triangulation, peer and channel benchmarks, a three-scenario financial model, a risk register and a KPI roadmap. Secondary research only; no primary research was conducted.`,
  learned:`Benchmarking is only useful if it ends in choices. Three scenarios and a risk register give leadership something to decide, not just something to read.`,
  kw:[`Market benchmarking`,`Scenario modelling`,`Channel analysis`,`Competitive positioning`,`Sensitivity analysis`]},
nani:{role:`Portfolio project. I designed the brand — positioning, architecture, six-SKU portfolio, phased D2C and quick-commerce GTM and unit economics — as a mock launch.`,
  learned:`After the 2024 spice recalls, trust became a competitive advantage. Positioning on emotional authenticity, backed by transparent safety credentials, sat in the white space between mass-market and organic.`,
  kw:[`Brand launch`,`Positioning`,`Product strategy`,`D2C GTM`,`Unit economics`]},
boat:{role:`Wrote the brand audit: brand archaeology, positioning map, marketing-strategy evaluation and vulnerability analysis, ending in recommendations.`,
  learned:`A brand's permission can cap it. The "accessible style" position is defensible, but it resists premiumisation — so growth upmarket needs a separate story.`,
  kw:[`Brand audit`,`Positioning map`,`Competitive analysis`,`Brand architecture`]},
cadbury:{role:`Wrote the campaign deconstruction: context, insight hierarchy, creative strategy, technology, execution, results and five lessons.`,
  learned:`The best use of a brand asset can be giving it away. Generosity worked because it was operational — not just messaging.`,
  kw:[`Campaign analysis`,`Insight hierarchy`,`Creative strategy`,`Brand purpose`]}
};

/* ---------- files attached to a project (reports are already in REPORTS) ---------- */
W.FILES = { "d-hotels": get("d-hotels").files };

/* ---------- downloads ---------- */
W.DOWNLOADS = {
  resume:{file:"downloads/Sagar_Sharma_Resume_1-page.pdf", label:"Resume — one page"},
  cv:{file:"downloads/Sagar_Sharma_CV_Detailed.pdf", label:"CV — detailed"}
};
})();
