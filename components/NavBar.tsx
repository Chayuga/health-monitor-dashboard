import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

const NavBar = () => {
  const { data: session } = useSession();
  return (
    <div className='w-[100%] bg-green-500 h-[20%]'>
      <div className='w-[80%] mx-auto justify-between'>
        <div></div>
        <div></div>
        <div className='flex items-center'>
          <p>{session?.user?.name}</p>
          {session?.user?.image}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
