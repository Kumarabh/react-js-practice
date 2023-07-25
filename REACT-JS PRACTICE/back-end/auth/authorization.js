

const jwtExpirySeconds = 60;
const jwtKey = 'secret_key';

const authorization = (req, res, next) => {
    // const {userId, password} = req.body;
    // if(!userId || !password) {
    //     return res.status(400).json({message: 'Missing credentials.'})
    // }

    // if(userId === 'admin' && password === 'admin') {
    //     const token = jwt.sign({userId, password}, jwtKey, {expiresIn: jwtExpirySeconds})
    //     req.token = token;
    //     next();
    // } else {
    //     return res.status(400).send({message: 'Invalid credentials. Please login'})
    // }

    try {
        const {userId, password} = req.body;
        if(!userId || !password) {
            return res.status(400).json({success: false, message: 'Missing credentials.'})
        }
    
        if(userId === 'admin' && password === 'admin') {
            const token = jwt.sign({userId, password}, jwtKey, {expiresIn: jwtExpirySeconds})
            req.token = token;
            next();
            
        } else {
            return res.status(400).send({success: false, message: 'Invalid credentials.'})
        }
        } catch (error) {
            return res.status(500).send({success: false, message: 'Internal server error.'})
        }
}

export default authorization;