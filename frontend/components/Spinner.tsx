export default function Spinner() {
    return (
      <div className="flex justify-center items-center h-full">
        <div
          className="w-10 h-10 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"
          aria-label="Loading..."
        />
      </div>
    );
  }
  