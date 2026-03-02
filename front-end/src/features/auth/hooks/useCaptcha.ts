import { TurnstileInstance } from '@marsidev/react-turnstile'
import { useRef, useState } from 'react'

export function useCaptcha() {
  const ref = useRef<TurnstileInstance | null>(null)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)

  const reset = () => {
    ref.current?.reset()
    setCaptchaToken(null)
  }

  return {
    ref,
    captchaToken,
    setCaptchaToken,
    reset,
    isValided: !!captchaToken
  }
}
