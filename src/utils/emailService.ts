interface EmailData {
  fullName: string;
  phoneNumber: string;
  vehicleMakeModel: string;
  requiredPartService: string;
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    console.log("Attempting to send email with data:", data);

    // Simple, no-backend solution using FormSubmit
    const response = await fetch(
      "https://formsubmit.co/ajax/webdevwork7@gmail.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.fullName,
          phone: data.phoneNumber,
          vehicle: data.vehicleMakeModel,
          message: data.requiredPartService,
          _subject: "New Parts Quote Request - OmniParts",
          _captcha: "false",
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("FormSubmit failed:", errorText);
      return false;
    }

    const result = await response.json();
    // FormSubmit returns { success: "..." } on success
    const isOk = Boolean(result && result.success);
    if (!isOk) {
      console.error("FormSubmit unexpected response:", result);
    }
    return isOk;
  } catch (error) {
    console.error("Email sending failed:", error);
    return false;
  }
};
