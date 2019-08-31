export default function(app, express) {
    const routes = express.Router()

    routes.get('/', function(req, res) {
        res.send({ hello: "world" })
    })

    app.use('/', routes);
}