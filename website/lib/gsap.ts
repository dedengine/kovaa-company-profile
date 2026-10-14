import { gsap, ScrollTrigger } from 'gsap'

let registered = false

/** Register ScrollTrigger once. Idempotent by design. */
export function registerGsap(): void {
  if (registered) return
  gsap.registerPlugin(ScrollTrigger)
  registered = true
}
