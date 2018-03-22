const array = [1,2,10203,555,3,10,4];
function myFilter(array , cb)
{
    const newArray = [];
    for(let i = 0; i < array.length; i++)
    {
        if (cb(array[i]))
        {
            newArray.push(array[i]);
        }
        
    }
    array = newArray.concat();
    return array;
}

function myMap(array , cb)
{
    const newArray = []

    for (let i = 0; i< array.length; i++)
    {
        newArray.push(cb(array[i]))
    }

    return newArray;

}

const newArray = myFilter(array , n => n < 9);
const array2 = myMap (array , n => n+1);
console.log(array2.join(","));
console.log(newArray.join(","));

