const lang = NaN;

let temp;

temp = _.isNull(lang);

temp = _.isObject(lang);

temp = _.isNumber(lang);

temp = _.isArray(lang);

temp = _.isEmpty(lang);

const object = { a: 1 };
const other = { a: 1 };

temp = _.isEqual(object, other);

const objectMatch = { a: 1, b: 2 };

_.isMatch(objectMatch, { b: 2 });
_.isMatch(objectMatch, { b: 1 });

console.log(temp);

temp = _.isUndefined(lang);

temp = _.toInteger(lang);

temp = _.toArray(lang);

