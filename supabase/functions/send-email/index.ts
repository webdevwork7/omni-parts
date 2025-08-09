
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    console.log('Edge function called');
    const { fullName, phoneNumber, vehicleMakeModel, requiredPartService } = await req.json()

    console.log('Received email request:', { fullName, phoneNumber, vehicleMakeModel, requiredPartService });

    // Using Gmail SMTP with nodemailer-like approach for Deno
    const emailData = {
      to: 'webdevwork7@gmail.com',
      from: 'webdevwork7@gmail.com',
      subject: 'New Parts Quote Request - OmniParts',
      text: `
        New parts quote request received:
        
        Customer Name: ${fullName}
        Phone Number: ${phoneNumber}
        Vehicle: ${vehicleMakeModel}
        Required Part/Service: ${requiredPartService}
        
        Please contact the customer as soon as possible.
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626;">New Parts Quote Request</h2>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Customer Name:</strong> ${fullName}</p>
            <p><strong>Phone Number:</strong> ${phoneNumber}</p>
            <p><strong>Vehicle:</strong> ${vehicleMakeModel}</p>
            <p><strong>Required Part/Service:</strong> ${requiredPartService}</p>
          </div>
          <p style="color: #6b7280; font-size: 14px;">
            This request was submitted through the OmniParts website contact form.
          </p>
        </div>
      `
    };

    // Send email using Gmail SMTP
    const emailResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: 'gmail',
        template_id: 'template_contact',
        user_id: 'your-emailjs-user-id',
        template_params: {
          to_email: 'webdevwork7@gmail.com',
          from_email: 'webdevwork7@gmail.com',
          subject: 'New Parts Quote Request - OmniParts',
          message: emailData.text,
          html_message: emailData.html
        }
      })
    });

    console.log('Email API response status:', emailResponse.status);

    if (emailResponse.ok) {
      console.log('Email sent successfully');
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Email sent successfully!' 
        }),
        { 
          headers: { 
            ...corsHeaders, 
            'Content-Type': 'application/json' 
          } 
        }
      )
    } else {
      throw new Error('Email sending failed');
    }

  } catch (error) {
    console.error('Error sending email:', error)
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Failed to send email',
        details: error.message 
      }),
      { 
        status: 500,
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )
  }
})
