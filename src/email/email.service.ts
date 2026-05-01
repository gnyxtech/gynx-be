import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {
  constructor(private mailer: MailerService) {}

  async sendCandidateMail(email: string, name: string) {
    await this.mailer.sendMail({
      to: email,
      subject: 'Application Received - GNYX',
      html: this.getTemplate(name),
    });
  }

  private getTemplate(name: string) {
    return `
    <div style="font-family: Arial, sans-serif; background:#f4f6f9; padding:30px;">
      <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
        
        <div style="background:#0f172a; color:#fff; padding:20px; text-align:center;">
          <h1 style="margin:0;">GNYX</h1>
          <p style="margin:5px 0 0;">Designing & IT Development Solution</p>
        </div>

        <div style="padding:30px; color:#333;">
          <h2 style="margin-top:0;">Hi ${name}, 👋</h2>

          <p>
            Thank you for applying to <strong>GNYX</strong>.  
            We have successfully received your application.
          </p>

          <p>
            Our team will review your profile and get back to you soon if your skills match our requirements.
          </p>

          <div style="margin:25px 0; padding:15px; background:#f1f5f9; border-radius:8px;">
            <strong>What happens next?</strong>
            <ul>
              <li>Application review by our team</li>
              <li>Shortlisting based on skills</li>
              <li>Interview process</li>
            </ul>
          </div>

          <p>
            If you have any questions, feel free to reply to this email.
          </p>

          <p style="margin-top:30px;">
            Regards,<br/>
            <strong>Team GNYX</strong>
          </p>
        </div>

        <div style="background:#0f172a; color:#aaa; text-align:center; padding:15px; font-size:12px;">
          © ${new Date().getFullYear()} GNYX. All rights reserved.
        </div>

      </div>
    </div>
    `;
  }
}
