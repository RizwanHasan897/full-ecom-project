import React from "react";

function Upload({ fileInput, loadFile }) {
    return (
        <div className="admin-div">
            <div className="table-container"></div>
            <input
                type="file"
                className="file-loader"
                accept=".csv"
                onChange={(event) => fileInput(event)}
            ></input>
        </div>
    );
}


// Luffy
// array[2][index].classlist
// array of oject
// use event to auto update 

// class
// name :{name: [0], size[1]}
// [1,2,3,4,5] 
// json Manipulation
// store in bit format
// know translate design in layout 

export default Upload;