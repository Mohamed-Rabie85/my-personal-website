// file: app/api/send/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// استدعاء مفتاح API من متغيرات البيئة بأمان
const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.TO_EMAIL || 'mohamedrabie.consultant@gmail.com';


export async function POST(request: Request) {
    try {
        const body = await request.json();
    // استخراج بيانات الفورم من الطلب
        const { name, email, phone, subject, message } = body;

    // التحقق من وجود البيانات الأساسية
        if (!name || !email || !message) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
        from: 'Portfolio Contact Form <onboarding@resend.dev>', // بريد افتراضي من Resend
        to: [toEmail], // إيميلك الذي ستستقبل عليه الرسائل
        subject: `New Message from ${name}: ${subject}`,
        html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <hr />
        <h2>Message:</h2>
        <p>${message}</p>
        `,
    });

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully!', data });
    } catch (error) {
        return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
    }
}