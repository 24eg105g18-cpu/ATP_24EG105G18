import { useCounterStore } from "../stores/useCounterStore";

function Home() {
  // Extract state and actions from the Zustand store
  const counter = useCounterStore((state) => state.newCounter);
  const increment = useCounterStore((state) => state.incrementCounter);
  const decrement = useCounterStore((state) => state.decrementCounter);
  const reset = useCounterStore((state) => state.resetCounter);

  console.log("Home rendered");

  return (
    <div className="p-10 space-y-6">
      {[1, 2, 3, 4].map((_, index) => (
        <div key={index} className="bg-white p-5 shadow-lg rounded-lg border-l-4 border-purple-500">
          <h2 className="text-xl text-purple-700">Counter {index + 1}: {counter}</h2>

          <div className="flex gap-4 mt-3">
            <button onClick={increment} className="bg-purple-500 p-2 text-white rounded hover:bg-purple-600">
              +
            </button>
            <button onClick={decrement} className="bg-pink-500 p-2 text-white rounded hover:bg-pink-600">
              -
            </button>
            <button onClick={reset} className="bg-purple-300 p-2 text-purple-900 rounded hover:bg-purple-400">
              reset
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;