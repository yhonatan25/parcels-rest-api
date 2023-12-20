import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Entity()
export class Parcel {
  @PrimaryColumn()
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
