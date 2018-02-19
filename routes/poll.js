const express = require("express");
const router = express.Router();
const Pusher = require('pusher');

var pusher = new Pusher({
  appId: '474749',
  key: 'ebc1a7d91524f7e23a90',
  secret: 'abbf7cf7edebae14a67f',
  cluster: 'us2',
  encrypted: true
});

router.get('/', (req, res) => {
  res.send('POLL');
});

router.post('/', (req, res) => {
  pusher.trigger('os-poll', 'os-event', {
  points: 1,
  os: req.body.os
  });

  return res.json({success: true, message:"Thank you for voting"});
})

module.exports = router;
