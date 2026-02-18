"use client";

import { submitContactForm } from "./api/formActions";

export default function Home() {
  const handleSubmit = async (formData: FormData) => {
    const result = await submitContactForm(formData);
    // Handle the result as needed (e.g., show success/error message)
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className=" max-w-md mx-auto bg-white  rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
        <form action={handleSubmit} className="space-y-4">
          <div className="text">
            <label
              htmlFor="name"
              className="text-sm block font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600"
              id="name"
              required
              name="name"
            />
          </div>
          <div className="text">
            <label
              htmlFor="email"
              className="text-sm block font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600"
              id="email"
              required
              name="email"
            />
          </div>
          <div className="text">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              required
              className="w-full px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600"
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white font-semibold p-3 cursor-pointer rounded-lg hover:bg-blue-700 transition duration-200">Send Message</button>
        </form>
      </div>
    </main>
  );
}
