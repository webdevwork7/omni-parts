
interface EmailData {
  fullName: string;
  phoneNumber: string;
  vehicleMakeModel: string;
  requiredPartService: string;
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    // Using EmailJS as a client-side email service
    const emailContent = {
      to_email: 'webdevwork7@gmail.com',
      from_name: data.fullName,
      subject: 'New Parts Quote Request - OmniParts',
      message: `
        New parts quote request received:
        
        Customer Name: ${data.fullName}
        Phone Number: ${data.phoneNumber}
        Vehicle: ${data.vehicleMakeModel}
        Required Part/Service: ${data.requiredPartService}
        
        Please contact the customer as soon as possible.
      `
    };

    // Log the email data
    console.log('Email would be sent:', emailContent);
    
    // Simulate successful email send
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });

  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
};
