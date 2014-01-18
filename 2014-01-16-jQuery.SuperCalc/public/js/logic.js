//LOGIC JAVASCRIPT FILE

function containsChar(word, letter){
    return word.indexOf(letter) !== -1;
}

function parseTags($tags){
  return $.map($tags, function(tag){
    return parseFloat(tag.textContent);
  });
}



  // if(current === '.' && display.indexOf('.') !== -1) return;
