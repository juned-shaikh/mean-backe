const express = require('express')
const router = express.Router();
const Employee = require('../models/employee.js');
const ObjectId  = require('mongoose').Types.ObjectId;
// GET Api
router.get('/',(req,res)=>{
    Employee.find((err,doc) =>{
        if(err){
            console.log('error in get data',+err);
        }else{
            res.send(doc);
        } 
    })
});

//Get single employee api 
router.get('/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
            Employee.findById(req.params.id,(err,doc) =>{
                if(err){
                    console.log('error in get data',+err);
                }else{
                    res.send(doc);
                } 
            })
        }else{
            return res.status(400).send('no record found with id '+req.params.id)
        } 
    
});
// Post Api
router.post('/',(req,res)=>{
    let emp = new Employee({
        name :req.body.name,
        position :req.body.position,
        dept :req.body.dept,
    })

    emp.save( (err,doc) =>{
        if(err){
            console.log('error in post data',+err);
        }else{
            res.send(doc);
        }
    })
});

//Put  api 
router.put('/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){

        let emp = {
            name :req.body.name,
            position :req.body.position,
            dept :req.body.dept,
        }

            Employee.findByIdAndUpdate(req.params.id,{$set:emp},{$new:true},(err,doc) =>{
                if(err){
                    console.log('error in delete data',+err);
                }else{
                    res.send(doc);
                } 
            })
        }else{
            return res.status(400).send('no record found with id '+req.params.id)
        } 
    
});
//Delete single employee api 
router.delete('/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
            Employee.findByIdAndRemove(req.params.id,(err,doc) =>{
                if(err){
                    console.log('error in delete data',+err);
                }else{
                    res.send(doc);
                } 
            })
        }else{
            return res.status(400).send('no record found with id '+req.params.id)
        } 
    
});

module.exports = router;
