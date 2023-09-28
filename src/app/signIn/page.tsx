'use client'

import { SubmitHandler, useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FormController } from '../components/FormComponents/FormController';
import { emailPattern } from '@/constants/regExp';
import { Button } from '../components/Button';
import classNames from 'classnames';


interface AuthForm {
    email: string,
    password: string,
    ['repeat password']: string
}

export default function SignIn () {
    const router = useRouter();
    const [isRegister, setIsRegister] = useState(false);

    const {
        handleSubmit,
        formState: { errors, isSubmitting },
        setFocus,
        control,
        trigger,
        watch,
        reset
    } = useForm<AuthForm>({
      mode: 'onTouched'
    });

    useEffect(() => {
        setFocus('email');
    }, [setFocus]);

    const onSubmit: SubmitHandler<AuthForm> = async (data) => {
        if (isRegister) {
          console.log('go to server with ', data)
        } else {

        }

        try {
          const res = await signIn('credentials', {
            email: data.email,
            password: data.password,
            redirect: false
          })
          if (res?.ok) {
            router.push('/');
          }
          console.log(res?.error)
        } catch (e: any) {
          console.log(e.message)
        } finally {
          reset();
        }
    }
    const password = watch('password');
    
    return (
      <div className="h-screen max-w-xs flex items-center mx-auto">
        <form 
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit(onSubmit)}>
            {isSubmitting && <p className="p-4 bg-green-400">submitting</p>}          
            

            <div className='mb-6'>
              <Button position='center' type='button' onClick={() => setIsRegister(prev => !prev)}>
                <div className='flex'>
                  <div className={classNames('px-2 py-1 rounded-l-md border-l border-t border-b border-gray-800 transition-colors duration-300', {
                    'bg-gray-800 text-white border border-r rounded-r-md -mr-1': !isRegister
                  })}>sign in</div>
                  <div  className={classNames('px-2 py-1 rounded-r-md border-r border-t border-b border-gray-800 transition-colors duration-300', {
                    'bg-gray-800 text-white border border-l rounded-l-md -ml-1': isRegister
                  })}>register</div>
                </div>
              </Button>
            </div>


            {isRegister && (
              <FormController
                name='name'
                control={control}
                trigger={trigger}
                placeholder='your name'
              />
            )}

            <FormController 
              name='email' 
              control={control} 
              trigger={trigger}
              rules={{required: 'email is required', pattern: {
                value: emailPattern,
                message: 'email invalid'
              }}}
              placeholder='example@gmail.com'
            />

            <FormController 
              name='password' 
              control={control} 
              trigger={trigger}
              rules={{required: 'password is required'}}
              type='password'
              placeholder='****'
            />

            {isRegister && (
              <FormController
                name='repeat password'
                control={control}
                trigger={trigger}
                rules={{validate: (value: string) => value === password || 'Passwords do not match'
                }}
                type='password'
                placeholder='****'
              />
            )}
              
            <Button 
              text={isRegister ? 'sign up' : 'sign in'}
              type='submit' 
              color='gray'
              disabled={isSubmitting}
            />
        </form>
      </div>


    )
}
