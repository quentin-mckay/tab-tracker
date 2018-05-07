const {User} = require('../models')

module.exports = {
    async register (req, res) {
        try {
            const user = await User.create(req.body)
            res.send(user.toJSON())
        } catch (err) {
            // email already exists
            res.status(400).send({
                error: 'This email account is already in use.'
            })
        }


    //     console.log(req.body)
    //     res.send({			// res.send detects js object and uses res.json internally
    //         message: `Hello ${req.body.email}! You have been registered. Password: ${req.body.password}`
    //     })
    }
}
