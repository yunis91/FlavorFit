'use client'

interface Props {
  type: 'login' | 'register'
}

export function AuthForm({ type }: Props) {
  return (
    <div>
      <h1>{type === 'register' ? 'Register' : 'Login'}</h1>
      <form>
        <input
          type="text"
          name="email"
          placeholder="Email"
        />
        <input
          type="password"
          name="passrowd"
          placeholder="Password"
        />
        <button type="submit">
          {type === 'register' ? 'Register' : 'Login'}
        </button>
      </form>
    </div>
  )
}
