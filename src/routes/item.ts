import { Request, Response, Router } from 'express';

const router = Router();

router.get('/', (request: Request, response: Response) => {
  response.send({ data: 'AQUÍ_VAN_LOS_MODELOS' });
});

export { router };
