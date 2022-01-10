module.exports = (err, req, res) => {
  console.error(err);
  res.status(500).send('An internal server error occured');
};
