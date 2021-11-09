var express = require("express");
var router = express.Router();
const kits = require('../data/KITS_SHIPPING_DATA')
const url = require('url')

router.get("/", function(req, res, next) {
  const query = Number(url.parse(req.url, true).query.id)
  const kit = kits.find(kit => kit.id === query)
  console.log(kit)
  if(query && kit) {
    res.status(200).json({
      status: 'success',
      kit
    });
  } else {
    res.status(404).json({
      status: 'not found'
    })
  }
});

module.exports = router;
