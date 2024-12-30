const sum = (a,b) => {
    console.log(a+b); 
}

let id=setInterval(()=>{
    console.log("hello world");
},2000);

setTimeout(()=>{
    clearInterval(id);
    console.log("clear");
});
let ARR=[2,3,4,2,];
let max=-1;
for(let i=0;i<ARR.length;i++){
    if(max<ARR[i]){
        max=ARR[i];
    }
}
console.log(max);