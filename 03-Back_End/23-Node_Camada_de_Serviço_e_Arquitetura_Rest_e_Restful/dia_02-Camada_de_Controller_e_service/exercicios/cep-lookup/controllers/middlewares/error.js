module.exports = (err, _req, res, _next) => {
  if(err.details) {
    return res.status(400).json({ error: { code: 'invalidData', message: err.details[0].message } });
  }
  
  switch (err.error.code) {
    case 'invalidData': return res.status(400).json(err);
    case 'notFound': return res.status(404).json(err);
    case 'alreadyExists': return res.status(409).json(err);
  }
}