const { db } = require('../model/model');
const User = require('../model/model');

exports.addUser = async function(req,res){
    var userExist = await User.findOne({
        name: req.body.name       
    })
    if(userExist){
        res.send({
            message:'this name already exists'
        })
    }else{
        let user = new User({
            name: req.body.name
        })
        let userResponse = await User.create(user)
        res.send({
            status : userResponse.name + 'added'
        })
    }  
}

exports.addtag = async function(req,res){
    var userExist = await User.findOne({
        name : req.body.name1
    })
    if(userExist){

        let newTag = {
            person : req.body.name2,
            rel : req.body.tag2 
        }
        userExist.tag.push(newTag);

        await userExist.save();
    }
    var userExist = await User.findOne({
        name : req.body.name2
    })
    if(userExist){
        let newTag = {
            person : req.body.name1,
            rel : req.body.tag1 
        }
        userExist.tag.push(newTag);
 
        await userExist.save();
        res.send({
            status : 'Tag added'
        })
    }
}

exports.findRelation = async function(req,res){
    var userExist = await User.findOne({
        name : req.body.name1
    })
    if(userExist){
        var i;
        for( i=0; i<userExist.tag.length;i++){
            if(userExist.tag[i].person == req.body.name2){
                    resultOne =userExist.name+" > "+req.body.name2
            }
        }
       // console.log(userExist.tag[0].person);
    }

    if(userExist){
        var userExistTwo = await User.findOne({
            name : req.body.name2
        })
        var i;
        for(i=0; i<userExist.tag.length;i++){
            for (var j=0;j<userExistTwo.tag.length;j++){
                if(userExist.tag[i].person == userExistTwo.tag[j].person){
                        relation2= userExist.name+" > "+userExist.tag[i].person+" > "+userExistTwo.name
                }
            }
        }
    }
    res.send({
        relation1: resultOne, 
        relation2
    })
}