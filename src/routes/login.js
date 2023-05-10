const { User } = require('../db/sequelize')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


// Lors de la création de mon token d'authentification je dois y mettres les paramètres suivants : 
// -- ID User
// -- User Name permet l'affichage conditionnel de la nav bar
// -- User statut => Est-ce que le membre a un abonnement en cours ou non
// -- User rôle => Permettre de modifier l'affichage en fonction et les fonctionnalités du dashboard

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
                console.log(user)
                const token = jwt.sign(
                    {
                        userID: user.id,
                        userName: user.u_name,
                        userStatut: user.u_statut,
                        userRole: user.u_role
                    },
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