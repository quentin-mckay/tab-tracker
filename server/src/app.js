const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

// instead of body-parser (allows us to process json data easily)
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// use log generator morgan
app.use(morgan('combined'))

// allow any host or client to access this
app.use(cors())


app.get('/status', (req, res) => {
	res.send({			// res.send detects js object and uses res.json internally
		message: 'hello world'
	})
})


const port = process.env.PORT || 8081  // vue default runs on 8080
app.listen(port, () => {
	console.log(`app running on port ${port}`)
})