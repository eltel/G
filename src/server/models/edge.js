'use strict';

import mongoose from 'mongoose';

const edgeSchema = new mongoose.Schema({
  fromId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  toId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  description: {
    type: String,
  },
  documentation: {
    type: [ mongoose.Schema.Types.Mixed ],
  }
});

export default mongoose.model('Edge', edgeSchema);
