const { Tennant } = require("../models");

const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN } = process.env;

exports.create = async (request, response) => {
  const { tennantId } = request.body;
  const tennant = await Tennant.findByPk(tennantId);

  const accountSid = TWILIO_ACCOUNT_SID;
  const authToken = TWILIO_AUTH_TOKEN;
  const client = require("twilio")(accountSid, authToken);
  console.log(tennant.telephone, TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
  client.messages
    .create({
      to: "+44" + tennant.telephone,
      from: "+16513158377",
      body: `DingDong! ${tennant.firstname} A parcel has arrived for you - please find this at the concierge desk!`,
    })
    .then(() => {
      response.status(200).send("Success! Your message has been sent.");
    })
    .catch((error) => {
      console.log(`Err ${error.message}`);
      res.status(500).send(error.message);
    });
};
