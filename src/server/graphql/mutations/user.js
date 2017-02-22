import {
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLID,
} from 'graphql';

import userInputType from '../types/user-input';
import userType from '../types/user';
import getProjection from '../get-projection';
import UserModel from '../../models/user';

export default {
  addUser: {
    type: GraphQLBoolean,
    args: {
      data: {
        name: 'data',
        type: new GraphQLNonNull(userInputType)
      }
    },
    async resolve(root, params, context, options) {
      const userModel = new UserModel(params.data);
      const newUser = await userModel.save();

      if (!newUser) {
        throw new Error('Error adding new user');
      }
      return true;
    }
  },
  removeUser: {
    type: userType,
    args: {
      _id: {
        name: '_id',
        type: new GraphQLNonNull(GraphQLID)
      }
    },
    async resolve(root, params, context, options) {
      const projection = getProjection(options.fieldNodes[0]);
      const removedUser = await UserModel
        .findByIdAndRemove(params._id, {
          select: projection
        })
        .exec();

      if (!removedUser) {
        throw new Error('Error removing blog post');
      }

      return removedUser;
    }
  },
};
