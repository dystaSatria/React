# Variables in JSX

When you inject JavaScript into JSX, that JavaScript is part of the same environment as the rest of the JavaScript in your file.

That means that you can access variables while inside of a JSX expression, even if those variables were declared outside of the JSX code block.

```jsx
// Declare a variable:
const name = 'Gerdo';

// Access your variable inside of a JSX expression:
const greeting = <p>Hello, {name}!</p>;
```

## Example 
``àpp.js```

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

const theBestString = 'This text was accessed through a JavaScript variable';

root.render(<h1>{theBestString}</h1>);

```
