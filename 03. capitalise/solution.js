function capitalise(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
  
}
console.log(capitalise("jumper"));

module.exports = { capitalise };

 
