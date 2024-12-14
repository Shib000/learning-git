console.log('hiii');
console.log('hello');
import axios from "axios";
axios.get("https://jsonplaceholder.typicode.com/todos/1").then((response) => console.log(response.data))