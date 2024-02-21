import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserActivity {
  @PrimaryGeneratedColumn({
    unsigned: true,
  })
  id: number;

  @Column({
    nullable: false,
  })
  userId: number;

  @Column({
    nullable: true,
  })
  login: Date;

  @Column({
    nullable: true,
  })
  inAppPurchase: Date;

  @Column({
    nullable: true,
  })
  search: Date;

  @Column({
    nullable: true,
  })
  purchaseSessionStart: Date;

  @Column({
    nullable: true,
  })
  emailUnSubscribeSessionStart: Date;

  @Column({
    nullable: true,
  })
  browsingSessionStart: Date;

  @Column({
    nullable: true,
    type: 'mediumtext',
  })
  browsedBoundleId: string;

  @Column({
    nullable: true,
  })
  bundleIds: string;

  @Column({
    nullable: true,
  })
  favorization: Date;

  @Column({
    nullable: true,
  })
  trialSessionStart: Date;

  @Column({
    nullable: true,
  })
  activation: Date;

  @Column({
    nullable: true,
  })
  lastGroupLeft: Date;

  @Column({
    default: false,
  })
  prioOne: boolean;

  @Column({
    default: false,
  })
  prioTwo: boolean;

  @Column({
    default: false,
  })
  prioThree: boolean;

  @Column({
    default: false,
  })
  prioFour: boolean;
}
