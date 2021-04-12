import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    MongooseModule.forRoot('mongodb+srv://workout:nUjw0Q0V8mXYqND5@cluster0.6ve5i.mongodb.net/workout'),
    ConfigModule.forRoot(
      {
        envFilePath: ['.env'],
        isGlobal: true
      }
    )
  ]
})
export class AppModule { }
