require('dotenv').config();
const app = require('./app');
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection error:', err));


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


