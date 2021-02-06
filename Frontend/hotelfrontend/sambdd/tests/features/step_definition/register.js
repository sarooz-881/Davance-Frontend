const {expect} =require('chai');
const axios = require('axios')
const { Given } =require('cucumber');

Given('I click for register button', async() => {
    const uniqueUser = Math.floor((Math.random() * 1000000) + 1);
    const user = {
        username : `samrit${uniqueUser}`,
         password : "samrit12345",
         firstName : "Samrit",
         lastName : "Basnet",
         email : "iamSam@gmail.com",
         role : "guest"
    }
    const response = await axios.post('http://localhost:3005/ehotel/user/register', user);
    expect(response.status).to.be.equal(200);
})