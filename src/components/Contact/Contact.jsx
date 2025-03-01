import React from 'react'

function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="bg-gray-800 text-white w-full max-w-lg p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
        
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input 
              type="text" 
              className="w-full p-3 border rounded-lg bg-gray-700 border-gray-600 focus:outline-none focus:border-blue-400" 
              placeholder="Enter your name" 
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input 
              type="email" 
              className="w-full p-3 border rounded-lg bg-gray-700 border-gray-600 focus:outline-none focus:border-blue-400" 
              placeholder="Enter your email" 
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea 
              rows="4" 
              className="w-full p-3 border rounded-lg bg-gray-700 border-gray-600 focus:outline-none focus:border-blue-400" 
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact