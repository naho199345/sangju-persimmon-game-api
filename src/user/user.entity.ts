import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nickname: string;

  @Column()
  email: string;

  @Column()
  provider: string; // 'kakao' | 'naver' | 'local'

  @Column({ default: 0 })
  score: number;

  @CreateDateColumn()
  created_at: Date;
}
