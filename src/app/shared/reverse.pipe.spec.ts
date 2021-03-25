import { ReversePipe } from './reverse.pipe';

describe('Shared', () => {
  it('should use the reversePipe', () => {
    const reversePipe = new ReversePipe();
    expect(reversePipe.transform('hello')).toEqual('olleh');
  });
});
