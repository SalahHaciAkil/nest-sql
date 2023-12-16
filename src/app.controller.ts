import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get() decorator is a shorthand for @HttpCode(200) and @Header('Content-Type', 'text/html')
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
