const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

const {sequelize} = require('./models')
const config = require('./config/config')



// instead of body-parser (allows us to process json data easily)
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// use log generator morgan
app.use(morgan('combined'))

// allow any host or client to access this
app.use(cors())



require('./routes')(app)  // bc routes.js returns function takes app as param


// connect sequalize to db configured for
// and create tables if they don't exist
// then start server
sequelize.sync()
	.then(() => {


		app.listen(config.port, () => {
			console.log(`app running on port ${config.port}`)
		})
	})



