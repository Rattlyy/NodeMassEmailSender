var nodemailer = require('nodemailer');
var readline = require('readline');
var settings = require("./settings.json")
console.log("#     #                      #######                         #####                                     ")
console.log("##   ##   ##    ####   ####  #       #    #   ##   # #      #     # ###### #    # #####  ###### #####  ")
console.log("# # # #  #  #  #      #      #       ##  ##  #  #  # #      #       #      ##   # #    # #      #    # ")
console.log("#  #  # #    #  ####   ####  #####   # ## # #    # # #       #####  #####  # #  # #    # #####  #    # ")
console.log("#     # ######      #      # #       #    # ###### # #            # #      #  # # #    # #      #####  ")
console.log("#     # #    # #    # #    # #       #    # #    # # #      #     # #      #   ## #    # #      #   #  ")
console.log("#     # #    #  ####   ####  ####### #    # #    # # ######  #####  ###### #    # #####  ###### #    # ")
console.log()
console.log()
console.log("By Rattly")
console.log()
console.log()

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Cosa devo mandare? Formato: HTML >", function(answer) {
    rl.question("Soggetto? >", function(subject) {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: settings.your_gmail_email,
                pass: settings.your_gmail_password
            }
        });
        settings.emails.forEach(function(email) {
            const mailOptions = {
                from: settings.your_gmail_email,
                to: email,
                subject: subject,
                html: answer
            };

            transporter.sendMail(mailOptions, function(err, info) {
                if (err)
                    console.log(err)
                else
                    console.log(info);
            });
        });
    });
});
