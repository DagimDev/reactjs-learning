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