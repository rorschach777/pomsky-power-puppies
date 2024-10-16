export const removeDuplicates = (arr)=>  {
    let output = [];
    arr.forEach(element => {
        if (!output.includes(element)) {
            output.push(element);
        }
    });
    return output;
} 