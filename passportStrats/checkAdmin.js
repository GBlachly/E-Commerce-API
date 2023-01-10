const checkAdmin = (req, res, next) => {
    if (req.user.admin) {
        res.next()
    } else {
        res.status(403).send('You are not authorized for this action');
    }
};

module.exports = checkAdmin;