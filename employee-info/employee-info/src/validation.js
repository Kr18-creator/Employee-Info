const Ajv = require('ajv');
const ajv = new Ajv();
const validate = ajv.compile(schema); // `schema` is the JSON contract object
const data = {
    "id": "1234",
    "name": "John",
    "gender": "male",
    "email": "johndoe@example.com",
    "salary": "50000",
    "experience": "20",
    "hiredDate": "01-01-2021"
  };
  
  const isValid = validate(data);
  if (!isValid) {
    console.log(validate.errors);
  }
  