'use client'

import { useMutation } from '@apollo/client/react'
import cn from 'clsx'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { Button } from '@/shared/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/shared/components/ui/card'
import { Input } from '@/shared/components/ui/input'
import { Label } from '@/shared/components/ui/label'

import {
  AuthInput,
  LoginDocument,
  RegisterDocument
} from '@/__generated__/graphql'

import { isEmailRegex } from '../utils/is-email.regex'

import { AuthChangeTypeForm } from './AuthChangeTypeForm'

interface Props {
  type: 'login' | 'register'
}

export function AuthForm({ type }: Props) {
  const isLogin = type === 'login'

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<AuthInput>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const [auth, { loading }] = useMutation(
    isLogin ? LoginDocument : RegisterDocument,
    {
      onCompleted: () => {
        toast.success(
          isLogin ? 'Login successful!' : 'Registration successful!',
          {
            id: 'auth-success'
          }
        )
      },
      onError: error => {
        toast.error(error.message, {
          id: 'auth-success'
        })
      }
    }
  )

  const handleAuth = async (data: AuthInput) => {
    auth({
      variables: {
        data
      }
    })
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-full max-w-sm bg-linear-to-br from-[#8062ee] to-[#a088fc] text-white">
        <CardHeader>
          <CardTitle>{isLogin ? 'Login' : 'Register'}</CardTitle>
          <CardAction>
            <AuthChangeTypeForm isLogin={isLogin} />
          </CardAction>
        </CardHeader>

        <form onSubmit={handleSubmit(handleAuth)}>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  {...register('email', {
                    required: true,
                    pattern: {
                      value: isEmailRegex,
                      message: 'Invalid email address'
                    }
                  })}
                  className={cn(
                    'border border-transparent placeholder:text-white',
                    errors.email ? 'border-red-500' : ''
                  )}
                  placeholder="Enter email address"
                  required
                />

                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  {...register('password', {
                    required: true,
                    minLength: {
                      value: 8,
                      message: 'Password must be at least 8 characters long'
                    }
                  })}
                  type="password"
                  placeholder="Enter password"
                  className={cn(
                    'borde border border-transparent placeholder:text-white',
                    errors.password ? 'border-red-500' : ''
                  )}
                  required
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full"
              disabled={!isValid || loading}
            >
              {isLogin ? 'Login' : 'Register'}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
