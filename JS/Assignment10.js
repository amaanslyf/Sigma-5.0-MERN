let btn = document.createElement("button");
btn.innerHTML = "Click Me";
document.body.appendChild(btn);

btn.addEventListener("click", function() {
    btn.style.backgroundColor = "green";
});

let ip = document.querySelector('input');
let h2 = document.querySelector("h2");

ip.addEventListener("input", function() {
    let newValue = ""; // Initialize an empty string

    for (let i = 0; i < ip.value.length; i++) {
        let char = ip.value[i]; // Get current character

        // Allow only letters (A-Z, a-z) and spaces
        if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || char === ' ') {
            newValue += char;
        }
    }

    ip.value = newValue; // ✅ Remove invalid characters from input field
    h2.innerHTML = ip.value; // ✅ Update heading with valid text
});

