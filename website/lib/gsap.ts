import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let registered = false

/** Register ScrollTrigger once. Idempotent by design. */
export function registerGsap(): void {
  if (registered) return
  gsap.registerPlugin(ScrollTrigger)
  registered = true
}
