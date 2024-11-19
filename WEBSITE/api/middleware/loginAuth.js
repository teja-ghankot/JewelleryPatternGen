const UserModel=require('../Schema.js');
const bcrypt = require('bcrypt')
 async function auth(req, res){
    const { username, password } = req.body;
    const user = await UserModel.findOne({ Username: username });
    if (user && await bcrypt.compare(password, user.Password)) {
        req.session.username=user.Email;
        req.session.userid=user._id;
        // console.log(req.session.userid)

        return res.redirect('/Home');
    }
    res.send('<script>alert("Invalid credentials"); window.history.back();</script>');
}
module.exports={auth}