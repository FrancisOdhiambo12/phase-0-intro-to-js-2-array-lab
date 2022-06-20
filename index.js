// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat() {
   let newCat = cats.push('Ralph')
   return newCat
  };
  destructivelyAppendCat(newCat)


//   let cats = ["Milo", "Otis", "Garfield", "Ralph"]

  function destructivelyPrependCat() {
    let latestCat = cats.unshift('Bob')
    return latestCat
  }
  destructivelyPrependCat(latestCat)

  function destructivelyRemoveLastCat() {
    let removeLastItem = cats.pop()
    return removeLastItem
    
  }
  destructivelyRemoveLastCat(removeLastItem)

  function destructivelyRemoveFirstCat() {
    let removeFirstCat = cats.shift()
    return removeFirstCat
  }
  destructivelyRemoveFirstCat(removeFirstCat)
  

  function appendCat(name) {
    let CatsArr = [...cats, "Broom"];
    return CatsArr;
}

function prependCat(name) {
    let CatsArray = ["Arnold", ...cats];
    return CatsArray;
}

function appendCat(name) {
    let catsArr = [...cats, "Broom"];
    return catsArr;
}
appendCat(catsArr)

function removeLastCat() {
    let catListArr = cats.slice(0, -1);
    return catListArr;
}
removeLastCat(catListArr)

function removeFirstCat() {
    let ListCats = cats.slice(-2);
    return ListCats;
}
removeFirstCat(ListCats)

  