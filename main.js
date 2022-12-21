var arr = [[0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3],];
var totalCost = function (data) {
    var totalCost = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            if (arr[i][j] == 0 && i + 1 < arr.length) {
                arr[i + 1][j] = 0;
            }
            totalCost += arr[i][j];
        }
    }
    return totalCost;
};
console.log(totalCost(arr));
