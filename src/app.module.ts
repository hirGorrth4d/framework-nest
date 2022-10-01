import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [AuthModule, UserModule, ProductsModule, MongooseModule.forRoot('mongodb://localhost/nest-products')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
