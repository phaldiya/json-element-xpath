const { getXPath } = require('../index');

const data = {
  a1: 'a1',
  a: {
    b: {
      c: {
        d: 'd',
      },
      e: 'e',
    },
    f: {
      g: 'g',
      h: [
        {
          a1: 'a1',
        },
      ],
    },
  },
};

describe('Json Element XPath', () => {
  it('should return first matching xpath', () => {
    expect(getXPath(data, 'a1')).toStrictEqual('a1');
    expect(getXPath(data, 'c')).toStrictEqual('a.b.c');
    expect(getXPath(data, 'g')).toStrictEqual('a.f.g');
  });

  it('should return multiple matching xpath', () => {
    expect(getXPath(data, 'c', true)).toStrictEqual(['a.b.c']);
    expect(getXPath(data, 'g', true)).toStrictEqual(['a.f.g']);
    expect(getXPath(data, 'a1', true)).toStrictEqual(['a1', 'a.f.h.0.a1']);
  });

  it('should return null when object is null', () => {
    expect(getXPath(null, 'c')).toStrictEqual(null);
  });

  it('should return null when key is null', () => {
    expect(getXPath(data, null)).toStrictEqual(null);
  });
});
