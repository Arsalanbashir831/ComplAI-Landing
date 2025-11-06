import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Configure route segment to increase timeout
export const maxDuration = 30; // 30 seconds
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      full_name,
      email,
      company_name,
      role,
      phone_no,
      message,
      form_type = 'demo',
    } = body;

    // Validate required fields
    if (
      !full_name ||
      !email ||
      !company_name ||
      !role ||
      !phone_no ||
      !message
    ) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 30px;">
          <img src="${process.env.NEXT_PUBLIC_LANDING_URL}/logos/complai.png" alt="ComplAI Logo" style="height: 40px; width: auto;" />
        </div>
        
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
          New ${form_type === 'demo' ? 'Demo' : 'General'} Enquiry
        </h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">Contact Information</h3>
          <p><strong>Full Name:</strong> ${full_name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company_name}</p>
          <p><strong>Role:</strong> ${role}</p>
          <p><strong>Phone:</strong> ${phone_no}</p>
        </div>
        
        <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h3 style="color: #1e40af; margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #f1f5f9; border-radius: 8px; font-size: 14px; color: #64748b;">
          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `;

    // Send email to your team with timeout protection
    const teamEmailResult = (await Promise.race([
      resend.emails.send({
        from: process.env.FROM_EMAIL!,
        to: [process.env.TO_EMAIL!],
        subject: `New ${form_type === 'demo' ? 'Demo' : 'General'} Enquiry from ${full_name}`,
        html: emailContent,
      }),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Team email timeout')), 25000)
      ),
    ])) as Awaited<ReturnType<typeof resend.emails.send>>;

    // Send confirmation email to the user
    const userConfirmationContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 30px;">
          <img src="${process.env.NEXT_PUBLIC_LANDING_URL}/logos/complai.png" alt="ComplAI Logo" style="height: 50px; width: auto; margin-bottom: 20px;" />
          <h1 style="color: #2563eb; margin-bottom: 10px;">Thank You for Your Interest!</h1>
          <p style="color: #64748b; font-size: 16px;">We've received your ${form_type === 'demo' ? 'demo request' : 'general enquiry'} and will get back to you soon.</p>
        </div>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">Your Details</h3>
          <p><strong>Name:</strong> ${full_name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company_name}</p>
          <p><strong>Role:</strong> ${role}</p>
        </div>
        
        <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h3 style="color: #1e40af; margin-top: 0;">Your Message</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        
        <div style="margin-top: 30px; padding: 20px; background-color: #eff6ff; border-radius: 8px; text-align: center;">
          <h3 style="color: #1e40af; margin-top: 0;">What's Next?</h3>
          <p>Our team will review your ${form_type === 'demo' ? 'demo request' : 'enquiry'} and contact you within 24 hours to discuss your requirements and schedule a ${form_type === 'demo' ? 'demo' : 'consultation'}.</p>
        </div>
        
        <div style="margin-top: 20px; text-align: center; color: #64748b; font-size: 14px;">
          <p>Best regards,<br>The ComplAI Team</p>
        </div>
      </div>
    `;

    const userEmailResult = (await Promise.race([
      resend.emails.send({
        from: process.env.FROM_EMAIL!,
        to: [email],
        subject: `Thank you for your ${form_type === 'demo' ? 'demo request' : 'general enquiry'} - ComplAI`,
        html: userConfirmationContent,
      }),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('User email timeout')), 25000)
      ),
    ])) as Awaited<ReturnType<typeof resend.emails.send>>;

    return NextResponse.json(
      {
        message: 'Email sent successfully',
        teamEmailId: teamEmailResult.data?.id,
        userEmailId: userEmailResult.data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);

    // Check if it's a timeout error
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    const isTimeout =
      errorMessage.includes('timeout') || errorMessage.includes('TIMEOUT');

    return NextResponse.json(
      {
        error: isTimeout
          ? 'Request timed out. Please try again or contact support.'
          : 'Failed to send email. Please try again.',
        details:
          process.env.NODE_ENV === 'development' ? errorMessage : undefined,
      },
      { status: isTimeout ? 504 : 500 }
    );
  }
}
