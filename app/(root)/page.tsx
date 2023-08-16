//app/page.tsx
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}
// this happens when we are actually logged in 