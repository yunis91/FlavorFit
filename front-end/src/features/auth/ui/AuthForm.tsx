'use client'

import { useMutation } from '@apollo/client/react'
import Link from 'next/link'

import { Button } from '@/shared/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/shared/components/ui/card'
import { Input } from '@/shared/components/ui/input'
import { Label } from '@/shared/components/ui/label'

import { PAGES } from '@/shared/config/page.config'

import { LoginDocument, RegisterDocument } from '@/__generated__/graphql'

interface Props {
  type: 'login' | 'register'
}

export function AuthForm({ type }: Props) {
  const isLogin = type === 'login'
  const [register, { data, loading, error }] = useMutation(
    isLogin ? LoginDocument : RegisterDocument
  )

  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-full max-w-sm bg-linear-to-br from-[#8062ee] to-[#a088fc] text-white">
        <CardHeader>
          <CardTitle>{isLogin ? 'Login' : 'Register'}</CardTitle>
          <CardAction>
            <Button
              asChild
              variant="link"
            >
              {isLogin ? (
                <Link
                  className="text-white"
                  href={PAGES.REGISTER}
                >
                  Register
                </Link>
              ) : (
                <Link
                  className="text-white"
                  href={PAGES.LOGIN}
                >
                  Login
                </Link>
              )}
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  className="placeholder:text-white"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            className="w-full"
            disabled={loading}
          >
            {isLogin ? 'Login' : 'Register'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
