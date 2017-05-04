// const root = 'https://jsonplaceholder.typicode.com/posts/1'
//
// fetch(root, { method: "GET"} )
//   .then(response => console.log(response))

// const root = 'https://jsonplaceholder.typicode.com/posts/1'
//
// fetch(root, { method: "GET"} )
//   .then(response => response.json())
//   .then(json => console.log(json));

  const root = 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699';

  fetch(root, { method: "GET"} )
    .then(response => response.json())
    .then(json => console.log(json));
