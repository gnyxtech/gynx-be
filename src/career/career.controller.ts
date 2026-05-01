import { Controller, Post, Get, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

import { CareerService } from './career.service';
import { CreateCandidateDto } from './dto/create-candidate.dto';

@ApiTags('Career')
@Controller('career')
export class CareerController {
  constructor(private readonly service: CareerService) {}

  @Post()
  @ApiOperation({ summary: 'Submit job application' })
  @ApiResponse({
    status: 201,
    description: 'Application submitted successfully',
  })
  create(@Body() dto: CreateCandidateDto) {
    return this.service.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all candidates' })
  @ApiResponse({ status: 200, description: 'List of candidates' })
  findAll() {
    return this.service.findAll();
  }
}
