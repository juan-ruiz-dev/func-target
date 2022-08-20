//given a sorted array, write a function that returns the index
//of a given element


nums = ['a', 'b', 'c', 'x', 'y', 'z']
target = 'c'


function targetInArray(target, start, end) {
    if (start > end) {
        return ('The target is not in the array')
    }

    const middle = Math.floor((start + end) / 2);

    if (arr[middle] === target) {
        return (`I found it at index ${middle}`)
    }

    if (arr[middle] > target) {
        return targetInArray(target, start, middle - 1)

    }

    if (arr[middle] < target) {
        return targetInArray(target, middle + 1, end);
    }
    console.log(target[i])
}

