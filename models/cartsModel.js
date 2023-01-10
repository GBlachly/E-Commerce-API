const db = require('../db/db');

const getCartByUserId = (req, res, next) => {
    const { userId } = req.body;
    //const userId = req.user.id;

    const statement = ``;

    db.query(statement,
            [userId],
            (err, result) => {
                if (err) {
                    return next(err);
                }
                res.status().send();
            }
    );
};


const createCart= (req, res, next) => {
    const { userId } = req.body;
    //const userId = req.user.id;

    const statement = ``;

    db.query(statement,
            [userId],
            (err, result) => {
                if (err) {
                    return next(err);
                }
                res.status().send();
            }
    );
};


/* const updateCart = (req, res, next) => {
    const { userId } = req.body;
    //const userId = req.user.id;

    const statement = ``;
    
    db.query(statement,
            [userId],
            (err, result) => {
                if (err) {
                    return next(err);
                }
                res.status().send();
            }
    );
}; */


const deleteCart = (req, res, next) => {
    const { userId } = req.body;
    //const userId = req.user.id;

    const statement = ``;
    
    db.query(statement,
            [userId],
            (err, result) => {
                if (err) {
                    return next(err);
                }
                res.status().send();
            }
    );
};


const checkout = (req, res, next) => {
    const { userId } = req.body;
    //const userId = req.user.id;


};


module.exports = {
    getCartByUserId,
    createCart,
    //updateCart functions
    deleteCart,
    checkout
};