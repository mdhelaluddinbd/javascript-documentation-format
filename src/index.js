// variable documentation syntax

/**
 * description
 * @type {typeName}
 */

// variable documentation examples

/**
 * user's fullName
 * @type {string}
 */
const fullName = "Anisul Islam";

/**
 * Array of users
 * @type {Array}
 */
const users1 = ["Anisul Islam", "Robert", "David"];

/**
 * Array of users age
 * @type {Array<number>}
 */
const users2 = [24, 32, 18];

/**
 * user details
 * @type {{name: string|number, age: number}}
 */
const user = {
  name: "david",
  age: 32,
};

/**
 * user details
 * @type {Array<{name: string, age: number}>}
 */
const users = [
  {
    name: "david",
    age: 32,
  },
  {
    name: "robert",
    age: 31,
  },
];

// function documentation syntax
/**
 * description goes here
 * @param {typeName} paramName  parameter description
 * @returns {typeName} description
 */

// function documentation example
// In the following example {*} refers to any type; we can also specify the type by saying name of the type

/**
 * calulates the area of nothing
 * @returns {string} a simple text
 */
function areaOfNothing() {
  return "area of nothing";
}

/**
 * calulates the area of triangle
 * @param {*} dim1 the base of the triangle
 * @param {*} dim2 the height of the triangle
 * @returns {number} area of triangle
 */
function areaOfTriangle(dim1, dim2) {
  return 0.5 * dim1 * dim2;
}

/**
 * calulates the area of rectangle
 * @param {*} dim1 the length of the rectangle
 * @param {*} dim2 the width of the rectangle
 * @returns {number} area of rectangle
 */
function areaOfRectangle(dim1, dim2) {
  return dim1 * dim2;
}

/**
 * calulates the area of circle
 * @param {*} dim1 the radius of the circle
 * @returns {number} area of cricle
 */
function areaOfcirCle(dim1) {
  return console.log(Math.PI * dim1 * dim1)
}

areaOfcirCle(4);