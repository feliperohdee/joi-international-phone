![](https://github.com/feliperohdee/joi-international-phone/workflows/Node%20CI/badge.svg)

## What
Allows you to do joi.internationalPhone()

Uses https://github.com/ruimarinho/google-libphonenumber for validation.

Which is a compiled version of the Google library https://github.com/googlei18n/libphonenumber.

## How

    const joi = require('@hapi/joi')
        .extend(require('joi-international-phone'));

    const schema = joi.object({
        phone: joi.internationalPhone()
    });

    schema.validate('+ 55 55 99730 0000'); 
    // {
    //    value: '+55 55 99730-0000',
    //    error: null
    // }

    schema.validate('not a phone');
    // {
    //    value: 'not a phone',
    //    error: 'The string supplied did not seem to be a phone number'
    // }
