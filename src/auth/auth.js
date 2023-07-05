const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {

    const token = req.headers.authentication
    console.log(token)
    if(!token){
        return window.location.href='/'
    }

    const decodedToken = jwt.verify(token, process.env.PRIVATE_KEY, (error, decodedToken) => {
        if(error){
            return res.json({valid: false})
        }else{
            res.json({valid: true})
            next()
        }
    })
}
