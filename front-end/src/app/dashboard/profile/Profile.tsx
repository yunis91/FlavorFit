import { useGetProfileQuery } from '@/__generated__/'

export function Profile() {
  const { data } = useGetProfileQuery()
  return (
    <div>
      <h1>{data?.name}</h1>
      <p>Email: {data?.email}</p>
    </div>
  )
}
