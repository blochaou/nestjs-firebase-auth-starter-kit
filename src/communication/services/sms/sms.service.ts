import { Injectable } from '@nestjs/common';
import { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM } from 'src/constantes';

const twilio = require('twilio');
const client = new twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

@Injectable()
export class SmsService {

    sendSMS(message: any){
        client.messages.create({
            body: message.body,
            to: message.to,
            from: TWILIO_FROM,
        })
        .then((message) => console.log(message.sid));
    }
}
