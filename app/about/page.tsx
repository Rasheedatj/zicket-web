import { redirect } from "next/navigation";

export default function AboutRedirect() {
  redirect("/newsroom");
  return null;
}
