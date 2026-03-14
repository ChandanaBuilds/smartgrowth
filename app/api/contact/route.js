import nodemailer from "nodemailer";

export async function POST(req) {
    try {

        const body = await req.json();
        const { name, email, phone, message } = body;

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "smartgrowth402@gmail.com",
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: "smartgrowth402@gmail.com",   // IMPORTANT FIX
            to: "smartgrowth402@gmail.com",
            replyTo: email,                     // user email
            subject: "New Contact Form Message",

            html: `
        <h2>New Message from Website</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
        });

        return Response.json({ success: true });

    } catch (error) {

        console.error("EMAIL ERROR:", error);

        return Response.json({
            success: false,
            error: "Email not sent",
        });
    }
}