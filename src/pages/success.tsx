import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Header from '@/components/Header';

export default function Profile() {
  const { user, error, isLoading }:any = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
    
    <Header />
    
   { user && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    
    )  }
    </>
    
  );
}