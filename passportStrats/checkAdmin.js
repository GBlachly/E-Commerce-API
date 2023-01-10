const checkAdmin = (req, res, next) => {
    if (req.user.admin) {
        res.next()
    } else {
        res.status(403).send('You are not authorized for this action');
    }
};

//will not work until i figure out how req.user (user auth from passport) works

module.exports = checkAdmin;