// app/contact/actions.ts
"use server";

import { redirect } from "next/navigation";

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Validation
  if (!name || !email || !message) {
    // Can't return error state without client component
    // Redirect to error page instead
    redirect("/contact?error=missing-fields");
  }

  if (!email.includes("@")) {
    redirect("/contact?error=invalid-email");
  }

  // Save to database
  console.log("Form submitted:", { name, email, message });
  
  // Redirect to success page
  redirect("/contact/success");
}