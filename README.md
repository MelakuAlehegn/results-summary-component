# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Github](https://github.com/MelakuAlehegn/results-summary-component)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Javascript - Fetch

### What I learned

In this project I was able to learn to load json data using fetch and render this data to html using InnerHtml. I was also able to select DOM elements, create new elements and add a class to elements using Javascript

Here is an empty div I have put on my HTML file in order to load json file into it.

```html
<div class="summary-card" id="summary">

      </div>
```

Here is the code snippet for How I loaded json file and rendered it to HTML.

```js
fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.forEach(element => {
            const summ = document.createElement('div');
            summ.innerHTML = `<img src='${element.icon}'><h4>${element.category}</h4><p>${element.score}/100</p>`
            summ.classList.add('summary-each')
            summary.appendChild(summ)
        });
    })
    .catch(error => console.error('Error:', error))

```

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/melakualehegn)
- Twitter - [@yourusername](https://www.twitter.com/MelakuA5)
