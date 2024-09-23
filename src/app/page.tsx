import Link from "next/link";
import Exercises from "note/app/_components/exercise"
import { getServerAuthSession } from "note/server/auth";
import { api } from "note/trpc/server";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <Exercises />
  );
}
