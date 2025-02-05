function add() {
    let element1 = document.getElementById("recipeName");
    let value1 = element1.value;
    let element2 = document.getElementById("link");
    let value2 = element2.value;

    if(value1.length > 0 && value2.length > 0) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.textContent = value1;
        a.href = value2;
        
        // Append anchor to list item
        li.appendChild(a);
        
        // Append list item to recipes list
        document.getElementById("recipes").appendChild(li);
        
        // Clear input fields
        element1.value = "";
        element2.value = "";
    }
}

document.getElementById("addRecipeBtn").addEventListener("click", add);