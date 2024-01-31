import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import SignInWithGithub from "./components/SignInWithGithub";

import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";
import { redirect } from "next/navigation";
import SignInForm from "./components/SignInForm";
import Image from "next/image";
import BackGroundAniMate from "@/components/ui/bg-anima";

const AuthRoute = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/ssl-status");
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center ">
      <BackGroundAniMate />
      <Card className="flex flex-col">
        <Image
          src="/assets/images/paradise-logo.jpg"
          alt="Paradise Logo"
          width={100}
          height={100}
          className="object-contain"
        />
        <CardHeader>
          <CardTitle>Please Sign In</CardTitle>
          <CardDescription>
            To access the private page you have to be authenticated
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col">
            <SignInForm />
            <SignInWithGithub />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthRoute;
