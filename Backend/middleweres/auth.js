let jwt = require("jsonwebtoken");



function auth(req, res, next) {
    // console.log(`from auth`)
    try {
        const token = req.headers.authorization.split(" ")[1];
        if(!token) return res.status(401).json({message: "Unauthorized"});
        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if(err) return res.status(401).json({message: "Unauthorized"});
            req.user = user._doc;
            next();
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}



module.exports = auth;

