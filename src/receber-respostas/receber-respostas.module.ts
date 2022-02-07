import { Module } from '@nestjs/common';
import { ReceberRespostasService } from './receber-respostas.service';
import { ReceberRespostasController } from './receber-respostas.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ReceberRespostasController],
  providers: [ReceberRespostasService,PrismaService]
})
export class ReceberRespostasModule {}
