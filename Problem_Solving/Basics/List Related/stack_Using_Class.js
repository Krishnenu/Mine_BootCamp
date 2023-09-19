class stackImplimentatin{
    data;
    top;
    constructor(data){
        this.data=new Array(50);
        this.top=0;
    }
    push(val){
        for(let i=0;i<this.data.length;i++){
            this.data[top]=val;
            top++;
        }
    return this.data;
    }

}

const n=new stackImplimentatin();
n.push(34);
console.log(n.data);