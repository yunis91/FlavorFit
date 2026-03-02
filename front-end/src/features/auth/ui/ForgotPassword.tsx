'use client'
import { useMutation } from '@apollo/client/react'
import { Turnstile } from '@marsidev/react-turnstile'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { isEmailRegex } from '@/features/auth/utils/is-email.regex'

import { Button } from '@/shared/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/shared/components/ui/card'
import { Input } from '@/shared/components/ui/input'
import { Label } from '@/shared/components/ui/label'

import { RequestPasswordResetDocument } from '@/__generated__/graphql'

import { useCaptcha } from '../hooks/useCaptcha'
import { CaptchaField } from '../ui/CaptchaField'

import { IconLogo } from '@/shared/ui/icons/IconLogo'

interface FormData {
  email: string
}

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<FormData>({
    mode: 'onChange'
  })

  const [requestReset, { loading }] = useMutation(
    RequestPasswordResetDocument,
    {
      onCompleted: () => {
        toast.success('If email exists, reset link was sent')
      },
      onError: () => {
        toast.error('Something went wrong')
      }
    }
  )

  const { captchaToken, setCaptchaToken, isValided } = useCaptcha()

  const onSubmit = (data: FormData) => {
    if (!isValided) {
      toast.error('Please complete the CAPTCHA challenge', {
        id: 'captcha-error'
      })
      return
    }
    requestReset({
      variables: { data },
      context: {
        headers: {
          'cf-turnstile-token': captchaToken
        }
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
          <CardTitle>Forgot Password</CardTitle>
        </CardHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
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
                  placeholder="Enter your email:"
                  required
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p className="text-destructive">{errors.email.message}</p>
                )}
              </div>
              <div className="flex scale-80 justify-center pt-2">
                <CaptchaField
                  onSuccess={setCaptchaToken}
                  onExpire={() => setCaptchaToken(null)}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full"
              disabled={!isValid || loading}
            >
              Send reset link
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
