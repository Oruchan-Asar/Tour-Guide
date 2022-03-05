import { Injectable, NotFoundException, PayloadTooLargeException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { travelers } from 'src/db';
import { CreateTravelerDto } from './dto/create-traveler.dto';
import { UpdateTravelerDto } from './dto/update-traveler.dto';
import { TravelerResponseDto } from './dto/response-traveler.dto';

@Injectable()
export class TravelerService {
  private travelers = travelers;

  create(payload: CreateTravelerDto): TravelerResponseDto {
    const newTraveler = {
      id: uuid(),
      ...payload,
    };

    this.travelers.push(newTraveler);

    return newTraveler;
  }

  findAll() {
    return this.travelers;
  }

  async findOne(id: string): Promise<TravelerResponseDto> {
    const traveler = await this.travelers.find((traveler) => traveler.id === id);
    if (!traveler) throw NotFoundException;
    return traveler;
  }

  async update(id: string, payload: UpdateTravelerDto): Promise<TravelerResponseDto> {
    const travelerToUpdate = await this.findOne(id);
    const indexOfTraveler = travelers.findIndex((traveler) => (traveler.id = travelerToUpdate.id));
    return (travelers[indexOfTraveler] = {
      id: id,
      ...payload,
    });
  }

  async remove(id: string) {
    const indexOfTraveler = await this.travelers.findIndex((traveler) => traveler.id === id);

    if (indexOfTraveler === -1) throw NotFoundException;

    this.travelers.splice(indexOfTraveler, 1);

    return;
  }
}
