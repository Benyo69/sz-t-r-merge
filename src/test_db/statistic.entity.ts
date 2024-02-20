import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToMany,
} from 'typeorm';
import { DictionaryUser } from './dictionary-user.entity';

@Entity()
export class Statistic {
  @PrimaryGeneratedColumn({
    unsigned: true,
  })
  id: number;

  @Column()
  messageId: string;

  @Column()
  count: number;

  @Column()
  type: number;

  @Column()
  osType: number;

  @Column({ default: 0 })
  opened: number;

  @Column({ default: 0 })
  failed: number;

  @ManyToMany(
    () => DictionaryUser,
    (dictionaryUsers) => dictionaryUsers.statistic,
    { onUpdate: 'CASCADE' },
  )
  dictionaryUsers: DictionaryUser[];

  @CreateDateColumn()
  created: Date;
}
