import { Duration, Tour, Transport } from '@prisma/client';

export interface Filter {
  location?: string;
  price?: {
    gte?: number;
    lte?: number;
  };
  transport?: Transport;
  //   tour?: Tour;
  duration?: Duration;
}
