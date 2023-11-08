import { Module } from '@nestjs/common';
import { ReservationsController } from './reservations.controller';
import { ReservationsService } from './reservations.service';
import { DatabaseModule } from '@app/utils/database/database.module';
import { ReservationsRepository } from './reservations.repository';
//import { ReservationsModule } from './reservations/reservations.module';

import { ReservationDocument, ReservationSchema } from './models/reservation.schema';

@Module({
  imports: [DatabaseModule, DatabaseModule.forFeature([
    {
      name: ReservationDocument.name,
      schema: ReservationSchema,
    }
  ]),
  ],
  controllers: [ReservationsController],
  providers: [ReservationsService, ReservationsRepository],
})
export class ReservationsModule { }
