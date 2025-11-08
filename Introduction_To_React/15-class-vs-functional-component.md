● Class vs functional components in React: In addition to their syntax, there are major
    differences between class-based and functional components. 

● Steps to converting functional components into class-based components:
     Step 1: Replace the function key word with class
     Step 2: Inherit properties of Component class by extending
     Step 3: define the render method in your subclass then in your render() method, return the JSX you want to return
     Step 4: If you are passing props, make sure to use the key word "this" to specifically identify your current class