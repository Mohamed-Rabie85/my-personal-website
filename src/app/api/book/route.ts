import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// تهيئة Resend باستخدام مفتاح API من متغيرات البيئة
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
    const formData = await request.json(); // استلام بيانات الفورم المرسلة كـ JSON

    // استخراج البيانات من formData (للتأكد من وجودها)
    const {
        name,
        email,
        phone,
        company,
        consultation_type,
        message,
        preferred_date,
        preferred_time,
        communication_preference,
        } = formData;

    // **(اختياري) التحقق من صحة البيانات هنا:**
    // يمكنك إضافة منطق للتحقق من أن البيانات المطلوبة ليست فارغة
    // وأن البريد الإلكتروني صالح، إلخ.
    if (!name || !email || !consultation_type) {
        return NextResponse.json({ message: 'الرجاء تعبئة الحقول المطلوبة (الاسم، البريد الإلكتروني، نوع الاستشارة).' }, { status: 400 });
    }

    // إرسال البريد الإلكتروني باستخدام Resend
    const { error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // هذا هو نطاق "From" الافتراضي لـ Resend (أو نطاقك الخاص إذا قمت بإعداده)
      to: 'mohamedrabie.consultant@gmail.com', // البريد الإلكتروني الذي ستستقبل عليه الحجوزات
        subject: `طلب استشارة جديد من ${name}`,
        html: `
        <p><strong>اسم العميل:</strong> ${name}</p>
        <p><strong>البريد الإلكتروني:</strong> ${email}</p>
        <p><strong>رقم الهاتف:</strong> ${phone || 'لم يحدد'}</p>
        <p><strong>اسم الشركة:</strong> ${company || 'لم يحدد'}</p>
        <p><strong>نوع الاستشارة:</strong> ${consultation_type}</p>
        <p><strong>الرسالة:</strong><br>${message || 'لا توجد رسالة إضافية'}</p>
        <p><strong>التاريخ المفضل:</strong> ${preferred_date || 'لم يحدد'}</p>
        <p><strong>الوقت المفضل:</strong> ${preferred_time || 'لم يحدد'}</p>
        <p><strong>طريقة التواصل المفضلة:</strong> ${communication_preference || 'لم يحدد'}</p>
        <br>
        <p>يرجى التواصل مع العميل في أقرب وقت.</p>
        `,
    });

    if (error) {
        console.error('Resend error:', error);
        return NextResponse.json({ message: 'فشل إرسال البريد الإلكتروني.', error: error.message }, { status: 500 });
    }

    // إرجاع استجابة نجاح JSON
    return NextResponse.json({ message: 'تم حجز الاستشارة بنجاح!' }, { status: 200 });

    } catch (error) {
    console.error('خطأ في معالجة طلب حجز الاستشارة:', error);
    // إرجاع استجابة خطأ JSON مع رمز حالة 500 (Internal Server Error)
    return NextResponse.json({ message: 'حدث خطأ غير متوقع أثناء معالجة طلبك.' }, { status: 500 });
    }
}