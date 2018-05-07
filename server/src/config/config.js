module.exports = {
    port: process.env.PORT || 8081,  // vue default runs on 8080,
    db: {
        database: process.env.DB_NAME || 'tabtracker',
        user: process.env.DB_USER || 'tabtracker',
        password: process.env.DB_PASS || 'tabtracker',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.DIALECT || 'localhost',
            storage: './tabtracker.sqlite',
            operatorsAliases: false
        }
    }
}