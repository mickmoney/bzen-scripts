/*! Bzen Text Reveal Cheat Sheet tool | bzen.io | Free to use
 * Mount: <div id="bz-text-reveals"></div>  Styles are scoped to .trc-root (added automatically).
 */
(function(){
const ROOT = document.getElementById('bz-text-reveals') || document.getElementById('trc-tool');
if(!ROOT) return;
ROOT.classList.add('trc-root');
ROOT.innerHTML = `<div class="controls">
  <div class="wrap"><div class="panel">
    <div class="fields">
      <label class="field">Element <input id="trc-in-element" placeholder="headline and subheadline" value="headline and subheadline"></label>
      <label class="field">Section <input id="trc-in-section" placeholder="hero section" value="hero section"></label>
    </div>
    <div><div class="filters-label">Filter by style</div>
    <div class="chips" role="group" aria-label="Filter by style">
      <button class="chip" data-filter="all" aria-pressed="true">All reveals</button>
      <button class="chip" data-filter="subtle" aria-pressed="false">Subtle</button>
      <button class="chip" data-filter="bold" aria-pressed="false">Bold</button>
      <button class="chip" data-filter="playful" aria-pressed="false">Playful</button>
    </div></div>
  </div></div>
</div>

<main><div class="wrap"><div class="grid" id="trc-grid"></div></div></main><section class="block" id="patterns"><div class="wrap"><h2>Prompt templates for any reveal</h2><p class="sub">Swap the bracketed parts for your own page and the name of the reveal you want.</p><div class="patterns" id="trc-pattern-list"></div></div></section><div class="toast" id="trc-toast">Copied</div>`;

const REVEALS = [
  { id:"fade-up", name:"Fade Up", mood:"subtle", aka:"fade-in-up · rise in · slide-up fade",
    desc:"The safe default. Each block fades in while rising a short distance into place.",
    demo:`<div class="h fu" style="--i:0">Ship it this weekend.</div><div class="s fu" style="--i:1">A landing page that actually converts.</div>`,
    prompt:"Animate the {element} in the {section} using a «fade-up reveal»: each element starts at opacity 0 and 24px below its final position, then rises into place over 600ms with an ease-out curve. Stagger multiple elements by 120ms. Trigger once when the section scrolls into view." },

  { id:"words", name:"Word-by-Word Stagger", mood:"subtle", aka:"word reveal · staggered words · split words",
    desc:"Words appear one after another, which makes people read the line at your pace.",
    demo:`<div class="h" data-split="words">Stop guessing what your customers want.</div>`,
    prompt:"Animate the {element} in the {section} using a «word-by-word stagger reveal»: split the text into individual words, then fade each word in while sliding it up 0.4em, with an 80ms stagger between words and 500ms per word, ease-out. Keep line breaks unchanged (no layout shift). Trigger once when it scrolls into view." },

  { id:"chars", name:"Letter-by-Letter Stagger", mood:"bold", aka:"character stagger · split letters · per-char reveal",
    desc:"A quicker ripple across every character. Works best on short, punchy headlines.",
    demo:`<div class="h" data-split="chars">Built by founders,</div><div class="h" data-split="chars" data-offset="18" style="color:var(--accent)">for founders.</div>`,
    prompt:"Animate the {element} in the {section} using a «letter-by-letter stagger reveal»: split the text into individual characters (keep words from breaking across lines), then fade each character in while moving it up 0.6em, with a 28ms stagger and 450ms per character, ease-out. Trigger once when it scrolls into view." },

  { id:"typewriter", name:"Typewriter", mood:"playful", aka:"typing effect · typed text · type-on",
    desc:"Text is typed out one character at a time behind a blinking cursor.",
    demo:`<div class="h"><span class="tw" data-text="Hello, early adopters."></span><span class="caret"></span></div><div class="s">Typed at 45ms per character.</div>`,
    prompt:"Animate the {element} in the {section} using a «typewriter effect»: type the text out one character at a time at about 45ms per character, with a blinking cursor that fades out 1 second after typing finishes. Reserve the final text's space up front so the layout doesn't jump. Trigger once when it scrolls into view." },

  { id:"mask", name:"Masked Line Reveal", mood:"bold", aka:"line mask · slide-up mask · curtain reveal",
    desc:"Each line slides up from behind an invisible edge. The classic agency-site headline.",
    demo:`<div class="h"><span class="m"><span class="mi" style="--i:0">Launch faster.</span></span><span class="m"><span class="mi" style="--i:1">Spend less.</span></span><span class="m"><span class="mi" style="--i:2;color:var(--accent)">Sleep more.</span></span></div>`,
    prompt:"Animate the {element} in the {section} using a «masked line reveal»: split the text into lines, wrap each line in a container with overflow hidden, and slide each line up from translateY(110%) to 0 over 900ms with an ease-out-expo curve and a 110ms stagger between lines. Trigger once when it scrolls into view." },

  { id:"blur", name:"Blur In", mood:"subtle", aka:"blur reveal · focus in · defocus fade",
    desc:"Words come into focus from a soft blur. Calm and premium.",
    demo:`<div class="h" data-split="words">Clarity sells better than clever.</div>`,
    prompt:"Animate the {element} in the {section} using a «blur-in reveal»: split the text into words, and animate each word from opacity 0 and blur(12px) to opacity 1 and blur(0) over 800ms, ease-out, with a 90ms stagger. Trigger once when it scrolls into view." },

  { id:"wipe", name:"Clip-Path Wipe", mood:"bold", aka:"wipe reveal · clip reveal · left-to-right wipe",
    desc:"The text is uncovered left to right as if a cover were being pulled away.",
    demo:`<div class="h wp" style="--i:0">Your new favorite tool.</div><div class="s wp" style="--i:1">Uncovered left to right.</div>`,
    prompt:"Animate the {element} in the {section} using a «clip-path wipe reveal»: animate clip-path from inset(0 100% 0 0) to inset(0 0 0 0) so the text is uncovered left to right over 1s with an ease-in-out curve. Stagger multiple lines by 180ms. Trigger once when it scrolls into view." },

  { id:"block", name:"Block Swipe Reveal", mood:"bold", aka:"color block reveal · bar wipe · swipe-in",
    desc:"A solid color bar sweeps across, and the text is left behind as it slides away. Very editorial.",
    demo:`<div class="h"><span class="bs" style="--i:0"><span class="t">Design that works.</span></span><br><span class="bs" style="--i:1"><span class="t" style="color:var(--accent)">Pages that sell.</span></span></div>`,
    prompt:"Animate the {element} in the {section} using a «block swipe reveal»: for each line, a solid block in [brand color] wipes across from left to right (scaleX 0 → 1), the text appears underneath at the halfway point, then the block wipes away to the right (scaleX 1 → 0). 900ms per line, ease-in-out, 150ms stagger between lines. Trigger once when it scrolls into view." },

  { id:"scramble", name:"Scramble / Decode", mood:"playful", aka:"text scramble · decrypt effect · shuffle text",
    desc:"Random characters cycle and settle into the real text, left to right. Good for tech products.",
    demo:`<div class="h mono scr" data-text="Now in public beta_"></div><div class="s">Random characters settle into the real text.</div>`,
    prompt:"Animate the {element} in the {section} using a «text scramble (decode) effect»: show random characters in place of the text, then resolve them into the real characters from left to right over about 1.2 seconds, re-randomizing the unresolved characters every frame. Use a monospace font or fixed-width spans so the width doesn't jitter. Trigger once when it scrolls into view." },

  { id:"glitch", name:"Glitch In", mood:"playful", aka:"glitch text · RGB split · digital distortion",
    desc:"The text flickers on with jittery color-split slices, then snaps into place. Use it sparingly.",
    demo:`<div class="h"><span class="gl" data-text="System online.">System online.</span></div><div class="s">Flickers, splits, then settles.</div>`,
    prompt:"Animate the {element} in the {section} using a «glitch-in reveal»: the text flickers on over about 900ms while two offset copies (one [red], one [cyan], made with ::before and ::after) jump between horizontal slices using clip-path and shift a few pixels left and right, then settle into clean text. Run it once, only on short headings, and skip it entirely for prefers-reduced-motion." },

  { id:"flip", name:"3D Flip-In", mood:"bold", aka:"rotate-in letters · flip up · rotateX reveal",
    desc:"Letters flip up from flat, like cards being stood on end.",
    demo:`<div class="h" data-split="chars">Meet the new way</div><div class="h" data-split="chars" data-offset="17">to do the boring stuff.</div>`,
    prompt:"Animate the {element} in the {section} using a «3D flip-in letter reveal»: split the text into characters, give the parent perspective: 600px, and rotate each character from rotateX(-95deg) to 0 with its transform origin at the bottom, fading in from opacity 0, over 600ms ease-out with a 40ms stagger. Trigger once when it scrolls into view." },

  { id:"highlight", name:"Highlighter Sweep", mood:"subtle", aka:"marker highlight · highlight draw · text marker",
    desc:"A marker stroke sweeps behind the key phrase. It draws the eye to one benefit.",
    demo:`<div class="h">Get paid <span class="hl">twice as fast</span> with invoices that chase themselves.</div>`,
    prompt:"Animate the key phrase [phrase] in the {element} of the {section} using a «highlighter sweep»: put a background highlight behind the phrase (bottom 40% of the line height, color [#FFE45C]) and animate its width from 0% to 100% left to right over 800ms, ease-in-out, starting 300ms after the section scrolls into view. Run once." },

  { id:"gradient", name:"Gradient Sweep", mood:"bold", aka:"shimmer text · color sweep · gradient fill reveal",
    desc:"Color washes across the text from pale grey to full ink, with a bright accent edge.",
    demo:`<div class="h gs">Your best launch yet starts here.</div>`,
    prompt:"Animate the {element} in the {section} using a «gradient sweep reveal»: fill the text with a wide linear gradient (light grey → [accent color] edge → final text color) using background-clip: text, and animate the background-position so the color sweeps across from left to right over 1.6s, ease-in-out. Trigger once when it scrolls into view." },

  { id:"outline", name:"Outline-to-Fill", mood:"bold", aka:"stroke to fill · hollow-to-solid · outline text fill",
    desc:"The heading starts as an outline and fills in with solid color from left to right.",
    demo:`<div class="h of">Bold ideas,<br>filled in.</div>`,
    prompt:"Animate the {element} in the {section} using an «outline-to-fill text reveal»: show the text as an outline first (transparent fill with a 1.5px text stroke in the text color), then fill it with solid color from left to right by animating a background-clip: text fill from 0% to 100% width over 1.2s, ease-in-out. Best on large headings. Trigger once when it scrolls into view." },

  { id:"tracking", name:"Tracking In", mood:"bold", aka:"letter-spacing reveal · tracking-in-expand · contract in",
    desc:"Tightly packed letters expand out to normal spacing as they come into focus.",
    demo:`<div class="h tk">LESS NOISE.</div>`,
    prompt:"Animate the {element} in the {section} using a «tracking-in reveal»: animate letter-spacing from -0.5em to normal, opacity from 0 to 1 and blur from 6px to 0 over 900ms with an ease-out curve. Best on short uppercase headings. Trigger once when it scrolls into view." },

  { id:"rotate", name:"Rotating Words", mood:"playful", aka:"word cycler · text loop · flip words",
    desc:"One word in the headline keeps swapping. Fits one headline to several audiences.",
    demo:`<div class="h">Built for<br><span class="rot"><span>founders.</span><span>makers.</span><span>indie hackers.</span><span>tiny teams.</span></span></div>`,
    prompt:"In the {element} of the {section}, add a «rotating words» effect: cycle one word through [word 1], [word 2], [word 3]. Every 2 seconds the current word slides up and out while the next slides up into place (550ms, ease-out-expo), inside an overflow-hidden wrapper sized to the longest word so the line doesn't jump. Loop forever; pause when the tab is hidden." },

  { id:"count", name:"Count-Up Number", mood:"playful", aka:"number ticker · counter animation · stat roll",
    desc:"A stat climbs from zero to its value. Ideal for traction numbers and social proof.",
    demo:`<div class="h"><span class="count" data-to="48210" data-prefix="$">$0</span> <span class="unit">MRR</span></div><div class="s">and climbing every month.</div>`,
    prompt:"Animate the numbers in the {section} using a «count-up number animation»: when the section scrolls into view, count each number from 0 to its final value over 1.4s with an ease-out-expo curve, keeping prefixes, suffixes and thousands separators. Use tabular-nums so the width doesn't shift. Run once." },

  { id:"scrollfill", name:"Scroll-Linked Word Fill", mood:"subtle", aka:"scroll scrub text · opacity scrub · reading reveal",
    desc:"Faded text fills in word by word as the visitor scrolls. Good for a mission statement.",
    demo:`<div class="h" data-split="words">Every word lights up as you scroll down the page.</div>`,
    prompt:"Animate the {element} in the {section} using a «scroll-linked word fill»: split the text into words, start every word at opacity 0.15, and tie each word's opacity to scroll position so the words fill to full opacity one after another as the paragraph moves through the middle of the viewport. Scrolling back up should reverse it." },

  { id:"underline", name:"Underline Draw", mood:"subtle", aka:"line draw · animated underline · stroke reveal",
    desc:"A line draws itself under the key word after the heading appears.",
    demo:`<div class="h fu">Built to <span class="trc-ul">convert.</span></div><div class="s fu">The line draws after the text lands.</div>`,
    prompt:"Animate the key word [word] in the {element} of the {section} using an «underline draw»: add an underline (pseudo-element, [accent color], about 0.1em thick) that scales from scaleX(0) to scaleX(1) from left to right over 700ms, ease-in-out, starting 300ms after the heading fades in. Trigger once when it scrolls into view." },

  { id:"elastic", name:"Elastic Drop", mood:"playful", aka:"bounce-in letters · springy letters · drop-in",
    desc:"Letters drop in from above and bounce slightly as they land.",
    demo:`<div class="h" data-split="chars">Say hello to</div><div class="h" data-split="chars" data-offset="13" style="color:var(--accent)">happy users.</div>`,
    prompt:"Animate the {element} in the {section} using an «elastic drop-in letter reveal»: split the text into characters and drop each one from 1.1em above its position, fading in, with a springy overshoot easing (cubic-bezier(.34,1.75,.64,1)) over 750ms and a 45ms stagger. Trigger once when it scrolls into view." }
];

const PATTERNS = [
  { label:"One section", text:"Animate the [headline and subheadline] in the [hero section] using a [reveal type]." },
  { label:"Site-wide", text:"Animate all [H2 headings] across the site using a [reveal type], triggered once as each one scrolls into view." },
  { label:"Combine two", text:"Animate the [headline] in the [hero section] using a [reveal type 1], then reveal the [subheadline and CTA button] with a [reveal type 2] that starts as soon as the first one finishes." },
  { label:"Replace", text:"Replace the current animation on the [pricing section heading] with a [reveal type]. Keep the total duration under [800ms] and don't change any copy or layout." },
  { label:"Tune it", text:"The [reveal type] on the [element] feels too [slow / fast / busy]. Make the stagger [tighter / looser], use an ease-out-expo curve, and make it run only once." },
  { label:"Safety net", text:"For every text reveal on the page: respect prefers-reduced-motion (show the text instantly), avoid layout shift, and make sure the text is still in the HTML for SEO and screen readers." }
];

/* ---------- helpers ---------- */
const $ = (s, r=ROOT) => r.querySelector(s);
const $$ = (s, r=ROOT) => [...r.querySelectorAll(s)];
const esc = s => s.replace(/[&<>]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));

function splitWords(el){
  const words = el.textContent.trim().split(/\s+/);
  el.textContent = '';
  words.forEach((w,i) => {
    const s = document.createElement('span'); s.className='w'; s.style.setProperty('--i', i); s.textContent = w;
    el.appendChild(s); if(i < words.length-1) el.appendChild(document.createTextNode(' '));
  });
}
function splitChars(el){
  let idx = +(el.dataset.offset || 0);
  const words = el.textContent.trim().split(/\s+/);
  el.textContent = '';
  words.forEach((w,wi) => {
    const ww = document.createElement('span'); ww.className='ww';
    [...w].forEach(ch => { const s=document.createElement('span'); s.className='c'; s.textContent=ch; s.style.setProperty('--i', idx++); ww.appendChild(s); });
    el.appendChild(ww); if(wi < words.length-1){ el.appendChild(document.createTextNode(' ')); idx++; }
  });
}

/* ---------- prompt rendering ---------- */
function vals(){
  return { element: $('#trc-in-element').value.trim(), section: $('#trc-in-section').value.trim() };
}
function promptText(tpl){
  const v = vals();
  return tpl.replace('{element}', v.element || '[element]').replace('{section}', v.section || '[section]')
            .replace(/«(.+?)»/g, '$1');
}
function promptHTML(tpl){
  const v = vals();
  let h = esc(tpl);
  h = h.replace(/\[([^\]]+)\]/g, '<span class="ph">[$1]</span>');
  h = h.replace('{element}', `<span class="ph">${esc(v.element || '[element]')}</span>`)
       .replace('{section}', `<span class="ph">${esc(v.section || '[section]')}</span>`);
  h = h.replace(/«(.+?)»/g, '<span class="rn">$1</span>');
  return h;
}
function renderPrompts(){
  REVEALS.forEach(r => { const p = $(`[data-id="${r.id}"] .prompt`); if(p) p.innerHTML = promptHTML(r.prompt); });
}

