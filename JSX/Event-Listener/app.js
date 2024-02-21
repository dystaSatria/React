import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

function makeDoggy(e) {
  e.target.setAttribute('src', 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
  <img 
    src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg" 
    alt="kitty" 
    onClick={makeDoggy} // Adding onClick attribute with makeDoggy function
  />
);

root.render(kitty);
