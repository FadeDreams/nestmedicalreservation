import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractRepository } from '@app/utils/database';
import { AbstractDocument } from '@app/utils/database/abstract.schema';

@Schema({ versionKey: false })
export class ReservationDocument extends AbstractDocument {
  @Prop()
  timestamp: Date;

  @Prop()
  startDate: Date;

  @Prop()
  endDate: Date;

  @Prop()
  userId: string;

  @Prop()
  invoiceId: string;
}

export const ReservationSchema =
  SchemaFactory.createForClass(ReservationDocument);

