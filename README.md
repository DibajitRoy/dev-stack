# dev-stack
##Technologies Used
- React.js (with TypeScript)
- Tailwind CSS + DaisyUI
- React-Toastify
- Vite

## Features
1. Browse and add technologies to your stack— Users can explore 12 different technologies across categories (Frontend, Backend, Database, Programming, DevOps, Tools), each showing rating, difficulty, and a short description, and add any of them to a personal "Your Stack" panel with one click.
2. Duplicate and empty-state handling — Trying to add the same technology twice shows a warning toast instead of adding it again, and the stack panel shows a friendly empty-state message when nothing has been added yet.
3. Fully responsive design — The navbar switches to a hamburger menu on mobile, and the technology grid adjusts from 3 columns on desktop to 1 column on small screens, so the site works smoothly across devices.

## React Concepts

**1. What is JSX, and why is it used in React?**
JSX lets us write HTML-like code inside JavaScript. It's used because it makes writing UI easier and faster to understand.

**2. What is the difference between props and state?**
Props are values passed from parent to child, and the child cannot change them. State is data a component keeps and can change by itself.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a component store a value and update the UI when that value changes. I used it to keep track of the `stack` (added technologies) and to open/close the mobile menu.

**4. What does the `useEffect`/`use` hook do, and why did you need it to load the JSON data?**
`use()` waits for a promise (like a fetch) to finish before showing the data. I needed it because the JSON data takes a moment to load, so I show a loading message until it's ready.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
The `key` helps React know which item is which, so it can update the list correctly instead of getting confused between items.

**6. What is conditional rendering? Show one place you used it.**
Conditional rendering means showing different UI based on a condition. I used it in `YourStack` — if the stack is empty, it shows "Your stack is empty", otherwise it shows the list.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
Parent sends data down using props, like `<TechCard tech={tech} />`. To send data back up, the parent gives the child a function (like `setStack`) as a prop, and the child calls it to update the parent's state.
