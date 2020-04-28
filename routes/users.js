const express = require('express')
const router = express.Router();


// api/user
router.post('/',(req,res)=>{
    res.send('Register user')
})

module.exports = router;
