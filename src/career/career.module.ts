import { Module } from '@nestjs/common';
import { CareerController } from './career.controller';
import { CareerService } from './career.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Candidate } from './entities/candidate.entity';
import { EmailModule } from 'src/email/email.module';

@Module({
  imports: [TypeOrmModule.forFeature([Candidate]), EmailModule],
  controllers: [CareerController],
  providers: [CareerService],
})
export class CareerModule {}
