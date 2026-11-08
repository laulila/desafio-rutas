import { generarToken } from '../services/auth.service.js';

async function login(req, res) {
  try {
    const { usuario, password } = req.body;

    if (
      usuario !== process.env.AUTH_USER ||
      password !== process.env.AUTH_PASSWORD
    ) {
      return res.status(401).json({
        message: 'Credenciales incorrectas'
      });
    }

    const token = generarToken(usuario);

    return res.status(200).json({
      message: 'Login exitoso',
      token: token
    });

  } catch (error) {
    return res.status(500).json({
      message: 'Error interno del servidor'
    });
  }
}

export { login };