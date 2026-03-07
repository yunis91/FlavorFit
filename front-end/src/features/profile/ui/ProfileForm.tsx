'use client'

import { useMutation } from '@apollo/client/react'
import { UserRoundCog } from 'lucide-react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { HeadingWithIcon } from '@/shared/components/custom-ui/heading-with-icon/HeadingWithIcon'
import { Button } from '@/shared/components/ui/button'

import { GetProfileQuery, UpdateProfileDocument } from '@/__generated__/graphql'

import { TProfileForm } from '../types/profile-update.types'

import { BodyMeasurementsForm } from './BodyMeasurementsForm'
import { GeneralInfoForm } from './GeneralInfoForm'

export function ProfileForm({ data }: { data: GetProfileQuery }) {
  const form = useForm<TProfileForm>({
    mode: 'onChange',
    defaultValues: {
      email: data.me?.email ?? '',
      avatarUrl: data.me?.avatarUrl ?? '',
      measurements: data.me?.measurements ?? {},
      profile: data.me?.profile ?? {}
    }
  })

  const [updateProfile, { loading }] = useMutation(UpdateProfileDocument, {
    onCompleted() {
      toast.success('Profile updated')
    }
  })

  const submit = form.handleSubmit(data => {
    const cleanedData = {
      ...data,
      profile: data.profile
        ? Object.fromEntries(
            Object.entries(data.profile).filter(([key]) => key !== '__typename')
          )
        : {},
      measurements: data.measurements
        ? Object.fromEntries(
            Object.entries(data.measurements).filter(
              ([key]) => key !== '__typename'
            )
          )
        : {}
    }

    updateProfile({
      variables: {
        data: cleanedData
      }
    })
  })

  return (
    <form
      onSubmit={submit}
      className="space-y-6"
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <HeadingWithIcon Icon={UserRoundCog}>
            Personal information
          </HeadingWithIcon>
        </div>
        <div className="flex justify-end gap-3">
          <Button
            variant="outline"
            type="button"
          >
            Cansel
          </Button>
          <Button
            variant="accent"
            disabled={loading}
          >
            Save changes
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <GeneralInfoForm form={form} />
        <BodyMeasurementsForm form={form} />
      </div>
    </form>
  )
}
