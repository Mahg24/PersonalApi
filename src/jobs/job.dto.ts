import { IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class JobDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  company: string;
  @IsDateString()
  startDate: Date;
  @IsDateString()
  endDate: Date;
  @IsString()
  description: string;
}
