import Image from 'next/image'

interface Props {
  avatarUrl: string
  name: string
  email: string
}

export function UserInfo({ avatarUrl, name, email }: Props) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={avatarUrl}
        alt={name}
        width={36}
        height={36}
        className="rounded-full"
      />
      <div>
        <p className="text-sm font-medium">{name}</p>
        <p className="max-w-[80px] overflow-hidden text-xs text-ellipsis text-gray-500">
          {email}
        </p>
      </div>
    </div>
  )
}
