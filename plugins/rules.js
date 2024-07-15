import { defineRule, configure } from "vee-validate";
import {
  required,
  email,
  integer,
  image,
  size,
  alpha_dash,
  alpha_num,
  alpha_spaces,
} from "@vee-validate/rules";
export default defineNuxtPlugin({});
// Define rules
defineRule("required", required);
defineRule("email", email);
defineRule("alphabetWithNum", alpha_num);
defineRule("alphabetWithSpace", alpha_spaces);
defineRule("alphabetWithDash", alpha_dash);
defineRule("integer", integer);
defineRule("image", image);
defineRule("size", size);
// Configure custom messages
configure({
  validateOnInput: true,
  generateMessage: (context) => {
    const messages = {
      required: `this field is required.`,
      email: `${context.field} must be a valid email address.`,
      size: `${context.field} is must be less than 1.5MB.`,
      image: `${context.field} is must be an image.`,
      integer: `${context.field} is must be integer.`,
      alpha_dash: `${context.field} is must content only alphabets and dashes.`,
      alpha_num: `${context.field} is must content only alphabets and numbers.`,
      alpha_spaces: `${context.field} is must content only alphabets and spaces.`,
    };
    return messages[context.rule.name]
      ? messages[context.rule.name]
      : `The field ${context.field} is invalid.`;
  },
});

// In your main.js or equivalent entry file, import the plugin setup file
// main.js
