import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot('mongodb+srv://workout:nUjw0Q0V8mXYqND5@cluster0.6ve5i.mongodb.net/workout')
  ]
})
export class AppModule {}
