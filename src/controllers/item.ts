import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handle';

const getItem = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ITEM');
  }
};

const getItems = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ITEMS');
  }
};

const updateItems = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, 'ERROR_UPDATE_ITEM');
  }
};

const postItems = ({ body }: Request, res: Response) => {
  try {
    res.send(body);
  } catch (e) {
    handleHttp(res, 'ERROR_POST_ITEM');
  }
};

const deleteItem = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, 'ERROR_DELETE_ITEM');
  }
};

export { getItem, getItems, postItems, updateItems, deleteItem };
