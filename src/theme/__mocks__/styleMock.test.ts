import styleMock from './styleMock';

describe('styleMock', () => {
  it('should export an empty object as default', () => {
    expect(styleMock).toEqual({});
  });

  it('should be of type object', () => {
    expect(typeof styleMock).toBe('object');
  });

  it('should have no own properties', () => {
    expect(Object.keys(styleMock)).toHaveLength(0);
  });
});
