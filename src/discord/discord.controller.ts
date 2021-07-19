import { Body, Controller, HttpCode, Logger, Post } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { DiscordService } from './discord.service';
import { WebhookPayloadDto } from './dto/webhook-payload.dto';

@Controller('discord')
export class DiscordController {
  constructor(private readonly discordService: DiscordService) {}
  private logger: Logger = new Logger('Discord');

  @Post()
  @HttpCode(200)
  async translateWebhook(
    @Body() payload: WebhookPayloadDto,
  ): Promise<Observable<AxiosResponse<string>>> {
    this.logger.log(payload);
    const body = this.discordService.preparePayload(payload);
    return await this.discordService.sendWebhook(body);
  }
}
