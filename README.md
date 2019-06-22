# Overview:
- Docs and usecase examples: https://aml2732.github.io/myFramework/test/test.html
- In progress example of using myFramework to build a page: https://aml2732.github.io/myFramework/test/example.html

# Usage:

Note: Example for reference in `/test` folder.

Import the `style.css` file underneath `/dist` folder into your markup like so:
  `<link rel="stylesheet" type="text/css" href="../dist/style.css"></link>`


Add the class: `myFramework` to an element, and all elements within that will use the css from this project.

Rows and Columns:

`row` - This class turns an element into a row. - `<div class="row"></div>`
  `center` - add this to a row element to center its contents - `<div class="row center"></div>`
  `space-evenly`
  `space-between`
  `align-end`

`column` - This class turns an element into a column

# Colors:

Color schemes provided come in the format: `<color>-<desc>-<value?>`
Example:
```
$blue-dark-2
$blue-dark-1
$blue-neutral
$blue-light-1
$blue-light-2
```
Where dark-2 is the darkest. And light-2 is the lightest. And in the center is neutral colors.


# Develop/Test:

To build:
`cd <base directory>`
`node index.js`

under the `/test` directory are webpages which show how to use the css framework.
To view one, simply open the markup in a browser (eg: `file:///Users/me/myFramework/test/test.html`)
