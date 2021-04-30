const express = require('express');
const router = express.Router();
const Email = require('../../models/Email');
const { check, validationResult } = require('express-validator');


// post route for email list 
 
router.post(
    '/',
    [
      check('email', 'Please include a valid email').isEmail(),
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { email } = req.body;
  
      try {
        let email = await Email.findOne({ email });
  
        if (email) {
          return res
            .status(400)
            .json({ errors: [{ msg: 'user already exists' }] });
        }
  
  
        email = new Email({
          email,
        });
  
  
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
      }
    }
  );

  module.exports = router;