/* ------------------------------------------------------------------
   One place for every in-page jump (navbar, hero CTAs, section links).

   `scrollIntoView({ behavior: "smooth" })` looks fine on desktop but is
   unreliable under a finger: browsers abort an in-flight programmatic
   smooth scroll the moment a user scroll gesture reaches the same
   scroller, and a tap with a pixel or two of travel counts as one. The
   animation dies on its first frame and the page never moves — which is
   exactly what the mobile menu was doing.

   So: compute the destination ourselves, start the smooth scroll, then
   watch it. If it hasn't arrived by the time it should have, the browser
   cancelled it and we jump there instantly.
------------------------------------------------------------------- */

/** Height the fixed navbar occupies, from the `--nav-h` custom property. */
function navOffset(): number {
  const raw = getComputedStyle(document.documentElement).getPropertyValue("--nav-h");
  const rem = parseFloat(raw);
  if (!Number.isFinite(rem)) return 76;
  // `--nav-h` is authored in rem; convert against the root font size.
  const root = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
  return raw.trim().endsWith("px") ? rem : rem * root;
}

/** Absolute document offset that puts `el` just below the navbar. */
function targetTop(el: HTMLElement): number {
  const top = el.getBoundingClientRect().top + window.scrollY - navOffset() - 16;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  return Math.max(0, Math.min(top, max));
}

const TOLERANCE = 6;
/** Frames of zero movement that mean the animation was cancelled, not slow. */
const STALL_FRAMES = 5;
/** Hard ceiling, in case a scroll never settles at all. */
const MAX_MS = 2000;
/** Browsers take a few frames to spin the animation up; don't call that a stall. */
const GRACE_MS = 150;

export function scrollToSection(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;

  const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  if (reduced) {
    window.scrollTo({ top: targetTop(el), behavior: "auto" });
    return;
  }

  window.scrollTo({ top: targetTop(el), behavior: "smooth" });

  // Watch the animation. A cancelled smooth scroll stops dead short of the
  // target; a slow one keeps moving. Re-measure each frame so a section that
  // reflows underneath us (lazy images, the rotating testimonial) is followed
  // rather than overshot.
  const started = performance.now();
  let last = window.scrollY;
  let stalled = 0;

  const check = () => {
    const want = targetTop(el);
    const now = window.scrollY;

    if (Math.abs(now - want) <= TOLERANCE) return; // arrived

    const elapsed = performance.now() - started;
    stalled = now === last && elapsed > GRACE_MS ? stalled + 1 : 0;
    last = now;

    if (stalled < STALL_FRAMES && elapsed < MAX_MS) {
      requestAnimationFrame(check);
      return;
    }
    window.scrollTo({ top: want, behavior: "auto" });
  };
  requestAnimationFrame(check);
}
