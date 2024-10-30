"use client";

import "../app/dashboard/page";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard"); // Redirect to /dashboard
  }, [router]);

  return null;
}
