import { Column, Entity, Index } from 'typeorm';

@Entity()
export class Parcel {
  @Index({ unique: true })
  @Column()
  sku: string;

  @Column()
  description: string;

  @Column()
  streetAddress: string;

  @Column()
  town: string;

  @Index()
  @Column()
  country: string;

  @Column({ type: 'timestamp' })
  deliveryDate: Date;
}
