"use server";

import { Resend } from 'resend';
import { getDiagnosisEmailTemplate, getAdminAlertTemplate } from '@/lib/email-templates';

// Ensure API Key exists
if (!process.env.RESEND_API_KEY) {
    console.error("❌ RESEND_API_KEY is missing from environment variables!");
}

const resend = new Resend(process.env.RESEND_API_KEY);

// Use the email that is DEFINITELY working in the Booking Route
// This must be the verified email in Resend dashboard
const VERIFIED_ADMIN_EMAIL = 'mohamedrabie.consultant@gmail.com';

export async function sendDiagnosisReport(formData: any) {
    console.log("🚀 Starting sendDiagnosisReport...");
    const { name, email, phone, score, answers } = formData;

    try {
        // 1. Generate Content
        console.log("📝 Generating email templates...");
        const adminEmail = getAdminAlertTemplate(name, email, phone, score, answers);
        const userEmail = getDiagnosisEmailTemplate(name, score, answers);

        // 2. SEND ADMIN ALERT ONLY (Free Tier Limitation Fix)
        // We cannot send to 'email' (the user) because they are not verified yet.
        console.log(`📧 Sending Admin Alert to: ${VERIFIED_ADMIN_EMAIL}`);

        const { data, error } = await resend.emails.send({
            from: 'Diagnosis Tool <onboarding@resend.dev>',
            to: VERIFIED_ADMIN_EMAIL,
            subject: adminEmail.subject,
            html: adminEmail.html,
        });

        if (error) {
            console.error("❌ Resend API Error:", error);
            return { success: false, error: error.message };
        }

        console.log("✅ Admin Email Sent Successfully!", data);

        // --- FUTURE STEP: WHEN DOMAIN IS VERIFIED ---
        // Uncomment this block to send email to the USER
        /*
        console.log(`📧 Attempting to send User Report to: ${email}`);
        await resend.emails.send({
            from: 'Mohamed Rabie <hello@mohamed-rabie.com>', // MUST be verified domain
            to: email,
            subject: userEmail.subject,
            html: userEmail.html,
        });
        */

        return { success: true };
    } catch (err: any) {
        console.error('💥 Unexpected Server Action Error:', err);
        return { success: false, error: err.message || 'Unknown Error' };
    }
}

export async function sendContactMessage(formData: any) {
    console.log("🚀 Starting sendContactMessage...");
    const { name, email, phone, subject, message } = formData;

    try {
        console.log(`📧 Sending Contact Message to Admin: ${VERIFIED_ADMIN_EMAIL}`);

        const { data, error } = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: VERIFIED_ADMIN_EMAIL,
            replyTo: email, // Allow reply to user directly
            subject: `📩 New Contact: ${subject} (from ${name})`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: auto;">
                    <h2 style="color: #1e293b;">New Contact Message</h2>
                    <p><strong>👤 Name:</strong> ${name}</p>
                    <p><strong>📧 Email:</strong> ${email}</p>
                    <p><strong>📱 Phone:</strong> ${phone || 'Not provided'}</p>
                    <hr />
                    <p><strong>Subject:</strong> ${subject}</p>
                    <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px;">
                        <p style="white-space: pre-wrap;">${message}</p>
                    </div>
                </div>
            `,
        });

        if (error) {
            console.error("❌ Resend API Error:", error);
            return { success: false, error: error.message };
        }

        console.log("✅ Contact Message Sent Successfully!", data);
        return { success: true };
    } catch (err: any) {
        console.error('💥 Unexpected Server Action Error:', err);
        return { success: false, error: err.message || 'Unknown Error' };
    }
}
