# Component Theming Idea

## Observation

While building reusable UI components, I noticed that variants such as:

```tsx
<Button variant="primary" />
<Button variant="secondary" />
<Button variant="gradient" />
```

are often tied directly to specific colors.

For example:

```txt
primary = purple
secondary = gray
gradient = purple-pink
```

The problem with this approach is that the same component may be used across multiple projects with completely different branding.

A purple primary button in one project may need to be green, blue, or red in another.

---

## Idea

Instead of variants representing colors, they should represent intent.

Example:

```txt
primary = main action
secondary = supporting action
gradient = highlighted action
```

The component only decides which semantic class to apply.

```tsx
const variants = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  gradient: "btn-gradient",
}
```

---

## Project Responsibility

The project itself defines what those classes look like.

Example:

```css
.btn-primary {
  @apply bg-purple-600 text-white;
}

.btn-secondary {
  @apply border border-slate-500;
}

.btn-gradient {
  @apply bg-gradient-to-r from-purple-500 to-pink-500;
}
```

In another project:

```css
.btn-primary {
  @apply bg-green-600 text-white;
}
```

No component changes are required.

---

## Result

The same component can be reused across multiple projects while keeping branding concerns inside the project.

```txt
Sellora      → Purple Primary
Project B    → Green Primary
Project C    → Blue Primary
```

Component logic remains unchanged.

---

## Future Improvement

Instead of mapping classes directly to colors, theme tokens can be introduced.

Example:

```css
:root {
  --primary: 168 85 247;
}
```

Then component classes can reference those tokens.

This would allow an entire project theme to be changed by updating a few variables rather than modifying individual component styles.

---

## Principle

Components should describe intent.

Projects should describe appearance.

The goal is to separate:

- behavior
- structure
- semantics

from:

- branding
- colors
- visual identity
