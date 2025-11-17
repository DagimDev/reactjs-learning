What is JSX (JavaScript XML)?
● What is JSX? (JavaScript XML):
▪ JSX is an extension to the JavaScript language created as syntactic
    sugar for React.createElement(). It is a syntax created by React
    developers to create HTML using JavaScript. In short, JSX makes it
    easier to write HTML in React and finally place them in the DOM
    without using React.createElement().
▪ JSX follows HTML’s syntax and rules of XML.
    What is XML? It is a Markup language, just like HTML. It is just a
    way of tagging data in an organized format. Unlike HTML, it does not
    have any pre-defined tags. Meaning that the tags are created by the
    writer. The only thing it has is a set of formatting rules. These are
    XML’s syntax rules:
▪ XML documents must contain one root element: There has to be a
    parent element containing all other elements inside of it.
    ▪ All tags must be closed: It is illegal to omit the closing tag. All
    elements must have a closing tag.
    ▪ All tags must be properly nested:
▪ Tag names are case sensitive: Opening and closing tags must be
    written with the same case. Example: The tag <Letter> is different
    from the tag <letter>.
▪ Tag names cannot contain spaces. However, element names can
    contain letters, digits, hyphens, underscores, and periods.
● Compare a JSX code and an XML code:
▪ Example of JSX Code:
```jsx
<div>
    <div className="abebe">
        <ul>
            <li>Almaz</li>
            <li>Kebede</li>
        </ul>
    </div>
</div>
▪ Example XML Code:
    <class-room>
        <student country="USA">
        <SEX>M</SEX>
        <age>31</age></student>
    </class-room>
```