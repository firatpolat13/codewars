/*
Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
*/
String.prototype.camelCase=function(){
  var x = this;
  var res = x.split(' ');
  var d = "";
  for(i = 0; i < res.length; i++) {
    if (res[i].length > 0){
    var y = res[i][0].toUpperCase() + res[i].slice(1);
    var d = d + y;
    }
  }
  return d;
}