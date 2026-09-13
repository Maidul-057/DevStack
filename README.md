# 🧱 DevStack — Build Your Ideal Development Stack

A responsive React + TypeScript web app where I let users explore popular frontend, backend, database, and tooling technologies, compare them side by side, and assemble their own personalized development stack.

🔗 **GitHub Repository:** https://github.com/Maidul-057/DevStack  
🔗 **Live Site:** https://dev-stack-nu-five.vercel.app/

## 📖 About the Project

I built DevStack as a technology-stack builder website. Users can browse a curated catalog of technologies I've listed — each with an icon, category, difficulty level, star rating, and badge — and add their favorites to a personal "Your Stack" panel. I made sure the app prevents duplicate additions, shows toast notifications for every stack action, and displays a friendly loading state while the technology data is being fetched.

## 🛠️ Technologies I Used

- **React 19** — for the component-based UI, built with the `use()` hook + `Suspense` for data loading
- **TypeScript** — for static typing across my components, props, and data models
- **Vite** — as my dev server and build tool
- **Tailwind CSS v4** — for utility-first styling
- **DaisyUI** — for pre-built Tailwind component classes (e.g. buttons)
- **React Icons** — for UI action icons (checkmark, close, etc.)
- **React-Toastify** — for toast alerts on add / duplicate / remove / remove-all actions
- **JSON** — a local `data.json` file as my technology data source

## ✨ Key Features

1. **Interactive Stack Builder** — I let users add any technology to their personal "Your Stack" panel with one click. I block duplicate additions with a warning toast, and once a card is added, its button switches to a disabled "✓ Added to Stack" state.
2. **Full Remove Control** — I added a ✕ button to remove a single technology from the stack, plus a "Remove All" button to clear everything at once — each action fires its own toast notification.
3. **Responsive, Data-Driven Catalog** — I render all technology cards (icon, badge, name, description, category, difficulty, rating) from a JSON data file in a fully responsive grid (1 column on mobile, 3 on desktop), with a gradient-themed, sticky navbar and hero section.(The hero section's responsiveness is still a work in progress.)

---

## 🤔 React Concepts — Q&A

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension that lets me write HTML-like markup directly inside my JavaScript/TypeScript files. I like using it because it makes describing what the UI should look like much more readable than calling `React.createElement()` manually — I can mix markup and logic together, like I did in `TechnologyCard.tsx` and `Nav.tsx`.

**2. What is the difference between props and state?**
Props are read-only data I pass **into** a component from its parent (for example, `technology`, `isAdded`, and `onAdd`, which I pass into `TechnologyCard`). State is data a component manages **internally** and can change over time (for example, the `stack` array and `activeNav` I keep in `Nav.tsx`). Props flow down and can't be changed by the child; state belongs to the component and updating it triggers a re-render.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets my functional components hold and update local state between renders. I used it in a few places: in `App.tsx` to track the `stack` array of selected technologies, and in `Nav.tsx`/`Hero.tsx` to track which nav link or button is currently active.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` normally lets you run side effects, like data fetching, after a component renders, and re-run them when dependencies change. In this project, instead of `useEffect`, I loaded the technology data using React's newer `use()` hook together with `Suspense` — I create the fetch promise once and "unwrap" it with `use()`, and I wrap the section in a `<Suspense fallback={...}>` boundary that shows a "Loading technologies..." message until the data resolves. This gets me the same result as `useEffect` would (fetching my JSON on load without blocking the render), but I relied on React 19's native Suspense-based data-fetching pattern instead.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
The `key` prop helps React tell which items changed, were added, or were removed between renders, so it can update the DOM efficiently instead of re-rendering my whole list. I used `technology.id` as the key when mapping over technologies and stack items, since each id is guaranteed to be unique.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different UI depending on a condition, usually with a ternary or `&&`. In `YourStack.tsx`, I used it to show "Your stack is empty" when `stack.length === 0`, and otherwise render the list of added technologies along with a "Remove All" button.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
I pass data down from a parent to a child through **props** — for example, in `App.tsx` I pass `technology`, `isAdded`, and `onAdd` into `TechnologyCard`. To send something back up, I have the child call a **function prop** the parent passed in — for example, `TechnologyCard` calls `onAdd(technology)` when its button is clicked, which runs `handleAddToStack` that I defined in the parent (`App.tsx`), updating the parent's state.

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/Maidul-057/DevStack.git

# Move into the project folder
cd DevStack

# Install dependencies
npm install

# Run the development server
npm run dev
```

## 🔗 Links

- [GitHub Repository](https://github.com/Maidul-057/DevStack)
- [Live Site](https://dev-stack-nu-five.vercel.app/)