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
