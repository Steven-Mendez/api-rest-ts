import { Router } from 'express';
import {
  deleteItem,
  getItem,
  getItems,
  postItems as postItem,
  updateItems as updateItem,
} from '../controllers/item';

const router = Router();

router.get('/', getItems);
router.get('/:id', getItem);
router.post('/', postItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

export { router };
