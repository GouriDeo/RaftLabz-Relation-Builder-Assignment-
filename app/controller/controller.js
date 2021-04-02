const userService = require('../services/services')


exports.addUser = function(req,res){
  
    req.assert('name', 'Name cannot be blank').notEmpty();
    
    // Check for validation errors    
    var errors = req.validationErrors();
    if (errors) { 
        return res.status(400).send(errors);
     }
     else{
         userService.addUser(req,res)
     }     
}

exports.createTag = function(req,res){
  
    req.assert('name1', 'Name cannot be blank').notEmpty();
    req.assert('name2', 'Name cannot be blank').notEmpty();
    req.assert('tag1', 'tag cannot be blank').notEmpty();
    req.assert('tag2', 'Tag cannot be blank').notEmpty();
    
    // Check for validation errors    
    var errors = req.validationErrors();
    if (errors) { 
        return res.status(400).send(errors);
     }
     else{
         userService.addtag(req,res)
     }     
}

exports.findRelation = function(req,res){
    req.assert('name1', 'Name cannot be blank').notEmpty();
    req.assert('name2', 'Name cannot be blank').notEmpty();

    var errors = req.validationErrors();
    if (errors) { 
        return res.status(400).send(errors);
     }
     else{
         userService.findRelation(req,res)
     }
}