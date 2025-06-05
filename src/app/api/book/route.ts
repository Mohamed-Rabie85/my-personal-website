// file: src/app/api/book/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// استدعاء مفتاح API من متغيرات البيئة بأمان
const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.TO_EMAIL || 'mohamedrabie.consultant@gmail.com';

export async function POST(request: Request) {
    try {
        const body = await request.json();
    // استخراج بيانات فورم حجز الاستشارة
        const { 
            name, 
            email, 
            phone, 
            company, 
            consultation_type, 
            message, 
            preferred_date, 
            preferred_time, 
            communication_preference 
        } = body;

    // التحقق من وجود البيانات الأساسية
        if (!name || !email || !consultation_type) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

    const { data, error } = await resend.emails.send({
        from: 'Consultation Booking <onboarding@resend.dev>', // بريد افتراضي من Resend
        to: [toEmail], // إيميلك الذي ستستقبل عليه الطلبات
        subject: `New Consultation Booking from ${name}`,
        html: `
        <h1>New Consultation Booking Request</h1>
        <h2>Contact Details:</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <hr />
        <h2>Consultation Details:</h2>
        <p><strong>Type:</strong> ${consultation_type}</p>
        <p><strong>Preferred Date:</strong> ${preferred_date || 'Not specified'}</p>
        <p><strong>Preferred Time:</strong> ${preferred_time || 'Not specified'}</p>
        <p><strong>Preferred Communication:</strong> ${communication_preference || 'Not specified'}</p>
        <hr />
        <h2>Message:</h2>
        <p>${message || 'No message provided.'}</p>
        `,
    });

    if (error) {
        console.error("Error from Resend:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Booking request sent successfully!', data });
    } catch (err) {
        console.error("Error in /api/book:", err);
        return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
    }
}