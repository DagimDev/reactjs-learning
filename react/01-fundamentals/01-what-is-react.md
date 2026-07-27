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