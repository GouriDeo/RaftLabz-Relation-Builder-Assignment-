const mongoose =require('mongoose')
const Schema = mongoose.Schema;
const UserSchema = mongoose.Schema(
    {
        name: {
            type : String,
            require : true,
            max : 20
        },
        tag:[{
            person: String,
            rel : String
        }]
    },{
        timestamps : true
    }     
)
module.exports = mongoose.model('User',UserSchema);