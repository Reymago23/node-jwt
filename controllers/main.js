
const login = async (req, res) => {
    res.send('Fake route')
}

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({ msg: `Hello, John Doe`, secret: `Authorized: ${luckyNumber}` })
}

module.exports = {
    login, dashboard
}