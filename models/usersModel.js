const db = require('../db/db');
const bcrypt = require('bcrypt');


const registerUser = async (req, res, next) => {
    const {username, password, email} = req.body;
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
   
    db.query(`INSERT INTO users (username, password, email)
            VALUES ($1, $2, $3) RETURNING username, email;`, 
            [username, passwordHash, email], 
            (err, result) => {
                if (err) {
                    return next(err)
                }
                res.status(201).send(`Created User: ${result.rows[0].username} w/ email: ${result.rows[0].email}`);
            }
    );
};



module.exports = {
    registerUser
};