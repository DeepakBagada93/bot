'use client';

import { useState } from 'react';

export default function Healthcare() {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [showScript, setShowScript] = useState(false);
  const [scriptCode, setScriptCode] = useState('');

  // Handle adding a new question
  const addQuestion = () => {
    if (newQuestion.trim()) {
      setQuestions([...questions, { id: Date.now(), text: newQuestion }]);
      setNewQuestion('');
    }
  };

  // Handle deleting a question
  const deleteQuestion = (id) => {
    setQuestions(questions.filter((question) => question.id !== id));
  };

  // Handle moving question up
  const moveUp = (index) => {
    if (index === 0) return; // Can't move up the first item
    const newQuestions = [...questions];
    const [movedItem] = newQuestions.splice(index, 1);
    newQuestions.splice(index - 1, 0, movedItem);
    setQuestions(newQuestions);
  };

  // Handle moving question down
  const moveDown = (index) => {
    if (index === questions.length - 1) return; // Can't move down the last item
    const newQuestions = [...questions];
    const [movedItem] = newQuestions.splice(index, 1);
    newQuestions.splice(index + 1, 0, movedItem);
    setQuestions(newQuestions);
  };

  // Generate the script for embedding the chatbot
  const generateScript = () => {
    const chatbotFlow = questions.map((question) => {
      return `  { question: "${question.text}", answer: "User's response goes here." }`;
    }).join(',\n');

    const script = `
      <script>
        (function() {
          const chatbotFlow = [
            ${chatbotFlow}
          ];

          function showChatbot() {
            const chatWindow = document.createElement('div');
            chatWindow.style.position = 'fixed';
            chatWindow.style.bottom = '20px';
            chatWindow.style.right = '20px';
            chatWindow.style.background = '#ffffff';
            chatWindow.style.border = '1px solid #ccc';
            chatWindow.style.padding = '10px';
            chatWindow.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
            chatWindow.style.borderRadius = '10px';
            chatWindow.innerHTML = '<h3>Healthcare Chatbot</h3><div id="chatbot-messages"></div><input type="text" id="user-input" placeholder="Ask a question..." style="width: 100%; padding: 10px; margin-top: 10px; border: 1px solid #ccc; border-radius: 5px;">';
            
            document.body.appendChild(chatWindow);

            const userInput = document.getElementById('user-input');
            const messagesDiv = document.getElementById('chatbot-messages');

            function handleUserInput(event) {
              if (event.key === 'Enter') {
                const userMessage = userInput.value;
                const botMessage = chatbotFlow.find(q => q.question.toLowerCase() === userMessage.toLowerCase())?.answer || 'I\'m sorry, I don\'t understand that question.';

                messagesDiv.innerHTML += '<div><strong>You:</strong> ' + userMessage + '</div>';
                messagesDiv.innerHTML += '<div><strong>Bot:</strong> ' + botMessage + '</div>';

                userInput.value = '';
                messagesDiv.scrollTop = messagesDiv.scrollHeight;
              }
            }

            userInput.addEventListener('keydown', handleUserInput);
          }

          // Automatically show the chatbot when the page loads
          window.onload = showChatbot;
        })();
      </script>
    `;

    setScriptCode(script);
    setShowScript(true);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Input Section */}
        <div>
          <h1 className="text-4xl font-bold text-black text-center mb-10">
            Build Your Healthcare Chatbot
          </h1>

          {/* Input for adding questions */}
          <div className="flex justify-center gap-4 mb-10">
            <input
              type="text"
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              placeholder="Type your question here..."
              className="border border-gray-300 rounded-lg p-2 w-2/3 focus:outline-none focus:ring-2 focus:ring-blue-600 text-black"
            />
            <button
              onClick={addQuestion}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Add Question
            </button>
          </div>

          {/* Questions List */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-black mb-4">Chatbot Flow</h2>
            {questions.length === 0 ? (
              <p className="text-gray-600">No questions added yet.</p>
            ) : (
              <ul className="space-y-4">
                {questions.map((question, index) => (
                  <li key={question.id} className="flex justify-between items-center border-b pb-2">
                    <span className="text-black">{question.text}</span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => moveUp(index)}
                        className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition"
                      >
                        ↑
                      </button>
                      <button
                        onClick={() => moveDown(index)}
                        className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition"
                      >
                        ↓
                      </button>
                      <button
                        onClick={() => deleteQuestion(question.id)}
                        className="text-red-600 hover:text-red-800 transition"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Button to generate script */}
          <div className="mt-6">
            {questions.length > 0 && (
              <button
                onClick={generateScript}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Generate Chatbot Script
              </button>
            )}
          </div>

          {/* Display the generated script */}
          {showScript && (
            <div className="mt-6 p-6 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-semibold text-black mb-4">Script to Embed on Your Website:</h3>
              <textarea
                value={scriptCode}
                readOnly
                className="w-full h-48 p-4 border border-gray-300 rounded-lg"
              />
              <p className="mt-4 text-gray-600">
                Copy the script above and paste it into your websites HTML to render the chatbot.
              </p>
            </div>
          )}
        </div>

        {/* Preview Section */}
        <div className="bg-gray-100 shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-black mb-4">Chatbot Preview</h2>
          {questions.length === 0 ? (
            <p className="text-gray-600">No questions added yet.</p>
          ) : (
            <div className="space-y-4">
              {questions.map((question) => (
                <div key={question.id} className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-lg">
                  <p className="text-black">{question.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
