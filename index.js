var sass = require('node-sass');
var fs = require('fs');

sass.render({
  file: "src/style.scss",
  outFile: "dist/style.css"
}, function(err, result) {
  console.log("Did an error occur? ");
  console.log(err);
  console.log("Result?");
  console.log(result)
  if(!err){
    fs.writeFile("dist/style.css", result.css, function(err){
      if(!err){console.log("success writing to file")}
      else{console.log("failure writing to file")}
    });
  }
 });
