import axios, { AxiosStatic } from 'axios';
jest.mock('axios', () => jest.fn());

type MockAxios = jest.Mock &
  AxiosStatic & {
    get: jest.Mock;
    post: jest.Mock;
    put: jest.Mock;
    delete: jest.Mock;
    option: jest.Mock;
    head: jest.Mock;
  };

let mockAxios: MockAxios = null;

/**********************************
  import { mockAxios } from '.';
  describe('foo', () => {
    afterEach(() => {
      mockAxios.mockRestore();
    });

    test('test1', async () => {
      mockAxios.mockResolvedValueOnce({ status: 200, data: 'hello' });
      // mockAxios.mockRejectedValueOnce({ status: 500 });
      const response = await myApi.getSome();
      console.log(response);
      expect(mockAxios.mock.calls.count).toBe(1);
    });
  });
 */
export { mockAxios };

/**
 * setup 에서 호출
 */
export default function() {
  // @ts-ignore
  axios.isCancel = jest.fn();
  // @ts-ignore
  axios.CancelToken = jest.fn();
  // @ts-ignore
  axios.CancelToken.source = jest.fn();
  // @ts-ignore
  axios.CancelToken.source.mockReturnValue({
    cancel: jest.fn()
  });
  // @ts-ignore
  axios.create = jest.fn();

  mockAxios = axios as MockAxios;
}
