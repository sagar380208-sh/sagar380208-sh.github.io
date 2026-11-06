/* ==========================================================================
   SAGAR SHARMA — RESUME (one page) + CV (World Bank consultant format)
   One source for the web pages AND the downloadable PDFs
   (tools/build-docs.js renders these to downloads/*.pdf).
   Only facts from the master data bank and the project documents.
   ========================================================================== */
(function(){
const W = (typeof window !== "undefined") ? window : globalThis;
const S = W.SITE;
const li = a => a.map(x=>`<li>${x}</li>`).join("");
const contact = `${S.city.replace(" — open to relocation"," (open to relocation)")} · ${S.phone} · ${S.email} · ${S.linkedinLabel} · ${S.url}`;

/* ================= ONE-PAGE RESUME (ATS-safe: single column, real text) ================= */
function resumeHTML(){
return `<div class="doc doc-resume">
<h1>SAGAR SHARMA</h1>
<p class="ttl">Growth &amp; Marketing Analytics</p>
<p class="ct">${contact}</p>

<h2>Summary</h2>
<p>PGDM graduate in Marketing &amp; Strategy (IMT Nagpur, 2026) with a commerce degree and a working analytics stack. Pairs consumer and go-to-market strategy with SQL, Tableau, Power BI and Python. Built a medallion data warehouse and interactive dashboards; personally ran 200+ user interviews for a product-strategy concept; completed three internships across EdTech and real estate; now a Polycab India trainee on the Territory Sales Manager track.</p>

<h2>Education</h2>
<div class="row"><b>PGDM (Marketing &amp; Strategy) | IMT Nagpur</b><span>2024–2026 | 75.4% (CGPA 6.93/10)</span></div>
<div class="row"><b>B.Com | S.S. Jain Subodh College, Jaipur</b><span>2018–2021 | 65%</span></div>

<h2>Experience</h2>
<div class="row"><b>Polycab India Ltd — Trainee, Territory Sales Manager track</b><span>Delhi | Jun 2026–present</span></div>
<ul>${li([
 `Converted <b>15+ new outlets</b> across East Delhi, North Delhi and Bhagirath Palace that had never stocked Polycab lighting; personal sales grew <b>about 20% month on month</b>.`,
 `Built an HTML pricing and scheme tool to calculate and negotiate deals during the meeting (<b>est. 35% faster</b>); proposed a retailer WhatsApp recognition plan (not yet run).`])}</ul>
<div class="row"><b>Hanbai Consultancy LLP — CEO's Office Intern</b><span>Mumbai | Apr–Jun 2025</span></div>
<ul>${li([
 `Ran user interviews, focus groups and a survey for <b>IIMX</b>, an AI management-education app; specified <b>three learner personas</b> (B2B, B2B2C, B2C) and a repeatable AI-prompt framework behind <b>900+ management modules and worksheets</b>.`,
 `Designed an AIDA launch funnel with a 50%-locked lead magnet; in focus-group validation, <b>20–25% of targeted leads</b> converted, with 5–10% weekly engagement growth in trial, compounding to ~40% over the trial period.`,
 `Initiated a go-to-market strategy as a competitive contingency (benchmarked against Coursera); presented it to a <b>5–7 member board review</b>, which endorsed it to proceed if the product launched.`])}</ul>
<div class="row"><b>To-Let Globe — Business Strategy Intern, Team Lead</b><span>Remote | Mar–May 2025</span></div>
<ul>${li([
 `Led a 3-member team to design a cross-channel growth strategy with targeting logic: brand reach rose <b>105%</b> and qualified leads <b>60%</b>, tracked on performance dashboards I built.`,
 `Identified <b>12 growth opportunities</b> adopted by leadership through market research and dashboard analysis.`])}</ul>
<div class="row"><b>To-Let Globe — Brand Strategy Intern</b><span>Remote | Jan–Mar 2025</span></div>
<ul>${li([`Analysed customer feedback, redesigned the brand framework and implemented KPI tracking across channels.`])}</ul>

<h2>Projects</h2>
<div class="row"><b>SQL Data Warehouse — Medallion Architecture (self-directed)</b><span>SQL Server</span></div>
<ul>${li([`Designed Bronze/Silver/Gold layers: automated CSV ingestion, window-function de-duplication and star-schema views; report preparation fell from weeks to minutes, with a data catalogue documenting lineage.`])}</ul>
<div class="row"><b>HR Analytics Dashboard (self-directed)</b><span>Tableau Public</span></div>
<ul>${li([`Built a 15-chart, two-view dashboard from requirements to publication using LOD expressions and calculated fields.`])}</ul>
<div class="row"><b>Zepto — independent enterprise GTM playbook (case study, not client work)</b><span>Dec 2025</span></div>
<ul>${li([`Built a five-stream monetisation map, unit-economics levers and a Q1–Q4 roadmap; modelled targets include CAC payback of 45 days or less and Private Label mix rising from ~8% to 15% (projections).`])}</ul>

<h2>Skills</h2>
<p><b>Analytics &amp; BI:</b> SQL (CTEs, window functions, stored procedures, views), Tableau (LOD, parameters), Power BI (Power Query, DAX, row-level security), Python (Pandas, Seaborn, Matplotlib), Excel, PowerPoint.<br>
<b>Methods:</b> data cleaning and profiling, customer segmentation, correlation analysis, funnel analysis, financial and ROI modelling, TAM/SAM/SOM, GTM design.</p>

<h2>Certifications</h2>
<p>Google Data Analytics (Coursera) · Advanced Excel for Business · Leadership Skills (IIM Ahmedabad) · Inbound Marketing (HubSpot) · Data Driven Decision Making (PwC)</p>

<h2>Achievements &amp; Leadership</h2>
<p>Winner, STRATBUZZ Business Strategy Competition (2024) · 2nd Runner-Up, DRISTICONE Case Analysis Challenge (2024) · General Secretary, Centre for Sustainability, IMT Nagpur (2024–26): ran a QR-based campaign (+30% engagement, 200+ reached) and coordinated a 10-member team for a campus event.</p>
</div>`;
}

/* ================= DETAILED CV — World Bank consultant format ================= */
function cvHTML(){
const D = W.DATA_PROJECTS, P = W.PROJECTS, L = W.LEARN || {};
const dataRows = D.map(d=>`<tr><td><b>${d.brand}</b><br><span class="mu">${d.tool}</span></td><td>${/[.?!]$/.test(d.S||"") ? d.S : (d.S||"") + "."}</td><td>${d.R}</td></tr>`).join("");
const stratRows = P.map(p=>`<tr><td><b>${p.brand}</b></td><td>${p.sub}</td><td>${((L[p.id]||{}).kw||[]).slice(0,4).join(" · ")}</td></tr>`).join("");
return `<div class="doc doc-cv">
<p class="kick">CURRICULUM VITAE</p>
<h1>Sagar Sharma</h1>
<table class="kv">
<tr><th>Profession</th><td>Growth and marketing analytics, with strategy and business analysis</td></tr>
<tr><th>Availability</th><td>Open to new roles (PGDM completed April 2026)</td></tr>
<tr><th>Residence</th><td>Delhi — open to relocation</td></tr>
<tr><th>Contact</th><td>${S.phone} · ${S.email} · ${S.linkedinLabel} · ${S.url}</td></tr>
</table>

<h2>1. Key qualifications</h2>
<p>PGDM graduate in Marketing &amp; Strategy (IMT Nagpur, 2026) with a commerce foundation and a hands-on analytics stack. Currently a Polycab India trainee on the Territory Sales Manager track. Combines consumer and go-to-market strategy with SQL, Tableau, Power BI and Python. The evidence behind that is specific: three internships across EdTech and real estate; 200+ user interviews personally conducted for a product-strategy concept; a medallion data warehouse, interactive dashboards and a Power BI model rebuild; and ${P.length} independent strategy case studies across FMCG, D2C, quick commerce, retail, telecom and EVs.</p>
<ul>${li([
 `<b>Research &amp; insight:</b> user interviews, focus groups, surveys, diary studies and social listening, turned into personas, occasions and positioning.`,
 `<b>Data &amp; BI:</b> data warehousing (Bronze/Silver/Gold), star-schema modelling, advanced SQL, Tableau and Power BI dashboards, Python correlation analysis.`,
 `<b>Strategy &amp; GTM:</b> market entry, brand and portfolio architecture, pricing, unit economics, TAM/SAM/SOM, scenario and ROI modelling.`,
 `<b>Working style:</b> states hypotheses before testing them, reports results that contradict them, and labels estimates as estimates.`])}</ul>

<h2>2. Education</h2>
<table class="grid"><thead><tr><th>Period</th><th>Institution</th><th>Qualification</th><th>Result</th></tr></thead><tbody>
<tr><td>2024 – Apr 2026</td><td>Institute of Management Technology (IMT), Nagpur</td><td>Post Graduate Diploma in Management (Marketing &amp; Strategy)</td><td>75.4% (CGPA 6.93/10)</td></tr>
<tr><td>2018 – 2021</td><td>S.S. Jain Subodh College, Jaipur</td><td>Bachelor of Commerce (B.Com)</td><td>65% aggregate</td></tr>
</tbody></table>
<p class="mu">Relevant coursework: Strategy, Competitive Analysis, Marketing Analytics, Consumer Behavior, Brand Management, Business Economics, Financial Management.</p>

<h2>3. Employment record</h2>
<table class="job"><tr><th>Period</th><td>June 2026 – present</td></tr>
<tr><th>Employer</th><td><b>Polycab India Ltd</b> — wires and cables, lighting, fans and switchgear · Delhi</td></tr>
<tr><th>Position</th><td>Trainee, Territory Sales Manager track (Lighting, then Wires &amp; Switchgear, current posting)</td></tr>
<tr><th>Duties</th><td><ul>${li([
 `Listed outlets across East Delhi, North Delhi and Bhagirath Palace that had never stocked Polycab lighting, pitched owners directly and followed up until the first order was placed through a distributor.`,
 `Planned daily beats around outlet productivity, at 10+ outlet visits a day, working with 2 distributors.`,
 `Built an HTML tool showing price points, scheme slabs, scan points and deductions for any order size.`,
 `Designed zone-wise retailer WhatsApp groups recognising the monthly top 3 sellers of key SKUs (self-initiated; proposed, not yet run).`])}</ul></td></tr>
<tr><th>Accomplishments</th><td><ul>${li([
 `Converted <b>15+ new outlets</b>; personal sales grew <b>about 20% month on month</b>.`,
 `Deals calculated and negotiated in the meeting itself, an <b>estimated 35% faster</b> than by hand.`])}</ul></td></tr></table>
<table class="job"><tr><th>Period</th><td>April 2025 – June 2025</td></tr>
<tr><th>Employer</th><td><b>Hanbai Consultancy LLP</b> — EdTech and management training · Mumbai (in-office)</td></tr>
<tr><th>Position</th><td>CEO's Office Intern (formal, faculty-supervised Summer Internship Project)</td></tr>
<tr><th>Duties</th><td><ul>${li([
 `Conducted user interviews, focus groups and a survey for <b>IIMX</b>, an AI-powered management-education platform for Indian professionals.`,
 `Specified three learner personas — Learning Head Prashant (B2B), Corporate Learner Raj (B2B2C), Ambitious Student Ananya (B2C) — each with budget, usage pattern and decision process.`,
 `Built a structured AI-prompt content framework (role definition, instructions, good/bad examples, standard format and constraints) and used it to produce 900+ management modules and worksheets grounded in Indian business cases.`,
 `Designed an AIDA launch funnel: content marketing for awareness; email plus a 50%-locked sample worksheet for interest; heat-map-triggered full worksheets and share-gating for desire; a monthly plan and 7-day free trial for action.`,
 `Benchmarked against Coursera and other online platforms to define the product's differentiating factor; conceived a peer-learning virtual-workshop concept from a survey insight that introverted learners and English learners will speak to a phone, not a room (concept and GTM design — not built or launched).`,
 `Created research questionnaires, analysed trending topics to select focus topics, and designed a structured workstream with proposed launch criteria.`])}</ul></td></tr>
