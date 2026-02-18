"use server";

export async function submitContactForm(formData: FormData) {
  //Extract form data
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  //Validation
  if (!name || !email || !message) {
    return {
      success: false,
      error: "All fields are required",
    };
  }

  if (!email.includes("@")) {
    return {
      success: false,
      error: "Please enter a valid email",
    };
  }

  //Simulate database save
  //await db.contact.create({...})
  
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Form submitted: ", { name, email, message });

  return {
    success: true,
    message: "Thank you! We'll be in touch soon",
  };
}
