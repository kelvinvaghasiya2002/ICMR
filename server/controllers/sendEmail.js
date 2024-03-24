import nodemailer from "nodemailer"

const sendEmail = async () => {
    console.log("Hello world");
    const transporter = nodemailer.createTransport({
        host: 'smtp-relay.brevo.com',
        port: 587,
        auth: {
            user: '210305105039@paruluniversity.ac.in',
            pass: '8yJx3OBGdLrCp06j'
        }
    });


    async function main() {
        const info = await transporter.sendMail({
            from: '<ICMR@gmail.com>', // sender address
            to: "kelvinvaghasiya50@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        });

        console.log("Message sent: %s", info.messageId);
    }
    main().catch((err)=>{
        console.log(err);
    })

}

export default sendEmail;