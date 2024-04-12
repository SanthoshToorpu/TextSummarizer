import React from 'react';

function Home() {
  return (
    <>
      <header className="flex h-16 w-full shrink-0 items-center px-4 md:px-6 bg-gray-100 dark:bg-gray-900 mb-4">
        <button
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 lg:hidden"
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-:ri:"
          data-state="closed"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
          <span className="sr-only">Toggle navigation menu</span>
        </button>
        <h1 className="text-lg font-semibold mx-auto">Text Summarizer</h1>
      </header>
      <div className="grid w-full max-w-100 gap-6 px-4">
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 w-full">
            <div className="grid gap-2 p-4">
              <h2 className="text-lg font-medium">Input</h2>
              <div className="flex flex-col h-[200px]">
                <textarea
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 resize-none"
                  placeholder="Type or paste your text here."
                ></textarea>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 w-full">
            <div className="grid gap-2 p-4">
              <h2 className="text-lg font-medium">Upload Document</h2>
              <div className="flex flex-col items-center justify-center h-[150px] border border-dashed border-gray-300 dark:border-gray-700 rounded-lg">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  htmlFor="file-upload"
                >
                  <span className="text-blue-600 dark:text-blue-400">Choose a file</span> or drag it here.
                </label>
                <input
                  className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 hidden"
                  id="file-upload"
                  type="file"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 dark:border-gray-800 w-full">
          <div className="grid gap-2 p-4">
            <h2 className="text-lg font-medium">Preferences</h2>
            <div className="flex flex-col h-[50px]">
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 resize-none"
                placeholder="Enter your preferences here."
                type="text"
                style={{ height: '50px' }}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full max-w-xs mx-4">
            Clear
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full max-w-xs bg-black text-white mx-4">
            Summarize
          </button>
        </div>
        <div className="rounded-lg border border-gray-200 dark:border-gray-800 w-full">
          <div className="grid gap-2 p-4">
            <h2 className="text-lg font-medium">Output</h2>
            <div className="flex flex-col h-[300px]">
              <textarea
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 resize-none cursor-not-allowed"
                placeholder="Your summarized text will appear here."
                readOnly
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
