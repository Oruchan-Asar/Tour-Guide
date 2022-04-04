import { Duration, Transport } from '@prisma/client';

export interface CreatePackageParams {
  title: string;
  description: string;
  price: number;
  location: string;
  transport: Transport;
  // tour: Tour;
  duration: Duration;
  images: { url: string }[];
}
