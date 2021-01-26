import mongoose, { Document, Model } from 'mongoose'
import { AddBeachModel } from '../../../domain/usecases/add-beach'

const schema = new mongoose.Schema(
  {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    name: { type: String, required: true },
    position: { type: String, required: true }
  },
  // temp
  {
    toJSON: {
      transform: (_, ret): void => {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
      }
    }
  }
)

export interface BeachSchema extends AddBeachModel, Document {}
export const Beach: Model<BeachSchema> = mongoose.model('Beach', schema)