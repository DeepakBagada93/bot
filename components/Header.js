export default function Header() {
    return (
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Chatbot Hub</h1>
          <nav className="space-x-4">
            <a href="/" className="hover:underline">Home</a>
            <a href="/about" className="hover:underline">About</a>
            <a href="/services" className="hover:underline">Services</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>
    );
  }
  