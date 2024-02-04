import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TuiteController } from './tuite/tuite.controller';
import { TuiteService } from './tuite/tuite.service';

@Module({
  imports: [],
  controllers: [AppController, TuiteController],
  providers: [AppService, TuiteService],
})
export class AppModule {}
