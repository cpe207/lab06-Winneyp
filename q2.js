const axios = require("axios");

const getTodo = async (todoId) => {
  //your code here
  try {
    const userIdCheck = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/" + todoId
    );
    const idCheck = await axios.get(
      "https://jsonplaceholder.typicode.com/users/" + userIdCheck.data.userId
    );
    const result = {};
    result.name = idCheck.data.name;
    result.title = userIdCheck.data.title;
    result.completed = userIdCheck.data.completed;
    return result;
  } catch (error) {
    return "INVALID USER ID";
  }
};

//test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

//run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

module.exports = getTodo;
