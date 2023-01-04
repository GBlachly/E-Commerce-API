const db = require('../db/db');


const getOrderById = (req, res, next) => {
    const orderId = Number(req.params.orderId);

    db.query('SELECT * FROM orders WHERE id = $1', [orderId], (err, result) => {
        if (err) {
            return next(err)
        }
        res.status(200).send(result.rows[0]);
    });
};


const getOrdersByUserId = (req, res, next) => {
    const userId = Number(req.params.userId);

    db.query('SELECT * FROM orders WHERE user_id = $1;', [userId], (err, result) => {
        if (err) {
            return next(err)
        }
        res.status(200).send(result.rows)
    })
};


const createOrder = async (req, res, next) => {
    const { userId, totalPrice } = req.body;
    //requested order should give object with userid, totalPrice, items. items will be an array of objects with the productId and quantity
    const { items } = req.body;
    
    try {
        const statement1 = `INSERT INTO orders (user_id, total_price) 
                            VALUES ($1, $2) 
                            RETURNING *`
        const result = await db.queryNoCB(statement1, [userId, totalPrice]);
        const orderId = result.rows[0].id;
        
        /* HERE WE WANT TO ADD THE PRODUCTS AND THEIR QUANTITIES TO THE orders_products/ordered_items TABLE USING THE RETURNED orderID */
        const statement2 = `INSERT INTO orders_products (order_id, product_id, quantity) 
                            VALUES ($1, $2, $3)`
        items.forEach((item) => {
           db.queryNoCB(statement2, [orderId, item.productId, item.quantity]);
        }); 

        res.status(201).send(`Order ID is ${orderId}`);

    } catch(err) {
        return next(err)
    }  
};



module.exports = {
    getOrderById,
    getOrdersByUserId,
    createOrder,
};