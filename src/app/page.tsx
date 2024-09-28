import Link from "next/link";
// import Exercises from "note/app/_components/exercise"
import { getServerAuthSession } from "note/server/auth";
import { api } from "note/trpc/server";
import { ButtonDestructive } from '../app/_components/button_d'
import Calendarx from "./_components/calendar"
import AthleteAI from "./_components/p1";


export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <>
    {/* <Exercises /> */}
    {/* <Calendarx />
    <ButtonDestructive /> */}
    <AthleteAI />
    <link rel="stylesheet" href="hello" />
    <h1>Hello</h1>
    </>
    
  );
}
