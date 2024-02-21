# Event Listeners in JSX

JSX elements can have event listeners, just like HTML elements can. Programming in React means constantly working with event listeners.

You create an event listener by giving a JSX element a special attribute. Here’s an example:

```jsx
<img onClick={clickAlert} />
```
An event listener attribute’s name should be something like onClick or onMouseOver: the word on plus the type of event that you’re listening for. Look through the common components list in React docs to browse supported event names.

An event listener attribute’s value should be a function. The above example would only work if clickAlert were a valid function that had been defined elsewhere:

```jsx
function clickAlert() {
  alert('You clicked this image!');
}

<img onClick={clickAlert} />
```

Note that in HTML, event listener names are written in all lowercase, such as onclick or onmouseover. In JSX, event listener names are written in camelCase, such as onClick or onMouseOver.