<tr><th>Accomplishments</th><td><ul>${li([
 `In focus-group validation, <b>20–25% of targeted leads</b> converted; <b>5–10% weekly engagement growth</b> during trial, compounding to ~40% over the trial period.`,
 `Self-initiated a go-to-market strategy as a competitive contingency; presented it to a <b>5–7 member board review</b>, which endorsed it to proceed if the product launched.`])}</ul></td></tr></table>

<table class="job"><tr><th>Period</th><td>March 2025 – May 2025</td></tr>
<tr><th>Employer</th><td><b>To-Let Globe</b> — real estate · Remote</td></tr>
<tr><th>Position</th><td>Business Strategy Intern — Team Lead (3-member team)</td></tr>
<tr><th>Duties</th><td><ul>${li([
 `Led the team in designing an integrated growth strategy across digital channels and in implementing targeting logic.`,
 `Built performance dashboards and ran market research to identify scale levers.`,
 `Served as the continuing point of contact for the strategy workstream while the role remained unfilled, working remotely alongside a full-time Mumbai internship.`,
 `Diagnosed lagging public employer reviews as a lagging indicator of a problem already fixed; designed a one-week employee-feedback pilot and proposed a six-month internal-feedback workstream (post-project reviews, multi-stakeholder escalation ladders).`])}</ul></td></tr>
