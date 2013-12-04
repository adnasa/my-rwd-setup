
# My RWD Setup
A basic set of tools I use on every RWD project.

## Preview
[http://0nn0.github.io/my-rwd-setup/demo/](http://0nn0.github.io/my-rwd-setup/demo/)

## Components

**Mediaquery debugger**
- Displays the active mediaquery in a bar at the bottom of the page
- Allows you to toggle the visibility of the debugger on/off by using a keyboard shortcut

**Mediaquery manager**
- Detects and stores the currently active and previous mediaquery
- Dispatches an event when the active mediaquery changes


## Dependencies
- [Sass](http://sass-lang.com/)
- [Modernizr](http://modernizr.com)

## Getting started
- Make sure you have [Sass](http://sass-lang.com/) installed
- Clone the repo and move into the main directory
- If you'd like to edit the SCSS files, run `sass --watch src/scss/style.scss:src/css/style.css` to compile the Sass to CSS
- Open `demos/index.html`


## Feature requests
For feature requests, simply create an issue in the [issue-tracker](https://github.com/0nn0/my-rwd-setup/issues)


## Credits
- Debugger: http://johanbrook.com/design/css/debugging-css-media-queries/
- Mediaquery manager: http://adactio.com/journal/5429/