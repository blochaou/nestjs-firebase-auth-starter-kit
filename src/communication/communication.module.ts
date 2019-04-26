import { Module } from '@nestjs/common';
import { SmsService } from './services/sms/sms.service';
import { MailService } from './services/mail/mail.service';

@Module({
  providers: [SmsService, MailService]
})
export class CommunicationModule {}
