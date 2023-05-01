/* eslint-disable max-len */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51Myz5tCpLwztK4smjgJyO1Ftcu6wkbaJQVF51egBRQT6LpTCKdJwep2UZt3Aqh4DRg8TivT8Adg4vQPPPoM57OiD00FPvbgslf");
const app = express();
app.use(cors({origin: true}));
app.use(express.json());
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recieved for this amount >>> ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  }); response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
exports.api = functions.https.onRequest(app);
