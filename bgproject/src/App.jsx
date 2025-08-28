import { useState } from "react";

function App() {
  // Predefine all the Tailwind classes we want
  const colors = {
    red: "bg-red-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
    yellow: "bg-yellow-400",
    purple: "bg-purple-500",
  };

  // Initial background color
  const [color, setColor] = useState(colors.red);

  return (
    <div className={`w-full h-screen transition-colors duration-500 ${color}`}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {Object.entries(colors).map(([name, className]) => (
            <button
              key={name}
              onClick={() => setColor(className)}
              className={`${className} outline-none px-4 py-1 rounded-full text-white shadow-lg capitalize`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
