'use client';
// import { signIn, signOut, useSession } from 'next-auth/react';
import '../globals.css';
// import '../components/Aren'
import Arena from '@/components/Arena';
const Page = () => {
  // const { data: session, status } = useSession();
  // if (status === 'loading') {
  //   return <div>Loading...</div>;
  // }
  return (
    //commetn
    // <div className="bg-white p-6 rounded shadow-md">
    //   <h2 className="text-2xl mb-4">Welcome Dream Wealth</h2>
    //   <button
    //     // onClick={() => signIn()}
    //     className="w-full bg-blue-500 text-white p-2 rounded mb-2"
    //   >
    //     Sign In
    //   </button>
    //   <button
    //     // onClick={() => signIn('google')}
    //     className="w-full bg-red-500 text-white p-2 rounded"
    //   >
    //     Sign In with Google
    //   </button>
    // </div>
    //   <div className="bg-white p-6 rounded shadow-md">
    //   {/* <h2 className="text-2xl mb-4">Hello, {session.user!.email}</h2> */}
    //   <button
    //     // onClick={() => signOut()}
    //     className="w-full bg-gray-500 text-white p-2 rounded"
    //   >
    //     Sign Out
    //   </button>
    // </div>
    <div className="min-h-screen flex items-center justify-center">
      {/* {!session ? ( */}
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl mb-4">Welcome to Dream Wealth</h2>
        <button
          // onClick={() => signIn()}
          className="w-full bg-blue-500 text-white p-2 rounded mb-2"
        >
          Sign Up
        </button>
        <button
          // onClick={() => signIn('google')}
          className="w-full bg-red-500 text-white p-2 rounded"
        >
          Sign Up with Google
        </button>
      </div>
      {/* ) : ( */}
    {/* <Arena></Arena> */}
      {/* )} */}
    </div>
  );
}

export default Page;
