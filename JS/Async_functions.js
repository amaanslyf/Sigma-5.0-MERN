async function greet (name) {
    return "hello " ;
}
greet("world").then((result) => {
    console.log(result);
})