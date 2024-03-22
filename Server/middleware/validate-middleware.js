
const signupSchema = require('../validators/auth-validatore'); // Import the schema

const validate = (schema) => async (req, res, next) => {
    try {
        const validatedBody = schema.parse(req.body);
        req.validatedBody = validatedBody; // Optionally store the validated data for later use
        next();
    } catch (err) {
        if (err.errors && err.errors.length > 0) {
            const message = err.errors[0].message;
            console.log(message);
            res.status(400).json({ msg: message });
        } else {
            console.log(err);
            res.status(500).json({ msg: 'Internal server error' });
        }
    }
};

module.exports = validate;
