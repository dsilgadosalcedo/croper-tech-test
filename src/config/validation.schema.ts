import * as Joi from 'joi';

export const validationSchema = Joi.object({
  // Application
  PORT: Joi.number().required(),

  // Database
  DATABASE_NAME: Joi.string().optional(),
  DATABASE_PORT: Joi.string().optional(),

  // MongoDB
  MONGO_DB: Joi.string().optional(),
  MONGO_INITDB_ROOT_USERNAME: Joi.string().optional(),
  MONGO_INITDB_ROOT_PASSWORD: Joi.string().optional(),
  MONGO_PORT: Joi.number().optional(),
  MONGO_HOST: Joi.string().optional(),
  MONGO_CONNECTION: Joi.string().optional(),
});
