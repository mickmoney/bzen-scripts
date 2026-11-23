/* Bzen Digital · B2B SaaS landing page templates guide · https://bzen.io/guides
   Mount points: <div id="bz-landing-templates"></div> (template list) and optional <div id="bztJump"></div> (jump links)
   and <tbody id="bztTable"></tbody> (left alone if it already has rows). */
(function(){
  var app=document.getElementById('bz-landing-templates');
  if(!app||app.getAttribute('data-ready'))return;
  app.setAttribute('data-ready','1');
  app.classList.add('bzg');
  app.innerHTML='<div class="bzt-list" id="bztList"></div>';
  var j=document.getElementById('bztJump');if(j){j.classList.add('bzt-jump','bzg')}else{j=document.createElement('div');j.id='bztJump';j.style.display='none';document.body.appendChild(j)}
  var tb=document.getElementById('bztTable');var fill=!tb||!tb.children.length;if(!tb){tb=document.createElement('tbody');tb.id='bztTable';tb.style.display='none';document.body.appendChild(tb)}else if(!fill){tb.id='bztTableStatic';tb=document.createElement('tbody');tb.id='bztTable';tb.style.display='none';document.body.appendChild(tb)}
  var w=document.createElement('div');w.className='bzg';w.innerHTML="<div class=\"bzt-modal\" id=\"bztModal\" role=\"dialog\" aria-modal=\"true\" aria-label=\"Template full screen preview\">\n  <div class=\"bzt-modal-bar\"><b id=\"bztModalTitle\"></b><div class=\"bzt-actions\"><button class=\"bzt-btn primary\" type=\"button\" id=\"bztModalCopy\">Copy HTML</button><button class=\"bzt-btn\" type=\"button\" id=\"bztModalClose\">Close \u2715</button></div></div>\n  <iframe id=\"bztModalFrame\" title=\"Full screen template preview\"></iframe>\n</div>"+'<div class="bzt-toast" id="bztToast" role="status"></div>';while(w.firstChild){document.body.appendChild(w.firstChild)}
  document.getElementById('bztModal').classList.add('bzg');document.getElementById('bztToast').classList.add('bzg');
// ===== Bzen B2B SaaS landing page templates =====
// Each template is a function of a color system that returns a complete HTML document.
var BZT = (function(){
var BASE = "*{box-sizing:border-box;margin:0;padding:0}html{-webkit-text-size-adjust:100%;overflow-x:hidden}body{background:var(--bg);color:var(--text);font-family:var(--font);line-height:1.6;-webkit-font-smoothing:antialiased;overflow-x:hidden}a{color:inherit;text-decoration:none}img,svg{display:block}"+
".wrap{max-width:1160px;margin:0 auto;padding:0 24px}section{padding:88px 0}h1,h2,h3{letter-spacing:-.02em;line-height:1.1;font-family:var(--display)}"+
".btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:13px 20px;border-radius:var(--radius);background:var(--primary);color:var(--on-primary);font:600 15px/1.2 var(--font);border:1px solid transparent;cursor:pointer;white-space:nowrap;transition:transform .2s cubic-bezier(.5,1,.89,1),filter .2s cubic-bezier(.5,1,.89,1)}.btn:hover{transform:translateY(-1px);filter:brightness(1.08)}.btn.ghost{background:transparent;color:var(--text);border-color:var(--border)}"+
".muted{color:var(--muted)}.eyebrow{display:inline-block;font-size:13px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--primary)}"+
".gt{background:linear-gradient(100deg,color-mix(in oklab,var(--g1) 85%,var(--text)),color-mix(in oklab,var(--g2) 70%,var(--text)) 60%,color-mix(in oklab,var(--g3) 70%,var(--text)));-webkit-background-clip:text;background-clip:text;color:transparent}"+
"nav.top{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:22px 0}.logo{display:flex;align-items:center;gap:10px;font:800 19px/1 var(--display);letter-spacing:-.02em}.mark{width:28px;height:28px;border-radius:8px;background:linear-gradient(135deg,var(--g1),var(--g2) 60%,var(--g3))}.links{display:flex;gap:28px;font-size:15px;color:var(--muted)}.navr{display:flex;align-items:center;gap:18px;font-size:15px;font-weight:600}.navr .btn{padding:10px 16px;font-size:14px}"+
".logos{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:18px 44px;color:var(--muted)}.wm{display:flex;align-items:center;gap:7px;font-size:18px}.wm svg{width:20px;height:20px}.logos-label{text-align:center;font-size:13px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin-bottom:24px}"+
".form{display:flex;gap:8px;padding:6px;background:var(--surface);border:1px solid var(--border);border-radius:calc(var(--radius) + 5px);max-width:470px}.form input{flex:1;min-width:0;background:transparent;border:0;outline:none;color:var(--text);font:500 15px var(--font);padding:0 12px}.form input::placeholder{color:var(--muted)}"+
"footer.foot{border-top:1px solid var(--border);padding:36px 0;color:var(--muted);font-size:14px}footer.foot .wrap{display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap}footer.foot nav{display:flex;gap:22px}"+
".ico{width:44px;height:44px;border-radius:12px;display:grid;place-items:center;background:color-mix(in oklab,var(--primary) 14%,transparent);color:var(--primary)}.ico svg{width:22px;height:22px}"+
"@media(max-width:760px){.links,.navr .hide{display:none}section{padding:64px 0}.form{flex-direction:column;gap:10px;padding:0;background:none;border:0;box-shadow:none}.form input{padding:15px 18px;font-size:16px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius)}.form input:focus{border-color:var(--primary);box-shadow:0 0 0 3px color-mix(in oklab,var(--primary) 20%,transparent)}.form .btn{padding:15px 20px;font-size:16px}.logos{gap:14px 28px}.wm{font-size:16px}}@media (prefers-reduced-motion:reduce){*{transition:none!important}}";

var LOGOS = '<div class="logos">'+
 '<span class="wm" style="font-weight:800;letter-spacing:-.03em"><svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 1 19 18H1z"/></svg>Vertexa</span>'+
 '<span class="wm" style="font-weight:600;font-style:italic"><svg viewBox="0 0 20 20" fill="currentColor"><circle cx="10" cy="10" r="9"/></svg>Hollow Pine</span>'+
 '<span class="wm" style="font-weight:700;letter-spacing:.12em;font-size:15px">OAKRIDGE</span>'+
 '<span class="wm" style="font-weight:500"><svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 1l9 9-9 9-9-9z"/></svg>kitebase</span>'+
 '<span class="wm" style="font-weight:800"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="3"><circle cx="10" cy="10" r="7"/></svg>Meridian</span>'+
 '<span class="wm" style="font-weight:700;letter-spacing:-.02em"><svg viewBox="0 0 20 20" fill="currentColor"><rect x="2" y="2" width="7" height="7" rx="2"/><rect x="11" y="11" width="7" height="7" rx="2"/></svg>Polarlab</span></div>';

var I = {
 check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
 chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg>',
 shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/></svg>',
 bolt:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>',
 layers:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/></svg>',
 chat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/></svg>'
};

function foot(name){return '<footer class="foot"><div class="wrap"><div class="logo"><span class="mark"></span>'+name+'</div><nav><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Contact</a></nav><span>© 2026 '+name+'. All rights reserved.</span></div></footer>'}

function doc(t, sys, css, body){
  var g = sys.g.length===2 ? [sys.g[0],sys.g[1],sys.g[1]] : sys.g;
  var vars = ':root{--bg:'+sys.bg+';--surface:'+sys.surface+';--text:'+sys.text+';--muted:'+sys.muted+';--primary:'+sys.primary+';--on-primary:'+sys.on+';--accent:'+sys.accent+';--border:'+sys.border+';--g1:'+g[0]+';--g2:'+g[1]+';--g3:'+g[2]+';--font:'+t.font+';--display:'+t.display+';--radius:'+t.radius+'}';
  return '<!DOCTYPE html>\n<!-- '+t.name+' template · '+sys.name+' color system · free from bzen.io/guides/b2b-saas-landing-page-templates -->\n<!-- Logos, names, numbers and quotes are placeholders. Replace them with your own before you publish. -->\n'+
  '<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n<title>'+t.product+' | '+t.tagline+'</title>\n<meta name="description" content="'+t.tagline+'">\n'+
  '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link href="'+t.fonts+'" rel="stylesheet">\n'+
  '<style>\n/* Color system: '+sys.name+'. Change these values to re-skin the whole page. */\n'+vars+'\n'+BASE+'\n'+css+'\n</style>\n</head>\n<body>\n'+body+'\n</body>\n</html>';
}

// ---------- 1. LAUNCH ----------
var launch = {
 id:'launch', name:'Launch', product:'Signalboard', tagline:'Customer feedback, sorted by revenue',
 fonts:'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap',
 font:'"Plus Jakarta Sans",system-ui,sans-serif', display:'"Plus Jakarta Sans",system-ui,sans-serif', radius:'10px',
 blurb:'Split hero with a product dashboard mockup, email capture, logo cloud, three benefits, a testimonial and a closing CTA.',
 best:'Product-led SaaS with a self-serve trial or waitlist',
 layout:'1) Top nav: logo left, 4 text links center, "Sign in" and a small primary button right. 2) Split hero: left column has an eyebrow, a 2-line headline with the last phrase in a subtle gradient, a short subhead, a single email field with an inline primary button, and a star-rating line; right column has a product dashboard mockup (browser bar, sidebar, two KPI cards, a gradient bar chart and a ranked list) with a soft gradient glow behind it. 3) Logo cloud of 6 customer logos under a small uppercase label. 4) Benefits: centered eyebrow and headline, then 3 cards with an icon, title and two-sentence description. 5) One large centered testimonial with avatar, name and title. 6) Closing CTA card with headline, subhead and the same email form. 7) Simple footer.',
 systems:[
  {name:'Indigo Light',bg:'#FFFFFF',surface:'#F6F7FB',text:'#0F172A',muted:'#475569',primary:'#4F46E5',on:'#FFFFFF',accent:'#06B6D4',border:'#E2E8F0',g:['#4F46E5','#06B6D4']},
  {name:'Midnight Indigo',bg:'#0B1020',surface:'#131A2E',text:'#E8ECF8',muted:'#9AA4BF',primary:'#818CF8',on:'#0B1020',accent:'#22D3EE',border:'#232C45',g:['#818CF8','#22D3EE']},
  {name:'Citrus',bg:'#FFFBEB',surface:'#FFFFFF',text:'#1C1917',muted:'#57534E',primary:'#C2410C',on:'#FFFFFF',accent:'#84CC16',border:'#F5E9C9',g:['#F97316','#FACC15']}
 ],
 build:function(s){
  var bars=[38,52,44,66,58,74,62,88,70,82,94,78].map(function(h){return '<i style="height:'+h+'%"></i>'}).join('');
  var css=".hero{padding:48px 0 80px;position:relative}.hero .wrap{display:grid;grid-template-columns:1.05fr 1fr;gap:56px;align-items:center}.hero h1{font-size:clamp(38px,5vw,60px);font-weight:800;margin:16px 0 18px;letter-spacing:-.035em}.hero p.sub{font-size:18px;color:var(--muted);max-width:500px;margin-bottom:28px}.rating{display:flex;align-items:center;gap:10px;margin-top:18px;font-size:14px;color:var(--muted)}.rating b{color:var(--accent);letter-spacing:2px;font-size:15px}"+
  ".mock{position:relative}.mock:before{content:'';position:absolute;inset:8% -6% -6% 6%;background:radial-gradient(closest-side,var(--g1),transparent),radial-gradient(closest-side at 80% 70%,var(--g2),transparent);opacity:.35;filter:blur(50px)}.app{position:relative;background:var(--surface);border:1px solid var(--border);border-radius:18px;box-shadow:0 30px 60px -24px rgba(0,0,0,.35);overflow:hidden}.bar{display:flex;align-items:center;gap:6px;padding:12px 14px;border-bottom:1px solid var(--border)}.bar i{width:10px;height:10px;border-radius:50%;background:var(--border)}.bar span{margin-left:10px;font-size:12px;color:var(--muted);background:var(--bg);padding:3px 10px;border-radius:6px}"+
  ".appbody{display:grid;grid-template-columns:54px 1fr}.appbody aside{border-right:1px solid var(--border);padding:16px 12px;display:grid;gap:12px;align-content:start}.appbody aside b{height:26px;border-radius:8px;background:var(--border)}.appbody aside b.on{background:var(--primary)}.main{padding:18px;display:grid;gap:14px}.kpis{display:grid;grid-template-columns:1fr 1fr;gap:12px}.kpis div{background:var(--bg);border:1px solid var(--border);border-radius:12px;padding:12px 14px}.kpis small{display:block;font-size:11px;color:var(--muted)}.kpis strong{font-size:22px;letter-spacing:-.02em}.kpis em{font-style:normal;font-size:12px;font-weight:700;color:var(--primary);margin-left:6px}"+
  ".chart{height:120px;display:flex;align-items:flex-end;gap:7px;background:var(--bg);border:1px solid var(--border);border-radius:12px;padding:14px}.chart i{flex:1;border-radius:5px 5px 2px 2px;background:linear-gradient(var(--g1),var(--g2))}.rows{display:grid;gap:8px}.rows div{display:flex;align-items:center;gap:10px;font-size:13px;background:var(--bg);border:1px solid var(--border);border-radius:10px;padding:9px 12px}.rows i{width:8px;height:8px;border-radius:50%;background:var(--accent)}.rows span{margin-left:auto;font-weight:700;font-size:12px;color:var(--primary)}"+
  ".logos-sec{padding:16px 0 72px}.feat{background:var(--surface);border-top:1px solid var(--border);border-bottom:1px solid var(--border)}.center{text-align:center}.feat h2,.quote h2{font-size:clamp(28px,3.6vw,42px);font-weight:800;margin:12px auto 48px;max-width:20ch}.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.card{background:var(--bg);border:1px solid var(--border);border-radius:16px;padding:28px}.card h3{font-size:19px;margin:18px 0 8px}.card p{color:var(--muted);font-size:15px}"+
  ".quote blockquote{font:700 clamp(22px,2.8vw,32px)/1.35 var(--display);letter-spacing:-.02em;max-width:820px;margin:0 auto 28px}.who{display:flex;align-items:center;justify-content:center;gap:12px;font-size:15px}.av{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,var(--g1),var(--g2));display:grid;place-items:center;color:#fff;font-weight:800}"+
  ".cta{padding-top:0}.ctabox{position:relative;overflow:hidden;background:var(--surface);border:1px solid var(--border);border-radius:24px;padding:64px 32px;text-align:center}.ctabox:before{content:'';position:absolute;inset:-40% 10% auto;height:300px;background:radial-gradient(closest-side,var(--g1),transparent 70%),radial-gradient(closest-side at 70% 50%,var(--g2),transparent 70%);opacity:.25;filter:blur(40px)}.ctabox *{position:relative}.ctabox h2{font-size:clamp(28px,3.6vw,44px);font-weight:800;margin-bottom:12px}.ctabox p{color:var(--muted);margin-bottom:26px;font-size:17px}.ctabox .form{margin:0 auto}"+
  "@media(max-width:900px){.hero .wrap{grid-template-columns:1fr;gap:44px}.cards{grid-template-columns:1fr}}";
  var form='<form class="form" onsubmit="return false"><input type="email" placeholder="Work email" aria-label="Work email"><button class="btn" type="submit">Start free trial</button></form>';
  var body='<div class="wrap"><nav class="top"><a class="logo" href="#"><span class="mark"></span>Signalboard</a><div class="links"><a href="#">Product</a><a href="#">Integrations</a><a href="#">Pricing</a><a href="#">Customers</a></div><div class="navr"><a class="hide" href="#">Sign in</a><a class="btn" href="#">Start free</a></div></nav></div>'+
  '<header class="hero"><div class="wrap"><div><span class="eyebrow">Customer feedback, sorted by revenue</span><h1>Know which requests are <span class="gt">worth building</span></h1><p class="sub">Signalboard pulls feedback from support, sales calls and Slack, then ranks every request by the revenue behind it. Your roadmap, backed by numbers.</p>'+form+'<div class="rating"><b>★★★★★</b>Rated 4.8 out of 5 by 300+ product teams</div></div>'+
  '<div class="mock"><div class="app"><div class="bar"><i></i><i></i><i></i><span>app.signalboard.io/insights</span></div><div class="appbody"><aside><b class="on"></b><b></b><b></b><b></b><b></b></aside><div class="main"><div class="kpis"><div><small>Requests this week</small><strong>1,284</strong><em>+18%</em></div><div><small>Revenue at stake</small><strong>$412k</strong><em>+6%</em></div></div><div class="chart">'+bars+'</div><div class="rows"><div><i></i>Bulk CSV export<span>$96k ARR</span></div><div><i></i>SSO for teams<span>$81k ARR</span></div><div><i></i>Slack alerts<span>$44k ARR</span></div></div></div></div></div></div></div></header>'+
  '<div class="logos-sec"><div class="wrap"><p class="logos-label">Product teams at 2,000+ companies use Signalboard</p>'+LOGOS+'</div></div>'+
  '<section class="feat"><div class="wrap center"><span class="eyebrow">Why teams switch</span><h2>Stop guessing what to build next</h2><div class="cards" style="text-align:left">'+
  '<div class="card"><div class="ico">'+I.layers+'</div><h3>Every source, one inbox</h3><p>Connect Intercom, Zendesk, Gong and Slack in minutes. Duplicate requests merge automatically.</p></div>'+
  '<div class="card"><div class="ico">'+I.chart+'</div><h3>Ranked by revenue</h3><p>See the ARR, deal stage and churn risk behind every request, pulled live from your CRM.</p></div>'+
  '<div class="card"><div class="ico">'+I.chat+'</div><h3>Close the loop</h3><p>When you ship, Signalboard tells every customer who asked. Happy customers, fewer tickets.</p></div></div></div></section>'+
  '<section class="quote"><div class="wrap center"><blockquote>"We used to argue about the roadmap every quarter. Now we open Signalboard, sort by revenue and the conversation takes ten minutes."</blockquote><div class="who"><span class="av">DO</span><span><b>Dana Okafor</b><br><span class="muted">Head of Product, Kitebase</span></span></div></div></section>'+
  '<section class="cta"><div class="wrap"><div class="ctabox"><h2>Build what your customers will pay for</h2><p>Free for 14 days. Set up in under 10 minutes.</p>'+form+'</div></div></section>'+foot('Signalboard');
  return doc(this,s,css,body);
 }
};

// ---------- 2. DEVTOOL ----------
var devtool = {
 id:'devtool', name:'Devtool', product:'Shipyard', tagline:'Live previews for every pull request',
 fonts:'https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap',
 font:'"Inter Tight",system-ui,sans-serif', display:'"Inter Tight",system-ui,sans-serif', radius:'8px',
 blurb:'Centered hero with an install command and a terminal window, a six-card feature grid with mono labels, and three-tier pricing.',
 best:'Developer tools, APIs, infrastructure and open-source companies',
 layout:'1) Top nav with a monospace-style logo, text links and a GitHub star count next to a primary button. 2) Centered hero: a small monospace version badge, a large headline with one phrase in a subtle gradient, a subhead, then a primary button beside a copyable install command box. 3) A terminal window mockup under the hero showing a deploy command and colored success lines, with a soft glow behind it. 4) Logo cloud. 5) Feature grid: 6 cards in 3 columns, each with a monospace label like "01 / PREVIEWS", a title and a short description. 6) Pricing: 3 tiers, the middle one highlighted with a primary border and a "Most popular" tag, each with a checklist. 7) Footer.',
 systems:[
  {name:'Midnight Lime',bg:'#0B0F0C',surface:'#141B16',text:'#EAF2EC',muted:'#9BA89F',primary:'#A3E635',on:'#0B0F0C',accent:'#22D3EE',border:'#243028',g:['#A3E635','#22D3EE']},
  {name:'Lagoon',bg:'#F4FFFC',surface:'#FFFFFF',text:'#042F2E',muted:'#3D5F5B',primary:'#0F9F8F',on:'#022C28',accent:'#0E7490',border:'#CCF2EA',g:['#2DD4BF','#22D3EE','#38BDF8']},
  {name:'Synthwave',bg:'#12071F',surface:'#1D0F33',text:'#F5EEFF',muted:'#B7A6D6',primary:'#F472B6',on:'#12071F',accent:'#22D3EE',border:'#33204F',g:['#F472B6','#A855F7','#22D3EE']}
 ],
 build:function(s){
  var mono='"JetBrains Mono",ui-monospace,Menlo,monospace';
  var css=".mono{font-family:"+mono+"}.logo{font-family:"+mono+";font-size:17px;font-weight:700}.logo .mark{border-radius:5px;width:22px;height:22px}.star{font:500 13px "+mono+";color:var(--muted);border:1px solid var(--border);border-radius:6px;padding:7px 10px}"+
  ".hero{text-align:center;padding:64px 0 40px;position:relative}.badge{display:inline-flex;gap:8px;align-items:center;font:500 13px "+mono+";color:var(--muted);border:1px solid var(--border);background:var(--surface);border-radius:999px;padding:6px 14px}.badge i{width:7px;height:7px;border-radius:50%;background:var(--primary);box-shadow:0 0 12px var(--primary)}.hero h1{font-size:clamp(40px,6.2vw,74px);font-weight:800;letter-spacing:-.04em;line-height:1.02;margin:24px auto 20px;max-width:16ch}.hero p{font-size:19px;color:var(--muted);max-width:580px;margin:0 auto 32px}"+
  ".acts{display:flex;justify-content:center;gap:12px;flex-wrap:wrap}.cmd{display:inline-flex;align-items:center;gap:12px;font:500 14px "+mono+";border:1px solid var(--border);background:var(--surface);border-radius:var(--radius);padding:12px 16px}.cmd b{color:var(--primary)}.cmd span{color:var(--muted);font-size:12px;border-left:1px solid var(--border);padding-left:12px}"+
  ".term-wrap{position:relative;max-width:820px;margin:56px auto 0;text-align:left}.term-wrap:before{content:'';position:absolute;inset:10% 5% -10%;background:radial-gradient(closest-side,var(--g1),transparent),radial-gradient(closest-side at 80% 60%,var(--g3),transparent);opacity:.22;filter:blur(60px)}.term{position:relative;background:var(--surface);border:1px solid var(--border);border-radius:12px;overflow:hidden;box-shadow:0 30px 60px -30px rgba(0,0,0,.5)}.term .tb{display:flex;gap:6px;padding:12px 14px;border-bottom:1px solid var(--border)}.term .tb i{width:10px;height:10px;border-radius:50%;background:var(--border)}.term pre{font:400 14px/1.9 "+mono+";padding:20px 24px;color:var(--text);white-space:pre-wrap}.term .p{color:var(--muted)}.term .ok{color:var(--primary)}.term .ac{color:var(--accent)}"+
  ".logos-sec{padding:72px 0 24px}.grid h2,.price h2{font-size:clamp(28px,3.8vw,44px);font-weight:800;letter-spacing:-.03em;margin:12px 0 44px;max-width:18ch}.fgrid{display:grid;grid-template-columns:repeat(3,1fr);border:1px solid var(--border);border-radius:14px;overflow:hidden;background:var(--border);gap:1px}.f{background:var(--bg);padding:30px}.f small{font:500 12px "+mono+";color:var(--primary);letter-spacing:.06em}.f h3{font-size:19px;margin:14px 0 8px}.f p{color:var(--muted);font-size:15px}"+
  ".tiers{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;align-items:start}.tier{background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:30px;position:relative}.tier.pop{border:2px solid var(--primary)}.tier .tag{position:absolute;top:-12px;left:30px;background:var(--primary);color:var(--on-primary);font:700 11px "+mono+";padding:4px 10px;border-radius:999px;letter-spacing:.06em}.tier h3{font-size:18px}.tier .amt{font:800 44px/1 var(--display);letter-spacing:-.03em;margin:16px 0 4px}.tier .amt span{font-size:15px;font-weight:500;color:var(--muted)}.tier ul{list-style:none;margin:22px 0 26px;display:grid;gap:10px;font-size:15px}.tier li{display:flex;gap:10px;align-items:center}.tier li svg{width:16px;height:16px;color:var(--primary);flex:none}.tier .btn{width:100%}"+
  "@media(max-width:900px){.fgrid,.tiers{grid-template-columns:1fr}.star{display:none}}";
  var li=function(t){return '<li>'+I.check+t+'</li>'};
  var body='<div class="wrap"><nav class="top"><a class="logo" href="#"><span class="mark"></span>~/shipyard</a><div class="links"><a href="#">Docs</a><a href="#">Changelog</a><a href="#">Pricing</a><a href="#">Blog</a></div><div class="navr"><span class="star hide">★ 18.2k</span><a class="btn" href="#">Start deploying</a></div></nav></div>'+
  '<header class="hero"><div class="wrap"><span class="badge"><i></i>v3.2 · edge previews are live</span><h1>Every pull request gets a <span class="gt">live preview</span></h1><p>Shipyard builds each branch, runs your tests and posts a shareable URL to the PR. Reviewers click, not clone.</p><div class="acts"><a class="btn" href="#">Start deploying, free</a><span class="cmd"><b>$</b>npm i -g shipyard<span>copy</span></span></div>'+
  '<div class="term-wrap"><div class="term"><div class="tb"><i></i><i></i><i></i></div><pre><span class="p">$</span> shipyard deploy --pr 482\n<span class="ok">✓</span> Building app <span class="p">(12.4s)</span>\n<span class="ok">✓</span> Running 214 tests <span class="p">(all passed)</span>\n<span class="ok">✓</span> Preview ready <span class="ac">→ https://pr-482.shipyard.dev</span>\n<span class="p">  Comment posted to GitHub #482</span></pre></div></div></div></header>'+
  '<div class="logos-sec"><div class="wrap"><p class="logos-label">Shipping with Shipyard</p>'+LOGOS+'</div></div>'+
  '<section class="grid"><div class="wrap"><span class="eyebrow mono">Features</span><h2>Everything between git push and production</h2><div class="fgrid">'+
  '<div class="f"><small>01 / PREVIEWS</small><h3>A URL for every branch</h3><p>Full-stack previews with seeded databases, torn down when the PR closes.</p></div>'+
  '<div class="f"><small>02 / SPEED</small><h3>Cached, parallel builds</h3><p>Remote caching cuts most builds to under 20 seconds after the first run.</p></div>'+
  '<div class="f"><small>03 / TESTS</small><h3>Tests that block bad merges</h3><p>Run your suite on every preview and fail the check before anything ships.</p></div>'+
  '<div class="f"><small>04 / REVIEW</small><h3>Comments on the page</h3><p>Designers and PMs leave feedback right on the preview. It syncs to the PR.</p></div>'+
  '<div class="f"><small>05 / SECRETS</small><h3>Scoped environment vars</h3><p>Per-branch secrets, encrypted at rest, never printed in logs.</p></div>'+
  '<div class="f"><small>06 / ROLLBACK</small><h3>One-command rollback</h3><p>Every deploy is immutable. Roll back to any version in about a second.</p></div></div></div></section>'+
  '<section class="price"><div class="wrap"><span class="eyebrow mono">Pricing</span><h2>Free until your team grows</h2><div class="tiers">'+
  '<div class="tier"><h3>Hobby</h3><div class="amt">$0<span> /month</span></div><p class="muted">For side projects and solo devs.</p><ul>'+li('3 active previews')+li('Community support')+li('GitHub integration')+'</ul><a class="btn ghost" href="#">Get started</a></div>'+
  '<div class="tier pop"><span class="tag">MOST POPULAR</span><h3>Team</h3><div class="amt">$29<span> /seat/month</span></div><p class="muted">For teams shipping every day.</p><ul>'+li('Unlimited previews')+li('Remote build cache')+li('Preview comments')+li('Priority support')+'</ul><a class="btn" href="#">Start 14-day trial</a></div>'+
  '<div class="tier"><h3>Enterprise</h3><div class="amt">Custom</div><p class="muted">For security reviews and scale.</p><ul>'+li('SSO and audit logs')+li('Self-hosted runners')+li('99.99% uptime SLA')+'</ul><a class="btn ghost" href="#">Talk to sales</a></div></div></div></section>'+foot('Shipyard');
  return doc(this,s,css,body);
 }
};

// ---------- 3. TRUST ----------
var trust = {
 id:'trust', name:'Trust', product:'Ledgerline', tagline:'Spend management your auditors will love',
 fonts:'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap',
 font:'"IBM Plex Sans",system-ui,sans-serif', display:'"IBM Plex Sans",system-ui,sans-serif', radius:'8px',
 blurb:'Announcement bar, split hero with a card and approvals UI, stats band, three-step how-it-works, comparison table and FAQ.',
 best:'Fintech, compliance, HR and security products with longer sales cycles',
 layout:'1) Thin announcement bar with a compliance message and link. 2) Top nav. 3) Split hero: left has an eyebrow, a headline with one phrase in a subtle gradient, a subhead, a primary "Book a demo" button and a ghost "See pricing" button, then three small check items; right has a gradient corporate card and an approvals panel with three rows and status pills. 4) Stats band with 4 big numbers separated by dividers. 5) How it works: 3 numbered steps in a row. 6) Comparison table: product vs. spreadsheets, 5 rows with check marks. 7) FAQ with 4 expandable questions. 8) Closing CTA band and footer.',
 systems:[
  {name:'Sky Trust',bg:'#F5F9FF',surface:'#FFFFFF',text:'#0A1F44',muted:'#475775',primary:'#1D4ED8',on:'#FFFFFF',accent:'#0EA5E9',border:'#DCE6F5',g:['#1D4ED8','#38BDF8']},
  {name:'Forest Gold',bg:'#0E1F17',surface:'#173026',text:'#F2F0E6',muted:'#A9B8AE',primary:'#E9C46A',on:'#0E1F17',accent:'#8FBF9F',border:'#264536',g:['#FCE7A1','#E9C46A','#B98A1E']},
  {name:'Slate Mono',bg:'#FFFFFF',surface:'#F8FAFC',text:'#020617',muted:'#475569',primary:'#0F172A',on:'#FFFFFF',accent:'#10B981',border:'#E2E8F0',g:['#0F172A','#10B981']}
 ],
 build:function(s){
  var css=".ann{background:var(--surface);border-bottom:1px solid var(--border);text-align:center;font-size:14px;padding:10px 16px}.ann b{color:var(--primary)}"+
  ".hero{padding:56px 0 80px}.hero .wrap{display:grid;grid-template-columns:1.1fr .9fr;gap:56px;align-items:center}.hero h1{font-size:clamp(36px,4.8vw,56px);font-weight:700;margin:14px 0 18px}.hero p.sub{font-size:18px;color:var(--muted);max-width:520px;margin-bottom:28px}.acts{display:flex;gap:12px;flex-wrap:wrap}.ticks{display:flex;gap:20px;flex-wrap:wrap;margin-top:24px;font-size:14px;color:var(--muted)}.ticks span{display:flex;gap:6px;align-items:center}.ticks svg{width:16px;height:16px;color:var(--accent)}"+
  ".stack{position:relative;display:grid;gap:16px}.ccard{position:relative;overflow:hidden;aspect-ratio:1.6;max-width:340px;border-radius:16px;padding:22px;color:var(--on-primary);background:linear-gradient(135deg,var(--g1),var(--g2) 55%,var(--g3));box-shadow:0 24px 48px -20px rgba(0,0,0,.4);display:flex;flex-direction:column;justify-content:space-between;transform:rotate(-4deg);margin-left:12px}.ccard:after{content:'';position:absolute;inset:0;background:linear-gradient(115deg,transparent 30%,rgba(255,255,255,.35) 45%,transparent 60%);pointer-events:none}.ccard .chip{width:38px;height:28px;border-radius:6px;background:linear-gradient(135deg,rgba(255,255,255,.7),rgba(255,255,255,.25));box-shadow:inset 0 0 0 1px color-mix(in oklab,var(--on-primary) 20%,transparent)}.ccard b{font-size:18px;letter-spacing:.12em}.ccard div{display:flex;justify-content:space-between;font-size:13px;opacity:.9}"+
  ".appr{background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:18px;box-shadow:0 20px 40px -24px rgba(0,0,0,.3);margin-top:-22px;margin-left:72px;position:relative}.appr h4{font-size:14px;margin-bottom:12px}.appr .r{display:flex;align-items:center;gap:10px;padding:10px 0;border-top:1px solid var(--border);font-size:14px}.appr .r i{width:30px;height:30px;border-radius:8px;background:var(--bg);border:1px solid var(--border)}.appr .r span{margin-left:auto;font-size:12px;font-weight:600;padding:4px 9px;border-radius:999px;background:color-mix(in oklab,var(--accent) 18%,transparent);color:var(--text)}.appr .r span.wait{background:color-mix(in oklab,var(--primary) 14%,transparent)}"+
  ".stats{padding:0 0 88px}.sgrid{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--border);border-bottom:1px solid var(--border)}.sgrid div{padding:30px 24px;border-left:1px solid var(--border)}.sgrid div:first-child{border-left:0}.sgrid b{display:block;font-size:clamp(28px,3.4vw,40px);font-weight:700;letter-spacing:-.02em}.sgrid span{color:var(--muted);font-size:15px}"+
  ".how{background:var(--surface);border-top:1px solid var(--border);border-bottom:1px solid var(--border)}h2.t{font-size:clamp(28px,3.6vw,42px);font-weight:700;margin:12px 0 44px;max-width:20ch}.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:28px}.step .n{width:40px;height:40px;border-radius:50%;display:grid;place-items:center;background:var(--primary);color:var(--on-primary);font-weight:700;margin-bottom:18px}.step h3{font-size:19px;margin-bottom:8px}.step p{color:var(--muted);font-size:15px}"+
  "table{width:100%;border-collapse:separate;border-spacing:0;border:1px solid var(--border);border-radius:14px;overflow:hidden;font-size:15px;background:var(--surface)}th,td{padding:16px 20px;text-align:left;border-bottom:1px solid var(--border)}tr:last-child td{border-bottom:0}th{font-size:14px;color:var(--muted);font-weight:600;background:var(--bg)}th.us{color:var(--primary)}td.y{color:var(--accent);font-weight:700}td.n{color:var(--muted)}"+
  ".faq details{border-bottom:1px solid var(--border);padding:20px 0}.faq summary{cursor:pointer;font-weight:600;font-size:17px;list-style:none;display:flex;justify-content:space-between;gap:16px}.faq summary:after{content:'+';color:var(--primary);font-size:22px;line-height:1}.faq details[open] summary:after{content:'\\2013'}.faq p{color:var(--muted);margin-top:10px;max-width:720px}"+
  ".band{padding-top:0}.bandbox{display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap;background:var(--surface);border:1px solid var(--border);border-radius:18px;padding:40px}.bandbox h2{font-size:clamp(24px,3vw,34px);font-weight:700;max-width:22ch}"+
  "@media(max-width:900px){.hero .wrap,.steps{grid-template-columns:1fr}.sgrid{grid-template-columns:1fr 1fr}.sgrid div:nth-child(3){border-left:0}.sgrid div:nth-child(n+3){border-top:1px solid var(--border)}.appr{margin-left:24px}th,td{padding:12px}}";
  var tick=function(t){return '<span>'+I.check+t+'</span>'};
  var row=function(a,b,c){return '<tr><td>'+a+'</td><td class="y">'+b+'</td><td class="n">'+c+'</td></tr>'};
  var q=function(a,b){return '<details><summary>'+a+'</summary><p>'+b+'</p></details>'};
  var body='<div class="ann">SOC 2 Type II certified. <b><a href="#">Read the report →</a></b></div>'+
  '<div class="wrap"><nav class="top"><a class="logo" href="#"><span class="mark"></span>Ledgerline</a><div class="links"><a href="#">Cards</a><a href="#">Bill pay</a><a href="#">Accounting</a><a href="#">Pricing</a></div><div class="navr"><a class="hide" href="#">Log in</a><a class="btn" href="#">Book a demo</a></div></nav></div>'+
  '<header class="hero"><div class="wrap"><div><span class="eyebrow">Spend management</span><h1>Close the month <span class="gt">without the spreadsheet chaos</span></h1><p class="sub">Corporate cards, approvals and bill pay in one system that codes every transaction for you. Finance gets control. Everyone else gets their time back.</p><div class="acts"><a class="btn" href="#">Book a demo</a><a class="btn ghost" href="#">See pricing</a></div><div class="ticks">'+tick('No setup fees')+tick('Cancel anytime')+tick('Bank-level security')+'</div></div>'+
  '<div class="stack"><div class="ccard"><div><span class="chip"></span><span>LEDGERLINE</span></div><b>•••• 4417</b><div><span>Maya Chen</span><span>Limit $5,000</span></div></div><div class="appr"><h4>Waiting for approval</h4><div class="r"><i></i>Figma annual plan<span>Approved</span></div><div class="r"><i></i>Team offsite deposit<span class="wait">Pending</span></div><div class="r"><i></i>AWS, October<span>Approved</span></div></div></div></div></header>'+
  '<div class="stats"><div class="wrap"><div class="sgrid"><div><b>$2.1B</b><span>in spend managed</span></div><div><b>4,800+</b><span>finance teams</span></div><div><b>9 days</b><span>faster month-end close</span></div><div><b>99.99%</b><span>platform uptime</span></div></div></div></div>'+
  '<section class="how"><div class="wrap"><span class="eyebrow">How it works</span><h2 class="t">Live in a week, not a quarter</h2><div class="steps"><div class="step"><div class="n">1</div><h3>Connect your accounts</h3><p>Link your bank and accounting software. We import vendors, categories and policies.</p></div><div class="step"><div class="n">2</div><h3>Issue cards with rules</h3><p>Give every team a card with built-in limits, so nobody needs to ask permission for the small stuff.</p></div><div class="step"><div class="n">3</div><h3>Close in days</h3><p>Receipts match automatically and transactions sync coded. Review the exceptions and you are done.</p></div></div></div></section>'+
  '<section><div class="wrap"><span class="eyebrow">Compare</span><h2 class="t">Ledgerline vs. the spreadsheet</h2><table><thead><tr><th></th><th class="us">Ledgerline</th><th>Spreadsheets</th></tr></thead><tbody>'+row('Real-time spend visibility','✓','End of month')+row('Automatic receipt matching','✓','Manual')+row('Approval workflows','✓','Email threads')+row('Audit trail','✓','Partial')+row('Month-end close','2 to 3 days','2 weeks')+'</tbody></table></div></section>'+
  '<section style="padding-top:0"><div class="wrap faq"><span class="eyebrow">FAQ</span><h2 class="t">Questions finance teams ask</h2>'+q('How long does setup take?','Most teams are issuing cards within a week. Accounting sync usually takes a single afternoon.')+q('Which accounting tools do you integrate with?','QuickBooks, Xero, NetSuite and Sage Intacct, with two-way sync for categories and vendors.')+q('Is my data secure?','Ledgerline is SOC 2 Type II certified, encrypts data at rest and in transit and supports SSO.')+q('Is there a minimum company size?','No. Teams from 5 to 5,000 people use Ledgerline.')+'</div></section>'+
  '<section class="band"><div class="wrap"><div class="bandbox"><h2>See how much time your team gets back</h2><a class="btn" href="#">Book a 20-minute demo</a></div></div></section>'+foot('Ledgerline');
  return doc(this,s,css,body);
 }
};

// ---------- 4. STORY ----------
var story = {
 id:'story', name:'Story', product:'Fieldnote', tagline:'The research repository for UX teams',
 fonts:'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&display=swap',
 font:'Inter,system-ui,sans-serif', display:'"Instrument Serif",Georgia,serif', radius:'999px',
 blurb:'Editorial layout with a serif headline, a highlighted transcript card, a big pull quote, three case-study metrics and a features list.',
 best:'Research, content, design and collaboration tools that sell on taste',
 layout:'1) Top nav with a serif wordmark. 2) Split hero: left has a large serif headline with one italic word in the primary color, a subhead, a pill-shaped email field with an inline button and a small note; right has a "transcript" card with highlighted phrases and tag chips, slightly rotated, with a second card peeking behind it. 3) Logo cloud with an italic serif label. 4) Full-width pull quote on the surface color in large serif type, with the speaker below. 5) Three case-study cards, each with a large serif metric, a one-line result and a company name. 6) Two-column features: headline left, a list of 4 features with dividers right. 7) Centered serif CTA with a button. 8) Footer.',
 systems:[
  {name:'Terracotta Sand',bg:'#FBF6F0',surface:'#FFFFFF',text:'#2B1D16',muted:'#6B5348',primary:'#B93C0B',on:'#FFFFFF',accent:'#F59E0B',border:'#EADFD3',g:['#B93C0B','#F59E0B']},
  {name:'Ink & Rose',bg:'#141114',surface:'#1F1A1F',text:'#F5EDEF',muted:'#B9A9AE',primary:'#F9A8B8',on:'#141114',accent:'#E9C46A',border:'#33292F',g:['#F9A8B8','#E9C46A']},
  {name:'Sage',bg:'#F3F5EF',surface:'#FFFFFF',text:'#1D261F',muted:'#4E5B51',primary:'#3F6B4A',on:'#FFFFFF',accent:'#C08A3E',border:'#DCE2D5',g:['#3F6B4A','#A3B18A']}
 ],
 build:function(s){
  var css=".logo{font:400 28px/1 var(--display);letter-spacing:-.01em}.logo .mark{border-radius:50%;width:22px;height:22px}h1,h2,h3{font-weight:400}"+
  ".hero{padding:56px 0 88px}.hero .wrap{display:grid;grid-template-columns:1.15fr .85fr;gap:64px;align-items:center}.hero h1{font-size:clamp(48px,6.8vw,88px);line-height:.98;letter-spacing:-.02em;margin-bottom:24px}.hero h1 em{color:var(--primary);font-style:italic}.hero p.sub{font-size:19px;color:var(--muted);max-width:500px;margin-bottom:30px}.note{font-size:14px;color:var(--muted);margin-top:14px}@media(min-width:761px){.form{border-radius:999px;padding:6px 6px 6px 10px}}"+
  ".paper{position:relative}.paper .back{position:absolute;inset:18px -14px -18px 14px;background:var(--surface);border:1px solid var(--border);border-radius:18px;transform:rotate(4deg)}.tcard{position:relative;background:var(--surface);border:1px solid var(--border);border-radius:18px;padding:26px;box-shadow:0 24px 50px -28px rgba(0,0,0,.35);transform:rotate(-2deg)}.tcard h4{font:600 13px/1 var(--font);letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin-bottom:16px}.tcard p{font:400 21px/1.5 var(--display);margin-bottom:14px}.tcard mark{background:color-mix(in oklab,var(--accent) 32%,transparent);color:inherit;padding:0 3px;border-radius:3px}.tags{display:flex;gap:8px;flex-wrap:wrap;margin-top:6px}.tags span{font-size:12px;font-weight:600;padding:5px 11px;border-radius:999px;border:1px solid var(--border);color:var(--muted)}.tags span:first-child{background:var(--primary);color:var(--on-primary);border-color:var(--primary)}"+
  ".logos-sec{padding:0 0 88px}.logos-label{font:italic 400 18px var(--display);text-transform:none;letter-spacing:0}"+
  ".pull{background:var(--surface);border-top:1px solid var(--border);border-bottom:1px solid var(--border);text-align:center}.pull blockquote{font:400 clamp(32px,4.6vw,56px)/1.12 var(--display);letter-spacing:-.015em;max-width:900px;margin:0 auto 28px}.pull blockquote:before{content:'\\201C';display:block;font-size:90px;line-height:.6;color:var(--primary);margin-bottom:18px}.pull cite{font-style:normal;color:var(--muted)}.pull cite b{color:var(--text)}"+
  "h2.t{font-size:clamp(36px,5vw,60px);line-height:1;letter-spacing:-.02em;margin:0 0 40px;max-width:16ch}.cases{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.case{border-top:2px solid var(--text);padding-top:22px}.case b{display:block;font:400 clamp(56px,7vw,84px)/1 var(--display);letter-spacing:-.02em;color:var(--primary)}.case p{font-size:17px;margin:12px 0 16px;max-width:26ch}.case span{font-size:14px;color:var(--muted);font-weight:600}"+
  ".two{display:grid;grid-template-columns:.9fr 1.1fr;gap:64px}.flist{list-style:none}.flist li{display:grid;grid-template-columns:56px 1fr;gap:8px;padding:22px 0;border-top:1px solid var(--border)}.flist li:last-child{border-bottom:1px solid var(--border)}.flist i{font:italic 400 22px var(--display);color:var(--primary)}.flist h3{font-size:26px;margin-bottom:6px}.flist p{color:var(--muted)}"+
  ".end{text-align:center;padding-top:40px}.end h2{font-size:clamp(42px,6vw,76px);letter-spacing:-.02em;max-width:16ch;margin:0 auto 28px}.end h2 em{color:var(--primary)}.btn{padding:15px 26px}"+
  "@media(max-width:900px){.hero .wrap,.two,.cases{grid-template-columns:1fr}.hero .wrap{gap:56px}.paper{margin:0 14px}}";
  var body='<div class="wrap"><nav class="top"><a class="logo" href="#"><span class="mark"></span>Fieldnote</a><div class="links"><a href="#">Product</a><a href="#">Customers</a><a href="#">Pricing</a><a href="#">Journal</a></div><div class="navr"><a class="hide" href="#">Sign in</a><a class="btn" href="#">Try it free</a></div></nav></div>'+
  '<header class="hero"><div class="wrap"><div><h1>Every customer interview, <em>finally</em> in one place.</h1><p class="sub">Fieldnote transcribes, tags and connects your research, so the insight from a call six months ago shows up the moment your team needs it.</p><form class="form" onsubmit="return false"><input type="email" placeholder="Your work email" aria-label="Work email"><button class="btn" type="submit">Get started</button></form><p class="note">Free for your first 25 interviews.</p></div>'+
  '<div class="paper"><div class="back"></div><div class="tcard"><h4>Interview · Acme onboarding</h4><p>"Honestly, <mark>the setup took us two weeks</mark> because nobody knew who owned the integration."</p><p>"If it just <mark>imported our old tickets</mark>, I would have switched on day one."</p><div class="tags"><span>Onboarding</span><span>Integrations</span><span>Churn risk</span></div></div></div></div></header>'+
  '<div class="logos-sec"><div class="wrap"><p class="logos-label">Loved by research teams at</p>'+LOGOS+'</div></div>'+
  '<section class="pull"><div class="wrap"><blockquote>We stopped re-running the same studies. Fieldnote paid for itself in the first month.</blockquote><cite><b>Priya Raman</b> · Research Lead, Meridian</cite></div></section>'+
  '<section><div class="wrap"><h2 class="t">Research that actually gets used</h2><div class="cases"><div class="case"><b>62%</b><p>less time spent searching for past insights</p><span>Hollow Pine</span></div><div class="case"><b>3×</b><p>more product decisions linked to real customer quotes</p><span>Oakridge</span></div><div class="case"><b>14 hrs</b><p>saved per researcher, every single month</p><span>Polarlab</span></div></div></div></section>'+
  '<section style="padding-top:0"><div class="wrap two"><h2 class="t">Built for how researchers really work</h2><ul class="flist"><li><i>i.</i><div><h3>Transcripts in minutes</h3><p>Upload a recording and get a searchable transcript with speakers labeled.</p></div></li><li><i>ii.</i><div><h3>Highlights that travel</h3><p>Clip a quote once and drop it into any doc, deck or roadmap ticket.</p></div></li><li><i>iii.</i><div><h3>Themes, found for you</h3><p>Related moments cluster across interviews, so patterns surface on their own.</p></div></li><li><i>iv.</i><div><h3>Share with the whole team</h3><p>Stakeholders get a read-only library. No more "can you send me the recording?"</p></div></li></ul></div></section>'+
  '<section class="end"><div class="wrap"><h2>Give your research a <em>longer life.</em></h2><a class="btn" href="#">Start free with Fieldnote</a></div></section>'+foot('Fieldnote');
  return doc(this,s,css,body);
 }
};

// ---------- 5. GLOW ----------
var glow = {
 id:'glow', name:'Glow', product:'Lumen', tagline:'An AI analyst for your sales calls',
 fonts:'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap',
 font:'"Space Grotesk",system-ui,sans-serif', display:'"Space Grotesk",system-ui,sans-serif', radius:'12px',
 blurb:'Centered hero over a gradient mesh, a glass product frame with an AI summary, a bento feature grid and a gradient-border CTA.',
 best:'AI products and modern, design-forward SaaS launches',
 layout:'1) A soft gradient mesh glow (three blurred radial gradients) behind the top of the page. 2) Top nav. 3) Centered hero: a pill announcement, a big headline with one phrase in a subtle gradient, a subhead, a primary button and a ghost "Watch demo" button. 4) A glass-style product frame under the hero: a list of calls on the left and an AI call summary on the right with bullet points, a "deal risk" chip and a gradient sentiment bar. 5) Logo cloud. 6) Bento grid of 4 tiles: one large tile spanning two rows with a mini UI, two small tiles (one with a small bar chart) and one wide tile with a fake "ask anything" input. 7) Closing CTA box with a gradient border. 8) Footer.',
 systems:[
  {name:'Aurora',bg:'#050816',surface:'#0F1428',text:'#E6F1FF',muted:'#93A4C3',primary:'#34D399',on:'#04221A',accent:'#A855F7',border:'#1E2640',g:['#34D399','#3B82F6','#A855F7']},
  {name:'Deep Violet',bg:'#0B0B1A',surface:'#16162D',text:'#ECEBFF',muted:'#A3A1C9',primary:'#A78BFA',on:'#0B0B1A',accent:'#F472B6',border:'#2A2A4A',g:['#8B5CF6','#F472B6','#F59E0B']},
  {name:'Daybreak',bg:'#FFFFFF',surface:'#F7F5FF',text:'#18122B',muted:'#574F6E',primary:'#6D28D9',on:'#FFFFFF',accent:'#F97316',border:'#E9E4F7',g:['#7C3AED','#DB2777','#F97316']}
 ],
 build:function(s){
  var css=".mesh{position:absolute;inset:0 0 auto;height:900px;pointer-events:none;overflow:hidden}.mesh:before{content:'';position:absolute;inset:-20% -10% 0;background:radial-gradient(30% 40% at 25% 30%,var(--g1),transparent 70%),radial-gradient(30% 40% at 75% 20%,var(--g2),transparent 70%),radial-gradient(35% 40% at 50% 65%,var(--g3),transparent 70%);opacity:.35;filter:blur(80px)}.page{position:relative}"+
  ".hero{text-align:center;padding:64px 0 32px}.pill{display:inline-flex;gap:10px;align-items:center;font-size:14px;padding:6px 14px 6px 6px;border-radius:999px;border:1px solid var(--border);background:color-mix(in oklab,var(--surface) 70%,transparent);backdrop-filter:blur(8px)}.pill b{background:linear-gradient(135deg,var(--g1),var(--g2));color:#fff;padding:3px 10px;border-radius:999px;font-size:12px}.hero h1{font-size:clamp(42px,6.6vw,80px);font-weight:700;line-height:1;letter-spacing:-.045em;margin:26px auto 22px;max-width:15ch}.hero p{font-size:19px;color:var(--muted);max-width:560px;margin:0 auto 32px}.acts{display:flex;justify-content:center;gap:12px;flex-wrap:wrap}"+
  ".frame{max-width:980px;margin:60px auto 0;padding:10px;border-radius:22px;border:1px solid var(--border);background:color-mix(in oklab,var(--surface) 55%,transparent);backdrop-filter:blur(12px);box-shadow:0 40px 80px -40px rgba(0,0,0,.6)}.ui{display:grid;grid-template-columns:260px 1fr;background:var(--surface);border:1px solid var(--border);border-radius:14px;overflow:hidden;text-align:left}.calls{border-right:1px solid var(--border);padding:14px;display:grid;gap:8px;align-content:start}.call{padding:12px;border-radius:10px;font-size:14px}.call small{display:block;color:var(--muted);font-size:12px}.call.on{background:color-mix(in oklab,var(--primary) 14%,transparent);border:1px solid color-mix(in oklab,var(--primary) 35%,transparent)}"+
  ".sum{padding:24px}.sum h4{font-size:18px;margin-bottom:4px}.sum .meta{font-size:13px;color:var(--muted);margin-bottom:18px}.sum ul{list-style:none;display:grid;gap:10px;font-size:15px;margin-bottom:20px}.sum li{display:flex;gap:10px}.sum li:before{content:'';width:6px;height:6px;border-radius:50%;background:var(--primary);margin-top:9px;flex:none}.chips{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px}.chips span{font-size:12px;font-weight:600;padding:5px 11px;border-radius:999px;border:1px solid var(--border)}.chips span.ok{background:color-mix(in oklab,var(--primary) 16%,transparent);border-color:transparent}.senti{height:8px;border-radius:99px;background:linear-gradient(90deg,var(--g1),var(--g2),var(--g3))}.senti-l{display:flex;justify-content:space-between;font-size:12px;color:var(--muted);margin-top:6px}"+
  ".logos-sec{padding:72px 0 16px}h2.t{text-align:center;font-size:clamp(30px,4vw,48px);font-weight:700;letter-spacing:-.035em;margin:12px auto 44px;max-width:18ch}.center{text-align:center}"+
  ".bento{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:minmax(190px,auto);gap:16px}.tile{background:var(--surface);border:1px solid var(--border);border-radius:18px;padding:26px;position:relative;overflow:hidden}.tile h3{font-size:20px;margin-bottom:6px}.tile p{color:var(--muted);font-size:15px;max-width:34ch}.t1{grid-column:span 2;grid-row:span 2}.t4{grid-column:span 2}.lines{margin-top:26px;display:grid;gap:10px}.lines i{height:12px;border-radius:6px;background:var(--border)}.lines i:nth-child(1){width:90%;background:linear-gradient(90deg,var(--g1),var(--g2))}.lines i:nth-child(2){width:75%}.lines i:nth-child(3){width:82%}.lines i:nth-child(4){width:60%}.lines i:nth-child(5){width:70%}"+
  ".mini{display:flex;align-items:flex-end;gap:6px;height:56px;margin-top:18px}.mini i{flex:1;border-radius:4px;background:linear-gradient(var(--g2),var(--g1))}.ask{display:flex;align-items:center;gap:10px;margin-top:20px;border:1px solid var(--border);background:var(--bg);border-radius:12px;padding:12px 14px;font-size:15px;color:var(--muted)}.ask b{margin-left:auto;background:var(--primary);color:var(--on-primary);border-radius:8px;padding:6px 10px;font-size:13px}"+
  ".gb{padding:2px;border-radius:24px;background:linear-gradient(120deg,var(--g1),var(--g2),var(--g3))}.gbin{background:var(--bg);border-radius:22px;padding:64px 32px;text-align:center}.gbin h2{font-size:clamp(30px,4vw,48px);font-weight:700;letter-spacing:-.035em;margin-bottom:12px}.gbin p{color:var(--muted);font-size:17px;margin-bottom:28px}"+
  "@media(max-width:900px){.ui{grid-template-columns:1fr}.calls{display:none}.bento{grid-template-columns:1fr}.t1,.t4{grid-column:auto;grid-row:auto}}";
  var mini=[30,55,42,70,60,85,74].map(function(h){return '<i style="height:'+h+'%"></i>'}).join('');
  var body='<div class="page"><div class="mesh" aria-hidden="true"></div><div class="wrap" style="position:relative"><nav class="top"><a class="logo" href="#"><span class="mark"></span>Lumen</a><div class="links"><a href="#">Product</a><a href="#">Customers</a><a href="#">Pricing</a><a href="#">Security</a></div><div class="navr"><a class="hide" href="#">Log in</a><a class="btn" href="#">Get Lumen</a></div></nav></div>'+
  '<header class="hero" style="position:relative"><div class="wrap"><span class="pill"><b>NEW</b>Introducing Lumen 2.0 →</span><h1>Your sales calls, <span class="gt">analyzed while you sleep</span></h1><p>Lumen joins every call, writes the summary, updates your CRM and flags deals at risk before your Monday pipeline review.</p><div class="acts"><a class="btn" href="#">Start free trial</a><a class="btn ghost" href="#">▶ Watch the 2-min demo</a></div>'+
  '<div class="frame"><div class="ui"><div class="calls"><div class="call on">Kitebase renewal<small>Today · 32 min</small></div><div class="call">Meridian discovery<small>Today · 45 min</small></div><div class="call">Polarlab pricing<small>Yesterday · 28 min</small></div><div class="call">Vertexa demo<small>Yesterday · 51 min</small></div></div><div class="sum"><h4>Kitebase renewal call</h4><div class="meta">Summary written by Lumen · 3 participants</div><div class="chips"><span class="ok">Deal risk: Low</span><span>Budget confirmed</span><span>Next step: security review</span></div><ul><li>Champion wants to expand from 40 to 65 seats before Q1.</li><li>Procurement needs the SOC 2 report by Friday.</li><li>Concern about Salesforce sync speed. Send the latest benchmark.</li></ul><div class="senti"></div><div class="senti-l"><span>Sentiment</span><span>Positive</span></div></div></div></div></div></header>'+
  '<div class="logos-sec"><div class="wrap"><p class="logos-label">Revenue teams at fast-growing companies use Lumen</p>'+LOGOS+'</div></div>'+
  '<section><div class="wrap"><div class="center"><span class="eyebrow">What Lumen does</span></div><h2 class="t">One AI teammate for the whole revenue team</h2><div class="bento">'+
  '<div class="tile t1"><div class="ico">'+I.bolt+'</div><h3 style="margin-top:18px">Summaries in seconds</h3><p>Every call becomes a clean summary with action items, objections and next steps, ready before you hang up.</p><div class="lines"><i></i><i></i><i></i><i></i><i></i></div></div>'+
  '<div class="tile"><h3>CRM, updated</h3><p>Fields, notes and stages sync to Salesforce or HubSpot.</p></div>'+
  '<div class="tile"><h3>Coaching insights</h3><p>Talk ratio and questions asked, per rep.</p><div class="mini">'+mini+'</div></div>'+
  '<div class="tile t4"><h3>Ask anything</h3><p>Search every call your team has ever had in plain English.</p><div class="ask">Which deals mentioned a competitor this week?<b>Ask</b></div></div></div></div></section>'+
  '<section style="padding-top:0"><div class="wrap"><div class="gb"><div class="gbin"><h2>Let Lumen take the notes</h2><p>Free for 14 days. Connects to Zoom, Meet and Teams in one click.</p><a class="btn" href="#">Start free trial</a></div></div></div></section></div>'+foot('Lumen');
  return doc(this,s,css,body);
 }
};

return [launch, devtool, trust, story, glow];
})();
if (typeof module !== 'undefined') module.exports = BZT;

(function(){
  var T=BZT, list=document.getElementById('bztList');
  var CTA={launch:'Start free trial (email capture)',devtool:'Start deploying / install command',trust:'Book a demo',story:'Get started (email capture)',glow:'Start free trial'};
  var toast=document.getElementById('bztToast'),tt;
  function say(m){toast.textContent=m;toast.classList.add('on');clearTimeout(tt);tt=setTimeout(function(){toast.classList.remove('on')},1800)}
  function fallback(text){var a=document.createElement('textarea');a.value=text;a.style.position='fixed';a.style.opacity='0';document.body.appendChild(a);a.select();try{document.execCommand('copy')}catch(e){}a.remove()}
  function copy(text,msg){if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).then(function(){say(msg)},function(){fallback(text);say(msg)})}else{fallback(text);say(msg)}}
  var KEYS=[['bg','Background'],['surface','Surface'],['text','Text'],['muted','Muted'],['primary','Primary'],['on','On primary'],['accent','Accent'],['border','Border']];
  function gcss(g){return 'linear-gradient(135deg, '+g.map(function(c,i){return c+' '+Math.round(i/(g.length-1)*100)+'%'}).join(', ')+')'}
  function prompt(t,s){
    return 'Build a single-page B2B SaaS landing page for my product. [Describe your product, who it is for and the one action you want visitors to take.]\n\n'+
    'Layout (based on the "'+t.name+'" template from bzen.io):\n'+t.layout+'\n\n'+
    'Color system "'+s.name+'". Define these as CSS custom properties on :root and use them everywhere:\n'+
    '--bg: '+s.bg+' (page background)\n--surface: '+s.surface+' (cards, form fields, alternating sections)\n--text: '+s.text+' (headings and body)\n--muted: '+s.muted+' (secondary text, logo cloud)\n--primary: '+s.primary+' (every button and link, one action color)\n--on-primary: '+s.on+' (text on primary buttons)\n--accent: '+s.accent+' (small highlights only)\n--border: '+s.border+'\n--gradient: '+gcss(s.g)+' (hero glow, logo mark, one headline phrase; never behind paragraphs)\n\n'+
    'Typography: '+t.font.split(',')[0].replace(/"/g,'')+(t.display!==t.font?' for body and '+t.display.split(',')[0].replace(/"/g,'')+' for headings':'')+', from Google Fonts. Tight letter-spacing on large headings.\n'+
    'Motion: entrances use ease-out expo, cubic-bezier(0.16, 1, 0.3, 1), at 600 to 900ms. Hovers use ease-out quad at 200ms. Respect prefers-reduced-motion.\n'+
    'Make it fully responsive (single column under 900px), keep all text at WCAG AA contrast, and use clearly marked placeholders for logos, quotes and numbers.';
  }

  var jump=document.getElementById('bztJump'), table=document.getElementById('bztTable');
  var state=[];
  T.forEach(function(t,ti){
    jump.insertAdjacentHTML('beforeend','<a href="#'+t.id+'">'+(ti+1)+'. '+t.name+'</a>');
    table.insertAdjacentHTML('beforeend','<tr><td><a href="#'+t.id+'"><b>'+t.name+'</b></a></td><td>'+t.best+'</td><td>'+CTA[t.id]+'</td></tr>');
    var sec=document.createElement('section');sec.className='bzt';sec.id=t.id;
    var sys=t.systems.map(function(s,i){return '<button type="button" class="bzt-sys" data-s="'+i+'" aria-pressed="'+(i===0)+'"><span class="dots"><i style="background:'+s.bg+'"></i><i style="background:'+s.primary+'"></i><i style="background:'+gcss(s.g)+'"></i></span>'+s.name+'</button>'}).join('');
    sec.innerHTML='<div class="bzt-head"><span class="bzt-num">0'+(ti+1)+'</span><div><h2>'+t.name+'</h2><p>'+t.blurb+' <b>Best for:</b> '+t.best.charAt(0).toLowerCase()+t.best.slice(1)+'.</p></div></div>'+
      '<div class="bzt-controls"><div class="bzt-systems" role="group" aria-label="Color system">'+sys+'</div><div class="bzt-device" role="group" aria-label="Preview size"><button type="button" class="bzt-dev" data-d="desktop">Desktop</button><button type="button" class="bzt-dev" data-d="mobile">Mobile</button></div></div>'+
      '<div class="bzt-frame"><div class="loading">Loading preview…</div><iframe title="'+t.name+' template preview" loading="lazy"></iframe></div>'+
      '<div class="bzt-foot"><div class="bzt-tokens"></div><div class="bzt-actions"><button class="bzt-btn primary" type="button" data-a="html">Copy HTML</button><button class="bzt-btn" type="button" data-a="prompt">Copy AI prompt</button><button class="bzt-btn" type="button" data-a="full">Full screen ↗</button></div></div>';
    list.appendChild(sec);
    var st={t:t,s:0,d:(window.innerWidth<700?'mobile':'desktop'),sec:sec,frame:sec.querySelector('.bzt-frame'),ifr:sec.querySelector('iframe'),loaded:false};
    state.push(st);
    sec.querySelectorAll('.bzt-sys').forEach(function(b){b.onclick=function(){st.s=+b.dataset.s;sec.querySelectorAll('.bzt-sys').forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false')});render(st,true)}});
    sec.querySelectorAll('.bzt-dev').forEach(function(b){b.onclick=function(){st.d=b.dataset.d;fit(st)}});
    sec.querySelector('[data-a="html"]').onclick=function(){copy(t.build(t.systems[st.s]),t.name+' · '+t.systems[st.s].name+' HTML copied')};
    sec.querySelector('[data-a="prompt"]').onclick=function(){copy(prompt(t,t.systems[st.s]),'AI prompt copied')};
    sec.querySelector('[data-a="full"]').onclick=function(){openModal(st)};
    sec.querySelector('.bzt-tokens').addEventListener('click',function(e){var b=e.target.closest('.bzt-tok');if(b)copy(b.dataset.hex,'Copied '+b.dataset.hex)});
    tokens(st);fit(st);
  });

  function tokens(st){var s=st.t.systems[st.s];st.sec.querySelector('.bzt-tokens').innerHTML=KEYS.map(function(k){return '<button type="button" class="bzt-tok" data-hex="'+s[k[0]]+'" title="'+k[1]+'"><i style="background:'+s[k[0]]+'"></i>'+s[k[0]]+'</button>'}).join('')}
  function render(st,keepScroll){
    var y=0;try{y=keepScroll&&st.ifr.contentWindow?st.ifr.contentWindow.scrollY:0}catch(e){}
    st.ifr.onload=function(){st.frame.querySelector('.loading').style.display='none';if(y){try{st.ifr.contentWindow.scrollTo(0,y)}catch(e){}}};
    st.ifr.srcdoc=st.t.build(st.t.systems[st.s]);st.loaded=true;tokens(st);
  }
  function fit(st){
    st.frame.dataset.device=st.d;
    st.sec.querySelectorAll('.bzt-dev').forEach(function(x){x.setAttribute('aria-pressed',x.dataset.d===st.d?'true':'false')});
    var W=st.frame.clientWidth, f=st.ifr;
    if(st.d==='desktop'){var s=W/1280;f.style.width='1280px';f.style.height='820px';f.style.transform='scale('+s+')';f.style.left='0';f.style.top='0';st.frame.style.height=Math.round(820*s)+'px'}
    else{var H=Math.max(560,Math.min(720,W*0.62));var s2=Math.min((H-40)/780,(W-40)/390,1);f.style.width='390px';f.style.height='780px';f.style.transform='scale('+s2+')';f.style.left=Math.round((W-390*s2)/2)+'px';f.style.top='20px';st.frame.style.height=Math.round(780*s2+40)+'px'}
  }
  window.addEventListener('resize',function(){state.forEach(fit)});

  // lazy-load previews as they approach the viewport
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var st=state.filter(function(x){return x.frame===e.target})[0];if(st&&!st.loaded)render(st);io.unobserve(e.target)}})},{rootMargin:'600px'});
    state.forEach(function(st){io.observe(st.frame)});
  } else state.forEach(function(st){render(st)});

  // full screen viewer
  var modal=document.getElementById('bztModal'),mf=document.getElementById('bztModalFrame'),cur=null;
  function openModal(st){cur=st;var s=st.t.systems[st.s];document.getElementById('bztModalTitle').textContent=st.t.name+' · '+s.name;mf.srcdoc=st.t.build(s);modal.classList.add('on');document.body.style.overflow='hidden';document.getElementById('bztModalClose').focus()}
  function closeModal(){modal.classList.remove('on');document.body.style.overflow='';mf.srcdoc='';if(cur)cur.sec.querySelector('[data-a="full"]').focus()}
  document.getElementById('bztModalClose').onclick=closeModal;
  document.getElementById('bztModalCopy').onclick=function(){if(cur)copy(cur.t.build(cur.t.systems[cur.s]),'HTML copied')};
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&modal.classList.contains('on'))closeModal()});
})();

})();
