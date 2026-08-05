# Registration status toggle — internal note

The site flips between two states: **online registration OPEN** and **online registration CLOSED (onsite tickets only)**. This file records how to switch, so the closed version is never lost.

## Current state: CLOSED (officially closed)
- Fixed red announcement banner pinned to the top of every page.
- All "Get tickets" / "Register" buttons removed sitewide.
- Tickets page: Early Bird = **Sold out**, Standard = **Closed**, Onsite = available at the door.
- Reinstated from git commit **bcc5742 ("Reg Closed Update")**, then Standard switched from "Sold out" to "Closed" and the FAQ July 31 / July 16 deadline lines removed.

### The OPEN version is saved at git commit **cd9dfb1 ("Map Update")**
- Buttons present and linked to `https://www.unitedcontractors.org/event-registration/2026-annual-bbq-registration`; no banner. Restore those 8 files from cd9dfb1 (or ask) to reopen.

## The CLOSED version is saved in git history
Commit **bcc5742 ("Reg Closed Update")** contains the full closed design:
- A large fixed red announcement bar pinned to the top of every page:
  "ONLINE REGISTRATION IS CLOSED — tickets available at the door on August 6."
- All "Get tickets" / "Register" buttons removed sitewide.
- Any remaining ticket links pointed to the tickets page (not the registration form).
- Tickets page: Standard marked **Sold Out**; Onsite emphasized ("available at the door on August 6").

## To CLOSE registration again
Restore the closed version of these 8 files from commit `bcc5742`:
`index.html, about.html, tickets.html, chili-cookoff.html, photos.html, faq.html, sponsor.html, styles.css`
— or just ask and it can be re-applied in one step.

## To RE-OPEN after that
Restore the same 8 files from the last open commit (currently `cd9dfb1`), or ask.

> Note: This toggle is only about **online ticket registration**. The **sponsorship**-closed state (the "Our Sponsors / Sponsorships are now closed" page) is separate and stays as-is.
