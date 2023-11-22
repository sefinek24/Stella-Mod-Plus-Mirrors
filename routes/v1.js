const express = require('express');
const router = express.Router();
const passport = require('passport');
const limiter = require('./scripts/v1/ratelimit.js');
const DownloadBenefitsController = require('../controllers/v1/launcher/DownloadBenefits.js');

router.get('/genshin-stella-mod/patrons/benefits/download', limiter, passport.authenticate('mirror', { session: false }), DownloadBenefitsController);
router.head('/test/speedtest', (req, res) => res.sendStatus(200));

module.exports = router;