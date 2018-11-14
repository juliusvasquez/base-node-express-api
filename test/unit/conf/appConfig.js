import { expect, assert } from 'chai';
import {} from 'dotenv/config';
import appConfig from '../../../conf/appConfig';

const { app, logger } = appConfig;
const {
  APP_NAME,
  APP_ENV,
  APP_VERSION,
  APP_PORT,
  LOG_ACCESS_PATH,
  LOG_ERROR_PATH,
  LOG_LEVEL,
  LOG_ENABLE_CONSOLE
} = process.env;

describe('Application Config', () => {
  describe('`app` config', () => {
    it('`app` config should exist on config file', () => expect(app).to.not.empty);

    it('`APP_NAME` exist on System Environment Variable', () => {
      assert(APP_NAME, '`APP_NAME` doesn\'t exist in System Environment Variable');
    });

    it('`app.name` should be the same with the `APP_NAME` from system environment', () => {
      assert(app.name === APP_NAME, '`app.name` is not equal to the `APP_NAME` from system environment');
    });

    it('`APP_ENV` exist on System Environment Variable', () => {
      assert(APP_ENV, 'APP_ENV doesn\'t exist in Systems Environment Variable');
    });

    it('`APP_VERSION` exist on System Environment Variable', () => {
      assert(APP_VERSION, 'APP_VERSION doesn\'t exist in Systems Environment Variable');
    });

    it('`APP_PORT` exist on System Environment Variable', () => {
      assert(APP_PORT, 'APP_PORT doesn\'t exist in Systems Environment Variable');
    });
  });

  describe('`logger` config', () => {
    it('`logger` config should exist on config file', () => expect(logger).to.not.empty);

    it('`LOG_ACCESS_PATH` exist on System Environment Variable', () => {
      assert(LOG_ACCESS_PATH, '`LOG_ACCESS_PATH` doesn\'t exist in Systems Environment Variable');
    });

    it('`LOG_ERROR_PATH` exist on System Environment Variable', () => {
      assert(LOG_ERROR_PATH, 'LOG_ERROR_PATH doesn\'t exist in Systems Environment Variable');
    });

    it('`LOG_LEVEL` exist on System Environment Variable', () => {
      assert(LOG_LEVEL, 'LOG_LEVEL doesn\'t exist in Systems Environment Variable');
    });

    it('`LOG_ENABLE_CONSOLE` exist on System Environment Variable', () => {
      assert(LOG_ENABLE_CONSOLE, 'LOG_ENABLE_CONSOLE doesn\'t exist in Systems Environment Variable');
    });
  });
});
