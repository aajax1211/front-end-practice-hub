// In Vanilla JavaScript, the way to set styles on an element would be as follows:

// const buttonEl = document.querySelector('button');
// buttonEl.style.color = 'red';
// buttonEl.style.backgroundColor = 'tomato';
// buttonEl.style.fontSize = '16px';
// jQuery is a library that simplifies DOM manipulation (among other things). 
// With jQuery (using the $ alias function), the above can be simplified into:

// const buttonEl = $('button');
// buttonEl.css('color', 'red');
// buttonEl.css('backgroundColor', 'tomato');
// buttonEl.css('fontSize', '16px');
// The return value of most jQuery manipulation APIs return the jQuery object
// itself, so that method calls can be chained. The above can be further simplified again:

// $('button')
//   .css('color', 'red')
//   .css('backgroundColor', 'tomato')
//   .css('fontSize', '16px');
// Additionally, if the second parameter is omitted, the value of that style property is returned.

// // <button style="color: red">Submit</button>
// $('button').css('color'); // 'red'
// Implement the jQuery single-character function $ which only needs to supports the css()
// method that either gets the value of a computed style property or sets a CSS property
// on the matched element.

// Notes
// There are some differences with the official jQuery.css() implementation:

// The official library selects all matched elements and modified all matched elements.
// However, for this question we can assume there will only be a maximum of one element
// matching the selector.
// jQuery understands and returns the correct value for both .css('background-color') and
// .css('backgroundColor') but we only have to support the latter syntax.


function $(selector) {
    let selectedQuery = document.querySelector(selector)
    
    return {
        css: function (prop, value){
            if(value === undefined){
                if(prop === undefined){
                    return undefined
                }else{
                    return selectedQuery.style[prop]
                }
            }
            if(value !== null){
                selectedQuery.style[prop] = value
                
            }
        
        }
    }
  }