# Internet Intruder V6 — Source-of-Truth Acceptance Checklist

- [x] One clean playable master; THE HUNT reference is not modified.
- [x] Landing identity reads INTERNET INTRUDER / A CYBERSECURITY CHALLENGE.
- [x] Hacker hoodie treatment reads INBOXES ARE OPPORTUNITIES.
- [x] Landing copy ends with: “When you’re ready to commit cyberfraud, click START CAMPAIGN.”
- [x] Landing onboarding popup explains the three phishing attempts.
- [x] Campaign 1 prominently identifies ACCOUNT TAKEOVER as the attack type.
- [x] Campaign-build onboarding popup explains all five falsifications, three choices, ALTERED state, and SEND EMAIL.
- [x] All five categories must be altered before SEND EMAIL is enabled.
- [x] ALTERED appears on completed falsification categories.
- [x] Feedback onboarding popup explains left/right comparison, all five numbered hotspots, and NEXT CAMPAIGN.
- [x] Feedback retains full-brightness YOUR PHISH and BENCHMARK PHISH comparison.
- [x] Benchmark email remains near-black with white text and red CTA.
- [x] Five numbered feedback elements are keyboard-operable and track 0/5 through 5/5 analyzed.
- [x] Defender takeaway and NEXT CAMPAIGN remain in the right-hand feedback panel and unlock after 5/5 analysis.
- [x] Three campaigns remain PASSWORD / MONEY / MACHINE using Carlisle-branded source-email scenarios.
- [x] Final synthesis, reflection, resources, and replay remain intact.
- [x] Tutorial dialogs support keyboard focus, close button, GOT IT, backdrop click, and Escape.
- [x] No real credential collection, malicious files, live phishing links, payloads, or deployable attack infrastructure.
- [x] JavaScript passes syntax validation.


## V8 refinements
- [x] Landing header PF mark removed while landing screen is active.
- [x] Added hoodie text overlay removed; decorative mug copy visually suppressed.
- [x] Clicking any falsification category highlights the currently relevant area in the live email before a choice is made.
- [x] Selecting an alteration immediately updates the live email.
- [x] Alteration options are visually distinct from the five category controls.
- [x] Campaign XP displays earned XP out of 500 possible.
- [x] Mastermind comparison tutorial appears only after Campaign 1.


## V9 checks
- [x] PF mark removed from global header on landing and all three campaign screens.
- [x] Landing art text on hacker hoodie and mug is visually removed/covered without changing the locked composition.
- [x] Alteration-choice group is visually distinct from the five falsification categories (purple container, radio-style controls, different shape/background).
- [x] First feedback tutorial appears only after Campaign 1.
- [x] Closing the first feedback tutorial triggers a bright flashing arrow pointing at hotspot 1.
- [x] Arrow is non-interactive, lasts 2 seconds, and respects reduced-motion preferences.
- [x] Campaign XP continues to display earned XP out of 500 possible.

## V10 regression fix
- [x] Initialization occurs only after feedback/tutorial state variables and handlers are initialized.
- [x] Landing tutorial opens on initial load.
- [x] Campaign 1 build tutorial opens after START CAMPAIGN.
- [x] Campaign 1 comparison tutorial opens after SEND EMAIL.
- [x] Five numbered hotspots render on both comparison emails.
- [x] Five numbered element controls render below the comparison.
- [x] Hotspots and element controls open feedback and allow 5/5 analysis progression.
- [x] First-feedback arrow appears after tutorial closes and disappears after 2 seconds.
