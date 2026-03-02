const usersRoutes = require('./user.route');

function routes(app) {
    app.use('/api/user', usersRoutes);
}

module.exports = routes;