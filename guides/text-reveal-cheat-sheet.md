# Text Reveal Cheat Sheet: 20 Animations with AI Prompts

By Bzen Digital (bzen.io). Free to use.

AI coding tools do a better job when you name the exact animation you want. This cheat sheet lists 20 text reveal animations, the other names people use for each one, and a prompt you can paste into Cursor, Lovable, Bolt, v0, Claude or Webflow's AI.

## How to use the prompts

1. Pick a reveal below.
2. Replace `[element]` with what you want to animate (for example "headline and subheadline") and `[section]` with where it lives (for example "hero section").
3. Replace any other bracketed values, like `[brand color]` or `[word 1]`.
4. Paste the prompt into your AI tool.

## Quick list

| # | Reveal | Style | Also called |
|---|---|---|---|
| 1 | Fade Up | Subtle | fade-in-up, rise in, slide-up fade |
| 2 | Word-by-Word Stagger | Subtle | word reveal, staggered words, split words |
| 3 | Letter-by-Letter Stagger | Bold | character stagger, split letters, per-char reveal |
| 4 | Typewriter | Playful | typing effect, typed text, type-on |
| 5 | Masked Line Reveal | Bold | line mask, slide-up mask, curtain reveal |
| 6 | Blur In | Subtle | blur reveal, focus in, defocus fade |
| 7 | Clip-Path Wipe | Bold | wipe reveal, clip reveal, left-to-right wipe |
| 8 | Block Swipe Reveal | Bold | color block reveal, bar wipe, swipe-in |
| 9 | Scramble / Decode | Playful | text scramble, decrypt effect, shuffle text |
| 10 | Glitch In | Playful | glitch text, RGB split, digital distortion |
| 11 | 3D Flip-In | Bold | rotate-in letters, flip up, rotateX reveal |
| 12 | Highlighter Sweep | Subtle | marker highlight, highlight draw, text marker |
| 13 | Gradient Sweep | Bold | shimmer text, color sweep, gradient fill reveal |
| 14 | Outline-to-Fill | Bold | stroke to fill, hollow-to-solid, outline text fill |
| 15 | Tracking In | Bold | letter-spacing reveal, tracking-in-expand, contract in |
| 16 | Rotating Words | Playful | word cycler, text loop, flip words |
| 17 | Count-Up Number | Playful | number ticker, counter animation, stat roll |
| 18 | Scroll-Linked Word Fill | Subtle | scroll scrub text, opacity scrub, reading reveal |
| 19 | Underline Draw | Subtle | line draw, animated underline, stroke reveal |
| 20 | Elastic Drop | Playful | bounce-in letters, springy letters, drop-in |

## The 20 reveals

### 1. Fade Up

**Style:** Subtle  
**Also called:** fade-in-up, rise in, slide-up fade

The safe default. Each block fades in while rising a short distance into place.

**Prompt:**

> Animate the [element] in the [section] using a **fade-up reveal**: each element starts at opacity 0 and 24px below its final position, then rises into place over 600ms with an ease-out curve. Stagger multiple elements by 120ms. Trigger once when the section scrolls into view.

### 2. Word-by-Word Stagger

**Style:** Subtle  
**Also called:** word reveal, staggered words, split words

Words appear one after another, which makes people read the line at your pace.

**Prompt:**

> Animate the [element] in the [section] using a **word-by-word stagger reveal**: split the text into individual words, then fade each word in while sliding it up 0.4em, with an 80ms stagger between words and 500ms per word, ease-out. Keep line breaks unchanged (no layout shift). Trigger once when it scrolls into view.

### 3. Letter-by-Letter Stagger

**Style:** Bold  
**Also called:** character stagger, split letters, per-char reveal

A quicker ripple across every character. Works best on short, punchy headlines.

**Prompt:**

> Animate the [element] in the [section] using a **letter-by-letter stagger reveal**: split the text into individual characters (keep words from breaking across lines), then fade each character in while moving it up 0.6em, with a 28ms stagger and 450ms per character, ease-out. Trigger once when it scrolls into view.

### 4. Typewriter

**Style:** Playful  
**Also called:** typing effect, typed text, type-on

Text is typed out one character at a time behind a blinking cursor.

**Prompt:**

> Animate the [element] in the [section] using a **typewriter effect**: type the text out one character at a time at about 45ms per character, with a blinking cursor that fades out 1 second after typing finishes. Reserve the final text's space up front so the layout doesn't jump. Trigger once when it scrolls into view.

### 5. Masked Line Reveal

**Style:** Bold  
**Also called:** line mask, slide-up mask, curtain reveal

Each line slides up from behind an invisible edge. The classic agency-site headline.

**Prompt:**

> Animate the [element] in the [section] using a **masked line reveal**: split the text into lines, wrap each line in a container with overflow hidden, and slide each line up from translateY(110%) to 0 over 900ms with an ease-out-expo curve and a 110ms stagger between lines. Trigger once when it scrolls into view.

