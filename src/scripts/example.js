exports.welcome = function(){
  let inputs = ["j","j","y","a"]
  let result = inputs.map(word => word.split("")[0] ).reduce( (a,b) => a+b );
  // because everyone loves over-engineering
  console.log(result)
}
