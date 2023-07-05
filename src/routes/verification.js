const jwt = require('jsonwebtoken')


module.exports = (app) => {
    app.get('/verificationUser', (req, res) => {
        const token = req.headers.authentication
        console.log('token : ', token )

        if(!token){
            res.json(false)
            return false
        }

        const decodedToken = jwt.verify(token, process.env.PRIVATE_KEY, (error, decodedToken) => {
            if(error){
                res.json(false)
                return false
            }else{
                res.json(true)
                return true
            }
        })

    })
    
}