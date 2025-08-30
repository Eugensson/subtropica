"use client";

import { SiSimplelogin } from "react-icons/si";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const LoginForm = () => {
  return (
    <Card className="w-full max-w-md rounded-xl bg-gray-500/60 backdrop-blur-sm text-white">
      <CardHeader>
        <CardTitle className="flex items-center justify-center gap-4 text-2xl uppercase">
          <SiSimplelogin size={28} />
          Вхід
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label>Електронна пошта</Label>
            <Input
              placeholder="your.email@example.com"
              className="placeholder:text-primary-foreground/70"
            />
          </div>
          <div className="space-y-2">
            <Label>Електронна пошта</Label>
            <Input
              placeholder="********"
              className="placeholder:text-primary-foreground/70"
            />
          </div>
          <Button size="lg" className="w-full cursor-pointer">
            Залогуватися
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
