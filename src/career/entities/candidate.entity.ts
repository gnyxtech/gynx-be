import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('candidates')
export class Candidate {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  fullName!: string;

  @Column()
  email!: string;

  @Column({ nullable: true })
  phone!: string;

  @Column({ nullable: true })
  type!: string;

  @Column()
  resumeUrl!: string;

  @Column({ nullable: true })
  coverLetter!: string;

  @CreateDateColumn()
  createdAt!: Date;
}
