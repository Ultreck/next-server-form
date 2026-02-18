// app/contact/success/page.tsx
export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center">
        <h1 className="text-2xl font-bold text-green-600 mb-4">Success!</h1>
        <p className="text-gray-600 mb-6">Your message has been sent.</p>
        <a href="/contact" className="text-blue-600 hover:underline">
          Send another message
        </a>
      </div>
    </div>
  );
}