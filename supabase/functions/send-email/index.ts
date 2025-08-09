
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
    const { fullName, phoneNumber, vehicleMakeModel, requiredPartService } = await req.json()

    console.log('Received email request:', { fullName, phoneNumber, vehicleMakeModel, requiredPartService });

    // Create email content
    const emailContent = {
      from: 'webdevwork7@gmail.com',
      to: 'webdevwork7@gmail.com',
      subject: 'New Parts Quote Request - OmniParts',
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
    }

    // Use Gmail SMTP to send email
    const smtpData = {
      personalizations: [
        {
          to: [{ email: 'webdevwork7@gmail.com' }],
          subject: 'New Parts Quote Request - OmniParts'
        }
      ],
      from: { email: 'webdevwork7@gmail.com' },
      content: [
        {
          type: 'text/html',
          value: emailContent.html
        }
      ]
    };

    // Using SMTP.js service for sending emails
    const emailResponse = await fetch('https://smtpjs.com/v3/smtpjs.aspx', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        'SecureToken': 'C973D7AD-F097-4B95-91F4-40ABC5567812',
        'To': 'webdevwork7@gmail.com',
        'From': 'webdevwork7@gmail.com',
        'Subject': 'New Parts Quote Request - OmniParts',
        'Body': `
          New parts quote request received:
          
          Customer Name: ${fullName}
          Phone Number: ${phoneNumber}
          Vehicle: ${vehicleMakeModel}
          Required Part/Service: ${requiredPartService}
          
          Please contact the customer as soon as possible.
        `
      })
    });

    console.log('SMTP response status:', emailResponse.status);
    
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

  } catch (error) {
    console.error('Error sending email:', error)
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Failed to send email' 
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
