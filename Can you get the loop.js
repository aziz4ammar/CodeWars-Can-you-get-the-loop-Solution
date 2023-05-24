function loop_size(node) {
    let tortoise = node;
    let hare = node;
  
    // Find a point of intersection in the loop
    do {
      tortoise = tortoise.getNext();
      hare = hare.getNext().getNext();
    } while (tortoise !== hare);
  
    // Move tortoise to the start of the loop and count the loop size
    let count = 1;
    tortoise = tortoise.getNext();
    while (tortoise !== hare) {
      tortoise = tortoise.getNext();
      count++;
    }
  
    return count;
  }  