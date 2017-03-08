'use strict';

import mongoose from 'mongoose';

import Meta from './meta';

const nodeSchema = new mongoose.Schema({
  meta: {
    type: Meta,
  },
});

export default mongoose.model('Hypernode', nodeSchema);
