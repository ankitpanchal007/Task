
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
        return (array.find(item => item.name === keyword ))
    }
    return false
}


// Find Index Of
const findIndexOfItem = (array, keyword) => {
    if (array && array.length > 0) {
        return array.findIndex(object => {
            return object.name === keyword;
        });
    }
    return false
}

// // id's for filtered data
// const setIdFilteredData = (data) => {
//     for (let i in data) {
//         data[i].id = Number(i) + 1;
//     }

// }


// Filter fron an array
export const FilterFormArray = (array, keyword) => {

    let resArray = getSortedData(array);
    let foundOnIndex = findIndexOfItem(resArray, keyword)
   
    // For Ranking
    for (let i in resArray) {
        const rank = Number(i)+1;
        resArray[i].id = rank;
        if (i == foundOnIndex) {
            resArray[i].isSearched = true;
        } else {
            resArray[i].isSearched = false;
        }
        
    }


    // If Found
    if (foundOnIndex < 0) {
        let found = findInArray(array, keyword);
        let foundFullItemIndex = findIndexOfItem(array, keyword)
        if (found) {
            found.id = +foundFullItemIndex + 1;
            found.isSearched = true;
            resArray['9'] = found;
        }
    }

    return resArray;
}