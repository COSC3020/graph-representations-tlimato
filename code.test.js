const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const test =
    jsc.forall("array (pair nat nat)", function(edges) {
        var max = edges.reduce(function(a, b) { return Math.max(a, Math.max(b[0], b[1])); }, 0);
        var mat = [];
        for(var i = 0; i <= max; i++) {
            mat[i] = [];
            for(var j = 0; j <= max; j++) {
                mat[i][j] = 0;
            }
            for(var j = 0; j < edges.length; j++) {
                if(edges[j][0] == i) mat[i][edges[j][1]] = 1;
            }
        }
        var list = [];
        for(var i = 0; i <= max; i++) {
            list[i] = [];
            for(var j = 0; j < edges.length; j++) {
                if(edges[j][0] == i) list[i].push(edges[j][1]);
            }
            list[i].sort(function(a, b) { return a - b; });
            list[i] = [...new Set(list[i])];
        }
        return JSON.stringify(list) == JSON.stringify(convertToAdjList(mat));
    });
jsc.assert(test, { tests: 1000 });

// BONUS Testing:
const test_2 =
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
jsc.assert(test_2, { tests: 1000 });

// Sanity Check Output Ignore:
//[Running] node "/home/tyson/Documents/Cosc3020/graph-representations-tlimato/code.test.js"
//[Done] exited with code=0 in 0.08 seconds