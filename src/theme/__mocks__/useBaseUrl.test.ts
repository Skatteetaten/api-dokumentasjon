import useBaseUrl from './useBaseUrl';

describe('useBaseUrl mock', () => {
  it('should be a jest mock function', () => {
    expect(jest.isMockFunction(useBaseUrl)).toBe(true);
  });

  it('should return the input path unchanged', () => {
    expect(useBaseUrl('/some/path')).toBe('/some/path');
  });

  it('should return empty string when passed empty string', () => {
    expect(useBaseUrl('')).toBe('');
  });

  it('should handle paths with special characters', () => {
    expect(useBaseUrl('/path/with-dashes')).toBe('/path/with-dashes');
    expect(useBaseUrl('/path/with_underscores')).toBe('/path/with_underscores');
    expect(useBaseUrl('/path/with.dot')).toBe('/path/with.dot');
  });

  it('should handle root path', () => {
    expect(useBaseUrl('/')).toBe('/');
  });

  it('should handle nested paths', () => {
    expect(useBaseUrl('/a/b/c/d/e')).toBe('/a/b/c/d/e');
  });

  it('should track calls', () => {
    useBaseUrl.mockClear();
    useBaseUrl('/first');
    useBaseUrl('/second');
    expect(useBaseUrl).toHaveBeenCalledTimes(2);
    expect(useBaseUrl).toHaveBeenNthCalledWith(1, '/first');
    expect(useBaseUrl).toHaveBeenNthCalledWith(2, '/second');
  });

  it('should be mockClear-able', () => {
    useBaseUrl('/test');
    useBaseUrl.mockClear();
    expect(useBaseUrl).not.toHaveBeenCalled();
  });
});
