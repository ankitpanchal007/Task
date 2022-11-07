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

export const FilterFormArray = (array, keyword) => {
    // filter logic

    if (array && array.length > 0) {
        return (array.filter(item => item.name === keyword || item.name.startsWith(keyword)))

    }

    return array;
}

// export const FilterTable = (sortedArray, keyword) => {
//     sortedArray.map((a) => {
//         if (a.includes(keyword)) {
//             return;
//         }
//         else {
//             return sortedArray.splice(10, 1, keyword);
//         }
//     })

// }