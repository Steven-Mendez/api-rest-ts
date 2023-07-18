import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handle';
import { JwtPayload } from 'jsonwebtoken';

interface RequestExt extends Request {
  user?: string | JwtPayload;
}

const getItems = async (req: RequestExt, res: Response) => {
  try {
    res.send({
      data: 'Esto solo lo ven las personas con sesión JWT',
      user: req.user,
    });
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ITEM');
  }
};

export { getItems };
