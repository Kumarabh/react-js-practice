const authentication = (req, res, next) => {

    const token = req.cookies.token;
    if(!token) {
        return res.status(401).json({success: false, message: 'Token missing.'});
    }

    try {
        let payload = jwt.verify(token, jwtKey);
        if(payload) 
        req.body.payload = {userId: payload.userId}
        next();
        
    } catch (e) {
        if(e instanceof jwt.JsonWebTokenError) {
           return res.status(401).json({success: false, message: 'token error.'})
        }
        if(e instanceof jwt.TokenExpiredError) {
           return res.status(401).json({success: false, message: 'token expired.'})
        }
    }

}

export default authentication;