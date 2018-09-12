/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let count = 0;
    preferences.forEach((value, index) => {
        if (value !== 0) {
            let val = value - 1;
            if (index !== val)
                if (index === preferences[preferences[val] - 1] - 1) {
                    count++;
                    preferences[index] = preferences[val] = preferences[preferences[val] - 1] = 0;
                }
        }
    });
    return count;
};
