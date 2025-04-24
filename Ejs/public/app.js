const btns = document.querySelectorAll('button');
for (btn of btns) {
    btn.addEventListener('click', function () {
        console.log("button is clicked");
    });
}