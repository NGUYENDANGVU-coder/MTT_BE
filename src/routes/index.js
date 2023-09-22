const UserRouter = require('./UserRoute')
const routes = (app) => {
    app.use('/api/user', UserRouter)
};

module.exports = routes