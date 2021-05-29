const { Tennant } = require("../models");

exports.create = async (request, response) => {
  const { tennantId } = request.body;
  const tennant = await Tennant.findByPk(tennantId);

  const accountSid = TWILIO_ACCOUNT_SID;
  const authToken = TWILIO_AUTH_TOKEN;
  const client = require("twilio")(accountSid, authToken);

  client.messages
    .create({
      body: `${tennant.firstname} Ding Dong you have a parcel!`,
      from: "+16513158377",
      to: tennant.telephone,
    })
    .then((message) => response.send(message.sid));
};
