import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable, Logger } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { catchError, map, Observable } from 'rxjs';
import { WebhookPayloadDto } from './dto/webhook-payload.dto';

@Injectable()
export class DiscordService {
  constructor(private httpService: HttpService) {}
  private logger: Logger = new Logger('DiscordService');

  preparePayload(payload: WebhookPayloadDto): string {
    // TODO: Add type definitions
    return JSON.stringify({
      username: 'Heroku',
      avatar_url: process.env.AVATAR_URL,
      embeds: [
        {
          author: {
            name: payload.actor.email,
          },
          title: `There is a new deploy in process for ${payload.data.app.name}`,
          url: payload.data.app.web_url,
          description: `Commit: ${
            payload.data.slug.commit_description || payload.data.slug.commit
          }`,
          color: 7762880,
          footer: {
            text:
              payload.data.status === 'succeeded'
                ? 'Status: :white_check_mark:'
                : 'Status: :warning:',
          },
        },
      ],
    });
  }

  async sendWebhook(body: string): Promise<Observable<AxiosResponse<string>>> {
    return this.httpService
      .post(process.env.DISCORD_WEBHOOK_URL, body, {
        headers: { 'Content-Type': 'application/json' },
      })
      .pipe(
        map((response) => {
          // this.logger.log(resąponse);
          return response.data;
        }),
        catchError((e) => {
          throw new HttpException(e.response.data, e.response.status);
        }),
      );
  }
}
