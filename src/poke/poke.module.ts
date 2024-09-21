import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PokeController } from './controller/poke/poke.controller';
import { PokemonService } from './service/poke/poke.service';
import { PokemonRepository } from './repository/poke/poke.repository';

@Module({
  imports: [HttpModule],
  controllers: [PokeController],
  providers: [PokemonService, PokemonRepository],
})
export class PokeModule {}
