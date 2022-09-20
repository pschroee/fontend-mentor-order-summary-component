# Frontend Mentor - Order summary card solution

This is a solution to the [Order summary card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Order summary card solution](#frontend-mentor---order-summary-card-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- See hover states for interactive elements

### Screenshot

![](./screenshot.png)

### Links

- Live Site URL: [https://pschroee.github.io/fontend-mentor-order-summary-component/](https://pschroee.github.io/fontend-mentor-order-summary-component/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Vite](https://vitejs.dev/) - Bundler
- [Tailwind CSS](https://tailwindcss.com/) - For styles

### What I learned

I learned to set up the Tailwind CSS config file. I could directly use my custom colors with Tailwind and my code editor analyzed the config for the autocompletion of the Tailwind classes.

`tailwind.config.cjs`

```js
/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      desktop: "992px",
    },
    colors: {
      white: "#ffffff",
      attribution: "hsl(228, 45%, 44%)",
      primary: {
        pale: "hsl(225, 100%, 94%)",
        bright: "hsl(245, 75%, 52%)",
        active: "hsl(245, 83%, 68%)",
      },
      neutral: {
        pale: "hsl(225, 100%, 98%)",
        desaturated: "hsl(224, 23%, 55%)",
        dark: "hsl(223, 47%, 23%)",
      },
    },

    extend: {
      fontFamily: {
        sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        mobile: "url('/images/pattern-background-mobile.svg')",
        desktop: "url('/images/pattern-background-desktop.svg')",
      },
    },
  },
  plugins: [],
}
```

### Useful resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs) - This helped me to set up Tailwind properly. I configured my custom colors in the theme object and some other useful settings.

## Author

- Frontend Mentor - [@pschroee](https://www.frontendmentor.io/profile/pschroee)