<tr><th>Accomplishments</th><td><ul>${li([`Brand reach <b>+105%</b> and qualified leads <b>+60%</b>, measured on the dashboards built.`,`<b>12 growth opportunities</b> identified and adopted by leadership.`])}</ul></td></tr></table>

<table class="job"><tr><th>Period</th><td>January 2025 – March 2025</td></tr>
<tr><th>Employer</th><td><b>To-Let Globe</b> — real estate · Remote</td></tr>
<tr><th>Position</th><td>Brand Strategy Intern</td></tr>
<tr><th>Duties</th><td><ul>${li([`Analysed customer feedback to find the sources of weak brand perception.`,`Redesigned the brand framework and implemented KPI tracking to maintain consistent brand execution across channels.`])}</ul></td></tr></table>

<h2>4. Selected assignments — data &amp; analytics</h2>
<p class="mu">Self-directed builds on real datasets. Rates and counts are as computed in each project.</p>
<table class="grid wide"><thead><tr><th>Project</th><th>Situation</th><th>Outcome</th></tr></thead><tbody>${dataRows}</tbody></table>

<h2>5. Selected assignments — strategy case studies</h2>
<p class="mu">Independent academic case studies and reports, not client engagements. All forward-looking figures are estimates, projections or market-sizing — not realised results.</p>
<table class="grid wide"><thead><tr><th>Case study</th><th>Focus</th><th>Methods</th></tr></thead><tbody>${stratRows}</tbody></table>

