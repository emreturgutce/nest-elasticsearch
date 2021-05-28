import { ApiProperty } from '@nestjs/swagger';
import {IsString} from 'class-validator';

export class AddCharacterDto {
  @IsString()
  @ApiProperty({
    description: 'Name of the Game of Thrones character',
  })
  character: string;

  @IsString()
  @ApiProperty({
    description: 'A quote from the character',
  })
  quote: string;
}
