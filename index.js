var sass = require("node-sass");
var eyeglass = require("eyeglass");

sass.render(eyeglass({
  file: 'index.scss'
}), function(error, result) {
  if (error) {
    console.error('error', error)
  } else {
    console.log('ok!', result)
  }
});