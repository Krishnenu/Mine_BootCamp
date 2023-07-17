const bookJson = require("./book.json");
// console.log(bookJson.data);


/**
 * 
 * @param {Arrray<Book>} bookList 
 * @param {string} tag 
 * @returns {{bookName:string}[]}
 */
var getAllBooksByTag = function (bookList,tag){
    let result = [];
    for(let i = 0 ; i< bookList.length;i++){
       let bookItem = bookList[i];
        let tagArrayOfItem = bookItem["tags"];

        for(let j =0 ;j<tagArrayOfItem.length;j++){
            if(tagArrayOfItem[j] === tag){
                result.push({
                    "bookName":bookItem["title"],
                    "auther": bookItem["author"],
                    "noOfReads": bookItem["popularity_user_count"]
                });
            }
        }
    }
    return result;
}

// console.log(getAllBooksByTag(bookJson.data,"History"));

// var getBooksBySegmentPopularity= function (bookList,tags){ // Deepankar Assignment
//     let booksByTag = getAllBooksByTag(book.data,tags);


// }

var getBookByAutherName = function(booklist,author){ 
    let specificbook=[];
    for(let i=0;i<booklist.length;i++){
        let bookitem=booklist[i];
        let authorBook=bookitem["author"];
        // specificbook.push(authorBook);
        let bookName=bookitem["title"];      
            if(authorBook===author){
                specificbook.push(bookName);
            }
    }
    return specificbook;
};


console.log(getBookByAutherName(bookJson.data,"Cal Newport"));

var checkIfDuplicateBook = function(bookList){
    let map = {}; 
    for(let i =0;i<bookList.length;i++){

    }
}
// var removeDuplicate = function(){} // Amit Assignment


// //for all

// //getAllAuthers



// getAllBooksByTag