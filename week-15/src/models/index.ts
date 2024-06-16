// first we will be importing schema and model;
import { Schema, model } from "mongoose";

// when defining a schema in mongoose, 
// we specify the structure of the documents within a collection, 
// including the types and validation rules for each field. 

// type: this specifies the data type for the field. 
// common types include String, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array, etc.

// required: this boolean option specifies whether a field is mandatory. 
// if set to true, mongoose will enforce that the field must be present when creating or updating a document.

// unique: this boolean option ensures that the field value is unique across the collection. 
// if set to true, mongoose will create a unique index for the field.

// default: this option specifies a default value for the field. 
// if no value is provided when creating a document, mongoose will use the default value.

// validate: this option allows us to define custom validation logic for the field. 
// we can use a validator function or an object with validator and message properties.

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
    default: 18
  },
});

export default model("User", userSchema);