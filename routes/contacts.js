const express = require('express')
const router = express.Router();


// GET api/contacts
// get all users contacts
// private route

router.get('/',(req,res)=>{
    res.send('get all user contact')
})


// POST api/contacts
// Add to new contact
// private route

router.post('/',(req,res)=>{
    res.send('Add contact')
})


// PUT api/contacts/:id
// Update contact
// private route

router.post('/:id',(req,res)=>{
    res.send('Update contact')
})


// DELETE api/contacts/:id
// Update contact
// private route

router.delete('/:id',(req,res)=>{
    res.send('Delete contact')
})




module.exports = router;
