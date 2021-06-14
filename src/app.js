const express = require("express");
const app = express();
const cors = require("cors");

const tennantControllers = require("./controllers/tennant");
const packageControllers = require("./controllers/package");
const smsControllers = require("./controllers/sms");

app.get("/test", (req, res) => {
  response.status(201).json("Hello World");
});
app.use(cors({ origin: "https://ding-dong-concierge.vercel.app" }));
app.use(express.json());

//Tenant
app.post("/tennants", tennantControllers.create);
app.get("/tennants", tennantControllers.list);
app.get("/tennants/:id", tennantControllers.getTennantById);
app.patch("/tennants/:id", tennantControllers.updateTennant);
app.delete("/tennants/:id", tennantControllers.deleteTennant);

//Package
app.post("/tennants/:tennantId/packages", packageControllers.create);
app.get("/packages", packageControllers.getPackage);
app.get(
  "/tennants/:tennantId/packages",
  packageControllers.getPackagesByTenanntsId
);
app.get("/packages/:packageId", packageControllers.getPackageById);
app.patch("/packages/:packageId", packageControllers.updatePackage);

//Twilio
app.post("/sendsms", smsControllers.create);

module.exports = app;
