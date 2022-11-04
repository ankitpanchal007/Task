import CustomTable from '../common/CustomTable'
// It will convert objects of objects data to array of objects
export const ConvertObjectToArray = (data) => {
    let array = []

    if (data && Object.keys(data).length > 0) {
        array = (Object.values(data));
    }

    return array
}

// It will sort the data based on given field
export const SortData = (data, field = 'bananas', order = 'asc') => {
    // console.log(data);
    let ArrayObject = (Object.values(data));


    if (ArrayObject[0] && ArrayObject[0].length > 0) {
        ArrayObject[0].sort((a, b) => {
            if (order === 'asc')
                return b.bananas - a.bananas;
            if (order === 'desc')
                return a[field] - b[field];
        });
    } console.log(ArrayObject[0].slice(0, 10));
    return ArrayObject[0]
}

export const FilterFormArray = (array, keyword) => {
    // filter logic
    if (array && array.length > 0) {
        return array.filter(item => item.name === keyword || item.name.startsWith(keyword))
    }
    return array;
}