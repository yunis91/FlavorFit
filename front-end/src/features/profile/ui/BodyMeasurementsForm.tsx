import { Ruler, UserCircle, Weight } from 'lucide-react'
import { UseFormReturn } from 'react-hook-form'

import { Input } from '@/shared/components/ui/input'

import { IProfileForm } from '../types/profile-update.types'

export function BodyMeasurementsForm({
  form
}: {
  form: UseFormReturn<IProfileForm, unknown, IProfileForm>
}) {
  const { register } = form

  return (
    <div className="rounded-xl border bg-white p-6">
      <h2 className="mb-6 text-lg font-semibold">Body measurements</h2>

      <div className="grid grid-cols-2 gap-3 space-y-4">
        <div className="relative">
          <Ruler
            size={16}
            className="absolute top-3 left-3 opacity-50"
          />
          <Input
            className="pl-9"
            placeholder="Height cm"
            {...register('heightCm')}
          />
        </div>
        <div className="relative">
          <Weight
            size={16}
            className="absolute top-3 left-3 opacity-50"
          />
          <Input
            className="pl-9"
            placeholder="Weight kl"
            {...register('weightKg')}
          />
        </div>
        <div className="relative">
          <UserCircle
            size={16}
            className="absolute top-3 left-3 opacity-50"
          />
          <Input
            className="pl-9"
            placeholder="Goal weight"
            {...register('goalWeightKg')}
          />
        </div>
        <div className="relative">
          <UserCircle
            size={16}
            className="absolute top-3 left-3 opacity-50"
          />
          <Input
            className="pl-9"
            placeholder="Chest cm"
            {...register('chestCm')}
          />
        </div>
        <div className="relative">
          <UserCircle
            size={16}
            className="absolute top-3 left-3 opacity-50"
          />
          <Input
            className="pl-9"
            placeholder="Waist cm"
            {...register('waistCm')}
          />
        </div>
        <div className="relative">
          <UserCircle
            size={16}
            className="absolute top-3 left-3 opacity-50"
          />
          <Input
            className="pl-9"
            placeholder="Thigh cm"
            {...register('thighCm')}
          />
        </div>
        <div className="relative">
          <UserCircle
            size={16}
            className="absolute top-3 left-3 opacity-50"
          />
          <Input
            className="pl-9"
            placeholder="Arm cm"
            {...register('armCm')}
          />
        </div>
      </div>
    </div>
  )
}
