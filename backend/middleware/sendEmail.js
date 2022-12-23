const nodeMailer=require('nodemailer')

exports.sendEmail=async(options)=>{
    const transpoter=nodeMailer.createTransport({
        host:'smtp.ethereal.email',
        port:587,
        auth:{
            user: 'wilbert.macgyver@ethereal.email',
            pass: '5HaWtYvPp9AWsapWeE'
        }
    })
    const mailOptions={
        from:'wilbert.macgyver@ethereal.email',
        to:options.email,
        subject:options.subject,
        text:options.message
    }

    await transpoter.sendMail(mailOptions)

}