'use client'

import { useApolloClient, useMutation } from '@apollo/client/react'
import Image from 'next/image'
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
  LoginMutation,
  LoginMutationVariables,
  MeDocument,
  RegisterDocument,
  RegisterMutation,
  RegisterMutationVariables
} from '@/__generated__/graphql'

import { isEmailRegex } from '../utils/is-email.regex'

import { AuthChangeTypeForm } from './AuthChangeTypeForm'
import { IconLogo } from '@/shared/ui/icons/IconLogo'

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

  const client = useApolloClient()

  const [auth, { loading }] = useMutation<
    LoginMutation | RegisterMutation,
    LoginMutationVariables | RegisterMutationVariables
  >(isLogin ? LoginDocument : RegisterDocument, {
    onCompleted: data => {
      const authData = 'login' in data ? data?.login : data?.register

      client.writeQuery({
        query: MeDocument,
        data: { me: authData.user }
      })

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
  })

  const handleAuth = async (data: AuthInput) => {
    auth({
      variables: {
        data
      }
    })
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="mx-auto mb-5 flex w-fit items-center gap-2">
        <div className="bg-primary flex h-14 w-14 items-center justify-center rounded-full">
          <IconLogo className="w-4.5 text-white" />
        </div>
        <div className="text-[3rem] font-extrabold">FlavorFit</div>
      </div>

      <Card className="relative w-full max-w-sm">
        <CardHeader>
          <CardTitle>{isLogin ? 'Sign In' : 'Sign Up'}</CardTitle>
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
                  id="email"
                  type="email"
                  {...register('email', {
                    required: true,
                    pattern: {
                      value: isEmailRegex,
                      message: 'Invalid email address'
                    }
                  })}
                  placeholder="Enter email:"
                  required
                  aria-invalid={!!errors.email}
                />

                {errors.email && (
                  <p className="text-destructive">{errors.email.message}</p>
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
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  required
                  aria-invalid={!!errors.password}
                />
                {errors.password && (
                  <p className="text-destructive">{errors.password.message}</p>
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

        <Image
          src="/images/graphics/salad.png"
          alt="Salad"
          width={140}
          height={140}
          className="user-select-none absolute -bottom-14 -left-14 -rotate-12"
          draggable={false}
        />
      </Card>
    </div>
  )
}
