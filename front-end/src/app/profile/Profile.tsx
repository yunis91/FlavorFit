import { useGetProfileQuery } from "@/__generated__/output";

export function Profile() {
  const { data } = useGetProfileQuery();
  return (
    <div>
      <h1>{name}</h1>
      <p>Email: {email}</p>
    </div>
  );
}
