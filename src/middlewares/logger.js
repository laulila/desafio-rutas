
function logger(req, res, next) {
  console.log('Llegó una solicitud');
  next();
}

export default logger;
