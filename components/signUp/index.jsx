"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export function SignUp() {
  const router = useRouter();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const createUser = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
    };
    console.log("clicked");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (res.ok) {
        toast.success("User created successfully");
        router.push("/chatbot");
      }
    } catch (error) {
      toast.error("User creation failed");
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>

      <Card className="flex flex-col justify-center w-[450px] max-md:w-[350px]">
        <form onSubmit={createUser}>
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>Chatbot Framework</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col py-2 space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex flex-col py-2 space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex flex-col py-2 space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <p className="py-1 text-sm text-muted-foreground flex justify-end">
              Already have an account?{" "}
              <Link
                href="/sign-in"
                className="underline underline-offset-4 hover:text-primary"
              >
                Sign In
              </Link>
            </p>
          </CardContent>
          <CardFooter className="flex justify-center md:justify-between">
            <Button type="submit">Sign Up</Button>
          </CardFooter>
        </form>
      </Card>
    </>
  );
}
