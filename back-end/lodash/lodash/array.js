const courses = ["java", "javascript", "ruby", "python", "C"];

const users = [
  { name: "Son", active: false },
  { name: "Nhanh", active: false },
  { name: "Vuong", active: true },
];

let temp = [];

// Chunk
// Tạo một mảng mới thành các nhóm phần tử với length của độ dài của nhóm mảng được truyền bởi đối số thứ 2
temp = _.chunk(courses, 2);


// Difference
temp = _.difference(courses, ["javascript", "java"]);


// Difference By
temp = _.differenceBy(courses, ["javascript", "java"], (course) =>
  _.startsWith(course, "r")
);


// Difference With
temp = _.differenceWith(users, [{ name: "Son", active: false }], _.isEqual);


// FindIndex
temp = _.findIndex(users, "Nhanh") ;



// Flat array
_.flatten([1, [2, [3, [4]], 5]]);

_.flattenDeep([1, [2, [3, [4]], 5]]);
var array = [1, [2, [3, [4]], 5]];

_.flattenDepth(array, 1);

// Pull
var array = ["a", "b", "c", "a", "b", "c"];
_.pull(array, "a", "c");

// Pull All
var array = ["a", "b", "c", "a", "b", "c"];
_.pullAll(array, ["a", "c"]);
