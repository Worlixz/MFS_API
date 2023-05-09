const { User } = require('../db/sequelize')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')




module.exports = (app) => {
    app.post('/api/login', (req, res) => {
        const user_email = req.body.email
        const user_pwd = req.body.pwd

        User.findOne({where: {u_email: user_email}})
        .then(user => {
            if(!user){
                const message = "L'utilisateur n'a pas pu être trouvé !"
                res.status(404).json({ message })
            }
            bcrypt.compare(user_pwd, user.u_password).then(isPasswordValid => {
                if(!isPasswordValid){
                    const message = "Le mot de passé n'est pas valide"
                    res.status(401).json({ message })
                }

                const token = jwt.sign(
                    {userID: user.id},
                    process.env.PRIVATE_KEY,
                    { expiresIn: '24h'}
                )
                
                const message = "L'utilisateur a été connecté avec succès"
                return res.status(200).json({ message, data: user, access_token: token })
            })
        })
        .catch(err => {
            const message = "L'utilisateur n'a pas pu être connecté une erreure est survenue"
        })
    })

}