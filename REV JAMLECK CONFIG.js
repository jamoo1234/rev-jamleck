import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const videos = [
  {
    title: "The Power of Prayer",
    url: "https://www.youtube.com/embed/VIDEO_ID1"
  },
  {
    title: "Faith in Hard Times",
    url: "https://www.youtube.com/embed/VIDEO_ID2"
  }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "mailto:ngangajamleck@gmail.com";
  };

  return (
    <div className="min-h-screen bg-blue-50 text-blue-900">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-blue-800 text-white">
        <h1 className="text-2xl font-bold">Rev Jamleck</h1>
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-yellow-300">About</a>
          <a href="#scriptures" className="hover:text-yellow-300">Scriptures</a>
          <a href="#sermons" className="hover:text-yellow-300">Sermons</a>
          <a href="#contact" className="hover:text-yellow-300">Talk to Us</a>
        </nav>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col px-6 py-2 bg-blue-700 text-white">
          <a href="#about" className="py-1">About</a>
          <a href="#scriptures" className="py-1">Scriptures</a>
          <a href="#sermons" className="py-1">Sermons</a>
          <a href="#contact" className="py-1">Talk to Us</a>
        </nav>
      )}

      {/* About Section */}
      <section id="about" className="p-6 bg-white shadow-inner">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">About Rev Jamleck Ministries</h2>
        <p className="text-blue-900 leading-relaxed">
          Rev Jamleck Ministries is dedicated to spreading the word of God through scripture, worship, and digital outreach. Our mission is to inspire, uplift, and guide believers with biblical truths, powerful sermons, and community fellowship. Join us as we walk together in faith, share the gospel, and grow spiritually.
        </p>
      </section>

      {/* Video Section */}
      <main className="p-6">
        <h2 className="text-xl font-semibold text-yellow-600 mb-4">Biblical Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video, index) => (
            <div key={index} className="bg-white shadow-md rounded-2xl overflow-hidden">
              <iframe
                className="w-full h-64"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="p-4 text-center font-medium text-blue-800">
                {video.title}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Scriptures Section */}
      <section id="scriptures" className="p-6 bg-yellow-50">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">Scriptures</h2>
        <div className="space-y-4 text-blue-900">
          <p><span className="font-bold">Philippians 4:13:</span> I can do all things through Christ who strengthens me.</p>
          <p><span className="font-bold">Jeremiah 29:11:</span> "For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you hope and a future."</p>
          <p><span className="font-bold">Psalm 23:1:</span> The Lord is my shepherd, I shall not want.</p>
        </div>
      </section>

      {/* Sermons Section */}
      <section id="sermons" className="p-6 bg-white">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">Sermons</h2>
        <div className="space-y-4 text-blue-900">
          <p><span className="font-bold">Title:</span> Living a Life of Purpose</p>
          <p><span className="font-bold">Scripture:</span> Romans 8:28 - "And we know that in all things God works for the good of those who love him, who have been called according to his purpose."</p>
          <p><span className="font-bold">Summary:</span> This sermon explores how believers can align their lives with God's divine purpose and live intentionally, knowing that God's plans are always for our good.</p>
        </div>
      </section>

      {/* Talk to Us Section */}
      <section id="contact" className="p-6 bg-white shadow-inner">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">Talk to Us</h2>
        <p className="mb-4 text-blue-900">You can also reach us directly at <a href="mailto:ngangajamleck@gmail.com" className="text-blue-600 underline">ngangajamleck@gmail.com</a> or call <span className="font-semibold">+254 710792397</span>.</p>
        <form className="space-y-4 max-w-xl" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input type="text" className="w-full p-2 border rounded-xl" placeholder="Your name" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input type="email" className="w-full p-2 border rounded-xl" placeholder="Your email" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea className="w-full p-2 border rounded-xl" rows="4" placeholder="Write your message here..." required></textarea>
          </div>
          <div>
            <label className="block mb-1 font-medium">Subscribe to our newsletter (optional)</label>
            <input type="checkbox" /> <span className="ml-2">Yes, I want to receive updates.</span>
          </div>
          <button
            type="submit"
            className="bg-blue-800 text-white px-6 py-2 rounded-xl hover:bg-blue-900"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="mt-10 p-4 bg-blue-800 text-white text-center">
        <div className="mb-2">
          <a href="https://facebook.com/revjamleck" target="_blank" rel="noopener noreferrer" className="mx-2 hover:underline">Facebook</a>
          <a href="https://instagram.com/revjamleck" target="_blank" rel="noopener noreferrer" className="mx-2 hover:underline">Instagram</a>
          <a href="https://www.youtube.com/@revjamleck" target="_blank" rel="noopener noreferrer" className="mx-2 hover:underline">YouTube</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Rev Jamleck Ministries. All rights reserved.</p>
      </footer>
    </div>
  );
}
