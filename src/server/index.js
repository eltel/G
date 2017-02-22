import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

const app = express();

mongoose.connect('mongodb://gee-dev:developer@ds031915.mlab.com:31915/heroku_8xfxv8j2');
const db = mongoose.connection;

app.use('/static', express.static(`${process.cwd()}/build/static`));

routes(app, db);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Express server listening on port ${process.env.PORT || 3000}`);
});
