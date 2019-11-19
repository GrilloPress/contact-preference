module.exports = function (env) {


filters.stringOrNot = function(obj) {
  return typeof obj == 'string';
}


return filters
}
