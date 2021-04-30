const express = require('express');

const app = express ();


app.use(express.json({extended: false}));


app.use('/api/email', require('./routes/api/email'));


const PORT = process.env.PORT || 8585

app.listen(PORT, () => console.log(`Server started on ${PORT}`));