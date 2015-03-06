module.exports = function (req, res, next) {
  if (req.session.authenticated)
    next();
  else
    res.send(403);
}