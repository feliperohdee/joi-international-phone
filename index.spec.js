const chai = require('chai');

const joi = require('@hapi/joi').extend(require('./'));

const expect = chai.expect;

const validation = [{
    phone: 'string',
    expected: {
        value: 'string',
        error: 'The string supplied did not seem to be a phone number'
    }
}, {
    phone: '+ 55 55 99730 0000',
    expected: {
        value: '+55 55 99730-0000',
        error: null
    }
}, {
    phone: '+ 55 55 11111 0000',
    expected: {
        value: '+ 55 55 11111 0000',
        error: 'The string supplied did not seem to be a phone number'
    }
}, {
    phone: '+1 844 970 4 2 6 9',
    expected: {
        value: '+1 844-970-4269',
        error: null
    }
}];

const schema = joi.object({
    phone: joi.internationalPhone()
});

describe('index.js', () => {
    it('should validate', () => {
        validation.forEach(({
            expected,
            phone
        }) => {
            const {
                value,
                error
            } = schema.validate({
                phone
            });

            expect(value.phone).to.equal(expected.value);

            if (error) {
                expect(error.details[0].message).to.equal(expected.error);
            }
        });
    });
});