import { Turnstile, TurnstileInstance } from '@marsidev/react-turnstile'
import { RefObject } from 'react'

interface Props {
  ref?: RefObject<TurnstileInstance | null>
  onSuccess: (token: string) => void
  onExpire: () => void
}

export function CaptchaField({ ref, onSuccess, onExpire }: Props) {
  return (
    <div className="flex scale-80 justify-center pt-2">
      <Turnstile
        ref={ref}
        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
        onSuccess={onSuccess}
        onExpire={onExpire}
        options={{ theme: 'light' }}
      />
    </div>
  )
}
