import { Schema, Types, Model, model } from 'mongoose';
import { User } from '../interface/user.interface';

const UserSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      default: 'Descripción por defecto',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const UserModel = model('users', UserSchema);

export default UserModel;
