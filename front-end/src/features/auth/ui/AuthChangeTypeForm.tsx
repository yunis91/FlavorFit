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
  )
}
