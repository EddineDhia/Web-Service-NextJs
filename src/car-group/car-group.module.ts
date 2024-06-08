import { Module } from '@nestjs/common';
import { CarGroupService } from './car-group.service';
import { CarGroupController } from './car-group.controller';
import { DatabaseModule } from 'src/database/database.module';
@Module({
  imports: [DatabaseModule],
  controllers: [CarGroupController],
  providers: [CarGroupService],
})
export class CarGroupModule {}
