const removeFromArray = function (array, ...excludedItems) {
    return array.filter(item => !excludedItems.some(excludedItem => item === excludedItem));
}

// Do not edit below this line
module.exports = removeFromArray;
