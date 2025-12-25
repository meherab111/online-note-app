import { useState } from "react";

const App = () => {
  const [notes, setNotes] = useState("");

  const [allNotes, setAllNotes] = useState([]);

  const handleAddNote = (event) => {
    event.preventDefault();

    const copiedNotes = [...allNotes];

    copiedNotes.push({ noteValue: notes.trim() });

    setAllNotes(copiedNotes);

    console.log(copiedNotes);

    setNotes("");
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = [...allNotes];

    updatedNotes.splice(index, 1);

    setAllNotes(updatedNotes);

    console.log(updatedNotes);
  };

  return (
    <div className="flex flex-col md:flex-row h-full md:h-screen font-sans bg-gray-50">
      <div className="w-full md:w-1/2 bg-slate-900 text-white flex flex-col justify-center items-center p-8 relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-blue-600/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-purple-600/30 rounded-full blur-3xl"></div>

        <div className="z-10 w-full max-w-md flex flex-col gap-8">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-indigo-400">
              Note App
            </h1>
            <p className="text-gray-400 text-md md:text-lg">
              Capture your thoughts instantly.
            </p>
          </div>

          <form
            onSubmit={(event) => {
              handleAddNote(event);
            }}
            className="contents"
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-linear-to-r from-blue-500 to-indigo-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <textarea
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                className="relative w-full h-64 bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-md md:text-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none shadow-2xl transition-all duration-300"
                placeholder="Write your note..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={!notes.trim()}
              className="relative px-8 py-4 bg-linear-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold text-md md:text-lg hover:from-blue-500 hover:to-indigo-500 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 group w-full sm:w-auto self-start cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              Add Note
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>

      <div className="w-full md:w-1/2 bg-gray-50/50 flex flex-col h-full">
        <div className="px-8 pt-8 md:px-12 md:pt-12 pb-4 shrink-0">
          <div className="flex items-center justify-between border-b border-blue-600 pb-4">
            <h2 className="text-xl md:text-3xl font-bold text-blue-700">
              Recent Notes
            </h2>
            <span className="bg-white text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium shadow-sm border border-blue-200">
              {allNotes.length} Notes
            </span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-8 pb-8 md:px-12 md:pb-12 pt-4 space-y-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {allNotes.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4 opacity-60">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-16 h-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
              <p className="text-lg md:text-xl font-medium">
                No notes yet. Write something!
              </p>
            </div>
          ) : (
            allNotes.map((value, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 border border-gray-100/50 flex justify-between items-start gap-5"
              >
                <p className="text-gray-600 leading-relaxed text-base md:text-lg flex-1 font-medium break-all whitespace-pre-wrap">
                  {value.noteValue}
                </p>
                <button
                  onClick={() => handleDeleteNote(index)}
                  className="opacity-100 group-hover:opacity-100 p-2.5 text-red-500 hover:text-red-600 lg:hover:bg-red-100 rounded-xl transition-all duration-200 shrink-0 focus:opacity-100 cursor-pointer"
                  aria-label="Delete note"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
