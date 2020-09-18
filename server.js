// TODO
//npm install express, sequelize OR knex, cors, pg, bcrypt ----- done
// instantiate app and start server (app.listen...) ---- done
// Stub routes
    // see notebook
// ----- create db schema and createdb, Postgres ------ done
// decide on auth architecture
// create models and migrate models (only if sequelize?)
//...


//Required Node Modules
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
// const methodOverride = require('method-override')
// const path = require('path');



//Declare express app variable
const app = express();

//Set up middleware
app.use(cors())
app.use(express.urlencoded({extended: false}))
// app.use(methodOverride('_method'))

//Add routes files
app.use('/lists', require('./routes/lists'));
app.use('/items', require('./routes/items'));


// home/error routes
app.get('/', (req, res)=> {
    res.send('STUB HOME ROUTE')
})



//Declare connection PORT
const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started on port ${PORT}`));

// //Test db connection
// db.authenticate()
//         .then(() => console.log('Connection has been established successfully.'))
//         .catch(err => console.log('Unable to connect to the database:', err));