### 6. Blur In

**Style:** Subtle  
**Also called:** blur reveal, focus in, defocus fade

Words come into focus from a soft blur. Calm and premium.

**Prompt:**

> Animate the [element] in the [section] using a **blur-in reveal**: split the text into words, and animate each word from opacity 0 and blur(12px) to opacity 1 and blur(0) over 800ms, ease-out, with a 90ms stagger. Trigger once when it scrolls into view.

### 7. Clip-Path Wipe

**Style:** Bold  
**Also called:** wipe reveal, clip reveal, left-to-right wipe

The text is uncovered left to right as if a cover were being pulled away.

**Prompt:**

> Animate the [element] in the [section] using a **clip-path wipe reveal**: animate clip-path from inset(0 100% 0 0) to inset(0 0 0 0) so the text is uncovered left to right over 1s with an ease-in-out curve. Stagger multiple lines by 180ms. Trigger once when it scrolls into view.

### 8. Block Swipe Reveal

**Style:** Bold  
**Also called:** color block reveal, bar wipe, swipe-in

A solid color bar sweeps across, and the text is left behind as it slides away. Very editorial.

**Prompt:**

> Animate the [element] in the [section] using a **block swipe reveal**: for each line, a solid block in [brand color] wipes across from left to right (scaleX 0 → 1), the text appears underneath at the halfway point, then the block wipes away to the right (scaleX 1 → 0). 900ms per line, ease-in-out, 150ms stagger between lines. Trigger once when it scrolls into view.

### 9. Scramble / Decode

**Style:** Playful  
**Also called:** text scramble, decrypt effect, shuffle text

Random characters cycle and settle into the real text, left to right. Good for tech products.

**Prompt:**

> Animate the [element] in the [section] using a **text scramble (decode) effect**: show random characters in place of the text, then resolve them into the real characters from left to right over about 1.2 seconds, re-randomizing the unresolved characters every frame. Use a monospace font or fixed-width spans so the width doesn't jitter. Trigger once when it scrolls into view.

### 10. Glitch In

**Style:** Playful  
**Also called:** glitch text, RGB split, digital distortion

The text flickers on with jittery color-split slices, then snaps into place. Use it sparingly.

**Prompt:**

> Animate the [element] in the [section] using a **glitch-in reveal**: the text flickers on over about 900ms while two offset copies (one [red], one [cyan], made with ::before and ::after) jump between horizontal slices using clip-path and shift a few pixels left and right, then settle into clean text. Run it once, only on short headings, and skip it entirely for prefers-reduced-motion.

### 11. 3D Flip-In

**Style:** Bold  
**Also called:** rotate-in letters, flip up, rotateX reveal

Letters flip up from flat, like cards being stood on end.

**Prompt:**

> Animate the [element] in the [section] using a **3D flip-in letter reveal**: split the text into characters, give the parent perspective: 600px, and rotate each character from rotateX(-95deg) to 0 with its transform origin at the bottom, fading in from opacity 0, over 600ms ease-out with a 40ms stagger. Trigger once when it scrolls into view.

### 12. Highlighter Sweep

**Style:** Subtle  
**Also called:** marker highlight, highlight draw, text marker

A marker stroke sweeps behind the key phrase. It draws the eye to one benefit.

**Prompt:**

