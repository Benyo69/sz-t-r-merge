import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { DictionaryUser } from './dictionary-user.entity';

@Entity()
export class PushMessage {
  @PrimaryGeneratedColumn({
    unsigned: true,
  })
  id: number;

  @Column({ charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci' })
  title: string;

  @Column({ type: 'text', charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci' })
  message: string;

  @Column()
  messageId: string;

  @Column({ nullable: true })
  channel: string;

  @ManyToMany(() => DictionaryUser, (user) => user.messages, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  users: DictionaryUser[];

  @ManyToMany(() => DictionaryUser, (user) => user.messages, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinTable()
  openedUsers: DictionaryUser[];

  @CreateDateColumn()
  created: Date;

  toJSON() {
    return {
      id: this.id,
      title: this.title,
      message: this.message,
      users: this.users,
      messageId: this.messageId,
      created: this.created.getTime(),
    };
  }
}
