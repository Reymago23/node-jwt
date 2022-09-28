const { BadRequestError } = require('../errors')
const jwt = require('jsonwebtoken')


const login = async (req, res) => {
    const { username, password } = req.body
    // console.log(username, password);
    if (!username || !password) {
        throw new BadRequestError('invalid username or password')
    }
    const id = new Date().getDate()
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '30d' })

    res.status(200).json({ msg: 'user created', token })
}

const dashboard = async (req, res) => {
    console.log(req.user);
    res.status(200).json({ msg: `Hello, ${req.user.username}`, secret: `Authorized: ${req.user.id}` })
}

module.exports = {
    login, dashboard
}