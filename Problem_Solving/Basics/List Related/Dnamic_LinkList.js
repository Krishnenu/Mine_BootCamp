function array_List(list){
    this.data=list?new Array(list).fill(0):new Array();
    this.top=0;
    this.length=this.data.length;
    this.push=function(item){
        this.data[this.data]=item;
        this.top++;
    }
    this.insertAt=function(val,index){
        if(index===this.length-1){
            let na=new Array(this.length*2).fill(0);
            for(let i=0;i<this.length;i++){
                na[i]=this.data[i];
            }
            this.data=na;
            this.data[index]=val;
            this.top++;
        }else{
            if(to<this.length-1){
                this.data[this.top]=val;
                this.top++;
            }
        }
    }
    this.updateAt=function(val,index){
        if(this.data===undefined){
            throw new error("No element present in Array");
        }else{
            this.data[index]=val;
        }
    }
    this.deleteAt=function(val){
        for (let i=0;i<this.length-1;i++){
            if(this.data[i]===val){
                
            }
        }
        this.data[index]
    }
}


let ar1=new array_List(5);
// for(let i=0;i<4;i++){
//     ar1.push(i);
// }
ar1.push(5)
console.log(ar1.data);
console.log(ar1.top);

// ar1.insertAt(100,4);
// ar1.updateAt(50,2);


// console.log(ar1.data);