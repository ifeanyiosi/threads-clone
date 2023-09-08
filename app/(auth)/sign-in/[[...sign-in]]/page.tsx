import { SignIn } from "@clerk/nextjs";

export const metadata = {
  title: "Ifeanyiosi",
  description:
    "A Next.js application that mirrors Threads and Twitter built by Ifeanyi Osi-Okeke",
};

export default function Page() {
  return (
    <div className="flex items-center justify-center mt-10">
      <SignIn />
    </div>
  );
}
