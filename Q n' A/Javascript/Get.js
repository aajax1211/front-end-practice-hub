// Before the optional chaining operator (?.) existed,
// it was sometimes troublesome to access deeply-nested
// properties in huge JavaScript objects when some of
// the intermediate properties might not be present.

// const john = {
//   profile: {
//     name: { firstName: 'John', lastName: 'Doe' },
//     age: 20,
//     gender: 'Male',
//   },
// };

// const jane = {
//   profile: {
//     age: 19,
//     gender: 'Female',
//   },
// };

// function getFirstName(user) {
//   return user.profile.name.firstName;
// }
// Doing getFirstName(john) works but getFirstName(jane)
//  will error because the name property doesn't exist for jane.profile.

// Lodash's Get method
// Lodash's _.get method was created as a solution for such use cases.

// Let's write our own version as a get function. The function
// gets the value at path of object. If the resolved value is
// undefined, the defaultValue is returned in its place. 
// The function signature is as such:

// get(object, path, [defaultValue]);
// object: The object to query.
// path: The path of the property to get. It can be a string 
// with . as the separator between fields, or an array of path strings.
// defaultValue: Optional parameter. The value returned if the resolved value is undefined.


 function get(objectParam, pathParam, defaultValue = "undefined") {

    let newPathParam = Array.isArray(pathParam) ? [...pathParam] : pathParam.split(".");
    console.log("newPathParam : ", newPathParam)
    let result = objectParam;
    console.log("result : ", result)

    for(key in newPathParam){
        console.log(newPathParam[key])
        if(result[newPathParam[key]] === undefined){
            return defaultValue 
        } else {
            result = result[newPathParam[key]]
        }
    }

    return result
    
  }

  let obj = {
    name : "Ajit",
    sibling : {
        sib1: {
            name : "Jatin"
        }
    }
  }

  console.log(get(obj,"sibling.sib1.name", "not found"))
  console.log(
    get(
      { a: { b: [1, 2, 3, { c: "bar" }], c: { d: 0 } }, c: 1 },
      ["a", "b", "3", "c"]
    )
  );




