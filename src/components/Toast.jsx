import { useEffect } from "react";

export default function Toast({ message, type, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => onClose(), 3000);
    return () => clearTimeout(timer);
  }, []);

  const colors = {
    success: "bg-green-600",
    error: "bg-red-600",
    warning: "bg-yellow-600",
  };

  return (
    <div
      className={`fixed top-4 right-4 px-4 py-3 text-white rounded-lg shadow-lg z-50 animate-fadeIn ${colors[type]}`}
    >
      {message}
    </div>
  );
}
