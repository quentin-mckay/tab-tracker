const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')

// object we are going to build and export
const db = {}


// Sequelize constructor with our config options
const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

// get all files
fs.readdirSync(__dirname)  // get all files in the current directory
  .filter(file => file !== 'index.js')  // except index.js (the file we are in now)
  .forEach(file => {
      const model = sequelize.import(path.join(__dirname, file))
      db[model.name] = model
  })

  db.sequelize = sequelize
  db.Sequelize = Sequelize

  module.exports = db