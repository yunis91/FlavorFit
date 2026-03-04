'use client'

import { useMutation, useQuery } from '@apollo/client/react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { Button } from '@/shared/components/ui/button'

import {
  GetProfileDocument,
  UpdateProfileDocument
} from '@/__generated__/graphql'

import { IProfileForm } from '../types/profile-update.types'

import { BodyMeasurementsForm } from './BodyMeasurementsForm'
import { GeneralInfoForm } from './GeneralInfoForm'

export function Profile() {
  const form = useForm<IProfileForm>({
    mode: 'onChange'
  })

  const { data } = useQuery(GetProfileDocument)

  const [updateProfile, { loading }] = useMutation(UpdateProfileDocument, {
    onCompleted() {
      toast.success('Profile updated')
    }
  })

  const submit = form.handleSubmit(data => {
    updateProfile({
      variables: {
        data: {
          profile: {
            fullName: data.fullName,
            gender: data.gender,
            age: data.age,
            bio: data.bio
          },
          measurements: {
            heightCm: data.heightCm,
            weightKg: data.weightKg,
            goalWeightKg: data.goalWeightKg,
            chestCm: data.chestCm,
            waistCm: data.waistCm,
            thighCm: data.thighCm,
            armCm: data.armCm,
            activityLevel: data.activityLevel,
            nutritionGoal: data.nutritionGoal
          }
        }
      }
    })
  })

  return (
    <form
      onSubmit={submit}
      className="space-y-6"
    >
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

      <div className="grid grid-cols-2 gap-8">
        <GeneralInfoForm form={form} />
        <BodyMeasurementsForm form={form} />
      </div>
    </form>
  )
}
