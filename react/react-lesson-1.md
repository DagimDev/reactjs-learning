# React.js — Lesson 1: What is React and Why Does It Exist?
1. The Problem Before React

Before React, developers often manipulated the DOM directly.

Example:
```jsx
const button = document.querySelector("button");
const text = document.querySelector("h1");

button.addEventListener("click", () => {
  text.textContent = "Hello Dagi!";
});
```
This works for small websites.

But imagine a large application like:

Facebook
Instagram
YouTube
Online banking

You might have:

thousands of buttons
changing data
user profiles
notifications
messages
comments

Managing the DOM manually becomes difficult.

Problems:

❌ Too much code
❌ Hard to track changes
❌ Easy to create bugs
❌ Updating the UI becomes complicated

React was created to solve this problem.