import { Mail, Mars, User, UserCircle, Venus } from 'lucide-react'
import { Controller, UseFormReturn, useWatch } from 'react-hook-form'

import { SelectLabel } from '@/shared/components/custom-ui/SelectLabel'
import { Input } from '@/shared/components/ui/input'
import { Label } from '@/shared/components/ui/label'
import { Textarea } from '@/shared/components/ui/textarea'

import { Gender } from '@/__generated__/graphql'

import { TProfileForm } from '../types/profile-update.types'

import { AvatarUpload } from './AvatarUpload'

export function GeneralInfoForm({
  form
}: {
  form: UseFormReturn<TProfileForm, unknown, TProfileForm>
}) {
  const { register } = form
  const gender = useWatch({
    control: form.control,
    name: 'profile.gender'
  })

  const GenderIcon = gender === Gender.Female ? Venus : Mars

  return (
    <div className="rounded-xl border bg-white p-6">
      <h2 className="mb-6 text-lg font-semibold">General Information</h2>

      <div className="space-y-4">
        <div className="flex gap-5">
          <AvatarUpload
            onChange={url => form.setValue('avatarUrl', url)}
            value={form.watch('avatarUrl') || undefined}
          />
          <div className="grid w-full gap-2">
            <Label htmlFor="fullName">Full name</Label>
            <div className="relative">
              <User
                size={16}
                className="absolute top-3 left-3 opacity-50"
              />
              <Input
                className="pl-9"
                placeholder="Full name"
                {...register('profile.fullName')}
              />
            </div>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
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
        </div>

        <div className="grid gap-2">
          <Label htmlFor="age">Age</Label>
          <div className="relative">
            <UserCircle
              size={16}
              className="absolute top-3 left-3 opacity-50"
            />
            <Input
              className="pl-9"
              placeholder="Age"
              type="number"
              {...register('profile.age', {
                setValueAs: value => (value === '' ? undefined : Number(value))
              })}
            />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="gender">Gender</Label>
          <div className="relative">
            <GenderIcon
              size={16}
              className="absolute top-3 left-3 opacity-50"
            />
            <Controller
              control={form.control}
              name="profile.gender"
              render={({ field }) => (
                <SelectLabel
                  value={field.value}
                  onChange={field.onChange}
                  label="Gender"
                  options={[
                    {
                      label: 'Male',
                      value: Gender.Male
                    },
                    {
                      label: 'Female',
                      value: Gender.Female
                    }
                  ]}
                />
              )}
            />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="bio">Bio</Label>
          <div className="relative">
            <Textarea
              className="h-18 w-full resize-none rounded-md border bg-white/85 p-3 font-mono"
              placeholder="Bio"
              {...register('profile.bio')}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