<h2>6. Technical competencies</h2>
<table class="kv">
<tr><th>Databases &amp; SQL</th><td>SQL Server — stored procedures, BULK INSERT, TRY…CATCH, CTEs, temp tables, views, self-joins, window functions (ROW_NUMBER, LAG, SUM OVER), INFORMATION_SCHEMA</td></tr>
<tr><th>BI &amp; visualisation</th><td>Tableau (LOD, parameters, dual axis, heat maps, Tableau Public) · Power BI (Power Query, DAX, row-level security, star schema) · Figma (dashboard layouts)</td></tr>
<tr><th>Python</th><td>Pandas, Seaborn, Matplotlib, Jupyter — cleaning, correlation, hypothesis testing</td></tr>
<tr><th>Office</th><td>Excel (financial and ROI modelling, scenario models) · PowerPoint</td></tr>
<tr><th>Analytical methods</th><td>Data cleansing, profiling, segmentation, funnel and 5-Why analysis, TAM/SAM/SOM, SWOT, scenario modelling, social listening, competitive benchmarking</td></tr>
</table>

<h2>7. Training and certification</h2>
<ul>${li([`Google Data Analytics (Coursera) — SQL, data visualisation`,`Advanced Excel for Business`,`Leadership Skills — IIM Ahmedabad`,`Inbound Marketing — HubSpot Academy`,`Data Driven Decision Making — PwC`])}</ul>

<h2>8. Honours and awards</h2>
<ul>${li([`Winner — STRATBUZZ Business Strategy Competition (2024)`,`2nd Runner-Up — DRISTICONE Case Analysis Challenge (2024)`,`Anundoram Borooah Award (2015) — awarded out of 3.89 lakh students`])}</ul>

<h2>9. Leadership and community</h2>
<table class="job"><tr><th>Position</th><td><b>General Secretary — Centre for Sustainability, IMT Nagpur</b> (2024–2026)</td></tr>
<tr><th>Duties</th><td><ul>${li([`Ran a QR-based digital campaign that increased engagement by 30%, reaching 200+ people.`,`Organised a campus event using audience segmentation; participation rose 20%.`,`Coordinated a 10-member team across stakeholder logistics for a sustainability event.`])}</ul></td></tr></table>
</div>`;
}

W.CVDOC = {resumeHTML, cvHTML};
if (typeof module !== "undefined") module.exports = W.CVDOC;
})();
