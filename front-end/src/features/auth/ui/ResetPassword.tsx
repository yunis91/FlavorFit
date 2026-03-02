'use client'
import { useMutation } from '@apollo/client/react'
import { Turnstile } from '@marsidev/react-turnstile'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

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

import { PAGES } from '@/shared/config/page.config'

import { ResetPasswordDocument } from '@/__generated__/graphql'

import { useCaptcha } from '../hooks/useCaptcha'
import { CaptchaField } from '../ui/CaptchaField'

import { IconLogo } from '@/shared/ui/icons/IconLogo'

interface FormData {
  password: string
  confirmPassword: string
}

export default function ResetPassword() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const token = searchParams.get('token')

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid }
  } = useForm<FormData>({
    mode: 'onChange'
  })

  const [resetPassword, { loading }] = useMutation(ResetPasswordDocument, {
    onCompleted: () => {
      toast.success('Password successfully changed')
      router.replace(PAGES.LOGIN)
    },
    onError: () => {
      toast.error('Invalid or expired link')
    }
  })

  const { captchaToken, setCaptchaToken, isValided } = useCaptcha()

  const onSubmit = async (data: FormData) => {
    if (!isValided) {
      toast.error('Please complete the CAPTCHA challenge', {
        id: 'captcha-error'
      })
      return
    }
    if (!token) return
    resetPassword({
      variables: {
        data: {
          token,
          newPassword: data.password
        }
      },
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
          <CardTitle>Reset Password</CardTitle>
        </CardHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="password">New Password</Label>
                <Input
                  id="password"
                  type="password"
                  {...register('password', {
                    required: true,
                    minLength: {
                      value: 8,
                      message: 'Password must be at least 8 characters long'
                    }
                  })}
                  placeholder="Enter password"
                  required
                  aria-invalid={!!errors.password}
                />
                {errors.password && (
                  <p className="text-destructive">{errors.password.message}</p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  {...register('confirmPassword', {
                    required: true,
                    validate: value =>
                      value === watch('password') || 'Passwords do not match'
                  })}
                  placeholder="Confirm password"
                  required
                  aria-invalid={!!errors.confirmPassword}
                />
                {errors.confirmPassword && (
                  <p className="text-destructive">
                    {errors.confirmPassword.message}
                  </p>
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
