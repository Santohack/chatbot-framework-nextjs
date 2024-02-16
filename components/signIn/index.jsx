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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Head from "next/head";
import Link from "next/link";

export function SignIn() {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>

      <Card className="flex flex-col justify-center w-[450px] max-md:w-[350px]">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>Chatbot Framework</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col py-2 space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="flex flex-col py-2 space-y-1.5">
                <Label htmlFor="contact">Password</Label>
                <Input
                  id="contact"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
            </div>
          </form>

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
          <Button>Sign Up</Button>
        </CardFooter>
      </Card>
    </>
  );
}
