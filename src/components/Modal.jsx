export default function Modal({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center p-4 z-50 animate-fadeIn">
      <div className="bg-white text-black rounded-xl shadow-2xl p-6 w-full max-w-lg relative animate-scaleIn">

        {/* Botón X */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
}
