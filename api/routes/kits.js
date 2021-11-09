var express = require("express");
var router = express.Router();
const kits = require('../data/KITS_SHIPPING_DATA')
const url = require('url')

router.get("/", function(req, res, next) {
  const query = Number(url.parse(req.url, true).query.id)
  // const kit = kits.find(kit => kit.id === query) // this approach could slow down as kits scale

  // look up by index is single op, independent of size of array so it will scale better
  const kit = kits[query - 1] // but it depends on the future kits being added in order of id in the same pattern
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
