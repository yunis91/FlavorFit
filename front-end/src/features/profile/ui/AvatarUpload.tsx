import { Edit } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

import { Button } from '@/shared/components/ui/button'

import { SERVER_URL } from '@/shared/config/api.config'

interface Props {
  value?: string
  onChange: (url: string) => void
}

export function AvatarUpload({ value, onChange }: Props) {
  const [loading, setLoadinbg] = useState(false)

  async function upload(file: File) {
    setLoadinbg(true)

    const formData = new FormData()
    formData.append('file', file)

    const res = await fetch(`${SERVER_URL}/media-upload/avatar`, {
      method: 'POST',
      body: formData,
      credentials: 'include'
    })

    const data = await res.json()

    onChange(data.url)

    setLoadinbg(false)
  }

  return (
    <div className="relative inline-flex items-center gap-3">
      <Image
        src={value || '/images/avatar-placeholder.png'}
        width={48}
        height={48}
        alt="avatar"
        className="rounded-full object-cover"
      />

      <label className="absolute -top-2 -right-2 z-10">
        <input
          type="file"
          hidden
          accept="image/*"
          onChange={e => {
            const file = e.target.files?.[0]
            if (file) upload(file)
          }}
        />
        <Button
          value="simple"
          size="xs"
          asChild
          disabled={loading}
        >
          <span>
            <Edit className={loading ? 'animate-spin' : ''} />
          </span>
        </Button>
      </label>
    </div>
  )
}
