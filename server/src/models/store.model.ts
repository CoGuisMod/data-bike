import { InferSchemaType, model, Schema } from "mongoose";

const storeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
    },
    business_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

type Business = InferSchemaType<typeof storeSchema>;

export default model<Business>("Business", storeSchema);
