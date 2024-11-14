"use server";
import InfoCard from "./ui/InfoCard";
import { LoginForm } from "./ui/LoginForm";
import { PageTitle } from "./ui/PageTitle";

export default async function App() {
  return (
    <>
      <PageTitle />
      <LoginForm />
      <InfoCard />
    </>
  );
}
