const cors = require('cors');
const express = require('express');
const router=require('./router.js/Routes')
const app =express();

app.use(express.json());
app.use(cors());
app.use(router);


app.listen(4000, () => {
  console.log('Server is running on port 4000');
});

