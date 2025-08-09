
interface EmailData {
  fullName: string;
  phoneNumber: string;
  vehicleMakeModel: string;
  requiredPartService: string;
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    console.log('Attempting to send email with data:', data);
    
    // Use SMTP.js directly - this is working based on your logs
    const formData = new FormData();
    formData.append('SecureToken', 'C973D7AD-F097-4B95-91F4-40ABC5567812');
    formData.append('To', 'webdevwork7@gmail.com');
    formData.append('From', 'webdevwork7@gmail.com');
    formData.append('Subject', 'New Parts Quote Request - OmniParts');
    formData.append('Body', `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #dc2626;">New Parts Quote Request</h2>
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Customer Name:</strong> ${data.fullName}</p>
          <p><strong>Phone Number:</strong> ${data.phoneNumber}</p>
          <p><strong>Vehicle:</strong> ${data.vehicleMakeModel}</p>
          <p><strong>Required Part/Service:</strong> ${data.requiredPartService}</p>
        </div>
        <p style="color: #6b7280; font-size: 14px;">
          This request was submitted through the OmniParts website contact form.
        </p>
      </div>
    `);

    const response = await fetch('https://smtpjs.com/v3/smtpjs.aspx', {
      method: 'POST',
      body: formData
    });

    console.log('SMTP.js response status:', response.status);
    console.log('Email sent successfully via SMTP.js');
    
    return response.status === 200;

  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
};
