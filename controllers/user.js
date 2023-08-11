const UserService = require('../services/user');

const getAllUsers = async (req, res) => {
    try {
        let Users;
        
        if (!req.query.flag){
            if (!req.query.fname || !req.query.lname || !req.query.password) {
                throw new Error('You have not entered all the details');
            } else {
                Users = await UserService.searchForLogIn(req.query.fname, req.query.lname, req.query.password);
            }
        } else {
            if (req.query.fname || req.query.lname)
            {
                if (!req.query.fname || !req.query.lname) {
                    throw new Error('You have not entered all the details');
                } else {
                    Users = await UserService.searchForPassward(req.query.fname, req.query.lname);
                }
            } else {
                Users = await UserService.getAll();
            }
        }
        
        if(!Users) {
            throw new Error('Non existing users');
        }

        res.json(Users);
    }

    catch (error) {
        res.status(400).json({
            error: "Getting all the users - Error",
            message: error.message
        });
    }
}

const createUser = async (req, res) => {
    try {
        const tmp = {
            fname: req.body.fname,
            lname: req.body.lname,
            orders: req.body.orders,
            phoneNumber: req.body.phoneNumber,
            password: req.body.password,
            is_Manager: req.body.is_Manager
        }
    
        if (req.body.currentOrder) {
            tmp.currentOrder = req.body.currentOrder;
        }
    
        const newUser = await UserService.create(tmp);
        res.json(newUser);
    }

    catch (error) {
        res.status(400).json({
            error: "Creating new user - Error",
            message: error.message
        });
    }
}

const updateUser = async (req, res) => {
    console.log('1');
    if (!req.body.fname) {
        res.status(400).json({message:'The new fname to the user is required'});
    }
    console.log('2');
    if (!req.body.lname) {
        res.status(400).json({message:'The new lname to the user is required'});
    }
    console.log('3');
    if (!req.body.orders) {
        res.status(400).json({message:'The new order to the user is required'});
    }
    console.log('4');
    if (!req.body.phoneNumber) {
        res.status(400).json({message:'The new phoneNumber to the user is required'});
    }
    console.log('5');
    if (!req.body.password) {
        res.status(400).json({message:'The new password to the user is required'});
    }
    console.log('6');
    if (!req.body.is_Manager) {
        res.status(400).json({message:'The new is_Manager to the user is required'});
    }
    console.log('7');
    const newUser = {
        id: req.body._id,
        fname: req.body.fname,
        lname: req.body.lname,
        orders: req.body.orders,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password,
        is_Manager: req.body.is_Manager
    }
    console.log('8');
    if (req.body.currentOrder) {
        newUser.currentOrder = req.body.currentOrder;
    }
    console.log('9');
    const user = await UserService.update(newUser);
    if (!user) {
        return res.status(404).json({errors:['User not found']});
    }
    console.log('10');
    res.json(user);
};


const deleteUser = async (req, res) => {
    const user = await UserService.delete(req.params.id);

    if (!user) {
        return res.status(404).json({errors:['User not found']});
    }

    res.send();
}

const searchUser = async (req, res) => {
    const user = await UserService.search(req.params.id);

    if (!user) {
      return res.status(404).json({errors:['User not found']});
    }

    res.json(user);
}

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    searchUser
}