import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationModule } from './location/location.module';
@Module({
  imports: [LocationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