/* ---------- build cards ---------- */
const COPY_ICON = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/></svg>';
const grid = $('#trc-grid');
REVEALS.forEach((r,i) => {
  const card = document.createElement('article');
  card.className = 'card'; card.tabIndex = 0; card.dataset.id = r.id; card.dataset.mood = r.mood;
  card.innerHTML = `
    <div class="stage" title="Click to replay">
      <span class="num">${String(i+1).padStart(2,'0')}</span>
      <span class="replay">↻ replay</span>
      ${r.demo}
      <span class="stage-label">${r.name}</span>
    </div>
    <div class="meta">
      <div class="tags"><span class="tag">${r.mood}</span></div>
      <div class="title-row">
        <div class="name">${r.name}</div>
        <button class="copy-name" title="Copy the name">${COPY_ICON}<span>Copy name</span></button>
      </div>
      <div class="aka">aka ${r.aka}</div>
      <p class="desc">${r.desc}</p>
      <div class="hint">Hover to see the prompt <span>↓</span></div>
    </div>
    <div class="prompt-panel">
      <div class="prompt" title="Click to copy"></div>
      <button class="btn copy-prompt">${COPY_ICON}<span>Copy prompt</span></button>
    </div>`;
  grid.appendChild(card);
  $$('[data-split="words"]', card).forEach(splitWords);
  $$('[data-split="chars"]', card).forEach(splitChars);
});
renderPrompts();

