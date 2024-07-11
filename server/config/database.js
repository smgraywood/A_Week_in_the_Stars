const mongoose = require("mongoose");


//connect to db
mongoose.connect('mongodb://localhost:27017/guestbook', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
  }).then(() => {
	console.log('Connected to MongoDB');
  }).catch(err => {
	console.error('Failed to connect to MongoDB', err);
  });


//connect to db
// mongoose.connect(process.env.DATABASE_URL);

//setup a shortcut var to the connection obj
const db = mongoose.connection;

db.on("connected", () => {
	console.log(`Connected to MongoDB ${db.name} at ${db.host}: ${db.port}`);
});