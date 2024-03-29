export type ContactInfo = {
  first: string;
  last: string;
  email: string;
  website: string;
  budget: number;
  spam: number;
  description: string;
};

// create nice looking email template:
export function createEmail({
  first,
  last,
  email,
  website,
  budget,
  description
}: ContactInfo): string {
  return `
    <!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background: #f1f1f1;margin: 0 auto !important;padding: 0 !important;height: 100% !important;width: 100% !important;">
    <head style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
        <meta charset="utf-8" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <!-- utf-8 works for most cases -->
        <meta name="viewport" content="width=device-width" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <!-- Forcing initial-scale shouldn't be necessary -->
        <meta http-equiv="X-UA-Compatible" content="IE=edge" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <!-- Use the latest (edge) version of IE rendering engine -->
        <meta name="x-apple-disable-message-reformatting" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">  <!-- Disable auto-scale in iOS 10 Mail entirely -->
        <title style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"></title> <!-- The title tag shows in email notifications, like Android 4.4. -->
        <link href="https://fonts.googleapis.com/css?family=Work+Sans:200,300,400,500,600,700" rel="stylesheet" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
    
      <style>
        /* What it does: Prevents Gmail from changing the text color in conversation threads. */
        .im {
          color: inherit !important;
        }
      </style>   
    </head>

    <body width="100%" style="margin: 0 auto !important;padding: 0 !important;mso-line-height-rule: exactly;background-color: #222222;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background: #f1f1f1;font-family: 'Work Sans', sans-serif;font-weight: 400;font-size: 15px;line-height: 1.8;color: rgba(0,0,0,.4);height: 100% !important;width: 100% !important;">
      <center style="width: 100%;background-color: #f1f1f1;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
        <div style="display: none;font-size: 1px;max-height: 0px;max-width: 0px;opacity: 0;overflow: hidden;mso-hide: all;font-family: sans-serif;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
          &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
        </div>
        <div style="max-width: 800px;margin: 0 auto;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" class="email-container">
        
        <!-- BEGIN BODY -->
          <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;">
            <tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
              <td valign="middle" class="hero bg_white" background='https://cdn.stocksnap.io/img-thumbs/960w/6THN4SX8IY.jpg' style="background-image: url(https://cdn.stocksnap.io/img-thumbs/960w/6THN4SX8IY.jpg)!important;background-size: cover!important;height: 360px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: black;position: relative;padding: 30px; z-index: 0;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                <div class="overlay" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;position: absolute;top: 0;left: 0;right: 0;bottom: 0;content: '';width: 100%;background-color: #000000;z-index: -1;opacity: .3;"></div>
                <table style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;margin: 0 auto !important;">
                  <tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                    <td style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;"> 
                      <div class="text" style="padding: 0 4em;text-align: center;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: rgba(255,255,255,.9);">
                        <h2 style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;font-family: 'Work Sans', sans-serif;color: #fff;margin-top: 0;font-weight: 300;font-size: 50px;margin-bottom: 0;line-height: 1;">Hi ${first} ${last}</h2>
                        <br style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                        <h3 style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;font-family: 'Work Sans', sans-serif;color: #fff;margin-top: 0;font-weight: 300;font-size: 30px;margin-bottom: 0;line-height: 1;">Your search for the perfect full stack web developer is finally over</h3>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr><!-- end tr -->
            <tr>
              <td class="bg_white email-section" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background: #ffffff;padding: 14pcx;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                <div class="heading-section" style="text-align: center;padding: 30px 18px 30px 18px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                  <h2 style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;font-family: 'Work Sans', sans-serif;color: #000000;margin-top: 0;font-weight: 400;font-size: 28px;line-height: 1.4;">I specialize in turning great ideas like yours into reality.</h2>
                  <p style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">I'm excited for the opportunity to work with you, and I guarantee you will be impressed by my professionalism and attention to detail.</p>
                  <p style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">Please take a second and review the contact information you sent me. If you see anything out of the ordinary please let me know.</p>
                  <div style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                    <p style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">Your name is ${first} ${last} and the best way to reach you is by emailing you at ${email}.</p>
                    <p style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">The brief description "${description}" is accurate.</p>
                  </div>
                  <h2 style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;font-family: 'Work Sans', sans-serif;color: #000000;font-weight: 400;font-size: 28px;line-height: 1.4;">What next?</h2>
                  <p style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">If everything looks good then don't worry. Just sit back and wait, I will be in touch very soon.</p>
                  <p style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">If you don't feel like waiting for me to check my messages, shoot me a text or a phone call. My contact info is in the footer below.</p>
                </div>
              </td>
            </tr><!-- end tr -->
          </table>
          <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;">
            <tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
              <td valign="middle" class="bg_black footer email-section" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background: #000000;padding: 14px;color: rgba(255,255,255,.5);mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                <table style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;margin: 0 auto !important;">
                  <tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                    <td valign="top" width="33.333%" style="padding-top: 20px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;margin: 0 auto !important;">
                        <tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                          <td style="text-align: center;p-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                            <h3 class="heading" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;font-family: 'Work Sans', sans-serif;color: #ffffff;margin-top: 0;font-weight: 400;font-size: 20px;">About</h3>
                            <p style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: grey">Jesse spends his time creating games and applications. When he's not on his computer he can be found hiking, mountain biking, or canyoneering.</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td valign="top" width="33.333%" style="padding-top: 20px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;margin: 0 auto !important;">
                        <tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                          <td style="text-align: center;padding-left: 5px;padding-right: 5px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                            <h3 class="heading" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;font-family: 'Work Sans', sans-serif;color: #ffffff;margin: 0 0 10px 0;font-weight: 400;font-size: 20px;">Contact Info</h3>
                            <ul style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;padding: 0;padding-inline-start: 0px">
                              <li style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;list-style: none;margin: 0 0 10px 0;color: grey;"><span class="text" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">10915 W 44th Ave, Wheat Ridge, Colorado, USA</span></li>
                              <li style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;list-style: none;margin: 0 0 10px 0;;color: grey;"><span class="text" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">+1 512 663 7936</span></li>
                            </ul>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td valign="top" width="33.333%" style="padding-top: 20px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;margin: 0 auto !important;">
                        <tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                          <td style="text-align: center;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                            <h3 class="heading" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;font-family: 'Work Sans', sans-serif;color: #ffffff;margin-top: 0;font-weight: 400;font-size: 20px;">Useful Links</h3>
                            <ul style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;padding: 0;">
                              <li style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;list-style: none;margin-bottom: 10px;"><a href="https://www.jesseneumann.com" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;text-decoration: none;color: white;">About</a></li>
                              <li style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;list-style: none;margin-bottom: 10px;"><a href="https://www.jesseneumann.com/portfolio" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;text-decoration: none;color: white;">Portfolio</a></li>
                              <li style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;list-style: none;margin-bottom: 10px;"><a href="https://www.github.com/Jesse989" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;text-decoration: none;color: white;">Github</a></li>
                            </ul>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr><!-- end: tr -->
            <tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
              <td valign="middle" class="bg_black footer email-section" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background: #000000;padding: 14px;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                <table style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;margin: 0 auto !important;">
                  <tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                    <td valign="top" width="33.333%" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;margin: 0 auto !important;">
                        <tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                          <td style="text-align: center;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                            <p style="color: rgba(255,255,255,.5);-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">&copy; 2019 Jesse Neumann. All Rights Reserved</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </center>
    </body>
  </html>
  `;
}