/* ---------- patterns ---------- */
const pl = $('#trc-pattern-list');
PATTERNS.forEach(p => {
  const d = document.createElement('div'); d.className='pattern';
  d.innerHTML = `<div class="tags"><span class="tag">${p.label}</span></div><div class="prompt" title="Click to copy">${esc(p.text).replace(/\[([^\]]+)\]/g,'<span class="ph">[$1]</span>')}</div>`;
  $('.prompt', d).addEventListener('click', () => copy(p.text, 'Pattern copied'));
  pl.appendChild(d);
});

/* ---------- JS-driven demos ---------- */
const JS = {
  typewriter(stage, tok){
    const t = $('.tw', stage), caret = $('.caret', stage), text = t.dataset.text;
    t.textContent = ''; caret.classList.remove('done');
    let i = 0;
    (function step(){
      if(stage._tok !== tok) return;
      t.textContent = text.slice(0, ++i);
      if(i < text.length) setTimeout(step, 45 + Math.random()*30);
      else setTimeout(() => { if(stage._tok === tok) caret.classList.add('done'); }, 1000);
    })();
  },
  scramble(stage, tok){
    const el = $('.scr', stage), text = el.dataset.text, chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&*+=<>/\\0123456789';
    const dur = 1300, start = performance.now();
    (function frame(now){
      if(stage._tok !== tok) return;
      const p = Math.min(1, (now - start) / dur), resolved = Math.floor(p * text.length);
      let out = '';
      for(let k=0;k<text.length;k++){
        if(k < resolved || text[k] === ' ') out += esc(text[k]);
        else out += `<span class="x">${esc(chars[Math.floor(Math.random()*chars.length)])}</span>`;
      }
      el.innerHTML = out;
      if(p < 1) requestAnimationFrame(frame);
    })(start);
  },
  rotate(stage, tok){
    const words = $$('.rot span', stage);
    words.forEach(w => w.className = '');
    let i = 0;
    requestAnimationFrame(() => words[0].classList.add('on'));
    const tick = () => {
      if(stage._tok !== tok) return;
      const cur = words[i % words.length], next = words[(i+1) % words.length];
      next.className = ''; void next.offsetWidth;
      cur.className = 'out'; next.className = 'on'; i++;
      setTimeout(tick, 1500);
    };
    setTimeout(tick, 1400);
  },
  count(stage, tok){
    const el = $('.count', stage), to = +el.dataset.to, pre = el.dataset.prefix || '';
    const dur = 1400, start = performance.now();
    const ease = x => x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    (function frame(now){
      if(stage._tok !== tok) return;
      const p = Math.min(1, (now - start) / dur);
      el.textContent = pre + Math.round(to * ease(p)).toLocaleString('en-US');
      if(p < 1) requestAnimationFrame(frame);
    })(start);
  }
};

