
interface EmailData {
  fullName: string;
  phoneNumber: string;
  vehicleMakeModel: string;
  requiredPartService: string;
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    console.log('Attempting to send email with data:', data);
    
    const response = await fetch('/functions/v1/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    
    if (response.ok && result.success) {
      console.log('Email sent successfully');
      return true;
    } else {
      console.error('Email send failed:', result);
      return false;
    }

  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
};
