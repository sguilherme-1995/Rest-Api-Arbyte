
module.exports =  function intersection(array1, array2){
    const result = []
    const alreadyFound = {}
    for(let i = 0; i< array1.length; i++){
        const elementOnArray1 = array1[i];
        for(let j =0; j< array2.length; j++){
            const elementOnArray2 = array2[j]
            if(elementOnArray1 === elementOnArray2 && !alreadyFound[elementOnArray1]){
                alreadyFound[ elementOnArray1] = elementOnArray1
                result.push(elementOnArray1)
            }
        
        }
    }
    return result
}