import { PartialType } from '@nestjs/mapped-types';
import { CreateCarGroupDto } from './create-car-group.dto';

export class UpdateCarGroupDto extends PartialType(CreateCarGroupDto) {}
