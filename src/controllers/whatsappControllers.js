const VerifyToken = (req, res) => {
  console.log(req.query)
  try {
      var accessToken = "RTQWWTVHBDEJHJKIKIKNDS9090DS";
      var token = req.query["hub.verify_token"];
      var challenge = req.query["hub.challenge"];

      if(challenge != null && token != null && token == accessToken){
          res.send(challenge);
      }else{
          res.status(400).send();
      }
  } catch (error) {
    res.status(400).send()
  }
}

const ReceivedMessage = (req, res) => {
  res.send("Hello ReceivedMessage")
}

module.exports = {
  VerifyToken,
  ReceivedMessage
}
