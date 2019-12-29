const libphonenumber = require('google-libphonenumber');

const PhoneUtil = libphonenumber.PhoneNumberUtil.getInstance();

module.exports = joi => {
    return {
        type: 'internationalPhone',
        base: joi.string(),
        messages: {
            phone: 'The string supplied did not seem to be a phone number'
        },
        validate(value, helpers) {
            try {
                const proto = PhoneUtil.parse(value);

                if(!PhoneUtil.isValidNumber(proto)) {
                    throw new Error('invalidPhone');
                }

                return {
                    value: PhoneUtil.format(proto, 1),
                    errors: null
                };
            } catch (err) {
                return {
                    value,
                    errors: helpers.error('phone', {
                        message: err.message
                    })
                };
            }
        }
    };
};