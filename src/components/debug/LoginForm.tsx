"use client";

import { FunctionComponent } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const LoginForm: FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const login = async () => {
    try {
      await axios.post("http://localhost:3000/api/auth/login", {
        email,
        password,
      });

      setError("");
      router.refresh();
    } catch (error) {
      setError("Unauthorized");
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-96">
        <h2 className="mb-2">{error}</h2>
        <section className="space-y-2">
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter password"
          />
        </section>
        <section className="mt-4 space-y-6">
          <Button onClick={login} className="w-full">
            Login
          </Button>

          <Link href={"/dashboard"}>Redirect</Link>
        </section>
      </div>
    </>
  );
};
