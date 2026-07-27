# React.js — Lesson 1

## 1. The Problem Before React

Before React, developers often manipulated the `DOM` directly.

Example:

```js
const button = document.querySelector("button");
const text = document.querySelector("h1");

button.addEventListener("click", () => {
  text.textContent = "Hello Dagi!";
});
```

This works for small websites.

Imagine large applications:

- 🌐 Facebook / Instagram
- 📺 YouTube
- 🏦 Online banking

These apps deal with high complexity:

- 🔘 Thousands of buttons
- 🔄 Frequently changing data
- 👤 User profiles
- 🔔 Notifications
- 💬 Messages and comments

Managing the DOM manually becomes difficult.

Problems:

- ❌ Too much code
- ❌ Hard to track changes
- ❌ Easy to create bugs
- ❌ Updating the UI becomes complicated

React was created to solve this problem.

## 2. The Main Idea of React

React uses a simple idea:

| Describe what the UI should look like, and React updates it when the data changes.

Instead of saying:

| "Find this element and change its text."

You say:

| "If the user's name is Dagi, show Dagi."

Example:

```jsx
function App() {
  const name = "Dagi";

  return <h1>Hello {name}</h1>;
}
```
React sees:

- name = "Dagi"

and displays:

- Hello Dagi

If the data changes:

- name = "Alex"

React updates the UI automatically.