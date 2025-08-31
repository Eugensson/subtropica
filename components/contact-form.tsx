"use client";

import { RiMailSendFill } from "react-icons/ri";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ContactForm = () => {
  return (
    <Card className="w-full max-w-lg rounded-xl bg-gray-600/60 backdrop-blur-md text-primary-foreground">
      <CardHeader>
        <CardTitle className="flex items-center justify-center gap-4 text-2xl uppercase">
          <RiMailSendFill size={28} />
          Надіслати листа
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="message">Електронна пошта</Label>
            <Input
              id="message"
              placeholder="your.email@example.com"
              className="placeholder:text-primary-foreground/70"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Пароль</Label>
            <Input
              id="password"
              placeholder="********"
              className="placeholder:text-primary-foreground/70"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Повідомлення</Label>
            <Textarea
              id="message"
              placeholder="Привіт, мене цікавить..."
              rows={5}
              className="h-30 placeholder:text-primary-foreground/70 resize-none"
            />
          </div>
          <Button size="lg" className="w-full cursor-pointer">
            Надіслати
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
