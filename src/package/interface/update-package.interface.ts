import { Duration, Transport } from '@prisma/client';

export interface UpdatePackageParams {
  title?: string;
  description?: string;
  price?: number;
  location?: string;
  transport?: Transport;
  // tour?: Tour;
  duration?: Duration;
}
