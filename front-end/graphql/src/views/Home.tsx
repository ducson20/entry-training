import { useGetAllPeopleQuery } from "../generated/graphql-types";
export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  const { loading, data, error } = useGetAllPeopleQuery({
    variables: { pageSize: 5 },
  });
  if (loading || error || !data) {
    return <div>Loading…</div>;
  }
  return (
    <>
      <h1>Star wars characters</h1>
      {data?.allPeople?.people?.map((p: any) => (
        <div>
          {p?.name}: {p?.gender}, {p?.height}cm, born in {p?.birthYear}
        </div>
      ))}
    </>
  );
}
