import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-4">
      <main className="w-full max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold text-green-700 text-center mb-8 drop-shadow-lg">
          Codixverse
        </h1>
        <p className="text-center text-lg md:text-2xl text-green-900 mb-6 font-medium">
          Software Engineering & Cyber Security Team<br/>
          We develop Mobile, Desktop, and Web Applications
        </p>
        <section className="bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col gap-4 border border-green-200">
          <h2 className="text-2xl font-bold text-green-600 mb-2 text-center">Contact Us</h2>
          <div className="flex flex-col gap-2 text-green-800 text-center">
            <div>
              <span className="font-semibold">Email:</span> 
              <a href="mailto:mhmd@devm7md.xyz" className="underline hover:text-green-500">mhmd@devm7md.xyz</a>
            </div>
            <div>
              <span className="font-semibold">Phone:</span> 
              <a href="tel:+971502205912" className="underline hover:text-green-500">+971 50 220 5912</a>
            </div>
            <div>
              <span className="font-semibold">GitHub:</span> 
              <a href="https://github.com/codixverse" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-500">github.com/codixverse</a>
            </div>
            <div>
              <span className="font-semibold">Domain:</span> 
              <a href="https://codixverse.xyz" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-500">codixverse.xyz</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="mt-10 text-green-700 text-center text-sm opacity-80">
        &copy; {new Date().getFullYear()} Codixverse. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
