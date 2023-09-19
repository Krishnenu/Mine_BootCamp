let moodJson= require("./mood.json");

let randomQuoteGenerator=(mood)=>{
    let quotes=moodJson[mood];
    if (quotes){
        let randomNum=Math.floor(Math.random()*quotes.length);
        return `${mood} ---> ${quotes[randomNum]}` ;
    }
    return "No valid Input";
}

console.log(randomQuoteGenerator("sad"));
console.log(randomQuoteGenerator("happy"));
