import { getPrice } from '../getPrice';

describe('test get price function', () => {
    it('should return value with price symbol', () => {
        expect(getPrice(100, '₽')).toBe('100 ₽');
        expect(getPrice(325, '$')).toBe('325 $');
    });
    it('should return value with default symbol if none provided', () => {
        expect(getPrice(100)).toBe('100 ₽'); 
    });
});
