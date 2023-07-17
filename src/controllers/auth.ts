import { Request, Response } from 'express';
import { loginUser, registerNewUser } from '../services/auth';

const registerCtrl = async ({ body }: Request, res: Response) => {
  const {} = body;
  const responseUser = await registerNewUser(body);
  res.send(responseUser);
};

const loginCtrl = async ({ body }: Request, res: Response) => {
  const { email, password } = body;
  const responseUser = await loginUser({ email, password });

  if (responseUser === 'INCORRECT_PASSWORD') {
    res.status(403);
    res.send(responseUser);
  } else {
    res.send(responseUser);
  }
};

export { loginCtrl, registerCtrl };
