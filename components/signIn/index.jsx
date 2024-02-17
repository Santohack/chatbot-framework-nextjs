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

export function SignIn() {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (res.ok) {
        const result = await res.json();
        const { token, message } = result;

        // Set the token in localStorage
        localStorage.setItem("token", token);

        toast.success(message);
        router.push("/chatbot");
      } else {
        const errorResult = await res.json();
        toast.error(errorResult.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error ||"An error occurred. Please try again later.");
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
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>Chatbot Framework</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
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
                <Label
                  htmlFor="password"

                >
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <p className=" py-1 text-sm text-muted-foreground flex justify-end">
              Don't have an account?{" "}
              <Link
                href="/sign-up"
                className="underline underline-offset-4 hover:text-primary px-1"
              >
                Sign Up
              </Link>
            </p>
          </CardContent>
          <CardFooter className="flex justify-center md:justify-between">
            {/* <Button variant="outline">Cancel</Button> */}
            <Button type="submit">Sign In</Button>
          </CardFooter>
        </form>
      </Card>
    </>
  );
}
