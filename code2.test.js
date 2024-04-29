const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

// BONUS Testing:
const test =
    jsc.forall("array (array nat)", function(list) {
        // This test is the same as the previous one but it is checking in the "opposite" direction.
        var max = list.length - 1;
        var expectedMat = [];
        for(var i = 0; i <= max; i++) {
            // for each list in the list of lists, create a new array of length max + 1 and fill it with 0s
            expectedMat[i] = Array(max + 1).fill(0);
            // for each list in the list of lists, for each value in the list, set the value in the expectedMat to 1
            for(var j = 0; j < list[i].length; j++) {
                // this just contructs an expectation of what the matrix should look like
                expectedMat[i][list[i][j]] = 1;
            }
        }
        // ACTUAL conversion to be compared
        var convertedMat = convertToAdjMatrix(list);
        return JSON.stringify(convertedMat) == JSON.stringify(expectedMat);
    });
jsc.assert(test, { tests: 1000 });

// Sanity Check Output Ignore:
//[Running] node "/home/tyson/Documents/Cosc3020/graph-representations-tlimato/code.test.js"
//[Done] exited with code=0 in 0.08 seconds