						
console.log("This program search the element using Linear Search");
var x = [ -1 , -9 , 8 , 5 , 6 , 4 , 6 ,45,343,65,2355,7689,34546,5686,28552,5654621651,0 ];

function linearSearch(x, len, element){
    for(var i = 0;i< len-1 ; i++){
        if(x[i] == element){
            return console.log("element Found at position  : " + i);
        }
    }
    return console.log("element NOT found !");
    
}

console.log("Array is : " + x);
var len = x.length;
var element = 34546; //Element to be searched
console.log("Length of array is :" + len);
console.log("Element to be searched is : " + element);

linearSearch(x,len,element);




