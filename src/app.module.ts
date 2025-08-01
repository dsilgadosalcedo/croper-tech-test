import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { appConfig, validationSchema } from './config';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    HealthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
      validationSchema,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
