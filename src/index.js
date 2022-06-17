const express = require('express');
const bodyParser = require('body-parser');

const v1ShopRoutes = require('./v1/routes/shopRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/v1', v1ShopRoutes);

app.get('/', (req,res)=>{
  res.send('Welcome. Go to /v1 to see the API');
}); 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
