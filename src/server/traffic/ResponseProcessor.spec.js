/* @flow */

import moment from 'moment-timezone';
import ResponseProcessor from './ResponseProcessor.js';

const sendSocketNotificationMock = jest.fn();

beforeAll(() => {
  moment.tz.setDefault('UTC');
  ResponseProcessor.now = jest.fn(() => moment('2017-07-16T00:00:00.000Z'));
});

describe('processTraffic function', () => {
  const context = {
    config: {},
    sendSocketNotification: sendSocketNotificationMock,
  };

  it('should send notification with correct values', () => {
    // given
    const data = {
      result: {
        line: '3',
        slug: 'normal',
        title: 'Trafic normal',
        message: 'Trafic normal sur l\'ensemble de la ligne.',
      },
      _metadata: {
        call: 'GET /traffic/metros/3',
      },
    };
    // when
    ResponseProcessor.processTraffic(data, context);
    // then
    expect(sendSocketNotificationMock).toHaveBeenCalledWith(
      'TRAFFIC',
      {
        id: 'traffic/metros/3',
        lastUpdate: moment('2017-07-16T00:00:00.000Z').toDate(),
        line: '3',
        loaded: true,
        message: 'Trafic normal sur l\'ensemble de la ligne.',
        slug: 'normal',
        title: 'Trafic normal',
      },
    );
  });
});