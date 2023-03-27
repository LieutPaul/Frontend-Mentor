# Frontend Mentor - Fylo landing page with two column layout solution

This is a solution to the [Fylo landing page with two column layout challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-landing-page-with-two-column-layout-5ca5ef041e82137ec91a50f5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

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

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Live Site URL: [Vikas's Landing Page](https://vikas-frontend-mentor.netlify.app/landing-page)

## My process

### Built with

- CSS custom properties
- Tailwind CSS
- Flexbox
- Bootstrap Container
- [React](https://reactjs.org/) - JS library
- React Icons

### What I learned

```html
<div className='row mt-4 flex-column-reverse flex-md-row'>
    <div className='col-md-7 col-12 flex flex-column justify-center items-center'>
        <div className='col-md-5 col-12'>
        </div>
    </div>
</div>
```

The first line of code helps in reversing the order of the two col-12s while keeping the order of the col-md-7 and col-md-5. 

### Useful resources

- [Tailwind CSS](https://tailwindcss.com/) - This helped me in applying certain flexbox and text aligning styles without defining separate classes.
- [Bootstrap](https://getbootstrap.com/docs/5.0/layout/containers/) - This helped me in understanding the grid system which helped in creating the responsive mobile design, as well as making the navbar of the site.
- [Stackoverflow](https://stackoverflow.com/questions/46672633/how-can-i-reverse-the-order-of-columns-in-bootstrap-4) - Helped in reversing the order of the divs as mentioned above.

## Author

- Frontend Mentor - [@LieutPaul](https://www.frontendmentor.io/profile/LieutPaul)
- Twitter - [@VKas_17](https://twitter.com/VKas_17)
