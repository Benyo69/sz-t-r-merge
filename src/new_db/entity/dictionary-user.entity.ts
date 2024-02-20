import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Purchase } from './purchase.entity';
import { PushMessage } from './push-message.entity';
import { Statistic } from './statistic.entity';

@Entity()
export class DictionaryUser {
  @PrimaryGeneratedColumn({
    unsigned: true,
  })
  id: number;

  @Column()
  szotarId: string;

  @Column({ nullable: true })
  facebookId: string;

  @Column({ nullable: true })
  googleId: string;

  @Column({ nullable: true })
  appleId: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  name: string;

  @Column({ default: false })
  gotPopup: boolean;

  @Column({ default: true })
  pushAvailable: boolean;

  @OneToMany(() => Purchase, (purchase) => purchase.user, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  purchases: Purchase[];

  @ManyToMany(() => PushMessage, (message) => message.users, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinTable()
  messages: PushMessage[];

  @ManyToMany(() => Statistic, (statistic) => statistic.dictionaryUsers, {
    onUpdate: 'CASCADE',
  })
  @JoinTable()
  statistic: Statistic[];

  @CreateDateColumn()
  created: Date;
}
