import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot('mongodb+srv://workout:nUjw0Q0V8mXYqND5@cluster0.6ve5i.mongodb.net/workout')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
