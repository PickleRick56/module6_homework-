let arr = [0,1,4, "orange",6, "orange",null,5,7];


function counter(array){


    let even =0;
    let odd=0;
    let  zeroCounter=0;
    for(let i=0; array.length>i;i++){
       


        if( typeof array[i]== 'number'     && !isNaN(array[i])){
    
            if(array[i]===0){
                zeroCounter+=1;
            }
            else if(array[i]%2===0){
                even+=1;
            }
            else{
                odd+=1;
            }
    
    
        }
        else{
            continue;
        }
    }

    console.log(`нулей-${ zeroCounter} , четных - ${even} , не четных - ${odd}`);
    
}

counter(arr);

