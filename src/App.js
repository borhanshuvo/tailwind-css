import React from "react";

const App = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="max-w-sm mx-auto p-8 bg-white rounded-xl shadow-md space-y-2 sm:flex sm:items-center sm:py-4 sm:space-y-0 sm:space-x-6 dark:bg-gray-800 sm:dark:hover:bg-gray-700">
        <img
          src="https://img.search.brave.com/B6Qd59FjbR__QF1jJu7SqSMmjYz8RUpsmYkZolFfcaI/rs:fit:499:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC52/UjNjOGdKRHRUWnVG/RkpMYTNuSGN3SGFI/QyZwaWQ9QXBp"
          className="h-24 mx-auto rounded-full ring-4 ring-green-400 sm:mx-0 sm:flex-shrink-0 transform hover:scale-105 duration-700"
          alt="learn with borhan"
        />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold dark:text-gray-300">
              Learn with Borhan
            </p>
            <p className="text-gray-500 font-medium dark:text-gray-500">VS Code Editior</p>
          </div>
          <button className="px-4 py-1 border rounded-full border-purple-200 text-sm text-purple-600 font-semibold hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 transform duration-700 dark:text-purple-400">
            Learn Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default App;
