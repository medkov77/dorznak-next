import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PriceDocument = HydratedDocument<Price>;

@Schema()
export class Price {
  @Prop()
  name: string;

  @Prop()
  price: number;
}

export const PriceSchema = SchemaFactory.createForClass(Price);
