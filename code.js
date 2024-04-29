function convertToAdjList(adjMatrix) {
    // Store Result values
    // Iterate over each row
    // Iterate over each column
    // If the value is 1, add the column index to the row index in the adjacency list
    // If the value is 0, do not add anything
    let adjList = [];
    for (let i = 0; i < adjMatrix.length; i++) {
        let temp = [];
        for (let j = 0; j < adjMatrix[i].length; j++) {
            if (adjMatrix[i][j] === 1) { // the 1 means there is a edge from i to j, assuming the matrix is constructed correctly.
                temp.push(j); // contains all vertices connected to i
            }
        }
        adjList.push(temp); // Adds the list of vertices that vertex 'i' can directly reach to the adjacency list
    }
    // return adjacency list
    return adjList;
}

// BONUS PART
function convertToAdjMatrix(adjList) {
    // Initialize the adjacency matrix with zeros
    // Fun side note: because Arrays are an advanced data type you can directly point to parameters like length and fill inline with the creation of the variable.
    //      compared to other programing languages like C++ or Python without good libraries this is really clean.
    let adjMatrix = Array.from({ length: adjList.length }, () => Array(adjList.length).fill(0));

    // Iterate over each list in the adjacency list
    for (let i = 0; i < adjList.length; i++) {
        // For each vertex in the list, set the corresponding matrix cell to 1
        for (let j = 0; j < adjList[i].length; j++) {
            // Essentially this does the opposite of what the conversion from matrix to list does
            // given a value an value J in index I that marks an edge from i to J
            // thus when converting to matrix we are setting the value of the matrix cell to 1
            // to indicate that there is an edge from vertex i to vertex connectedVertex
            let connectedVertex = adjList[i][j];
            adjMatrix[i][connectedVertex] = 1; // Set the matrix cell to 1 indicating an edge from vertex i to vertex connectedVertex
        }
    }
    return adjMatrix;
}

// Perplexity.ai "function not being recognized" debug suggestion
// I was having issues with my unit test I wrote for the bonus not detecting the function I wrote despite
// eval(fs.readFileSync('code.js')+'') Theoretically exporting it so I asked perplexity.ai to help as it gives sources to reference.
// and I learned you can just explicitly export using module.exports and this solved the issue.
module.exports = {
    convertToAdjList,
    convertToAdjMatrix
};