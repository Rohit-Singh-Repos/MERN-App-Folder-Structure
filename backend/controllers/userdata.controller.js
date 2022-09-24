const UserDataModel = require("../models/userdata.model");

class UserDataController{
    static saveData = async(req,res) => {
        try {
            const { name,email } = req.body;
            if(name && email){
                const getUserData = new UserDataModel({
                    username:name,
                    useremail:email 
                })
                const saveDocument = await getUserData.save();
                res.send(saveDocument)
            }else{
                res.send("All fields are required")
            }
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }

    static getData = async(req,res) => {
        try {
           const getUserData = await UserDataModel.find()
           res.send(getUserData);
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
}

module.exports = UserDataController