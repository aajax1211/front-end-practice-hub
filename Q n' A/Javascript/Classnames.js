// classnames is a commonly-used utility in modern
//  front end applications to conditionally join CSS 
// class names together. If you've written React applications, 
// you likely have used a similar library.

// Implement the classnames function.

// Examples
// classNames('foo', 'bar'); // 'foo bar'
// classNames('foo', { bar: true }); // 'foo bar'
// classNames({ 'foo-bar': true }); // 'foo-bar'
// classNames({ 'foo-bar': false }); // ''
// classNames({ foo: true }, { bar: true }); // 'foo bar'
// classNames({ foo: true, bar: true }); // 'foo bar'
// classNames({ foo: true, bar: false, qux: true }); // 'foo qux'
// Arrays will be recursively flattened as per the rules above.

// classNames('a', ['b', { c: true, d: false }]); // 'a b c'
// Values can be mixed.

// classNames(
//   'foo',
//   {
//     bar: true,
//     duck: false,
//   },
//   'baz',
//   { quux: true },
// ); // 'foo bar baz quux'
// Falsey values are ignored.

// classNames(null, false, 'bar', undefined, { baz: null }, ''); // 'bar'
// In addition, the returned string should not have any leading or trailing whitespace.





function classNames(...args) {
    let arr = [...args];
  
    if (arr.length === 0) {
      return "";
    }
  
    function flatten(arr) {
      let result = [];
  
      arr.forEach((item) => {
        if (Array.isArray(item)) {
          result = result.concat(flatten(item));
        } else if (typeof item === "object" && item !== null) {
          result = result.concat(flattenObject(item));
        } else {
          result.push(item);
        }
      });
      return result;
    }
  
    function flattenObject(obj) {
      let result = [];
      for (let key in obj) {
        if (obj[key]) {
          result.push(key);
        }
      }
      return result;
    }
  
    let newArr = flatten(arr);
  
    return newArr.filter(Boolean).join(" ");
  }
  