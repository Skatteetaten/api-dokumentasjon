import MDXComponentsOriginal from './MDXComponentsOriginal';

describe('MDXComponentsOriginal', () => {
  it('should export an empty object as default', () => {
    expect(MDXComponentsOriginal).toEqual({});
  });

  it('should be an object', () => {
    expect(typeof MDXComponentsOriginal).toBe('object');
    expect(MDXComponentsOriginal).not.toBeNull();
  });

  it('should have no keys', () => {
    expect(Object.keys(MDXComponentsOriginal)).toHaveLength(0);
  });

  it('should be the default export', () => {
    expect(MDXComponentsOriginal).toBeDefined();
  });
});
