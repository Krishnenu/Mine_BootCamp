const fetcher = require('../fetch/fetcher.js');

const test = async () => {
    const res = await fetcher("https://jsonplaceholder.typicode.com/posts/1/comments",'GET');
    console.log(res.body);
}
test();