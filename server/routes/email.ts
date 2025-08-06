import { RequestHandler } from "express";
import { z } from "zod";

// Validation schema for booking notification
const BookingNotificationSchema = z.object({
  booking: z.object({
    tourName: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    phone: z.string(),
    checkInDate: z.string(),
    guests: z.number().min(1).max(8),
    specialRequests: z.string().optional(),
    totalPrice: z.number()
  }),
  adminEmail: z.string().email()
});

const BookingConfirmationSchema = z.object({
  tourName: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  phone: z.string(),
  checkInDate: z.string(),
  guests: z.number().min(1).max(8),
  specialRequests: z.string().optional(),
  totalPrice: z.number()
});

// Send booking notification to admin
export const handleBookingNotification: RequestHandler = async (req, res) => {
  try {
    const validatedData = BookingNotificationSchema.parse(req.body);
    const { booking, adminEmail } = validatedData;

    // Format email content
    const emailContent = {
      to: adminEmail,
      subject: `New Booking Request - ${booking.tourName}`,
      text: `
New booking request received:

Tour: ${booking.tourName}
Customer: ${booking.firstName} ${booking.lastName}
Email: ${booking.email}
Phone: ${booking.phone}
Check-in Date: ${booking.checkInDate}
Guests: ${booking.guests}
Total Price: €${booking.totalPrice}

Special Requests:
${booking.specialRequests || 'None'}

Please contact the customer to confirm the booking.
      `,
      html: `
<h2>New Booking Request - ${booking.tourName}</h2>
<div style="font-family: Arial, sans-serif; max-width: 600px;">
  <h3>Booking Details:</h3>
  <table style="border-collapse: collapse; width: 100%;">
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Tour:</td>
      <td style="padding: 8px; border: 1px solid #ddd;">${booking.tourName}</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Customer:</td>
      <td style="padding: 8px; border: 1px solid #ddd;">${booking.firstName} ${booking.lastName}</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
      <td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${booking.email}">${booking.email}</a></td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone:</td>
      <td style="padding: 8px; border: 1px solid #ddd;"><a href="tel:${booking.phone}">${booking.phone}</a></td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Check-in Date:</td>
      <td style="padding: 8px; border: 1px solid #ddd;">${booking.checkInDate}</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Guests:</td>
      <td style="padding: 8px; border: 1px solid #ddd;">${booking.guests}</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Total Price:</td>
      <td style="padding: 8px; border: 1px solid #ddd; color: #e67e22; font-weight: bold;">€${booking.totalPrice}</td>
    </tr>
  </table>
  
  ${booking.specialRequests ? `
    <h3>Special Requests:</h3>
    <p style="background: #f9f9f9; padding: 15px; border-left: 4px solid #e67e22;">${booking.specialRequests}</p>
  ` : ''}
  
  <p style="margin-top: 20px; padding: 15px; background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 4px;">
    <strong>Action Required:</strong> Please contact the customer to confirm the booking and provide payment instructions.
  </p>
</div>
      `
    };

    // In a real application, you would use a service like:
    // - Nodemailer with SMTP
    // - SendGrid
    // - Amazon SES
    // - Mailgun
    
    // For now, we'll simulate sending the email
    console.log('Booking notification email would be sent:', emailContent);
    
    // Simulate successful email sending
    await new Promise(resolve => setTimeout(resolve, 1000));

    res.json({ 
      success: true, 
      message: 'Booking notification sent successfully',
      bookingId: `BK${Date.now()}` // Generate a simple booking ID
    });

  } catch (error) {
    console.error('Error sending booking notification:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send booking notification' 
    });
  }
};

// Send booking confirmation to customer
export const handleBookingConfirmation: RequestHandler = async (req, res) => {
  try {
    const validatedData = BookingConfirmationSchema.parse(req.body);
    const booking = validatedData;

    const confirmationEmail = {
      to: booking.email,
      subject: `Booking Confirmation - ${booking.tourName} | Maroc Travel`,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h1 style="color: #e67e22; text-align: center;">Maroc Travel</h1>
  <h2 style="color: #333;">Booking Confirmation</h2>
  
  <p>Dear ${booking.firstName} ${booking.lastName},</p>
  
  <p>Thank you for your booking request! We have received your reservation and our team will contact you within 24 hours to confirm your booking and provide payment instructions.</p>
  
  <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <h3 style="color: #e67e22; margin-top: 0;">Your Booking Details:</h3>
    <table style="border-collapse: collapse; width: 100%;">
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Tour:</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${booking.tourName}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Date:</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${booking.checkInDate}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Guests:</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${booking.guests}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Total:</td>
        <td style="padding: 8px; border: 1px solid #ddd; color: #e67e22; font-weight: bold;">€${booking.totalPrice}</td>
      </tr>
    </table>
  </div>
  
  <p><strong>What's Next?</strong></p>
  <ul>
    <li>Our team will contact you within 24 hours</li>
    <li>We'll confirm availability and send payment instructions</li>
    <li>Full payment is required to secure your booking</li>
  </ul>
  
  <p>If you have any questions, please don't hesitate to contact us:</p>
  <p>📞 Phone: +212 123 456 789<br>
     📧 Email: booking@maroctravel.com<br>
     💬 WhatsApp: +212 123 456 789</p>
  
  <p>We look forward to providing you with an amazing Moroccan experience!</p>
  
  <p>Best regards,<br>
     The Maroc Travel Team</p>
</div>
      `
    };

    console.log('Booking confirmation email would be sent:', confirmationEmail);
    
    // Simulate successful email sending
    await new Promise(resolve => setTimeout(resolve, 500));

    res.json({ 
      success: true, 
      message: 'Booking confirmation sent successfully' 
    });

  } catch (error) {
    console.error('Error sending booking confirmation:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send booking confirmation' 
    });
  }
};
