export default function TabNavigation({ tabs, active, setActive }) {
  return (
    <div className="flex flex-wrap gap-2 bg-gray-900 p-3 text-white justify-center space-x-8">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`px-4 py-2 rounded-lg transition 
          ${active === tab ? "bg-gray-700" : "bg-gray-800 hover:bg-gray-700"}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
