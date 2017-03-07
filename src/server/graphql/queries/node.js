import {
  GraphQLList,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
} from 'graphql';
import { Types } from 'mongoose';

import nodeType from '../types/node';
import getProjection from '../get-projection';
import NodeModel from '../../models/node';

export default {
  node: {
    type: nodeType,
    args: {
      _id: {
        name: '_id',
        type: new GraphQLNonNull(GraphQLID)
      }
    },
    resolve(root, parroot, params, context, options) {
      const projection = getProjection(options.fieldNodes[0]);
      return NodeModel
        .findOne({ handle: params.handle })
        .select(projection)
        .exec();
    }
  },
  nodesInList: {
    type: new GraphQLList(nodeType),
    args: {
      nodeIDs: {
        name: 'nodeIDs',
        type: new GraphQLList(GraphQLID),
      }
    },
    resolve(root, parroot, params, context, options) {
      const projection = getProjection(options.fieldNodes[0]);

      return NodeModel
        .find({
          _id: {
            $in: params.nodeIDs,
          },
        })
        .select(projection)
        .exec();
    }
  },
  nodesByName: {
    type: new GraphQLList(nodeType),
    args: {
      name: {
        name: 'name',
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve(root, parroot, params, context, options) {
      const projection = getProjection(options.fieldNodes[0]);
      return NodeModel
        .find({ name: params.name })
        .select(projection)
        .exec();
    },
  },
  nodesInHypernode: {
    type: new GraphQLList(nodeType),
    args: {
      hypernode: {
        name: 'hypernode',
        type: new GraphQLNonNull(GraphQLID),
      },
    },
    resolve(root, parroot, params, context, options) {
      const projection = getProjection(options.fieldNodes[0]);
      return NodeModel
        .find({ hypernode: params.hypernode })
        .select(projection)
        .exec();
    },
  },
  allNodes: {
    type: new GraphQLList(nodeType),
    args: {},
    resolve(root, parroot, params, context, options) {
      const projection = getProjection(options.fieldNodes[0]);
      return NodeModel
        .find()
        .select(projection)
        .exec();
    },
  },
};
