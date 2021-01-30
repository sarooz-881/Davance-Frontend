const { expect } = require("chai");
const axios = require("axios");
const { Given } = require("cucumber");

Given("I fill username and password then click login", async () => {
  const uniqueUser = Math.floor(Math.random() * 1000000 + 1);
  const user = {
    username: `samrit${uniqueUser}`,
    password: "samrit12345",
    firstName: "Samrit",
    lastName: "Basnet",
    email: "iamSam@gmail.com",
    role: "guest",
  };
  await axios.post("http://localhost:3005/ehotel/user/register", user);
  const loginResponse = await axios.post(
    "http://localhost:3005/ehotel/user/login",
    {
      username: `samrit${uniqueUser}`,
      password: "samrit12345",
    }
  );
  //   console.log(loginResponse.data);
  expect(loginResponse.status).to.be.equal(200);
});
