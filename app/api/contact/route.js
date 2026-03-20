import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const body = await req.json();
        console.log("BODY:", body);

        const { name, email, phone, message } = body;

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: "New Contact Form Message",
            html: `
                <h2>New Message</h2>
                <p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Phone:</b> ${phone}</p>
                <p><b>Message:</b> ${message}</p>
            `,
        });

        console.log("EMAIL SENT:", info);

        return Response.json({ success: true });

    } catch (error) {
        console.error("EMAIL ERROR:", error);
        return Response.json({ success: false, error: error.message });
    }
}