const db = require('../db/db');

const getCartByUserId = (req, res, next) => {
    const { userId } = req.body;
    //const userId = req.user.id;

    const statement = `SELECT * 
                        FROM carts 
                        JOIN carts_products
                        ON carts.id = carts_products.cart_id
                        WHERE carts.user_id = $1;`;

    db.query(statement,
            [userId],
            (err, result) => {
                if (err) {
                    return next(err);
                };

                const products = [];
                result.rows.forEach(row => products.push({
                    productId: row.product_id, 
                    productName: row.product_name,
                    quantity: row.quantity})
                );

                const cartObject = {
                    cartId: result.rows[0].id,
                    userId: result.rows[0].user_id,
                    totalPrice: result.rows[0].totalPrice,
                    products: products
                };

                res.status(200).json(cartObject);
            }
    );
};


const createCart= async (req, res, next) => {
    const { userId } = req.body;
    //const userId = req.user.id;
    
    const {totalPrice, products} = req.body;
    //products = array of product objects with { productId, productName, quantity }

    try {
        const statement1 = `INSERT INTO carts (user_id, total_price)
                            VALUES ($1, $2)
                            RETURNING *;`;
        const result = await db.queryNoCB(statement1, [userId, totalPrice]);
        const cartId = result.rows[0].id;

        const statement2 = `INSERT INTO carts_products (cart_id, product_id, product_name, quantity)
                            VALUES ($1, $2, $3, $4)`;
        products.forEach((product) => {
            db.query(statement2, [cartId, product.productId, product.productName, product.quantity])
        });

        res.status(200).send(`Cart with ID: ${cartId} created`)

    } catch(err) {
        return next(err);
    }
};


const addItemToCart = (req, res, next) => {
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


const deleteItemFromCart = (req, res, next) => {
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


const updateCartItemQuantity = (req, res, next) => {
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
    addItemToCart,
    deleteItemFromCart,
    updateCartItemQuantity,
    deleteCart,
    checkout
};