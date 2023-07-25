import express from 'express';
import jwt from 'jsonwebtoken';
import authentication from './authentication.js';
import authorization from './authorization.js';

const app = express();

const jwtExpirySeconds = 60;
const jwtKey = 'secret_key';


app.post('/signIn', (req, res) => {
    res.cookie('token', req.token, {maxAge: jwtExpirySeconds * 1000})
    return res.status(200).json({success: true, message: 'Successfully logged in.'})
})

app.post('/login', authorization, (req, res) => {
    
    res.cookie('token', req.token, {maxAge: jwtExpirySeconds * 1000})
    res.send({status: 200,message: 'Login success'})

})

app.get('/profile', authentication, (req, res) => {
    res.status(200).json({message: `Welcome to profile page ` + req.body.payload.userId})
} )

app.post('/logout', (req, res) => {
    res.cookie('token', null, {maxAge: 0})
    res.send({status: 200,message: 'logged out, cookies deleted.'})

})

export default app;