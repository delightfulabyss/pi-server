let express = require('express');

let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
let port = process.env.PORT || 8080;

const router = express.Router();
router.get('/', (req, res) => {
    res.json({ message: 'API is online' });
})
router.get('/', (req, res) => {
    res.json({ message: 'API is online' });
})
router.get('/', (req, res) => {
    res.json({ message: 'API is online' });
})
router.get('/', (req, res) => {
    res.json({ message: 'API is online' });
})

app.use('/api', router);
app.listen(port)
console.log('Listening on port' + port);


