import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService,Items,DoThis,Onarrival } from './app.service';


@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,DoThis,Onarrival],
})
export class AppModule {}
