import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
  GraphQLID
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'NodeInput',
  fields: {
    _id: {
      type: GraphQLID,
    },
    typeP:{
      type: GraphQLBoolean,
    },
    typeL:{
      type: GraphQLBoolean,
    },
    typeT:{
      type: GraphQLBoolean,
    },
    hypernode: {
      type: GraphQLID,
    },
    nodeType: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    language: {
      type: GraphQLString,
    },
    temporal: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    geotags: {
      type: GraphQLString,
    },
    image: {
      type: GraphQLString,
    },
  }
});
