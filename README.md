# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.jpg)


### Links
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)



### Built with

- JSX
- CSS
- [React](https://reactjs.org/) - JS library

### What I learned

I learnt about the basic concept of React and was able to put them into practise.

To see how you can add code snippets, see below:

```html
<input 
  value={1} 
  type="button" 
  className={Rating === 1 ? "numberbtn active" : "numberbtn"}
  onClick={numClick}
/>
<button 
    className={Rating ? "submit-btn" : "submit-btn disabled"}
    onClick={submit} 
    type="submit"> SUBMIT
</button>
```

```js
    const numClick = (event) => {
        event.preventDefault()
        let value = event.target.value
        setRating(+value)
    
    }
    const submit = (event) => {
        event.preventDefault()
        if (Rating) {
            setShowMe(true)
        } 
    }
}
```

### Continued development

I'd love to focus more on projects that requires React Props, Events, States, React Hooks and React Router.


## Author

- Website - [Blessing Peter](https://www.your-site.com)
- Frontend Mentor - [@ble-syn](https://www.frontendmentor.io/profile/ble-syn)
- Twitter - [@ble_syn_](https://www.twitter.com/ble_syn_)


## Acknowledgments

Special Thanks to Twitter - [@josephe44](https://github.com/josephe44) for all your help with the project, You truly are an asset!

