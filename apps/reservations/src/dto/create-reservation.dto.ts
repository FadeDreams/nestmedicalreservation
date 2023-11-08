import { Prop } from '@nestjs/mongoose';

export class CreateReservationDto {
  startDate: Date;
  endDate: Date;

  @Prop()
  placeId: string;

  @Prop()
  invoiceId: string;

}
