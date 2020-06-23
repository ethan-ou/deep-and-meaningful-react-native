function shuffle(array) {
    var tmp, current, top = array.length;
    if(top) while(--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
    return array;
}

 function capitalise(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}  

export { shuffle, capitalise }; 