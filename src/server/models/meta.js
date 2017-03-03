'use strict';

import mongoose from 'mongoose';

const metaSchema = new mongoose.Schema({
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
  },
  createdOn: {
    type: Date,
  },
});

export default mongoose.model('Meta', metaSchema);
