export default function ContactPage() {
    return (
      <main className="min-h-screen bg-white px-4 py-20 text-gray-900">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Get in Touch
          </h1>
          <p className="text-center text-gray-600 mb-10">
            Have questions about shrimp care, shipping, or orders? Send us a message!
          </p>
  
          <form className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
                <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black-500"
                required
                />
    
                <input
                type="email"
                name="email"
                placeholder="Email *"
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
                />
            </div>

            <input
              type="text"
              name="number"
              placeholder="Phone number"
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />            
  
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
  
            <button
              type="submit"
              className="bg-teal-600 text-white font-semibold px-6 py-3 rounded hover:bg-teal-700 transition"
            >
              Send
            </button>
          </form>
        </div>
      </main>
    );
  }
  