const years = [
  "1st",
  "2nd",
  "3rd",
  "4th",
  "Postgraduate", // for postgraduate diplomas and other stuff
  "Honours",
  "Masters",
  "PhD",
];

const userTypes = {
  ADMIN: "admin",
  MEMBER: "member",
  NON_MEMBER: "non-member",
};

const ResetPasswordEmailHTML = ({ code }) => (
  `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Your Password - Wits Consulting Club</title>
    <style>
      /* Base styles */
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        line-height: 1.6;
        color: #051D41;
        background-color: #FCFDFF;
        margin: 0;
        padding: 0;
      }
      .wrapper {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }
      .email-container {
        background-color: #ffffff;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
      }
      .header {
        background-color: #104E81;
        padding: 30px 20px;
        text-align: center;
      }
      .header h1 {
        color: #ffffff;
        margin: 0;
        font-size: 24px;
        font-weight: 600;
      }
      .logo {
        max-width: 150px;
        height: auto;
        margin-bottom: 15px;
      }
      .content {
        padding: 30px 25px;
      }
      .content p {
        margin: 0 0 20px;
        color: #6E85A0;
        font-size: 16px;
      }
      .verification-code {
        background-color: #F5F7FB;
        border: 1px solid #E0E6ED;
        border-radius: 8px;
        padding: 20px;
        margin: 25px 0;
        text-align: center;
      }
      .code {
        font-family: monospace;
        font-size: 32px;
        font-weight: bold;
        letter-spacing: 5px;
        color: #CE9F00;
      }
      .instructions {
        background-color: #F5F7FB;
        border-left: 4px solid #104E81;
        padding: 15px;
        margin: 25px 0;
      }
      .instructions p {
        margin: 0 0 10px;
      }
      .instructions p:last-child {
        margin-bottom: 0;
      }
      .button {
        display: inline-block;
        background-color: #104E81;
        color: #ffffff;
        text-decoration: none;
        padding: 12px 30px;
        border-radius: 6px;
        font-weight: 600;
        margin: 15px 0;
        text-align: center;
      }
      .button:hover {
        background-color: #0c3d68;
      }
      .divider {
        height: 1px;
        background-color: #E0E6ED;
        margin: 30px 0;
      }
      .signature {
        margin-top: 30px;
        font-size: 16px;
        color: #051D41;
      }
      .signature span {
        color: #CE9F00;
      }
      .footer {
        background-color: #F5F7FB;
        padding: 20px;
        text-align: center;
        font-size: 14px;
        color: #6E85A0;
      }
      .footer p {
        margin: 5px 0;
      }
      .help-text {
        font-size: 14px;
        color: #6E85A0;
      }
      .gold {
        color: #CE9F00;
      }
      .highlight {
        color: #104E81;
      }
      .bold {
        font-weight: bold;
      }
      @media only screen and (max-width: 480px) {
        .wrapper {
          padding: 10px;
        }
        .content {
          padding: 20px 15px;
        }
        .code {
          font-size: 28px;
          letter-spacing: 3px;
        }
      }
    </style>
  </head>
  <body>
    <div class="wrapper">
      <div class="email-container">
        <div class="header">
          <h1>Wits Consulting Club</h1>
        </div>
        
        <div class="content">
          <p>Hello,</p>
          
          <p>We received a request to reset your password for your <span class="bold highlight">Wits Consulting Club</span> account. Please use the verification code below to complete the process:</p>
          
          <div class="verification-code">
            <div class="code">${code}</div>
          </div>
          
          <p>Enter this code in the password reset form to verify your identity. After verification, you'll be able to create a new password.</p>
          
          <div class="divider"></div>
          
          <div class="instructions">
            <p><span class="bold">Important:</span> This code will expire in <span class="bold">5 minutes</span> for security reasons.</p>
            <p>If you didn't request a password reset, please ignore this email or contact our support team if you have concerns about your account security.</p>
          </div>
          
          <div class="signature">
            Regards,<br>
            <span class="gold bold">Technical Team</span> <span>|</span> <span class="bold highlight">The Wits Consulting Club</span>
          </div>
        </div>
        
        <div class="footer">
          <p>© 2025 Wits Consulting Club. All rights reserved.</p>
          <p>This email contains confidential information and is intended only for the named recipient. If you received this email in error, please notify us immediately.</p>
          <p>Questions? Email us at <a href="mailto:witsconsultingclub1@gmail.com" style="color: #104E81;">witsconsultingclub1@gmail.com</a></p>
        </div>
      </div>
    </div>
  </body>
  </html>`
);

module.exports = {
  years,
  userTypes,
  ResetPasswordEmailHTML,
};