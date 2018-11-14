import logger from '../lib/logger';

function testController (req, res) {
  logger.info('test');
  logger.error('error test');
  res.json({ message: 'hello' });
}

export default {
  testController
};
