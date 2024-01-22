const fruitArr=["Apple","Mango","Banana","Pears"];



function printFruitsName(fruitName){
    switch (fruitName){
        case "Apple":
            console.log("apple");
            break;
        case "Mango":
            console.log("mango");
            break;
        case "Banana":
            console.log("Banana");
            break;
        default:
            console.log("item not found");
    }
}

printFruitsName("Banana");