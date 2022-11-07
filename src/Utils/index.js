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
export const SortData = (data, field = 'bananas', order = 'desc') => {
    if (data && data.length > 0) {
        data.sort((a, b) => {
            if (order === 'asc')
                return a[field] - b[field];
            if (order === 'desc')
                return b[field] - a[field];

        });
    }
    return data.slice(0, 10);
}

const findInArray = (array, keyword) => {
    if (array && array.length > 0) {
        return (array.find(item => item.name === keyword || item.name.startsWith(keyword)))
    }
    return false
}

export const FilterFormArray = (array, keyword) => {

    let resArray = SortData(array);

    let findInFilterArray = findInArray(resArray, keyword)

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

export const filterSearchData = () => {

}