import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';
import { AddCharacterDto } from './dto/add-character.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @ApiBody({
    type: [AddCharacterDto],
    description: 'Add the character to elasticsearch',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The record has been successfully added to elasticsearch.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Request body is invalid.',
  })
  async addCharacter(@Body() addCharacterDto: AddCharacterDto) {
    const { body } = await this.appService.addCharacter(addCharacterDto);

    return {
      status: HttpStatus.CREATED,
      data: body,
    };
  }

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Returns all the characters.',
  })
  async getCharacters() {
    const { body } = await this.appService.getCharacters();

    return {
      status: HttpStatus.OK,
      data: body,
    };
  }
}
