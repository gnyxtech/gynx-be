import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Candidate } from './entities/candidate.entity';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { EmailService } from 'src/email/email.service';

@Injectable()
export class CareerService {
  constructor(
    @InjectRepository(Candidate)
    private repo: Repository<Candidate>,
    private emailService: EmailService,
  ) {}

  async create(dto: CreateCandidateDto) {
    try {
      const data = this.repo.create(dto);
      const response = await this.repo.save(data);

      await this.emailService.sendCandidateMail(dto.email, dto.fullName);

      return {
        message: 'Candidate Request Successful',
        status: true,
        data: response,
      };
    } catch (error: any) {
      throw new InternalServerErrorException({
        message: 'Failed to submit candidate',
        status: false,
        error: error.message,
      });
    }
  }

  async findAll() {
    try {
      const response = await this.repo.find({
        order: { createdAt: 'DESC' },
      });

      return {
        message: 'Candidate List Fetched',
        status: true,
        data: response,
      };
    } catch (error: any) {
      throw new InternalServerErrorException({
        message: 'Failed to fetch candidates',
        status: false,
        error: error.message,
      });
    }
  }
}
