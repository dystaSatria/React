# JSX dalam React

JSX (JavaScript XML) adalah ekstensi sintaks dari JavaScript yang digunakan dalam React untuk membuat elemen DOM yang kemudian dirender di dalam DOM React.

## Nested JSX Elements

Agar kode dapat dikompilasi, sebuah ekspresi JSX harus memiliki tepat satu elemen luar. Dalam contoh di bawah ini, tag `<a>` adalah elemen terluar.

```jsx
const myClasses = (
  <a href="https://www.codecademy.com">
    <h1>
      Sign Up!
    </h1>
  </a>
);
```

## Multiline JSX Expression

Ekspresi JSX yang mencakup beberapa baris harus dibungkus dalam tanda kurung: `( )`.

```jsx
const myList = (
  <ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
  </ul>
);
```

## JSX dan Conditional

JSX tidak mendukung sintaks `if/else` dalam JavaScript yang disematkan. Ada tiga cara untuk menyatakan kondisional yang akan digunakan dengan elemen-elemen JSX:

1. Ternary operator
2. Pernyataan `if/else` di luar elemen JSX
3. Operator `&&`

```jsx
const headline = (
  <h1>
    { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
  </h1>
);
```

## Embedding JavaScript Code in JSX

Teks antara tag JSX akan dibaca sebagai konten teks, bukan sebagai JavaScript. Untuk membuat teks dibaca sebagai JavaScript, kode harus disematkan di antara tanda kurung kurawal `{ }`.

```jsx
<p>{ Math.random() }</p>
```

## JSX Element Event Listeners

Dalam JSX, _event listeners_ ditentukan sebagai atribut pada elemen. Nama atribut _event listener_ harus ditulis dalam gaya _camelCase_, misalnya `onClick` untuk _onclick event_, dan `onMouseOver` untuk _onmouseover event_.

```jsx
const handleClick = () => alert("Hello world!");

const button = <button onClick={handleClick}>Click here</button>;
```

## JSX className

Dalam JSX, Anda tidak bisa menggunakan kata `class`. Anda harus menggunakan `className` sebagai gantinya. Hal ini karena JSX akan diterjemahkan menjadi JavaScript, dan `class` adalah kata yang sudah dipesan dalam JavaScript.

```jsx
const heading = <h1 className="large-heading">Codecademy</h1>;
```

## JSX Attributes

Atribut JSX memiliki sintaks yang mirip dengan atribut HTML.

```jsx
const example = <h1 id="example">JSX Attributes</h1>;
```

## JSX Syntax and HTML

JSX memiliki sintaks yang mirip dengan HTML. Mereka sama-sama menggunakan tanda kurung siku pembuka dan penutup (`<h1>` dan `</h1>`).

```jsx
const title = <h1>Welcome all!</h1>
```

## JSX Syntax and JavaScript

JSX adalah ekstensi sintaks dari JavaScript. Itu digunakan untuk membuat elemen DOM yang kemudian dirender dalam DOM React.

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
 
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<h1>Render me!</h1>);
```

Silakan tambahkan informasi di atas ke dalam file `readme.md` Anda untuk memberikan pemahaman yang lebih baik tentang penggunaan JSX dalam React.
