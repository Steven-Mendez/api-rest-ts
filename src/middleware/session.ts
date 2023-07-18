import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../utils/jwt.handle';
import { JwtPayload } from 'jsonwebtoken';

interface RequestExt extends Request {
  user?: string | JwtPayload;
}

const checkJwt = async (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || null;
    const jwt = jwtByUser?.split(' ').pop();
    console.log({ jwt });
    const isUser = verifyToken(`${jwt}`);
    console.log(isUser);
    if (!isUser) {
      res.status(401);
      res.send('JWT_INVALIDO');
    } else {
      req.user = isUser;
      next();
    }
  } catch (e) {
    res.status(400);
    res.send('SESSION_NO_VALIDA');
  }
};

export { checkJwt };
