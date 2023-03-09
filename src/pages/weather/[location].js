import { useRouter } from "next/router";

export default function Locations() {
  const router = useRouter();
  const { id } = router.query;
  return <h1>Hello {id}</h1>;
}

export async function getServerSideProps({ params }) {
  const req = await fetch(``);
  const data = await req.json();
  return {
    props: { info: data },
  };
}
