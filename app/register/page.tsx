export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Create TemiLade Account
        </h1>
        
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full border rounded-lg px-3 py-2" />
          <input type="email" placeholder="Email" className="w-full border rounded-lg px-3 py-2" />
          <input type="tel" placeholder="Phone Number" className="w-full border rounded-lg px-3 py-2" />
          <input type="password" placeholder="Password" className="w-full border rounded-lg px-3 py-2" />
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold">
            Create Account
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Already have an account? <a href="/login" className="
