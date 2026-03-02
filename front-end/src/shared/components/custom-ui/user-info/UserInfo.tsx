import Image from 'next/image'

import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@/shared/components/ui/avatar'

interface Props {
  avatarUrl: string
  name: string
  email: string
}

export function UserInfo({ avatarUrl, name, email }: Props) {
  return (
    <div className="flex items-center gap-2">
      <Avatar>
        <AvatarImage
          src={avatarUrl}
          alt={name}
        />
        <AvatarFallback>FF</AvatarFallback>
      </Avatar>

      <div className="flex flex-col items-start">
        <p className="text-sm font-medium">{name}</p>
        <p className="max-w-[90px] overflow-hidden text-xs text-ellipsis text-gray-500">
          {email}
        </p>
      </div>
    </div>
  )
}
