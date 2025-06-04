# Conversation Prompts

This document compiles the prompts sent during the development of the React `PricingCard` component, serving as a reference for the iterative design process.

---

## Conversation Prompts

### Prompt 1

**User Prompt:**

Hello!
I already have a react base project with Tailwind installed

I need you to create the provided UI as a single React function component (PricingCard.tsx) using TypeScript and TailwindCSS.

Rules:

Props must be: plan: string price: string features: string[] isFeatured?: boolean
Cards must stack vertically if window width smaller than 640px
Hover elevation on desktop
Full keyboard focus ring must be provided
Inline styles are forbidden. Use Tailwind only
Get just the TSX inside tsx fences

<!-- end list -->

### Prompt 2

**User Prompt:**

Could you make it more similar to original design (I provided an image of it)?

I need an exact match with the image I provided you

Some hints:

featured card has a bit bigger height
There some lines dividing &lt;li> features items
Subscribe button shouldn't be filled

<!-- end list -->

### Prompt 3

**User Prompt:**

Maybe write App.tsx file I should make to render components exactly as on image

### Prompt 4

**User Prompt:**

Looks better, but it's not the expected result.
hints:

Not featured cards have px-2
there shouldn't be any gap between cards
buttons should be plain. Not outlined or filled. Also must be uppercased

<!-- end list -->

### Prompt 5

**User Prompt:**

Sorry for confusing. Please return pointer event for buttons.
Except that all is done

### Prompt 6

**User Prompt:**

Some final fixes:

Remove round corners for cards
Add px-2 for &lt;ul> element if the prop "isFeatured" is false

<!-- end list -->
