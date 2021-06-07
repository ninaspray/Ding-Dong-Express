const { Tennant } = require("../models");

exports.create = async (request, response) => {
  const { tennantId } = request.body;
  const tennant = await Tennant.findByPk(tennantId);

  const accountSid = "AC9a038af7321c1ce431aa34fa8f835c5f";
  const authToken = "a40412d396ba53e38ed211710ab70d08";
  const client = require("twilio")(accountSid, authToken);
  console.log(tennant.telephone);
  client.messages
    .create({
      to: tennant.telephone,
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
