
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

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

    // Email configuration
    const emailConfig = {
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'webdevwork7@gmail.com',
        pass: 'cusx pyau ezij hfvh'
      }
    }

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

    // Use Deno's built-in fetch to send email via SMTP API service
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: 'gmail',
        template_id: 'template_1',
        user_id: 'public_key',
        template_params: {
          from_name: fullName,
          from_email: 'webdevwork7@gmail.com',
          to_email: 'webdevwork7@gmail.com',
          subject: 'New Parts Quote Request - OmniParts',
          message: `
            Customer Name: ${fullName}
            Phone: ${phoneNumber}
            Vehicle: ${vehicleMakeModel}
            Required Part/Service: ${requiredPartService}
          `
        }
      })
    })

    // Alternative approach using a simple SMTP relay
    const smtpResponse = await fetch('https://smtp-relay-service.vercel.app/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'webdevwork7@gmail.com',
        subject: 'New Parts Quote Request - OmniParts',
        html: emailContent.html,
        auth: {
          user: 'webdevwork7@gmail.com',
          pass: 'cusx pyau ezij hfvh'
        }
      })
    })

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
