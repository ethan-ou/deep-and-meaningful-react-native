export function shuffle(array: any[]) {
  var newArray = array.slice(0);
  for (var i = newArray.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = newArray[i];
    newArray[i] = newArray[j];
    newArray[j] = temp;
  }
  return newArray;
}

export function capitalise(string: String) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