> Animate the key phrase [phrase] in the [element] of the [section] using a **highlighter sweep**: put a background highlight behind the phrase (bottom 40% of the line height, color [#FFE45C]) and animate its width from 0% to 100% left to right over 800ms, ease-in-out, starting 300ms after the section scrolls into view. Run once.

### 13. Gradient Sweep

**Style:** Bold  
**Also called:** shimmer text, color sweep, gradient fill reveal

Color washes across the text from pale grey to full ink, with a bright accent edge.

**Prompt:**

> Animate the [element] in the [section] using a **gradient sweep reveal**: fill the text with a wide linear gradient (light grey → [accent color] edge → final text color) using background-clip: text, and animate the background-position so the color sweeps across from left to right over 1.6s, ease-in-out. Trigger once when it scrolls into view.

### 14. Outline-to-Fill

**Style:** Bold  
**Also called:** stroke to fill, hollow-to-solid, outline text fill

The heading starts as an outline and fills in with solid color from left to right.

**Prompt:**

> Animate the [element] in the [section] using an **outline-to-fill text reveal**: show the text as an outline first (transparent fill with a 1.5px text stroke in the text color), then fill it with solid color from left to right by animating a background-clip: text fill from 0% to 100% width over 1.2s, ease-in-out. Best on large headings. Trigger once when it scrolls into view.

### 15. Tracking In

**Style:** Bold  
**Also called:** letter-spacing reveal, tracking-in-expand, contract in

Tightly packed letters expand out to normal spacing as they come into focus.

**Prompt:**

> Animate the [element] in the [section] using a **tracking-in reveal**: animate letter-spacing from -0.5em to normal, opacity from 0 to 1 and blur from 6px to 0 over 900ms with an ease-out curve. Best on short uppercase headings. Trigger once when it scrolls into view.

### 16. Rotating Words

**Style:** Playful  
**Also called:** word cycler, text loop, flip words

One word in the headline keeps swapping. Fits one headline to several audiences.

**Prompt:**

> In the [element] of the [section], add a **rotating words** effect: cycle one word through [word 1], [word 2], [word 3]. Every 2 seconds the current word slides up and out while the next slides up into place (550ms, ease-out-expo), inside an overflow-hidden wrapper sized to the longest word so the line doesn't jump. Loop forever; pause when the tab is hidden.

### 17. Count-Up Number

**Style:** Playful  
**Also called:** number ticker, counter animation, stat roll

A stat climbs from zero to its value. Ideal for traction numbers and social proof.

**Prompt:**

> Animate the numbers in the [section] using a **count-up number animation**: when the section scrolls into view, count each number from 0 to its final value over 1.4s with an ease-out-expo curve, keeping prefixes, suffixes and thousands separators. Use tabular-nums so the width doesn't shift. Run once.

### 18. Scroll-Linked Word Fill

**Style:** Subtle  
**Also called:** scroll scrub text, opacity scrub, reading reveal

Faded text fills in word by word as the visitor scrolls. Good for a mission statement.

**Prompt:**

> Animate the [element] in the [section] using a **scroll-linked word fill**: split the text into words, start every word at opacity 0.15, and tie each word's opacity to scroll position so the words fill to full opacity one after another as the paragraph moves through the middle of the viewport. Scrolling back up should reverse it.

### 19. Underline Draw

**Style:** Subtle  
**Also called:** line draw, animated underline, stroke reveal

A line draws itself under the key word after the heading appears.

**Prompt:**

> Animate the key word [word] in the [element] of the [section] using an **underline draw**: add an underline (pseudo-element, [accent color], about 0.1em thick) that scales from scaleX(0) to scaleX(1) from left to right over 700ms, ease-in-out, starting 300ms after the heading fades in. Trigger once when it scrolls into view.

### 20. Elastic Drop

**Style:** Playful  
**Also called:** bounce-in letters, springy letters, drop-in

Letters drop in from above and bounce slightly as they land.

**Prompt:**

> Animate the [element] in the [section] using an **elastic drop-in letter reveal**: split the text into characters and drop each one from 1.1em above its position, fading in, with a springy overshoot easing (cubic-bezier(.34,1.75,.64,1)) over 750ms and a 45ms stagger. Trigger once when it scrolls into view.

## Prompt templates for any reveal

Swap the bracketed parts for your own page and the name of the reveal you want.

**One section**

> Animate the [headline and subheadline] in the [hero section] using a [reveal type].

**Site-wide**

> Animate all [H2 headings] across the site using a [reveal type], triggered once as each one scrolls into view.

**Combine two**

> Animate the [headline] in the [hero section] using a [reveal type 1], then reveal the [subheadline and CTA button] with a [reveal type 2] that starts as soon as the first one finishes.

**Replace**

> Replace the current animation on the [pricing section heading] with a [reveal type]. Keep the total duration under [800ms] and don't change any copy or layout.

**Tune it**

> The [reveal type] on the [element] feels too [slow / fast / busy]. Make the stagger [tighter / looser], use an ease-out-expo curve, and make it run only once.

**Safety net**

> For every text reveal on the page: respect prefers-reduced-motion (show the text instantly), avoid layout shift, and make sure the text is still in the HTML for SEO and screen readers.

## Words that make a prompt more precise

If the first result is close but not right, add one of these and ask again.

- **Stagger:** The delay between each word, letter or line starting. `80ms` feels smooth; `30ms` feels like a ripple.
- **Easing:** The speed curve. Ask for `ease-out-expo` for a smooth, slowing finish, or `spring` for a bounce.
- **Trigger:** `on page load`, `when scrolled into view` or `linked to scroll position`. Always say which one.
- **Run once:** Say `animate once, don't replay on scroll up`. Otherwise some tools replay it every time the section comes back into view.
- **Duration:** How long each piece takes. Keep headline reveals under `1s` total so visitors aren't kept waiting.
- **No layout shift:** Ask the tool to `reserve the final text's space` so the page doesn't jump while text appears.
- **Reduced motion:** Add `respect prefers-reduced-motion` so visitors who turn motion off just see the text.
- **Library:** Name one if you have a preference: `Webflow Interactions`, `GSAP SplitText`, `Framer Motion` or `plain CSS`.

## Motion defaults we use at Bzen

> For all motion on this site: entrances use ease-out expo, cubic-bezier(0.16, 1, 0.3, 1), at 600 to 900ms. Exits use ease-in cubic at 300ms. Hovers use ease-out quad at 200ms. Things moving across the screen use ease-in-out cubic. Respect prefers-reduced-motion.

---

Want a landing page built for you? Schedule a free clarity call at https://bzen.io/book-a-call
