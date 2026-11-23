/* Bzen Digital · SaaS color palettes guide · https://bzen.io/guides
   Mount points: <div id="bz-color-studio"></div> and <div id="bz-color-gradients"></div> */
(function(){
  var studio=document.getElementById('bz-color-studio');
  if(!studio||studio.getAttribute('data-ready'))return;
  studio.setAttribute('data-ready','1');
  studio.classList.add('bzg');
  studio.innerHTML="<section class=\"bzc-studio\" id=\"studio\" aria-label=\"Color combination studio\">\n    <aside class=\"bzc-picker\">\n      <div class=\"bzc-tabs\" role=\"tablist\" aria-label=\"Color source\">\n        <button type=\"button\" role=\"tab\" id=\"tabPresets\" aria-selected=\"true\" aria-controls=\"bzcPresets\">22 SaaS palettes</button>\n        <button type=\"button\" role=\"tab\" id=\"tabCustom\" aria-selected=\"false\" aria-controls=\"bzcCustom\">Your colors</button>\n      </div>\n      <div id=\"bzcPresets\" role=\"tabpanel\" aria-labelledby=\"tabPresets\">\n      <p class=\"bzc-hint\">The page on the right updates instantly.</p>\n      <div class=\"bzc-filters\" role=\"group\" aria-label=\"Filter combinations\">\n        <button type=\"button\" data-filter=\"all\" aria-pressed=\"true\">All 22</button>\n        <button type=\"button\" data-filter=\"light\" aria-pressed=\"false\">Light</button>\n        <button type=\"button\" data-filter=\"dark\" aria-pressed=\"false\">Dark</button>\n        <button type=\"button\" data-filter=\"bold\" aria-pressed=\"false\">Bold</button>\n      </div>\n      <div class=\"bzc-list\" id=\"bzcList\"></div>\n      </div>\n      <div id=\"bzcCustom\" role=\"tabpanel\" aria-labelledby=\"tabCustom\" hidden>\n        <p class=\"bzc-hint\">Enter your brand colors. We build the rest of the palette and check the contrast for you.</p>\n        <div class=\"bzc-fields\">\n          <div class=\"bzc-field\">\n            <label for=\"cPrimary\">Primary <small>buttons and links</small></label>\n            <div class=\"bzc-colorin\"><input type=\"color\" id=\"cPrimaryPick\" value=\"#2563EB\" aria-label=\"Pick primary color\"><input type=\"text\" id=\"cPrimary\" value=\"#2563EB\" maxlength=\"7\" spellcheck=\"false\" autocomplete=\"off\"></div>\n          </div>\n          <div class=\"bzc-field\">\n            <label for=\"cAccent\">Highlight <small>badges, icons, gradient</small></label>\n            <div class=\"bzc-colorin\"><input type=\"color\" id=\"cAccentPick\" value=\"#DB2777\" aria-label=\"Pick highlight color\"><input type=\"text\" id=\"cAccent\" value=\"#DB2777\" maxlength=\"7\" spellcheck=\"false\" autocomplete=\"off\"></div>\n          </div>\n          <div class=\"bzc-field bzc-field-wide\">\n            <span class=\"bzc-label\">Background</span>\n            <div class=\"bzc-seg\" role=\"group\" aria-label=\"Background\"><button type=\"button\" data-bg=\"light\" aria-pressed=\"true\">Light</button><button type=\"button\" data-bg=\"dark\" aria-pressed=\"false\">Dark</button></div>\n          </div>\n        </div>\n        <div class=\"bzc-issues\" id=\"bzcIssues\" aria-live=\"polite\"></div>\n        <details class=\"bzc-tune\" id=\"bzcTuneWrap\">\n          <summary>Fine-tune the palette <small>tints, shades and gradient</small></summary>\n          <p class=\"bzc-tune-hint\">Edits here never change your primary or highlight. Changing primary or highlight rebuilds these colors.</p>\n          <div class=\"bzc-tune-list\" id=\"bzcTune\"></div>\n          <button type=\"button\" class=\"bzc-tune-reset\" id=\"bzcResetAll\" hidden>Reset all fine-tuning</button>\n        </details>\n      </div>\n    </aside>\n\n    <div class=\"bzc-stage\">\n      <div class=\"bzc-bar\">\n        <div class=\"now\">Now showing: <b id=\"bzcName\">Trust</b> <span class=\"bz-tag\" id=\"bzcTag\">light</span></div>\n        <div class=\"bzc-btns\">\n          <button class=\"bzc-btn\" type=\"button\" id=\"bzcPrev\" aria-label=\"Previous combination\">\u2039 Prev</button>\n          <button class=\"bzc-btn\" type=\"button\" id=\"bzcNext\" aria-label=\"Next combination\">Next \u203a</button>\n          <button class=\"bzc-btn\" type=\"button\" id=\"bzcShuffle\">Shuffle</button>\n        </div>\n      </div>\n\n      <!-- Demo landing page -->\n      <div class=\"bzq\" id=\"bzq\">\n        <div class=\"bzq-glow\" aria-hidden=\"true\"></div>\n        <div class=\"bzq-in\">\n          <div class=\"bzq-nav\">\n            <div class=\"bzq-logo\"><span class=\"bzq-mark\"></span>Quillo</div>\n            <div class=\"bzq-links\"><span>Product</span><span>Pricing</span><span>Customers</span><span>Docs</span></div>\n            <div class=\"bzq-navcta\"><span>Sign in</span><button class=\"bzq-btn\" type=\"button\">Start free</button></div>\n          </div>\n          <div class=\"bzq-hero\">\n            <span class=\"bzq-pill\"><b>NEW</b> AI weekly reports <em>\u2192</em></span>\n            <h1>Close your books <span class=\"bzq-grad\">in hours, not weeks</span></h1>\n            <p class=\"bzq-sub\">Quillo connects your bank, billing and payroll so finance teams reconcile automatically and report with confidence.</p>\n            <form class=\"bzq-form\" id=\"lpForm\">\n              <label for=\"lpEmail\" style=\"position:absolute;left:-9999px\">Work email</label>\n              <input id=\"lpEmail\" type=\"email\" placeholder=\"you@company.com\" autocomplete=\"off\">\n              <button class=\"bzq-btn\" type=\"submit\">Get early access</button>\n            </form>\n            <p class=\"bzq-note\" id=\"lpNote\">Free 14-day trial \u00b7 No credit card required</p>\n            <p class=\"bzq-thanks\" id=\"lpThanks\">You're on the list. (This is a demo, nothing was sent.)</p>\n          </div>\n          <div class=\"bzq-logos\">\n            <p>Trusted by finance teams at</p>\n            <div class=\"bzq-logorow\">\n              <span class=\"bzq-wm\" style=\"font-weight:800;letter-spacing:-.03em\"><svg viewBox=\"0 0 20 20\" fill=\"currentColor\"><path d=\"M10 1 19 18H1z\"/></svg>Vertexa</span>\n              <span class=\"bzq-wm\" style=\"font-weight:600;font-style:italic\"><svg viewBox=\"0 0 20 20\" fill=\"currentColor\"><circle cx=\"10\" cy=\"10\" r=\"9\"/></svg>Hollow Pine</span>\n              <span class=\"bzq-wm\" style=\"font-weight:700;letter-spacing:.12em;font-size:15px\">OAKRIDGE</span>\n              <span class=\"bzq-wm\" style=\"font-weight:500\"><svg viewBox=\"0 0 20 20\" fill=\"currentColor\"><path d=\"M10 1l9 9-9 9-9-9z\"/></svg>kitebase</span>\n              <span class=\"bzq-wm\" style=\"font-weight:800\"><svg viewBox=\"0 0 20 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"><circle cx=\"10\" cy=\"10\" r=\"7\"/></svg>Meridian</span>\n              <span class=\"bzq-wm\" style=\"font-weight:700;letter-spacing:-.02em\"><svg viewBox=\"0 0 20 20\" fill=\"currentColor\"><rect x=\"2\" y=\"2\" width=\"7\" height=\"7\" rx=\"2\"/><rect x=\"11\" y=\"11\" width=\"7\" height=\"7\" rx=\"2\"/></svg>Polarlab</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"bzq-ben\">\n          <div class=\"bzq-in\">\n            <span class=\"bzq-eyebrow\">Why teams switch</span>\n            <h2>Everything your finance team needs, nothing it doesn't</h2>\n            <div class=\"bzq-cards\">\n              <div class=\"bzq-card\">\n                <div class=\"bzq-ico\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M20 6 9 17l-5-5\"/></svg></div>\n                <h3>Automatic reconciliation</h3>\n                <p>Transactions match themselves against invoices and payouts. Your team only reviews the exceptions.</p>\n                <a href=\"#\" onclick=\"return false\">Learn more \u2192</a>\n              </div>\n              <div class=\"bzq-card\">\n                <div class=\"bzq-ico\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 17l6-6 4 4 8-8\"/><path d=\"M14 7h7v7\"/></svg></div>\n                <h3>Real-time cash view</h3>\n                <p>See runway, burn and cash in every account on one screen, updated every hour instead of every month.</p>\n                <a href=\"#\" onclick=\"return false\">Learn more \u2192</a>\n              </div>\n              <div class=\"bzq-card\">\n                <div class=\"bzq-ico\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z\"/></svg></div>\n                <h3>Audit-ready in one click</h3>\n                <p>Every change is logged with who, what and when. Export a clean audit trail whenever your accountant asks.</p>\n                <a href=\"#\" onclick=\"return false\">Learn more \u2192</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- Tokens for the current combo -->\n      <div class=\"bzc-tokens\" aria-live=\"polite\">\n        <div class=\"bzc-swatches\" id=\"bzcSwatches\"></div>\n        <div class=\"bzc-grad-row\"><span id=\"bzcGradSw\"></span><code id=\"bzcGradCss\"></code></div>\n        <div class=\"bzc-checks\" id=\"bzcChecks\"></div>\n        <div class=\"bzc-apply\">\n          <h3>Apply these colors to your existing site</h3>\n          <p>Pick where your site lives, copy the prompt and paste it into your AI tool. It changes colors only and leaves your layout and copy alone.</p>\n          <div class=\"bzc-seg bzc-target\" role=\"group\" aria-label=\"Where your site lives\">\n            <button type=\"button\" data-t=\"builder\" aria-pressed=\"true\">AI builder</button>\n            <button type=\"button\" data-t=\"code\" aria-pressed=\"false\">Code editor</button>\n            <button type=\"button\" data-t=\"webflow\" aria-pressed=\"false\">Webflow</button>\n          </div>\n          <p class=\"bzc-target-note\" id=\"bzcTargetNote\"></p>\n          <div class=\"bzc-old\">\n            <label for=\"bzcOld\">Your site's current button color <small>(optional, helps the AI find what to replace)</small></label>\n            <div class=\"bzc-colorin\"><input type=\"color\" id=\"bzcOldPick\" value=\"#000000\" aria-label=\"Pick current button color\"><input type=\"text\" id=\"bzcOld\" placeholder=\"#000000\" maxlength=\"7\" spellcheck=\"false\" autocomplete=\"off\"></div>\n          </div>\n          <details class=\"bzc-preview\"><summary>Preview the prompt</summary><textarea id=\"bzcPromptPreview\" readonly rows=\"12\" aria-label=\"Prompt preview\"></textarea></details>\n          <div class=\"bzc-actions\">\n            <button class=\"bzc-btn primary\" type=\"button\" id=\"copyPrompt\">Copy prompt</button>\n            <button class=\"bzc-btn\" type=\"button\" id=\"copyCss\">Copy CSS variables</button>\n            <button class=\"bzc-btn\" type=\"button\" id=\"copyGrad\">Copy gradient</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>";
  var bzq=document.getElementById('bzq');
  var grads=document.getElementById('bz-color-gradients');
  if(!grads){grads=document.createElement('div');grads.id='bz-color-gradients';studio.parentNode.insertBefore(grads,studio.nextSibling)}
  grads.classList.add('bzg');
  grads.innerHTML='<div class="bzc-gwrap"><div class="bzc-ggrid" id="bzcGrads"></div></div>';
  var t=document.createElement('div');t.className='bzc-toast bzg';t.id='bzcToast';t.setAttribute('role','status');document.body.appendChild(t);
(function(){
  // [name, mood, bg, surface, text, muted, primary, onPrimary, accent, border, gradient stops]
  var C=[
   ["Trust","light","#F6F8FC","#FFFFFF","#0B1533","#4A5672","#1F6FEB","#FFFFFF","#F5A524","#E0E6F1",["#1E4FD8","#1F6FEB","#7CB4FF"]],
   ["Sales Led","light","#F6F5F1","#FFFFFF","#141B2D","#545B6B","#1B2B57","#FFFFFF","#E6A344","#E4E1D8",["#1B2B57","#40609E","#E6A344"]],
   ["Async","light","#EEF6F8","#FFFFFF","#0B2230","#46606A","#0E7490","#FFFFFF","#A78BFA","#D6E6EB",["#0E7490","#22A6C3","#A5E4F0"]],
   ["Pipeline","light","#F6F6FB","#FFFFFF","#14152E","#535572","#3B3FC4","#FFFFFF","#F08C3A","#E2E2EF",["#2A2C9C","#5B5FE0","#A9ACFF"]],
   ["Cash Flow","light","#F4F8EE","#FFFFFF","#0F2214","#4B5E4B","#15803D","#FFFFFF","#E9B949","#DFE8D5",["#0E5E2C","#15803D","#86D97A"]],
   ["Soft Sell","light","#F8EEEA","#FFFFFF","#2A1A1D","#6C5458","#9B3F5A","#FFFFFF","#E9B9A8","#EEDDD8",["#F4C6C0","#C9798A","#9B3F5A"]],
   ["Hard Sell","light","#FAF7F4","#FFFFFF","#1F1712","#655649","#D4620A","#1F1712","#2B2622","#EDE4DC",["#D4620A","#F7913A","#FFC27A"]],
   ["Hype","light","#FDF6FB","#FFFFFF","#24101A","#6A4E5C","#C0158E","#FFFFFF","#FF8A4C","#F2DDEB",["#E879F9","#F0479A","#FF8A5B"]],
   ["Ad Spend","light","#FBF7F6","#FFFFFF","#22100F","#6A5352","#D42A2A","#FFFFFF","#F6B73C","#EFDFDC",["#D42A2A","#F0533A","#F6B73C"]],
   ["Unicorn","light","#FAF8FF","#FFFFFF","#1B1530","#5C5674","#8B3DF0","#FFFFFF","#22C5E0","#E9E4F7",["#F0ABFC","#A78BFA","#67E8F9"]],
   ["Product Led","light","#F7F7F5","#FFFFFF","#121212","#56565C","#121212","#FFFFFF","#4F46E5","#E6E6E1",["#121212","#4F46E5","#A5B4FC"]],
   ["Puppy Dog","light","#FFF8EC","#FFFFFF","#2B1D12","#6B5846","#7A4A2A","#FFFFFF","#F2B33D","#F0E2C8",["#F7C873","#E3A15A","#B8733F"]],
   ["Shiny Object","light","#FFFDF7","#FFFFFF","#1A160D","#5E5745","#B47A08","#111111","#1A160D","#EFE8D6",["#FFE7A3","#F5C04A","#B47A08"]],
   ["All Hands","dark","#211027","#2C1734","#FBF3FF","#C9B7D1","#F5B83D","#211027","#FF7AB6","#41284B",["#FF7AB6","#F5B83D","#FFD98A"]],
   ["Stealth Mode","dark","#0B0B10","#15151D","#F2F2F7","#9A9AAC","#8B93FF","#0B0B10","#5EEAD4","#262633",["#4C51BF","#8B93FF","#C3C7FF"]],
   ["Midnight Deploy","dark","#000000","#0B0B0B","#EDEDED","#A1A1A1","#FFFFFF","#000000","#76C4F8","#262626",["#1A3B8C","#3E7BF0","#76C4F8"]],
   ["Group Chat","dark","#0E1117","#171B24","#F1F3F7","#A2A9B7","#FF5CA8","#0E1117","#3B9EFF","#262C38",["#3B9EFF","#A06BFF","#FF5CA8"]],
   ["Revenue","dark","#0A2A23","#103830","#F1F6EE","#A8BDB2","#C4E14E","#0A2A23","#F2C14E","#1D4A40",["#2F7D5B","#7FBF5A","#C4E14E"]],
   ["Ship It","dark","#141210","#1E1B18","#F5F1EC","#ABA39A","#FF6A1A","#141210","#FFD60A","#332E29",["#FF3D1A","#FF6A1A","#FFB020"]],
   ["Runway","bold","#CFE8FF","#FFFFFF","#0B1F4D","#2E4672","#0B1F4D","#D4F23A","#3B6FD8","#A9CFF2",["#0B1F4D","#3B6FD8","#D4F23A"]],
   ["Pivot","bold","#2B3BD9","#3446E0","#FFFFFF","#D7DCFF","#D4F23A","#111111","#FFB4E1","#4B5AE6",["#D4F23A","#7DF2C8","#FFB4E1"]],
   ["Cold Email","bold","#FFE14D","#FFFFFF","#1F1A0E","#4A4126","#1F1A0E","#FFFFFF","#0F766E","#E9C928",["#0F766E","#2DD4BF","#FFF3A3"]]
  ];
  var G=[
   ["Indigo Dusk",["#4F46E5","#06B6D4"],"linear-gradient(135deg, #4F46E5 0%, #06B6D4 100%)"],
   ["Sunset Pop",["#F97316","#EC4899"],"linear-gradient(135deg, #F97316 0%, #EC4899 100%)"],
   ["Ultraviolet",["#7C3AED","#DB2777","#F59E0B"],"linear-gradient(135deg, #7C3AED 0%, #DB2777 55%, #F59E0B 100%)"],
   ["Lime Signal",["#A3E635","#22D3EE"],"linear-gradient(135deg, #A3E635 0%, #22D3EE 100%)"],
   ["Deep Ocean",["#0F766E","#1D4ED8"],"linear-gradient(160deg, #0F766E 0%, #1D4ED8 100%)"],
   ["Peach Glow",["#FFB38A","#FF6F91"],"linear-gradient(135deg, #FFB38A 0%, #FF6F91 100%)"],
   ["Golden Hour",["#F59E0B","#EF4444"],"linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)"],
   ["Northern Lights",["#34D399","#3B82F6","#A855F7"],"linear-gradient(120deg, #34D399 0%, #3B82F6 50%, #A855F7 100%)"],
   ["Mint Breeze",["#6EE7B7","#67E8F9"],"linear-gradient(135deg, #D1FAE5 0%, #A5F3FC 100%)"],
   ["Cotton Candy",["#F9A8D4","#A5B4FC"],"linear-gradient(135deg, #FBCFE8 0%, #C7D2FE 100%)"],
   ["Aurora Mesh",["#22D3EE","#A855F7","#34D399"],"radial-gradient(at 20% 20%, #22D3EE 0, transparent 50%), radial-gradient(at 80% 10%, #A855F7 0, transparent 50%), radial-gradient(at 50% 90%, #34D399 0, transparent 55%), #0B1020","dark"],
   ["Ember Mesh",["#F43F5E","#F59E0B","#8B5CF6"],"radial-gradient(at 15% 30%, #F43F5E 0, transparent 50%), radial-gradient(at 85% 25%, #F59E0B 0, transparent 50%), radial-gradient(at 50% 100%, #8B5CF6 0, transparent 55%), #140A12","dark"]
  ];
  var KEYS=[["bg","Background"],["surface","Surface"],["text","Text"],["muted","Muted text"],["primary","Primary"],["on-primary","On primary"],["accent","Accent"],["border","Border"]];
  var $=function(id){return document.getElementById(id)};
  var bzq=$('bzq'), list=$('bzcList');
  // active state
  var A={mode:'preset', i:0, name:'', mood:'', t:null, stops:null, custom:{primary:'#2563EB',accent:'#DB2777',bg:'light',ov:{}}};
  var filter='all', target='builder';

  // ---------- color math ----------
  function norm(v){v=(v||'').trim().replace(/^#/,'');if(/^[0-9a-f]{3}$/i.test(v))v=v.split('').map(function(c){return c+c}).join('');return /^[0-9a-f]{6}$/i.test(v)?'#'+v.toUpperCase():null}
  function rgb(h){h=h.replace('#','');return [0,2,4].map(function(i){return parseInt(h.substr(i,2),16)})}
  function hex(r){return '#'+r.map(function(v){v=Math.max(0,Math.min(255,Math.round(v)));return (v<16?'0':'')+v.toString(16)}).join('').toUpperCase()}
  function toHsl(h){var c=rgb(h).map(function(v){return v/255}),mx=Math.max.apply(0,c),mn=Math.min.apply(0,c),l=(mx+mn)/2,s=0,H=0,d=mx-mn;if(d){s=l>.5?d/(2-mx-mn):d/(mx+mn);H=mx===c[0]?((c[1]-c[2])/d+(c[1]<c[2]?6:0)):mx===c[1]?((c[2]-c[0])/d+2):((c[0]-c[1])/d+4);H/=6}return [H,s,l]}
  function fromHsl(H,S,L){function f(n){var k=(n+H*12)%12,a=S*Math.min(L,1-L);return 255*(L-a*Math.max(-1,Math.min(k-3,9-k,1)))}return hex([f(0),f(8),f(4)])}
  function lum(h){var c=rgb(h).map(function(v){v/=255;return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4)});return .2126*c[0]+.7152*c[1]+.0722*c[2]}
  function ratio(a,b){var x=lum(a),y=lum(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05)}
  // move lightness of c (keeping hue/sat) until ratio vs ref >= min; dir -1 darker, +1 lighter
  function push(c,ref,min,dir){var h=toHsl(c),L=h[2];for(var k=0;k<100;k++){var x=fromHsl(h[0],h[1],L);if(ratio(x,ref)>=min)return x;L+=dir*.01;if(L<0||L>1)return null}return null}
  function gradCss(stops){return 'linear-gradient(135deg, '+stops.map(function(s,i){return s+' '+Math.round(i/(stops.length-1)*100)+'%'}).join(', ')+')'}
  function slug(s){return s.toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'')}

  // build a full palette from primary + highlight
  function derive(p,a,mode){
    var h=toHsl(p),H=h[0],S=h[1],t={};
    if(mode==='dark'){
      t.bg=fromHsl(H,Math.min(S,.4),.065); t.surface=fromHsl(H,Math.min(S,.32),.11); t.border=fromHsl(H,Math.min(S,.22),.2);
      t.text=push(fromHsl(H,Math.min(S,.25),.94),t.bg,12,1)||'#F5F5F5'; t.muted=push(fromHsl(H,Math.min(S,.14),.66),t.surface,4.8,1)||'#B0B0B0';
    }else{
      t.bg=fromHsl(H,Math.min(S,.35),.99); t.surface=fromHsl(H,Math.min(S,.3),.965); t.border=fromHsl(H,Math.min(S,.25),.9);
      t.text=push(fromHsl(H,Math.min(S,.45),.12),t.bg,12,-1)||'#111111'; t.muted=push(fromHsl(H,Math.min(S,.18),.4),t.surface,4.8,-1)||'#555555';
    }
    t.primary=p; t.accent=a;
    var ink=mode==='dark'?t.bg:t.text;
    t['on-primary']=ratio('#FFFFFF',p)>=ratio(ink,p)?'#FFFFFF':ink;
    return t;
  }
  // closest primary that works with both white/ink labels and the page
  function fixPrimary(p,t,mode){
    var ink=mode==='dark'?t.bg:t.text, cands=[];
    [[-1,'#FFFFFF'],[1,ink],[-1,ink],[1,'#FFFFFF']].forEach(function(d){
      var x=push(p,d[1],4.5,d[0]); if(x&&ratio(x,t.bg)>=3)cands.push(x);
    });
    var L=toHsl(p)[2];cands.sort(function(a,b){return Math.abs(toHsl(a)[2]-L)-Math.abs(toHsl(b)[2]-L)});
    return cands[0]||null;
  }
  function fixAccent(a,t,mode){return push(a,t.bg,3,mode==='dark'?1:-1)}

  // ---------- apply tokens to the demo ----------
  function setStops(stops){
    var s=stops.length===2?[stops[0],stops[1],stops[1]]:stops;
    bzq.style.setProperty('--g1',s[0]);bzq.style.setProperty('--g2',s[1]);bzq.style.setProperty('--g3',s[2]);
    A.stops=stops;$('bzcGradSw').style.background=gradCss(stops);$('bzcGradCss').textContent=gradCss(stops);updatePrompt();
  }
  function paint(name,mood,t,stops){
    A.name=name;A.mood=mood;A.t=t;
    Object.keys(t).forEach(function(k){bzq.style.setProperty('--'+k,t[k])});
    bzq.style.setProperty('--on-accent',ratio('#FFFFFF',t.accent)>=ratio('#111111',t.accent)?'#FFFFFF':'#111111');
    $('bzcName').textContent=name;$('bzcTag').textContent=mood;
    $('bzcSwatches').innerHTML=KEYS.map(function(k){return '<button type="button" class="bzc-sw" data-hex="'+t[k[0]]+'"><span style="background:'+t[k[0]]+'"></span><span style="all:unset"><b>'+k[1]+'</b><code>'+t[k[0]]+'</code></span></button>'}).join('');
    var checks=[["Body text",ratio(t.text,t.bg),4.5],["Muted text",ratio(t.muted,t.bg),4.5],["Button label",ratio(t['on-primary'],t.primary),4.5],["Button vs page",ratio(t.primary,t.bg),3]];
    if(A.mode==='custom')checks.push(["Highlight vs page",ratio(t.accent,t.bg),3]);
    $('bzcChecks').innerHTML=checks.map(function(x){var r=x[1],ok=r>=x[2];var lvl=ok?(r>=(x[2]===3?4.5:7)?'AAA':'AA'):'Fails';return '<span class="bzc-check'+(ok?'':' warn')+'">'+x[0]+' '+r.toFixed(1)+':1 · '+lvl+'</span>'}).join('');
    setStops(stops);
  }
  function setHash(h){try{history.replaceState(null,'','#'+h)}catch(e){}}

  function applyPreset(i,fromClick){
    A.mode='preset';A.i=i;var c=C[i];
    paint(c[0],c[1],{bg:c[2],surface:c[3],text:c[4],muted:c[5],primary:c[6],'on-primary':c[7],accent:c[8],border:c[9]},c[10]);
    list.querySelectorAll('.bzc-combo').forEach(function(b){b.setAttribute('aria-pressed',+b.dataset.i===i?'true':'false')});
    if(fromClick){setHash(slug(c[0]));var sel=list.querySelector('[data-i="'+i+'"]');if(sel&&window.matchMedia('(max-width:900px)').matches)sel.scrollIntoView({block:'nearest',inline:'center',behavior:'smooth'})}
  }
  // perceptual midpoint (OKLab) so the default middle stop doesn't go muddy
  function toLin(v){v/=255;return v<=.04045?v/12.92:Math.pow((v+.055)/1.055,2.4)}
  function fromLin(v){v=v<=.0031308?v*12.92:1.055*Math.pow(v,1/2.4)-.055;return v*255}
  function lab(h){var c=rgb(h).map(toLin),l=Math.cbrt(.4122214708*c[0]+.5363325363*c[1]+.0514459929*c[2]),m=Math.cbrt(.2119034982*c[0]+.6806995451*c[1]+.1073969566*c[2]),s=Math.cbrt(.0883024619*c[0]+.2817188376*c[1]+.6299787005*c[2]);return [.2104542553*l+.793617785*m-.0040720468*s,1.9779984951*l-2.428592205*m+.4505937099*s,.0259040371*l+.7827717662*m-.808675766*s]}
  function unlab(o){var l=Math.pow(o[0]+.3963377774*o[1]+.2158037573*o[2],3),m=Math.pow(o[0]-.1055613458*o[1]-.0638541728*o[2],3),s=Math.pow(o[0]-.0894841775*o[1]-1.291485548*o[2],3);return hex([4.0767416621*l-3.3077115913*m+.2309699292*s,-1.2684380046*l+2.6097574011*m-.3413193965*s,-.0041960863*l-.7034186147*m+1.707614701*s].map(fromLin))}
  function mix(a,b){var x=lab(a),y=lab(b),c1=Math.hypot(x[1],x[2]),c2=Math.hypot(y[1],y[2]),m=[(x[0]+y[0])/2,(x[1]+y[1])/2,(x[2]+y[2])/2],cm=Math.hypot(m[1],m[2]),want=(c1+c2)/2;if(cm>1e-4){m[1]*=want/cm;m[2]*=want/cm}return unlab(m)}
  // derived palette + any fine-tuning on top; primary/highlight are never overridden here
  function customPalette(){
    var c=A.custom,ov=c.ov||{},t=derive(c.primary,c.accent,c.bg),g=[c.primary,mix(c.primary,c.accent),c.accent];
    Object.keys(ov).forEach(function(k){if(k==='g1')g[0]=ov[k];else if(k==='g2')g[1]=ov[k];else if(k==='g3')g[2]=ov[k];else t[k]=ov[k]});
    return {t:t,g:g};
  }
  function applyCustom(fromInput){
    A.mode='custom';var c=A.custom,P=customPalette(),t=P.t;
    paint('Your colors',c.bg,t,P.g);
    issues(t);tuneSync(P);
    if(fromInput)setHash('custom-'+c.primary.slice(1).toLowerCase()+'-'+c.accent.slice(1).toLowerCase()+'-'+c.bg);
  }
  function issues(t){
    var c=A.custom,out=[];
    var btnOk=ratio(t['on-primary'],t.primary)>=4.5, pageOk=ratio(t.primary,t.bg)>=3, accOk=ratio(t.accent,t.bg)>=3;
    if(!btnOk||!pageOk){
      var f=fixPrimary(c.primary,t,c.bg), other=c.bg==='dark'?'light':'dark', t2=derive(c.primary,c.accent,other);
      var otherOk=ratio(t2['on-primary'],t2.primary)>=4.5&&ratio(t2.primary,t2.bg)>=3;
      var sw=otherOk?'<br><button type="button" data-switch="'+other+'">Keep '+c.primary+', switch to a '+other+' background</button>':'';
      var why=!btnOk?'Button text is hard to read on '+c.primary+' ('+ratio(t['on-primary'],t.primary).toFixed(1)+':1, needs 4.5).':'Buttons in '+c.primary+' blend into the '+c.bg+' background ('+ratio(t.primary,t.bg).toFixed(1)+':1, needs 3).';
      out.push('<div class="bzc-issue">'+why+sw+(f?'<br><button type="button" data-fix="primary" data-v="'+f+'"><i style="background:'+f+'"></i>Use '+f+' instead</button>':'')+(!f&&!otherOk?' Try a different shade.':'')+'</div>');
    }
    if(!accOk){
      var fa=fixAccent(c.accent,t,c.bg);
      out.push('<div class="bzc-issue">Your highlight '+c.accent+' is faint against the page ('+ratio(t.accent,t.bg).toFixed(1)+':1). Fine for the gradient, but icons and badges will fade.'+(fa?'<br><button type="button" data-fix="accent" data-v="'+fa+'"><i style="background:'+fa+'"></i>Use '+fa+' instead</button>':'')+'</div>');
    }
    var ov=c.ov||{};
    [['text','Your heading and body text color'],['muted','Your muted text color']].forEach(function(x){
      var r=ratio(t[x[0]],t.bg);if(r>=4.5||!(ov[x[0]]||ov.bg))return;
      out.push('<div class="bzc-issue">'+x[1]+' is hard to read on your background ('+r.toFixed(1)+':1, needs 4.5).'+(ov[x[0]]?'<br><button type="button" data-reset="'+x[0]+'">Reset '+(x[0]==='text'?'text':'muted text')+' color</button>':'')+(ov.bg?'<br><button type="button" data-reset="bg">Reset background</button>':'')+'</div>');
    });
    if(!out.length)out.push('<div class="bzc-issue ok">All contrast checks pass. Scroll down to copy the prompt for your site.</div>');
    $('bzcIssues').innerHTML=out.join('');
  }

  // ---------- picker: presets ----------
  C.forEach(function(c,i){
    var b=document.createElement('button');
    b.type='button';b.className='bzc-combo';b.dataset.i=i;b.dataset.mood=c[1];b.setAttribute('aria-pressed','false');
    b.innerHTML='<span class="bzc-chip" style="background:'+c[2]+'"><s style="background:'+c[6]+'"></s><i style="background:'+gradCss(c[10])+'"></i></span><span><b>'+c[0]+'</b><small>'+c[1]+'</small></span>';
    b.addEventListener('click',function(){applyPreset(i,true)});
    list.appendChild(b);
  });
  document.querySelectorAll('.bzc-filters button').forEach(function(f){
    f.addEventListener('click',function(){
      filter=f.dataset.filter;
      document.querySelectorAll('.bzc-filters button').forEach(function(x){x.setAttribute('aria-pressed',x===f?'true':'false')});
      list.querySelectorAll('.bzc-combo').forEach(function(b){b.style.display=(filter==='all'||b.dataset.mood===filter)?'':'none'});
    });
  });
  function visible(){return C.map(function(c,i){return i}).filter(function(i){return filter==='all'||C[i][1]===filter})}
  function step(d){var v=visible();var p=v.indexOf(A.i);applyPreset(v[(p+d+v.length)%v.length],true)}
  $('bzcPrev').onclick=function(){step(-1)};
  $('bzcNext').onclick=function(){step(1)};
  $('bzcShuffle').onclick=function(){var v=visible().filter(function(i){return i!==A.i});applyPreset(v[Math.floor(Math.random()*v.length)],true)};
  list.addEventListener('keydown',function(e){if(e.key==='ArrowDown'||e.key==='ArrowRight'){e.preventDefault();step(1);list.querySelector('[data-i="'+A.i+'"]').focus()}if(e.key==='ArrowUp'||e.key==='ArrowLeft'){e.preventDefault();step(-1);list.querySelector('[data-i="'+A.i+'"]').focus()}});

  // ---------- tabs ----------
  function showTab(which,apply){
    var custom=which==='custom';
    $('tabPresets').setAttribute('aria-selected',custom?'false':'true');$('tabCustom').setAttribute('aria-selected',custom?'true':'false');
    $('bzcPresets').hidden=custom;$('bzcCustom').hidden=!custom;
    document.querySelector('.bzc-btns').style.display=custom?'none':'';
    document.querySelector('.bzc-picker').classList.toggle('is-custom',custom);
    if(apply){custom?applyCustom(true):applyPreset(A.i,true)}
  }
  $('tabPresets').onclick=function(){showTab('presets',true)};
  $('tabCustom').onclick=function(){showTab('custom',true)};
  [$('tabPresets'),$('tabCustom')].forEach(function(t){t.addEventListener('keydown',function(e){if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();var o=t.id==='tabPresets'?$('tabCustom'):$('tabPresets');o.focus();o.click()}})});

  // ---------- custom inputs ----------
  function bindColor(textId,pickId,key){
    var tx=$(textId),pk=$(pickId);
    function set(v,from){A.custom[key]=v;A.custom.ov={};if(from!=='text')tx.value=v;if(from!=='pick')pk.value=v.toLowerCase();tx.parentNode.classList.remove('bad');applyCustom(true)}
    tx.addEventListener('input',function(){var v=norm(tx.value);if(v)set(v,'text');else tx.parentNode.classList.toggle('bad',tx.value.replace('#','').length>=6)});
    tx.addEventListener('blur',function(){tx.value=A.custom[key];tx.parentNode.classList.remove('bad')});
    pk.addEventListener('input',function(){set(pk.value.toUpperCase(),'pick')});
    return set;
  }
  var setP=bindColor('cPrimary','cPrimaryPick','primary'), setA=bindColor('cAccent','cAccentPick','accent');
  document.querySelectorAll('[data-bg]').forEach(function(b){b.onclick=function(){A.custom.bg=b.dataset.bg;A.custom.ov={};document.querySelectorAll('[data-bg]').forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false')});applyCustom(true)}});
  $('bzcIssues').addEventListener('click',function(e){var sb=e.target.closest('[data-switch]');if(sb){document.querySelector('[data-bg="'+sb.dataset.switch+'"]').click();say('Switched to a '+sb.dataset.switch+' background');return}var b=e.target.closest('[data-fix]');if(!b)return;(b.dataset.fix==='primary'?setP:setA)(b.dataset.v);say('Swapped in '+b.dataset.v)});

  // ---------- fine-tune: derived colors ----------
  var TUNE=[['g','Page'],['bg','Background'],['surface','Surface'],['border','Borders'],['g','Text'],['text','Headings and body'],['muted','Muted text'],['on-primary','Button text'],['g','Gradient'],['g1','Start'],['g2','Middle'],['g3','End']];
  var tuneEl=$('bzcTune'),tuneRows={};
  TUNE.forEach(function(r){
    if(r[0]==='g'){tuneEl.insertAdjacentHTML('beforeend','<div class="bzc-tgroup">'+r[1]+'</div>');return}
    var row=document.createElement('div');row.className='bzc-trow';
    row.innerHTML='<span>'+r[1]+'<button type="button" class="rs" hidden>Reset</button></span><div class="bzc-colorin"><input type="color" aria-label="Pick '+r[1]+'"><input type="text" maxlength="7" spellcheck="false" autocomplete="off" aria-label="'+r[1]+' hex"></div>';
    var pk=row.querySelector('input[type=color]'),tx=row.querySelector('input[type=text]'),rs=row.querySelector('.rs');
    function setOv(v){A.custom.ov[r[0]]=v;applyCustom(true)}
    tx.addEventListener('input',function(){var v=norm(tx.value);if(v){tx.parentNode.classList.remove('bad');pk.value=v.toLowerCase();setOv(v)}else tx.parentNode.classList.toggle('bad',tx.value.replace('#','').length>=6)});
    tx.addEventListener('blur',function(){tuneSync(customPalette(),true)});
    pk.addEventListener('input',function(){var v=pk.value.toUpperCase();tx.value=v;setOv(v)});
    rs.addEventListener('click',function(){delete A.custom.ov[r[0]];applyCustom(true)});
    tuneEl.appendChild(row);tuneRows[r[0]]={row:row,pk:pk,tx:tx,rs:rs};
  });
  function tuneSync(P,force){
    var vals={g1:P.g[0],g2:P.g[1],g3:P.g[2]},ov=A.custom.ov||{},any=false;
    Object.keys(tuneRows).forEach(function(k){
      var R=tuneRows[k],v=vals[k]||P.t[k],ed=!!ov[k];any=any||ed;
      if(force||document.activeElement!==R.tx){R.tx.value=v;R.tx.parentNode.classList.remove('bad')}
      if(document.activeElement!==R.pk)R.pk.value=v.toLowerCase();
      R.row.classList.toggle('edited',ed);R.rs.hidden=!ed;
    });
    $('bzcResetAll').hidden=!any;
  }
  $('bzcResetAll').onclick=function(){A.custom.ov={};applyCustom(true);say('Fine-tuning reset')};
  $('bzcIssues').addEventListener('click',function(e){var b=e.target.closest('[data-reset]');if(!b)return;delete A.custom.ov[b.dataset.reset];applyCustom(true)});
  function setBase(p,a,bg){
    A.custom.primary=p;A.custom.accent=a;if(bg)A.custom.bg=bg;A.custom.ov={};
    $('cPrimary').value=p;$('cPrimaryPick').value=p.toLowerCase();$('cAccent').value=a;$('cAccentPick').value=a.toLowerCase();
    $('cPrimary').parentNode.classList.remove('bad');$('cAccent').parentNode.classList.remove('bad');
    document.querySelectorAll('[data-bg]').forEach(function(x){x.setAttribute('aria-pressed',x.dataset.bg===A.custom.bg?'true':'false')});
  }

  // ---------- prompts ----------
  var NOTES={builder:'For Lovable, Bolt, v0, Replit and other chat-based site builders.',code:'For Cursor, Claude Code, Windsurf, GitHub Copilot and other AI code editors.',webflow:'For Claude or another AI connected to your Webflow site. You can also follow it yourself as a checklist.'};
  function oldHex(){return norm($('bzcOld').value)}
  function promptFor(tg){
    var t=A.t,g=gradCss(A.stops),custom=A.mode==='custom',old=oldHex(),dark=A.mood==='dark';
    var head=(tg==='webflow'?'Update the colors on my existing Webflow site. Change colors only. Do not change layout, classes, content, fonts, spacing or interactions.':'Update the colors on my existing site to the new color system below. Change colors only. Keep the layout, copy, fonts, spacing, images and functionality exactly as they are.')+'\n\n';
    if(custom)head+='My brand colors are '+t.primary+' (primary) and '+t.accent+' (highlight). The rest of the palette was built from them and checked for WCAG AA contrast.\n\n';
    else head+='Color system: "'+A.name+'" (checked for WCAG AA contrast).\n\n';
    if(old)head+='My site currently uses '+old+' as its main button and brand color. Replace it, and any lighter or darker versions of it, with the new primary.\n\n';
    var roles='Color roles:\n- Page background: '+t.bg+'\n- Cards, form fields and alternating sections: '+t.surface+'\n- Headings and body text: '+t.text+'\n- Secondary text, captions and placeholders: '+t.muted+'\n- Primary buttons, links, active and focus states: '+t.primary+', with '+t['on-primary']+' for text and icons on those buttons\n- Highlight, used sparingly for badges, icons and small accents (never body text or large backgrounds): '+t.accent+'\n- Borders, dividers and input outlines: '+t.border+'\n- Optional gradient, only for a hero glow or one highlighted headline phrase: '+g+'\n\n';
    var tail='\n'+(dark?'This is a dark color system. Check that shadows, overlays, form fields and any images with white backgrounds still look right on the dark background.\n':'')+'When you are done, list what you changed and flag any text that is below 4.5:1 contrast against its background.';
    var steps;
    if(tg==='builder'){
      steps='How to apply it:\n1. Save these as reusable theme colors (CSS variables or the theme settings), then use them on every page and component instead of one-off color values.\n2. Map existing colors by role, not by hue. Whatever is the main button color now becomes primary, gray body text becomes text or muted, light section backgrounds become surface, and so on.\n3. Every primary button and text link uses the primary color. Secondary buttons get a transparent background, a text-colored label and a border-colored outline.\n4. Hover states change brightness slightly (about 8%). Never switch to a different hue on hover.\n5. Leave photos, logos and illustrations as they are.\n6. Check every page and state: forms, error messages, modals, menus, mobile navigation, the footer and empty states.\n';
    }else if(tg==='code'){
      steps='Implementation:\n1. Search the codebase for every color definition: CSS custom properties, the Tailwind config (theme.extend.colors or @theme), CSS and SCSS files, CSS-in-JS, component props and inline hex, rgb or hsl values.\n2. Add these tokens on :root:\n'+KEYS.map(function(k){return '   --'+k[0]+': '+t[k[0]]+';'}).join('\n')+'\n   --gradient: '+g+';\n   If the project uses Tailwind, map them into the theme as bg, surface, text, muted, primary, on-primary, accent and border so classes like bg-primary and text-muted work.\n3. Replace hard-coded colors with the tokens, mapping by role, not by hue: the old main button color becomes var(--primary), gray body copy becomes var(--text) or var(--muted), and so on.\n4. Primary buttons and links use var(--primary). Secondary buttons: transparent background, var(--text) label, var(--border) outline.\n5. Hover states change brightness slightly (filter: brightness(1.08) or a shade about 8% darker). Never a different hue.\n6. Don\'t touch images, SVG logos or anything that isn\'t a color. Keep the diff limited to color changes.\n';
    }else{
      steps='Steps:\n1. In the Variables panel, create a collection called "Brand colors" with these color variables: Background '+t.bg+', Surface '+t.surface+', Text '+t.text+', Muted '+t.muted+', Primary '+t.primary+', On Primary '+t['on-primary']+', Accent '+t.accent+', Border '+t.border+'. If the site already has color variables for these roles, update their values instead of creating duplicates.\n2. Link the variables by role in the Style panel: Body (All Pages) background to Background and text color to Text; section and card classes to Background or Surface; secondary text classes to Muted; button classes to a Primary background with On Primary text; links to Primary; borders and dividers to Border; badges and icons to Accent.\n3. Replace any remaining hard-coded colors on classes, combo classes and component variants with the matching variable. Map by role, not by hue.\n4. Secondary buttons: transparent background, Text label, Border outline. Hover states change brightness slightly, never the hue.\n5. Check every page, including forms and their success and error states, the mobile navbar menu, the footer and CMS template pages.\n';
    }
    return head+roles+steps+tail;
  }
  function updatePrompt(){if(!A.t)return;$('bzcTargetNote').textContent=NOTES[target];$('bzcPromptPreview').value=promptFor(target)}
  document.querySelectorAll('.bzc-target button').forEach(function(b){b.onclick=function(){target=b.dataset.t;document.querySelectorAll('.bzc-target button').forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false')});updatePrompt()}});
  (function(){var tx=$('bzcOld'),pk=$('bzcOldPick');
    tx.addEventListener('input',function(){var v=norm(tx.value);if(v)pk.value=v.toLowerCase();tx.parentNode.classList.toggle('bad',!v&&tx.value.replace('#','').length>=6);updatePrompt()});
    pk.addEventListener('input',function(){tx.value=pk.value.toUpperCase();tx.parentNode.classList.remove('bad');updatePrompt()});
  })();

  // ---------- copy ----------
  var toast=$('bzcToast'),tt;
  function say(m){toast.textContent=m;toast.classList.add('on');clearTimeout(tt);tt=setTimeout(function(){toast.classList.remove('on')},1800)}
  function fallback(text){var a=document.createElement('textarea');a.value=text;a.style.position='fixed';a.style.opacity='0';document.body.appendChild(a);a.select();try{document.execCommand('copy')}catch(e){}a.remove()}
  function copy(text,msg){if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).then(function(){say(msg)},function(){fallback(text);say(msg)})}else{fallback(text);say(msg)}}
  $('bzcSwatches').addEventListener('click',function(e){var b=e.target.closest('.bzc-sw');if(b)copy(b.dataset.hex,'Copied '+b.dataset.hex)});
  function cssBlock(){var t=A.t;return '/* '+A.name+' · from bzen.io/guides */\n:root {\n'+KEYS.map(function(k){return '  --'+k[0]+': '+t[k[0]]+';'}).join('\n')+'\n  --gradient: '+gradCss(A.stops)+';\n}'}
  var TNAME={builder:'AI builder',code:'code editor',webflow:'Webflow'};
  $('copyPrompt').onclick=function(){copy(promptFor(target),'Prompt for '+TNAME[target]+' copied')};
  $('copyCss').onclick=function(){copy(cssBlock(),'CSS variables copied')};
  $('copyGrad').onclick=function(){copy('background: '+gradCss(A.stops)+';','Gradient copied')};

  // ---------- gradients library ----------
  var gg=$('bzcGrads');
  G.forEach(function(g){
    var d=document.createElement('div');d.className='bzc-g';
    d.innerHTML='<div class="sw" style="background:'+g[2]+'"></div><div class="body"><b>'+g[0]+'</b><code>'+g[2]+'</code><div class="row"><button class="bzc-btn primary" type="button" data-a="copy">Copy</button><button class="bzc-btn" type="button" data-a="try">Try it</button></div></div>';
    d.querySelector('[data-a="copy"]').onclick=function(){copy('background: '+g[2]+';',g[0]+' copied')};
    d.querySelector('[data-a="try"]').onclick=function(){
      var st=g[1].map(norm);
      setBase(st[0],st[st.length-1],g[3]||null);
      if(st.length===3){A.custom.ov.g1=st[0];A.custom.ov.g2=st[1];A.custom.ov.g3=st[2]}
      showTab('custom',false);applyCustom(true);
      $('studio').scrollIntoView({behavior:'smooth',block:'start'});say(g[0]+' loaded into Your colors');
    };
    gg.appendChild(d);
  });

  // ---------- demo form ----------
  $('lpForm').addEventListener('submit',function(e){e.preventDefault();$('lpNote').style.display='none';$('lpThanks').style.display='block'});

  // ---------- start: preset or custom from hash ----------
  var h=(location.hash||'').slice(1),m=h.match(/^custom-([0-9a-f]{6})-([0-9a-f]{6})-(light|dark)$/i);
  if(m){
    A.custom={primary:'#'+m[1].toUpperCase(),accent:'#'+m[2].toUpperCase(),bg:m[3].toLowerCase(),ov:{}};
    $('cPrimary').value=A.custom.primary;$('cPrimaryPick').value=A.custom.primary.toLowerCase();$('cAccent').value=A.custom.accent;$('cAccentPick').value=A.custom.accent.toLowerCase();
    document.querySelectorAll('[data-bg]').forEach(function(x){x.setAttribute('aria-pressed',x.dataset.bg===A.custom.bg?'true':'false')});
    applyPreset(0,false);showTab('custom',false);applyCustom(false);
  }else{
    var start=0;C.forEach(function(c,i){if(slug(c[0])===h)start=i});applyPreset(start,false);
  }
})();

})();
