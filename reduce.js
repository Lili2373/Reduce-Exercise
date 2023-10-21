
function extractValue(arr, key) {
    return arr.reduce((result, obj) => {
        if (obj.hasOwnProperty(key)) {
            result.push(obj[key]);
        }
        return result;
    }, []);
}

function vowelCount(str) {
    const vowels = 'aeiou';
    const lowercaseStr = str.toLowerCase();

    return lowercaseStr.split('').reduce((count, char) => {
        if (vowels.includes(char)) {
            count[char] = (count[char] || 0) + 1;
        }
        return count;
    }, {});
}

function addKeyAndValue(arr, key, value) {
    return arr.reduce((result, obj) => {
        obj[key] = value;
        result.push(obj);
        return result;
    }, []);
}

function partition(arr, callback) {
    return arr.reduce(
        (result, value) => {
            if (callback(value)) {
                result[0].push(value);
            } else {
                result[1].push(value);
            }
            return result;
        },
        [[], []]
    );
}