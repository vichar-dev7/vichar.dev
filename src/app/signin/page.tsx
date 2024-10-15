import Signin from '@/components/Signin';
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation';
import React from 'react'

const SigninPage = async() => {
    const session=await getServerSession(authOptions);
    if(session?.user){
        redirect('/');
    }
    return <Signin/>
  return (
    <div>page</div>
  )
}

export default SigninPage