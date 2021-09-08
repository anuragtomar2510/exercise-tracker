require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const PORT = process.env.PORT || 3300;
const DB_URL = process.env.MONGO_URL;



const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(DB_URL, {

        useNewUrlParser : true,
        useCreateIndex : true,
        useUnifiedTopology : true,
        useFindAndModify : true 

}).then(() => console.log(`Connected to database successfully`)
).catch(() => console.log(`Error while connecting to database`));


app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(PORT, () => console.log(`listening to port ${PORT}`));

