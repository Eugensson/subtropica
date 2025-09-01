"use client";

import type React from "react";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface CreateThreadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CreateThreadDialog = ({
  open,
  onOpenChange,
}: CreateThreadDialogProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({ title, description, category });

    setTitle("");
    setDescription("");
    setCategory("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Створити нову тему
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Заголовок теми</Label>
            <Input
              id="title"
              placeholder="Введіть заголовок вашої теми..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Категорія</Label>
            <Select value={category} onValueChange={setCategory} required>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Оберіть категорію" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="slug1">Цитрусові дерева</SelectItem>
                <SelectItem value="slug2">Пальми</SelectItem>
                <SelectItem value="slug3">Ґрунти та добрива</SelectItem>
                <SelectItem value="slug4">Хвороби та шкідники</SelectItem>
                <SelectItem value="slug5">Полив і мікроклімат</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Опис</Label>
            <Textarea
              id="description"
              placeholder="Детально опишіть вашу тему або питання..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              required
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Скасувати
            </Button>
            <Button
              type="submit"
              className="bg-primary hover:bg-secondary text-primary-foreground"
            >
              Створити тему
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
