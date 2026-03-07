import { Goal, GoalIcon, Ruler, UserCircle, Weight } from 'lucide-react'
import Image from 'next/image'
import { Controller, UseFormReturn } from 'react-hook-form'

import { SelectLabel } from '@/shared/components/custom-ui/SelectLabel'
import { Input } from '@/shared/components/ui/input'
import { Label } from '@/shared/components/ui/label'

import { ActivityLevel, NutritionGoal } from '@/__generated__/graphql'

import { TProfileForm } from '../types/profile-update.types'

export function BodyMeasurementsForm({
  form
}: {
  form: UseFormReturn<TProfileForm, unknown, TProfileForm>
}) {
  const { register } = form

  return (
    <div className="col-span-2 flex w-full items-start gap-6 rounded-xl border bg-white p-6">
      <Image
        width={350}
        height={450}
        src="/images/graphics/male.svg"
        alt="Male"
      />
      <div className="">
        <h2 className="mb-6 text-lg font-semibold">Body measurements</h2>

        <div className="grid grid-cols-2 gap-3 space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="heightCm">Height cm</Label>
            <div className="relative">
              <Ruler
                size={16}
                className="absolute top-3 left-3 opacity-50"
              />
              <Input
                className="pl-9"
                placeholder="Height cm"
                {...register('measurements.heightCm', {
                  setValueAs: value =>
                    value === '' ? undefined : Number(value)
                })}
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="weightKg">Weight kg</Label>
            <div className="relative">
              <Weight
                size={16}
                className="absolute top-3 left-3 opacity-50"
              />
              <Input
                className="pl-9"
                placeholder="Weight kl"
                {...register('measurements.weightKg', {
                  setValueAs: value =>
                    value === '' ? undefined : Number(value)
                })}
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="goalWeightKg">Goal weight kg</Label>
            <div className="relative">
              <Weight
                size={16}
                className="absolute top-3 left-3 opacity-50"
              />
              <Input
                className="pl-9"
                placeholder="Goal weight"
                {...register('measurements.goalWeightKg', {
                  setValueAs: value =>
                    value === '' ? undefined : Number(value)
                })}
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="chestCm">Chest cm</Label>
            <div className="relative">
              <UserCircle
                size={16}
                className="absolute top-3 left-3 opacity-50"
              />
              <Input
                className="pl-9"
                placeholder="Chest cm"
                {...register('measurements.chestCm', {
                  setValueAs: value =>
                    value === '' ? undefined : Number(value)
                })}
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="waistCm">Waist cm</Label>
            <div className="relative">
              <UserCircle
                size={16}
                className="absolute top-3 left-3 opacity-50"
              />
              <Input
                className="pl-9"
                placeholder="Waist cm"
                {...register('measurements.waistCm', {
                  setValueAs: value =>
                    value === '' ? undefined : Number(value)
                })}
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="thighCm">Thigh cm</Label>
            <div className="relative">
              <UserCircle
                size={16}
                className="absolute top-3 left-3 opacity-50"
              />
              <Input
                className="pl-9"
                placeholder="Thigh cm"
                {...register('measurements.thighCm', {
                  setValueAs: value =>
                    value === '' ? undefined : Number(value)
                })}
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="armCm">Arm cm</Label>
            <div className="relative">
              <UserCircle
                size={16}
                className="absolute top-3 left-3 opacity-50"
              />
              <Input
                className="pl-9"
                placeholder="Arm cm"
                {...register('measurements.armCm', {
                  setValueAs: value =>
                    value === '' ? undefined : Number(value)
                })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="gender">Nutrition Goal</Label>
              <div className="relative">
                <GoalIcon
                  size={16}
                  className="absolute top-3 left-3 opacity-50"
                />
                <Controller
                  control={form.control}
                  name="measurements.nutritionGoal"
                  render={({ field }) => (
                    <SelectLabel
                      value={field.value}
                      onChange={field.onChange}
                      label="Set your nutrition goal"
                      options={[
                        {
                          label: 'Lose weight',
                          value: NutritionGoal.WeightLoss
                        },
                        {
                          label: 'Female',
                          value: NutritionGoal.Maintenance
                        },
                        {
                          label: 'Gain muscle',
                          value: NutritionGoal.MuscleGain
                        }
                      ]}
                    />
                  )}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="activityLevel">Activity Level</Label>
              <div className="relative">
                <GoalIcon
                  size={16}
                  className="absolute top-3 left-3 opacity-50"
                />
                <Controller
                  control={form.control}
                  name="measurements.activityLevel"
                  render={({ field }) => (
                    <SelectLabel
                      value={field.value}
                      onChange={field.onChange}
                      label="Set your activity level"
                      options={[
                        {
                          label: 'Lightly active',
                          value: ActivityLevel.Light
                        },
                        {
                          label: 'Moderately active',
                          value: ActivityLevel.Moderate
                        },
                        {
                          label: 'Active',
                          value: ActivityLevel.Active
                        },
                        {
                          label: 'Sedentary',
                          value: ActivityLevel.Sedentary
                        },
                        {
                          label: 'Very active',
                          value: ActivityLevel.VeryActive
                        }
                      ]}
                    />
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
