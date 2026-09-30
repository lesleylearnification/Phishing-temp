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

## V11 acceptance additions
- [x] Landing hacker hoodie contains no added text and no CSS blotch overlay.
- [x] Landing lower-left mug copy removed from the baked landing art; no CSS cover blotch remains.
- [x] Duplicate landing-body copy removed; only the baked visual copy remains on desktop.
- [x] START CAMPAIGN uses the baked visual button as its visible target with an aligned accessible HTML hit target.
- [x] Landing tutorial uses the approved three-attempt hacker framing.
- [x] Campaign 1 tutorial uses the approved ACCOUNT TAKEOVER / Alter all five instructions.
- [x] First feedback tutorial still appears only after Campaign 1.
- [x] After that tutorial closes, five yellow arrows guide hotspots 1 → 2 → 3 → 4 → 5 sequentially, two seconds each.
- [x] Final Mastermind Memo comparison uses the approved learning-goal language.
- [x] JavaScript syntax validated with node --check.

## V12 acceptance additions
- [ ] Feedback screens 2 and 3 show a long yellow oval around the five numbered element controls, with a flashing yellow arrow pointing to it for exactly 2 seconds.
- [ ] The oval/arrow cue does not appear on feedback screen 1, which retains its sequential 1→5 arrow tutorial.
- [ ] RESTART is visually prominent and contrasting everywhere it appears.
- [ ] CONTINUE on the Mastermind Memo page is disabled until the learner enters non-whitespace text.
- [ ] On replay/restart, the landing screen offers a control to turn instructional pop-ups and yellow-arrow guidance on/off before starting.
- [ ] Guidance-off suppresses landing/build/feedback pop-ups and all yellow arrows/ovals without affecting gameplay.
- [ ] Mastermind Memo comparison page has three prominent actions: RESTART, EXIT, and RESOURCES.
- [ ] RESTART and EXIT return cleanly to the opening screen and reset gameplay state; RESOURCES opens the resources screen.

## V13 source-of-truth additions
- [ ] Campaigns 2 and 3 create feedback guidance from `setupFeedback()` after hotspot DOM creation/layout, not from a SEND-button timeout.
- [ ] The yellow guidance oval is measured from the five actual `#yourEmail .hotspotButton` elements and encloses their numbered-badge column.
- [ ] The Campaign 2/3 yellow oval and arrow self-remove after 2 seconds and do not block pointer or keyboard interaction.
- [ ] Replay setup presents a prominent GUIDED REPLAY control adjacent to the landing interaction hierarchy, with explicit GUIDANCE ON / GUIDANCE OFF choices.
- [ ] Replay guidance choice is keyboard accessible and controls both pop-ups and yellow arrows without changing gameplay.

## V14
- [x] Campaign 2/3 yellow feedback guide is wider and extends farther right while still enclosing the numbered hotspot column.
- [x] Resources page includes prominent RESTART and EXIT controls in addition to PLAY AGAIN.
- [x] RESTART and EXIT reset cleanly to the opening screen.

- [ ] V15 replay setup: GUIDED REPLAY appears high enough on the landing page to remain fully visible and includes a keyboard-accessible circled X close control in its upper-right corner.
- [ ] V16 Guided Replay dialog is centered vertically and horizontally on the landing screen, enlarged for readability, and has sufficient top/right padding so the circled X never overlaps heading or instructional text.
