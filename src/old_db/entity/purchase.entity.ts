import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { DictionaryUser } from './dictionary-user.entity';

@Entity()
export class Purchase {
  @PrimaryGeneratedColumn({
    unsigned: true,
  })
  id: number;

  @Column({ nullable: true })
  purchaseToken: string;

  @Column({ unsigned: true })
  userId: number;

  @ManyToOne(() => DictionaryUser, (user) => user.purchases, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  user: DictionaryUser;

  @Column()
  bundleKey: string;

  @Column({ nullable: true })
  orderId: string;

  @Column({ nullable: true, type: 'text' })
  orderPayload: string;

  @Column()
  valid: Date;

  @CreateDateColumn()
  created: Date;

  toJSON() {
    return { ...this };
  }
}
