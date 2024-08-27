const Page = () => {

    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl mb-4">Welcome to Dream Wealth</h2>
          <button
            className="w-full bg-blue-500 text-white p-2 rounded mb-2"
          >
            Sign Up
          </button>
          <button
            className="w-full bg-red-500 text-white p-2 rounded"
          >
            Sign Up with Google
          </button>
        </div>
      </div>
    );
  }
  
  export default Page;