# Render Different UI Based on props
You can do more with props than just display them. You can also use props to make decisions.

```jsx
function LoginMsg(props) {
  if (props.password === 'a-tough-password') {
    return <h2>Sign In Successful.</h2>
  } else {
    return <h2>Sign In Failed..</h2>
  }
}
```

In this example, we use the props passed in to make a decision rather than rendering the value to the screen.

If the password received is equal to 'a-tough-password', the resulting message in <h2></h2> will be different!

The passed-in password is not displayed in either case! The prop is used to decide what will be displayed. This is a common technique.

## Example
```Greeting.js```
```js
import React from 'react';

function Greeting(props) {
  if (props.signedIn == false) {
    return <h1>Please login.</h1>;
  } else {
    return (
      <>
        <h1>Welcome back, {props.name}!</h1>
        <article>
          Latest Movie: A Computer Bug's Life
        </article>
      </>
    )
  }
}

export default Greeting;
```

```App.js```
```js
import React from 'react';
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <h1>
        MovieFlix
      </h1>
      <Greeting name="Alison" />
    </div>
  );
}

export default App;
```
