import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsEmail,
  IsOptional,
  IsUrl,
  IsNotEmpty,
} from 'class-validator';

export class CreateCandidateDto {
  @ApiProperty({ example: 10001 })
  @IsNotEmpty()
  jobId!: number;

  @ApiProperty({ example: 'Yashwant Kargwal' })
  @IsString()
  @IsNotEmpty()
  fullName!: string;

  @ApiProperty({ example: 'yash@gmail.com' })
  @IsEmail()
  email!: string;

  @ApiProperty({ example: '9876543210', required: false })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({ example: 'saleperson', required: true })
  @IsString()
  type!: string;

  @ApiProperty({ example: 'https://drive.google.com/resume.pdf' })
  @IsUrl()
  resumeUrl!: string;

  @ApiProperty({ example: 'I am passionate developer...', required: false })
  @IsOptional()
  @IsString()
  coverLetter?: string;
}
