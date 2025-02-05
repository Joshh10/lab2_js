function checkLength() {
    // Get elements and their values
    let str1 = document.getElementById("str1").value;
    let str2 = document.getElementById("str2").value;
    
    // Compare lengths
    let isEqual = str1.length === str2.length;
    
    // Update message based on comparison
    document.getElementById("msg").innerHTML = 
        isEqual ? "Strings are equal" : "Strings are not equal";
}

document.getElementById("check-button").addEventListener("click", checkLength);


function addLengths() {
    // Get elements and their values
    let str1 = document.getElementById("str1").value;
    let str2 = document.getElementById("str2").value;
    
    // Compare lengths
    let sum = str1.length + str2.length;
    
    // Update message based on comparison
    document.getElementById("msg").innerHTML = sum;
}

document.getElementById("length-button").addEventListener("click", addLengths);