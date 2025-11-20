What is the problem React Context API was created to solve? Prop drilling is the
problem React Context was created to solve
▪ Props drilling: It is the process of sending data (props) from a higher-level
component to several nested children (lower level) components. The major
problem with prop drilling approach to share data is that most of the components
through which this data is passed to are forced to take in unrelated data just for
the sake of passing it to the next component. Thus, these intermediary
components will be forced to re-render, degrading the app’s overall performance.
In this section, we will explore how we can use React Context API to avoid prop
drilling.

Props drilling explained in example: In a typical React application, data is
passed top-down (example, from parent component to child component) via
props. Assume we have one parent component with several child components.
Assume the child components have children of their own. What if the children to
exchange data with other children (siblings)? The only way to pass data to a
component's sibling was to move state to a higher (parent) component and then
pass it back down to the other sibling via props. However, passing state down
from top-level components can be cumbersome and time-consuming. In addition,
components that do not need to use the state data will still have to access it and
pass it down as props. Prop drilling for certain types of globally used data (such
as paddings and font-sizes that are shared by many components in an application)
is laborious and time-consuming. React Context was introduced to allows us to
pass data through our component trees, giving our components the ability to
communicate and share data at different levels. So, React context was created to
fix these issues.

React Context API: Context is a way to share global data (like props, state or variables)
between deeply nested components more easily without the need to manually pass props
down to each nested component. Note: Each component in Context is context-aware,
therefore, instead of passing props down through every single component on the tree, the
components in need of a prop can simply ask for it, without needing intermediary helper
components that only help relay the prop.

How does Context API work? The Context API basically lets you broadcast your data
to multiple components by wrapping them with a context provider. It then passes this data
to the context provider using its value attribute. Then child components can tap into this
provider using a context consumer or the useContext() Hook when needed.

Steps to use context API:
▪ Step 1: create a context using the createContext() method from React and save it
    on a variable. Make sure to export the context you created because in most cases
    your component will be in another file. Example:
```jsx
const MyContext = React.createContext()
```
▪ Step 2: Take your created context and wrap the context provider around the child
    components you want to pass down data to. Note: The context you created above,
    the "MyContext" , is an object that has two properties, namely Provider and
    Consumer. Both Provider and Consumer are components. So, go ahead and wrap
    your Provider component around your child component.
▪ Example:
```jsx
 <MyContext.Provider>
    <ChildComponent/>
 </MyContext.Provider>
```
▪ Step 3: Put the value you want to pass to any child components on your context
    provider using the value prop.
▪ Example:

```jsx
 <MyContext.Provider value={{ user: "Alem" }}>
    <ChildOne />
 </MyContext.Provider>
```
▪ Step 3: Use the Consumer component to use/consume/read the value of the
    context (which you created above) in any child component. Note: To consume
    the passed down value, we use a technique called “render props”. Render props is
    a technique for sharing data/code between React components using a prop whose
    value is a JavaScript function. So, use the Consumer component to wrap this
    function and make this function to return the value of your context.
▪ Example:
```jsx
 MyContext.Consumer>
    {function (value) {
        return <div>{value}</div>;
      }
    }
```

Examples on how to use Context API: Before looking at an example on how to avoid
    prop drilling using the context API, it is better to see an example on how to pass data to
    child components using prop drilling. For both examples below, assume that we are
    building an app that welcomes a user by first name when the user logs in. Assume that we
    have the root/parent component, called Parent.js where the user’s name object (props) is
    available in. However, the component that renders the welcome message with the user’s
    name is nested deep within our child component called, ChildThree.js. The user’s name
    object will need to be passed down to ChildThree.js component through two other child
    components called, ChildOne.js and ChildTwo.js. Now, let us see how we can pass the
    user’s name data from Parent.js to ChildThree.js using prop drilling and context API.

Major drawbacks of depending on the Context API:
▪ Problems with component reusability: When a context provider is wrapped
over multiple child components, we are implicitly passing whatever state/data
that is stored in that provider to all child components it wraps. Please note that
the data/state is not literally passed the child components until we initiate an
actual context consumer (or useContext() hook). However, by providing a
context, we are implicitly making these child components dependent on the state
provided by this context provider. We will encounter a problem when we try to
reuse any of these components outside the context provider. For instance, if we
do not want to wrap a child component in the Context Provider and reuse it for
some other purpose, the component first tries to confirm whether that implicit
state provided by the context provider still exists before rendering. When it does
not find this state, it throws a render error. Remember our previous example and
say in our MyParent component, oour ChildOne component was placed outside
our context provider and you wanted to reuse the ChildOne component to display
a different message based on a different condition. In this case, ChildThree, the
component that will use the state from parent component, will confirm if the state
(provided by the context provider) still exists before it renders. It will not find the
state as ChildOne component is placed outside the context provider. Therefore, it
throws a render error.
▪ Problems with performance: The Context API uses a comparison algorithm
that compares the value of its current state to any update it receives, and
whenever a change occurs, the Context API broadcasts this change to every
component consuming its provider, which in turn results in a re-render of these
components. This would seem trivial at first glance, but when we rely heavily on
Context for basic state management, we needlessly push all of our states into a
context provider. As you would expect, this is not very performant when many
components depend on this Context Provider, as they will re-render whenever
there is an update to the state regardless of whether the change concerns or
affects them or not.
