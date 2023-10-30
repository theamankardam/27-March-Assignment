async function getCombinedData() {
    const [data1, data2] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) => response.json()

        ),
        fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) => response.json()

        ),
    ]);

    const combinedData = {
        todo: data1,
        post: data2
    };
    return combinedData;
}

getCombinedData().then((data) => console.log(data))





// async function getCombinedData() {
//     const response1 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     const response2 = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     const data1 = await response1.json();
//     const data2 = await response2.json();
//     const combinedData = {
//         todo: data1,
//         post: data2
//     };
//     return combinedData;
// }
// getCombinedData().then((data) => console.log(data))