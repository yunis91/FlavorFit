import { Mail, User, UserCircle } from 'lucide-react'
import { UseFormReturn } from 'react-hook-form'

import { Input } from '@/shared/components/ui/input'

import { IProfileForm } from '../types/profile-update.types'

export function GeneralInfoForm({
  form
}: {
  form: UseFormReturn<IProfileForm, unknown, IProfileForm>
}) {
  const { register } = form

  return (
    <div className="rounded-xl border bg-white p-6">
      <h2 className="mb-6 text-lg font-semibold">General Information</h2>

      <div className="space-y-4">
        <div className="relative">
          <User
            size={16}
            className="absolute top-3 left-3 opacity-50"
          />
          <Input
            className="pl-9"
            placeholder="Full name"
            {...register('fullName')}
          />
        </div>
        <div className="relative">
          <Mail
            size={16}
            className="absolute top-3 left-3 opacity-50"
          />
          <Input
            className="pl-9"
            placeholder="Email"
            {...register('email')}
          />
        </div>
        <div className="relative">
          <UserCircle
            size={16}
            className="absolute top-3 left-3 opacity-50"
          />
          <Input
            className="pl-9"
            placeholder="Age"
            {...register('age')}
          />
        </div>
        <div className="relative">
          <textarea
            className="w-full rounded-md border bg-white/85 p-3 font-mono"
            placeholder="Bio"
            {...register('bio')}
          />
        </div>
      </div>
    </div>
  )
}