function play(card){
  const stage = $('.stage', card), id = card.dataset.id;
  stage._tok = (stage._tok || 0) + 1;
  stage.classList.remove('run'); void stage.offsetWidth; stage.classList.add('run');
  if(JS[id]) JS[id](stage, stage._tok);
}

/* ---------- interactions ---------- */
const visible = new Set();
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){ if(!visible.has(e.target)){ visible.add(e.target); play(e.target); } }
    else visible.delete(e.target);
  });
}, { threshold: .35 });

$$('.card').forEach(card => {
  io.observe(card);
  card.addEventListener('mouseenter', () => { card._hover = true; play(card); });
  card.addEventListener('mouseleave', () => { card._hover = false; });
  $('.stage', card).addEventListener('click', () => play(card));
  const r = REVEALS.find(x => x.id === card.dataset.id);
  $('.prompt', card).addEventListener('click', () => copy(promptText(r.prompt), `Copied: ${r.name} prompt`));
  $('.copy-prompt', card).addEventListener('click', () => copy(promptText(r.prompt), `Copied: ${r.name} prompt`));
  $('.copy-name', card).addEventListener('click', () => copy(r.name, `Copied: ${r.name}`));
});

// Loop visible demos so the page (and a screen capture of it) stays alive.
// The rotating-words card keeps cycling on its own, so it's skipped here.
let loopMs = 5200;
function loop(){
  visible.forEach(card => { if(!card._hover && !card.hidden && card.dataset.id !== 'rotate') play(card); });
}
let loopTimer = setInterval(loop, loopMs);

['#trc-in-element', '#trc-in-section'].forEach(s => $(s).addEventListener('input', renderPrompts));

$$('.chip').forEach(ch => ch.addEventListener('click', () => {
  $$('.chip').forEach(c => c.setAttribute('aria-pressed', c === ch));
  const f = ch.dataset.filter;
  $$('.card').forEach(card => { card.hidden = !(f === 'all' || card.dataset.mood === f); });
}));



/* ---------- clipboard ---------- */
let toastT;
function toast(msg){
  const t = $('#trc-toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 1800);
}
async function copy(text, msg){
  try { await navigator.clipboard.writeText(text); toast(msg || 'Copied'); }
  catch(e){
    const ta = document.createElement('textarea'); ta.value = text; ta.style.position='fixed'; ta.style.opacity='0';
    document.body.appendChild(ta); ta.select();
    let ok = false; try { ok = document.execCommand('copy'); } catch(_){}
    ta.remove(); toast(ok ? (msg || 'Copied') : 'Copy blocked here. Select the text and copy it manually.');
  }
}


})();
