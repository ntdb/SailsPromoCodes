/**
 * CodeController
 *
 * @description :: Server-side logic for managing codes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var cc = require('coupon-code');

module.exports = {

  // Deny access to the blueprinted model creation endpoints
  create: function (req, res) {
    res.end("Please use the generate endpoint for creating promo codes.");
  },

  // Generate a promo code and assign it to the given description
  generate: function (req, res) {
    code = cc.generate();
    Code.create({
      code: code,
      description: req.query.description || "No description provided"
    }, function (err, code) {
      if (err) {
        res.send(err);
      } else {
        res.end(JSON.stringify(code));
      }
    });
  },

  // Check the description and validity of a given promo code
  check: function (req, res) {
    Code.find().where({ code: req.query.code }).exec(function (err, codes) {
      if(err) {
        res.send(err);
      } else if(codes.length > 0) {
        var code = codes[0]["redeemed"];
        var expired = code.expiresAt < (new Date());
        var valid = !codes[0]["redeemed"] && !expired ? "Valid: " : "Redeemed/Expired: ";
        res.end(valid + codes[0]["description"]);
      } else {
        res.end("No promotion exists using that code.");
      }
    });
  },

  // Cash in the promo code
  redeem: function (req, res) {
    Code.find().where({ code: req.query.code }).exec(function (err, codes) {
      if(err) {
        res.send(err);
      } else if(codes.length > 0) {
        if(codes[0].redeemed) {
          res.end("That code has already been redeemed");
        } else {
          Code.update(codes[0].id, { redeemed: true }).exec(function (err, updated_codes) {
            if (err) {
              res.send(err);
            } else if(updated_codes.length > 0) {
              res.end("Congrats on your " + updated_codes[0].description + "!");
            }
          });
        }
      } else {
        res.end("No promotion exists using that code.");
      }
    });
  }

};

