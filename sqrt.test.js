const { sqrtOfProduct } = require('./sqrt');

describe('Square root of product', () => {
    test('square roots of product of 2 and 4', () => {
        expect(sqrtOfProduct(2, 4)).toBe("2, 4");
    });
});
