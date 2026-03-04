import { Mail, User, UserCircle } from 'lucide-react'
import { UseFormReturn } from 'react-hook-form'

import { Input } from '@/shared/components/ui/input'
import { Textarea } from '@/shared/components/ui/textarea'

import { IProfileForm } from '../types/profile-update.types'

import { AvatarUpload } from './AvatarUpload'

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
        <AvatarUpload
          onChange={url =>
            form.setValue('avatarUrl', url, { shouldDirty: true })
          }
          value={form.watch('avatarUrl') || undefined}
        />

        <label className="relative block">
          <User
            size={16}
            className="absolute top-3 left-3 opacity-50"
          />
          <Input
            className="pl-9"
            placeholder="Full name"
            {...register('fullName')}
          />
        </label>
        <label className="relative block">
          <Mail
            size={16}
            className="absolute top-3 left-3 opacity-50"
          />
          <Input
            className="pl-9"
            placeholder="Email"
            {...register('email')}
          />
        </label>
        <label className="relative block">
          <UserCircle
            size={16}
            className="absolute top-3 left-3 opacity-50"
          />
          <Input
            className="pl-9"
            placeholder="Age"
            {...register('age')}
          />
        </label>
        <div className="relative">
          <Textarea
            className="h-18 w-full resize-none rounded-md border bg-white/85 p-3 font-mono"
            placeholder="Bio"
            {...register('bio')}
          />
        </div>
      </div>
    </div>
  )
}
