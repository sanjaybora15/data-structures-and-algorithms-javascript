//program for take one integer value and store it in a spiral matrix;
//eg:
// n = 4;
// output: [ [ 1, 2, 3, 4 ],
//           [ 12, 13, 14, 5 ],
//           [ 11, 16, 15, 6 ],
//           [ 10, 9, 8, 7 ] ]

function matrix(n){
    
    let results = [];

    for(let i=0;i<n;i++){
        results.push([]);
    }

    let start_row = 0;
    let end_row = n - 1;
    let start_column = 0;
    let end_column = n - 1;
    let count = 1;

    while( start_column <= end_column && start_row <= end_row){
        //top row
        for(let i= start_column;i<=end_column;i++){
            results[start_row][i] = count;
            count++;
        }
        start_row++;
        //right column
        for(let i = start_row; i<=end_row;i++){
            results[i][end_column] = count;
            count++;
        }
        end_column--;
        //bottom row
        for(let i=end_column; i>=start_column; i--){
            results[end_row][i] = count;
            count++;
        }
        end_row--;

        //left column
        for(let i = end_row; i>=start_row; i--){
            results[i][start_column] = count;
            count++;
        }
        start_column++;
    }
    return results;
}


console.log(matrix(4))

