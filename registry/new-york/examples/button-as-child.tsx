import { Button } from "@/registry/new-york/ui/button";
import Link from "next/link";

export default function ButtonAsChild() {
  return (
    <Button asChild>
      <Link href="/login">Login</Link>
    </Button>
  );
}
