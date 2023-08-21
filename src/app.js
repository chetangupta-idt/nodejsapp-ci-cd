const Router = require('express');

const router = Router();

router.get("/", (req, res) => {
    res.status(200).send('Namaste! Nodejs app up & running');
})


module.exports = router;