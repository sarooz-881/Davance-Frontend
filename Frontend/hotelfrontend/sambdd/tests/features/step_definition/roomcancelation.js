const { expect } = require("chai");
const axios = require("axios");
const { Given } = require("cucumber");

Given("I want to cancel my room booking", async () => {
  const uniqueUser = Math.floor(Math.random() * 1000000 + 1);
  const uniqueOwner = Math.floor(Math.random() * 1000000 + 1);

  const user = {
    username: `samrit${uniqueOwner}`,
    password: "samrit12345",
    firstName: "Samrit",
    lastName: "Basnet",
    email: "iamSam@gmail.com",
    role: "hotelOwner",
  };
  const response = await axios.post(
    "http://localhost:3005/ehotel/user/register",
    user
  );
  const config = {
    headers: { Authorization: response.data.token },
  };

  const hotelRes = await axios.post(
    "http://localhost:3005/ehotel/hotel",
    {
      email: "thisisNewHotel@gmail.com",
      hotelName: "Hotel Taaj",
      contact: "123456789",
      description: "This is hotel taaj mahal",
      address: {
        country: "Nepal",
        state: "Kathmandu",
        street: "Mid-Baneshwor",
      },
      hotelOwner: {
        ownerName: "Samrit Basnet",
        ownerEmail: "thisisNewOwner@gmail.com",
        ownerContact: "123456789",
      },
    },
    config
  );

  const hotelID = hotelRes.data._id;
  const roomCreated = await axios.post(
    `http://localhost:3005/ehotel/hotel/${hotelID}/rooms`,
    {
      room_no: 109,
      roomType: "Standard",
      price: 1200,
    },
    config
  );

  const roomID = roomCreated.data._id;

  const guest = {
    username: `samrit${uniqueUser}`,
    password: "samrit12345",
    firstName: "Samrit",
    lastName: "Basnet",
    email: "iamSam@gmail.com",
    role: "guest",
  };

  const guestRegisterResponse = await axios.post(
    "http://localhost:3005/ehotel/user/register",
    guest
  );
  const guestConfig = {
    headers: { Authorization: guestRegisterResponse.data.token },
  };

  const guestResponse = await axios.post(
    "http://localhost:3005/ehotel/guest",
    {
      address: {
        country: "Nepal",
        state: "Chitwan",
        street: "Bharatpur-10",
      },
      firstName: "Samrit",
      lastName: "Basnet",
      contact: "123456789",
      email: "thisisdemoemail@gmail.com",
      citizen_id: "123456789",
      balance: "5000",
      gender: "male",
    },
    guestConfig
  );

  const GuestID = guestResponse.data._id;

  const reservationRes = await axios.post(
    `http://localhost:3005/ehotel/guest/${GuestID}/hotels/${hotelID}/rooms/${roomID}/book`,
    {
      checkIn: "2021-01-21",
      checkOut: "2021-01-22",
    },
    guestConfig
  );

  const reservationID = reservationRes.data.reservation;

  const cancelResponse = await axios.delete(
    `http://localhost:3005/ehotel/guest/${GuestID}/reservations/${reservationID}/cancelBooking`,
    guestConfig
  );
  expect(cancelResponse.status).to.be.equal(200);
});
