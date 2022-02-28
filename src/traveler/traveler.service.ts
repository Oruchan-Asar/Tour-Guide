import { Injectable, PayloadTooLargeException } from '@nestjs/common';
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

  findOne(id: string) {
    return this.travelers.filter((traveler) => traveler.id === id);
  }

  update(id: string, payload: UpdateTravelerDto) {
    let updatedTraveler: TravelerResponseDto;

    const updatedTravelerList = this.travelers.map((traveler) => {
      if (traveler.id === id) {
        updatedTraveler = {
          id,
          ...payload,
        };

        return updatedTraveler;
      } else return traveler;
    });

    this.travelers = updatedTravelerList;

    return updatedTraveler;
  }

  remove(id: string) {
    this.travelers = this.travelers.filter((traveler) => {
      traveler.id !== id;
    });

    return travelers;
  }
}
