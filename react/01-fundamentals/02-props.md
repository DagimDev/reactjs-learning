React Js Lesson 2: Props (Passing Data to Components)

```jsx
function Student() {

  const name = "Dagi";
  const age = 22;
  const country = "Ethiopia";

  return (
    <div>
      <h1>Name: {name}</h1>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
    </div>
  );
}
```
Right now this component has fixed data:
```jsx
const name = "Dagi";
const age = 22;
const country = "Ethiopia";
```
But imagine we want to create 1,000 students.

We don't want to create 1,000 components.

Instead, we send data from the parent component.

This is called `props`.

Without Props ❌

```jsx
function Student() {
  return (
    <div>
      <h2>Dagi</h2>
      <p>22</p>
    </div>
  );
}
```
This only works for Dagi.

With Props ✅

Parent:
```jsx
function App() {
  return (
    <Student 
      name="Dagi"
      age={22}
      country="Ethiopia"
    />
  );
}
```
We are sending data into the component.

Child component:
```jsx
function Student(props) {

  return (
    <div>
      <h1>Name: {props.name}</h1>
      <p>Age: {props.age}</p>
      <p>Country: {props.country}</p>
    </div>
  );

}
```
Now React gives the component an object:
```jsx
props = {
  name: "Dagi",
  age: 22,
  country: "Ethiopia"
}
```
So:
```jsx
{props.name}
```
becomes:

Dagi
Modern Way: Destructuring Props

Most professional React code uses this:
```jsx
function Student({ name, age, country }) {

  return (
    <div>
      <h1>Name: {name}</h1>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
    </div>
  );

}
```
Cleaner and easier to read.
