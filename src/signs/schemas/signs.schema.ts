import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SignsDocument = HydratedDocument<Signs>;

@Schema()
export class Signs {
  @Prop()
  name: string;

  @Prop()
  gost: string;

  @Prop()
  type: string;

  @Prop()
  form: string;

  @Prop()
  sizes: string[];

  @Prop()
  films: string[];

  @Prop()
  description: string;

  @Prop()
  imgSrc: string;
}

export const SignsSchema = SchemaFactory.createForClass(Signs);
