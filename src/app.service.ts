import { Injectable } from '@nestjs/common';
import { AddCharacterDto } from './dto/add-character.dto';
import { SearchService } from './search/search.service';

@Injectable()
export class AppService {
  private readonly index = 'game-of-thrones';

  constructor(private readonly searchService: SearchService) {}

  addCharacter(addCharacterDto: AddCharacterDto) {
    return this.searchService.createIndex({
      index: this.index,
      body: {
        ...addCharacterDto,
      },
    });
  }

  getCharacters() {
    return this.searchService.searchIndex({
      index: this.index,
    });
  }
}
