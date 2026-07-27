# ⚛️React Js lesson 3 Advanced Components & Props Patterns

> **Module:** 01 - Fundamentals  
> **Topic:** Components & Props Deep Dive  
> **Status:** 🟢 Completed  

---

## 🎯 Key Concepts
- **Prop Destructuring:** Cleanly extract values from the `props` object directly in the function parameters.
- **Default Props:** Fall back to safe default values when props are omitted.
- **`props.children`:** Pass nested JSX into wrapper components for layout composition.
- **Callback Props:** Pass functions from Parent to Child to enable bottom-up communication.

---

## 1. Prop Destructuring & Default Values

Rather than referencing `props.name` or `props.role` throughout your component body, destructure props directly inside the function signature. You can also assign default values to avoid `undefined` render issues.

```jsx
// ❌ Old / Verbose Way
function UserCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.role}</p>
    </div>
  );
}

// ✅ Clean / Modern Way (Destructuring + Default Value)
function UserCard({ name, role = "Member", avatarUrl = "/default.png" }) {
  return (
    <div className="user-card">
      <img src={avatarUrl} alt={name} />
      <h2>{name}</h2>
      <p>Role: {role}</p>
    </div>
  );
}