const originConsole: any = global.console;

const spySwitch: any = {
  log: null,
  info: null,
  warn: null,
  error: null
};

export interface Options {
  silent?: boolean;
}

/**
 * console 히든용도
 * @export
 * @param {Options} [options={}]
 * 
  import { mockConsole } from '.';
  describe('foo', () => {
    afterEach(() => {
      mockConsole({ silent: true });
    });
    beforeEach(() => {
      // mockConsole({ silent: false }); // 테스트 중 console 모두 봐야되면
    });
    test('test1', () => {
      const value = some1();
      mockConsole({ silent: false });
      console.log(value); // 찍힘
      mockConsole({ silent: true });
      console.log(value); // 찍히지 않음
    });
  });
 */
export const mockConsole = (options: Options = {}) => {
  const { silent = true } = options;
  for (const key in spySwitch) {
    if (silent === true) {
      if (!spySwitch[key]) {
        spySwitch[key] = jest.spyOn(originConsole, key).mockImplementation(() => jest.fn());
      }
    } else {
      if (spySwitch[key]) {
        spySwitch[key].mockRestore();
        spySwitch[key] = null;
      }
    }
  }
};

export default function(options: Options) {
  mockConsole(options);
}
