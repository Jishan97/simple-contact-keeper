const express = require('express')
const router = express.Router();


// GET api/auth
// get a logged in user
// private route
router.get('/',(req,res)=>{
    res.send('get logged in user')
})

// POST api/auth
// get Auth user and get token
// public route
router.post('/',(req,res)=>{
    res.send('log in user')
})

module.exports = router;
