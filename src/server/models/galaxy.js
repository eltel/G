'use strict';

import mongoose from 'mongoose';

import Meta from './meta';

const galaxySchema = new mongoose.Schema({
  meta: {
    type: Meta,
  },
  avatar: {
    type: Buffer,
  },
  trees: {
    type: [ mongoose.Schema.Types.ObjectId ],
  },
  trustedBy: {
    type: [ mongoose.Schema.Types.ObjectId ],
  },
  theme: {
    type: mongoose.Schema.Types.ObjectId,
  },
  constellations: {
    type: [ {
      _id: mongoose.Schema.Types.ObjectId,
      name: String,
    } ],
  },
  edges: {
    type: [ {
      _id: mongoose.Schema.Types.ObjectId,
      fromId: mongoose.Schema.Types.ObjectId,
      toId: mongoose.Schema.Types.ObjectId,
    } ],
  },
});

export default mongoose.model('Galaxy', galaxySchema);
