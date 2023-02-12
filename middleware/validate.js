const Joi = require("joi");

const requestADemoValidate = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().email().min(10).required(),
        phone: Joi.number().min(10).required(),
        company: Joi.string(),

    });
    return schema.validate(data);
};
module.exports = { requestADemoValidate }

