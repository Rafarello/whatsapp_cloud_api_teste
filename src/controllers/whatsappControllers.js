const VerifyToken = (req, res) => {
  try {
    const accessToken = "EAACQlPc1Py0BAO0W0TahADe7wtnx7ibRDqbivga3DgGIy4kPJ7B07ZAVidJOs6FjFzmZB6g03QOD3h8ZCgXjJE8AK3jUKdb5muuc7i75ZCkJoecvgKShmSCFK6OZBzMdxZBkzHl2volsZBMf1fMJNdBFh7tcIqvKGZANYntx0y6Fk0zAfu0DL8cLmrkZAoXQyCRPVQX4ufHoPXAZDZD";
    const token = req.query("hub.verify_token");
    const challenge = req.query("hub.challenge");

    if (
      challenge !== null &&
      token !== null &&
      token === accessToken
    ) {
      return res.send(challenge)
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