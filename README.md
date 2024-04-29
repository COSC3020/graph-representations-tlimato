# Graph Representations

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/hFs1pb0z)

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis Matrix to List 

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

### Answer M->L

The runtime complexity of the conversion is $O(V^2)$ where $V_1$ is the number of vertices. This is because for each vertex, we are iterating over all other vertices to check if there is an edge between them regardless if the vertex forms an edge.

### Supporting Reasoning M->L

1. **Adjacency Matrix Structure**: The adjacency matrix is a $V_1 * V_1$ matrix where each cell $(i, j)$ indicates whether there is a direct edge from vertex $i$ to vertex $j$. This matrix has $V_1$ rows and $V_1$ columns.

2. **Nested Loops**: The function has two loops that are nested:
   - The outer loop runs $V_1$ times, once for each vertex (row)
   - The inner loop also runs $V_1$ times for each iteration of the outer loop, once for each potential connection (column).

3. **Operations Inside Loops**: Inside the inner loop, the function checks if the matrix index value is 1(indicating an edge).
   - If it is a 1, it performs a constant time operation; pushing the index to a list: $O(1)$
   - The time complexity of this operation does not depend on the number of edges but is influenced only by the number of vertices and the structure of the matrix regardless of if they form any edges.

4. **Total Operations**: Since both loops run $V_1$ times, the total number of operations is $V_1 * V_1$, leading to a complexity of $O(V^2)$.

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.

### Runtime Analysis List to Matrix

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

### Answer L->M

The runtime complexity of the conversion is $O(V_1^2 + E)$ where $V_1$ is the number of vertices and $E$ is the number of edges. This is because we are iterating over each vertex and for each vertex we are iterating over all other vertices to check if there is an edge between them, with the assignment of 1 to a matrix index in the result being dependant on the number of Edges.

### Supporting Reasoning L->M

1. **Adjacency List Structure**: The adjacency list is an array where each element at index $i$ represents a list of vertices that vertex $i$ is directly connected to. The length of the adjacency list is equal to the number of vertices, $V_1$. The depth of an Adjacency list varies at each index $i$, with each $i$ depth determined by the number of edges associated with it $E_i$

2. **Matrix Initialization**:
   - **Operation**: The adjacency matrix is initialized with zeros. This matrix is a $V_1 \times V_1$ matrix.
   - **Loops**: A nested loop structure is used:
     - The outer loop runs $V_1$ times, once for each vertex.
     - The inner loop also runs $V_1$ times for each iteration of the outer loop, to initialize each cell to zero to avoid any incorrect edges creation.
   - **Complexity**: Each iteration of the inner loop performs a constant time operation (setting a value to 0). Since both loops run $V_1$ times, the total number of operations for this part is $V_1 \times V_1$, leading to a time complexity of $O(V_1^2)$.

3. **Processing Edges**:
   - **Operation**: For each vertex, the function iterates over its adjacency list to set the corresponding matrix cells to 1, indicating an edge as is typical for an Adjacency Matrix.
   - **Loops**:
     - The outer loop iterates over each vertex's adjacency list, running $V_1$ times.
     - The inner loop runs for each edge connected to the vertex. The total number of iterations across all vertices is equal to the total number of edges, $E$.
   - **Complexity**: Each operation inside the inner loop (setting a matrix cell to 1) is a constant time operation, $O(1)$. The total complexity for processing all edges is $O(E)$. If we wanted to be pedantic you could say the overall complexity for this step is $O(E+1)$

4. **Total Operations**:
   - **Combined Complexity**: The initialization of the matrix contributes $O(V_1^2)$, and processing the edges contributes a time complexity of $O(E)$. Therefore, the total runtime complexity of the function is $O(V_1^2 + E)$.

