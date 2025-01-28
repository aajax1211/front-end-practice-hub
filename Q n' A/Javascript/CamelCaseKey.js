// Implement a function camelCaseKeys, that takes an
// object and returns a new object with all its keys converted to camel case.

// Camel case is a format where words are separated with a single
// capitalized letter and the first letter of the word will be lower
// case. Some examples:

// String	camelCase
// foo	Yes
// fooBar	Yes
// Foo_Bar	No
// foo_bar	No
// For simplicity, we only need to consider the 4 string formats above,
// there will not be keys containing spaces, hyphens, or PascalCase.

function camelCase(str) {
    return str
      .toLowerCase()
      .replace(/([_])([a-z])/g, (_match, _p1, p2) => p2.toUpperCase());}


export default function camelCaseKeys(object) {
  if (Array.isArray(object)) {
    return object.map((item) => camelCaseKeys(item));
  }

  if (typeof object !== 'object' || object === null) {
    return object;
  }

  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => [
      camelCase(key),
      camelCaseKeys(value),
    ]),
  );
}