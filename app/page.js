'use client';

import Link from 'next/link';

export default function Home() {
  const cards = [
    { id: 1, title: 'Healthcare Chatbots', description: 'AI-powered solutions for clinics.', href: '/healthcare' },
    { id: 2, title: 'Travel Chatbots', description: 'AI solutions for travel agencies.', href: '/travel' },
    { id: 3, title: 'E-commerce Chatbots', description: 'Boost sales with personalized bots.', href: '#' },
    { id: 4, title: 'Education Chatbots', description: 'Engage students with interactive bots.', href: '#' },
    { id: 5, title: 'Customer Support Bots', description: 'Enhance support with AI bots.', href: '#' },
    { id: 6, title: 'Finance Chatbots', description: 'Simplify banking and investments.', href: '#' },
    { id: 7, title: 'Real Estate Chatbots', description: 'Assist clients with property info.', href: '#' },
    { id: 8, title: 'Event Planning Chatbots', description: 'Plan events with AI assistants.', href: '#' },
    { id: 9, title: 'Fitness Chatbots', description: 'Track workouts and goals.', href: '#' },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-10">Welcome to Chatbot Hub</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <Link key={card.id} href={card.href}>
              <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg hover:cursor-pointer transform hover:scale-105 transition duration-300">
                <h2 className="text-xl font-bold text-gray-700">{card.title}</h2>
                <p className="text-gray-600 mt-2">{card.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
