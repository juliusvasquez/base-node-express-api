import errors from 'http-errors';
import { sampleRoute } from '../routes';
import jsend from '../lib/jsend';

export default (app) => {
  // All specific routes here
  app.use('/api/test', sampleRoute);

  // Handling 404 Error
  app.use((req, res, next) => {
    next(errors.NotFound('The requested resource could not be found.'));
  });

  // 500 - Any server error
  app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json(jsend(err, req, res));
    next();
  });
};
