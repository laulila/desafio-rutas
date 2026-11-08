import jwt from 'jsonwebtoken';

function generarToken(usuario) {
  return jwt.sign(
    { usuario },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
}

export { generarToken };