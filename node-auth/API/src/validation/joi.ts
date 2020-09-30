import { ObjectSchema } from "@hapi/joi";
import { Schema } from "mongoose";

export const validate = async (shema: ObjectSchema, payload: any) => {
  try {
    await Schema.validateAsync(payload, { abordEarly: false });
  } catch (e) {
    throw new Error(e);
  }
};
