const VerifyToken = (req, res) => {
  console.log(req.query)
  try {
    var accessToken = "RTQWWTVHBDEJHJKIKIKNDS9090DS";
    var token = req.query["hub.verify_token"];
    var challenge = req.query["hub.challenge"];

    if (challenge != null && token != null && token == accessToken) {
      res.send(challenge);
    } else {
      res.status(400).send();
    }
  } catch (error) {
    res.status(400).send()
  }
}

const ReceivedMessage = (req, res) => {
  try {
    var entry = (req.body["entry"])[0];
    var changes = (entry["changes"])[0];
    var value = changes["value"];
    var messageObject = value["messages"];

    if (typeof messageObject != "undefined") {
      var messages = messageObject[0];
      var number = messages["from"];

      var text = GetTextUser(messages);

      if (text != "") {
        processMessage.Process(text, number);
      }

    }

    res.send("EVENT_RECEIVED");
  } catch (error) {
    res.send("EVENT_RECEIVED");
  }
}

module.exports = {
  VerifyToken,
  ReceivedMessage
}
