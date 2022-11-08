
// It will convert objects of objects data to array of objects
export const ConvertObjectToArray = (data) => {
    let array = []

    if (data && Object.keys(data).length > 0) {
        array = (Object.values(data));
    }

    return array
}

// Remove empty name data 
export const removeEmptyFieldData = (data) => {
    if (data && data.length > 0) {
        return data.filter((obj => obj.name !== ""));
    }
    return data;
}

// It will sort the data based on given field
export const getSortedData = (data, field = 'bananas', order = 'desc', num = 10) => {
    if (data && data.length > 0) {
        data = removeEmptyFieldData(data);
        data.sort((a, b) => {
            if (order === 'asc')
                return a[field] - b[field];
            if (order === 'desc')
                return b[field] - a[field];
        });
    }
    return data.slice(0, num);
}

// Find in array
const findInArray = (array, keyword) => {
    if (array && array.length > 0) {
        return (array.find(item => item.name === keyword))
    }
    return false
}

// Filter fron an array
export const FilterFormArray = (array, keyword) => {

    let resArray = getSortedData(array);

    let findInFilterArray = findInArray(resArray, keyword)
    console.log('findInFilterArray', findInFilterArray)

    if (findInFilterArray) {
        // Highlightconst 
        findInFilterArray.isSearched = "Yes";
    } else {
        const found = findInArray(array, keyword);
        if (found) {
            resArray['9'] = found;
            found.isSearched = "Yes";
        }
    }

    return resArray;
}