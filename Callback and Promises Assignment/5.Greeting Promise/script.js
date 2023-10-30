function greet(name) {
    return new Promise(function (resolve) {
        resolve(`Hello,${name}!`);
    })
}
greet("Mithun").then((message) => console.log(message))