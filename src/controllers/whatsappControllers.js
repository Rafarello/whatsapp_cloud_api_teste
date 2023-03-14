const VerifyToken = (req, res) => {
    res.send("Hello verifyToken")
}

const ReceivedMessage = (req, res) => {
    res.send("Hello ReceivedMessage")
}

module.exports = {
    VerifyToken,
    ReceivedMessage
}