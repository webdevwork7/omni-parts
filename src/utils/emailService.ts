
interface EmailData {
  fullName: string;
  phoneNumber: string;
  vehicleMakeModel: string;
  requiredPartService: string;
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    console.log('Attempting to send email with data:', data);
    
    // Fallback to EmailJS for immediate working solution
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: 'gmail',
        template_id: 'template_contact_form',
        user_id: 'your_emailjs_user_id',
        template_params: {
          to_email: 'webdevwork7@gmail.com',
          from_name: data.fullName,
          phone: data.phoneNumber,
          vehicle: data.vehicleMakeModel,
          service: data.requiredPartService,
          message: `New parts request from ${data.fullName}. Phone: ${data.phoneNumber}. Vehicle: ${data.vehicleMakeModel}. Service needed: ${data.requiredPartService}`
        }
      })
    });

    console.log('Email response status:', response.status);

    if (response.ok || response.status === 200) {
      console.log('Email sent successfully via EmailJS');
      return true;
    } else {
      console.error('EmailJS failed, trying direct method');
      
      // Try direct SMTP.js as backup
      const formData = new FormData();
      formData.append('SecureToken', 'C973D7AD-F097-4B95-91F4-40ABC5567812');
      formData.append('To', 'webdevwork7@gmail.com');
      formData.append('From', 'webdevwork7@gmail.com');
      formData.append('Subject', 'New Parts Quote Request - OmniParts');
      formData.append('Body', `
        New parts quote request:
        
        Name: ${data.fullName}
        Phone: ${data.phoneNumber}
        Vehicle: ${data.vehicleMakeModel}
        Service: ${data.requiredPartService}
      `);

      const smtpResponse = await fetch('https://smtpjs.com/v3/smtpjs.aspx', {
        method: 'POST',
        body: formData
      });

      console.log('SMTP.js response:', smtpResponse.status);
      return smtpResponse.ok;
    }

  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
};
