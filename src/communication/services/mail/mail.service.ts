import { Injectable } from '@nestjs/common';
import { MAILGUN_API_KEY, MAILGUN_DOMAINE, MAILGUN_SENDER } from 'src/constantes';

const mailgun = require('mailgun-js')({apiKey: MAILGUN_API_KEY, domain: MAILGUN_DOMAINE});


@Injectable()
export class MailService {

    sendMail(mail: any) {

        const data = {
            from: MAILGUN_SENDER,
            to: mail.to,
            subject: mail.subject,
            text: mail.text,
          };

        mailgun.messages().send(data, function (error, body) {
            console.log(body);
        });
    }
}
