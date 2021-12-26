import Joi from 'joi';

export const templateSchema = Joi.object({
  label: Joi.string().required(),
  description: Joi.string(),
  inputs: Joi.array(),
});
