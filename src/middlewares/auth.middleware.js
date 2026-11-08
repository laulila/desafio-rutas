import jwt from 'jsonwebtoken';

function verificarToken(req, res, next) {
  try {
    const authorization = req.headers.authorization;

    if (!authorization) {
      return res.status(401).json({
        message: 'Token no proporcionado'
      });
    }

    const token = authorization.split(' ')[1];

    const usuarioVerificado = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.usuario = usuarioVerificado.usuario;

    next();

  } catch (error) {
    return res.status(401).json({
      message: 'Token inválido o vencido'
    });
  }
}

export { verificarToken };