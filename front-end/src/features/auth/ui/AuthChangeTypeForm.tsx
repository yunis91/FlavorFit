import Link from 'next/link'

import { Button } from '@/shared/components/ui/button'

import { PAGES } from '@/shared/config/page.config'

interface Props {
  isLogin: boolean
}

export function AuthChangeTypeForm({ isLogin }: Props) {
  return (
    <Button
      asChild
      variant="link"
    >
      {isLogin ? (
        <Link
          className="link-simple"
          href={PAGES.REGISTER}
        >
          Sign Up
        </Link>
      ) : (
        <Link
          className="link-simple"
          href={PAGES.LOGIN}
        >
          Sign In
        </Link>
      )}
    </Button>
  )
}
