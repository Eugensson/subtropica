"use client";

import { useState } from "react";
import { MessageCircle, Clock, Plus, Pin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CreateThreadDialog } from "@/components/create-thread-dialog";

const mockThreads = [
  {
    id: 1,
    title: "Як правильно пересаджувати субтропічні пальми?",
    description:
      "Шукаю поради щодо пересадки пальми у більший горщик. Який ґрунт та дренаж краще підійдуть?",
    author: "GreenLover",
    replies: 22,
    lastActivity: "2 години тому",
    isPinned: true,
    category: "Пальми",
  },
  {
    id: 2,
    title: "Догляд за цитрусовими деревами вдома",
    description:
      "Обговоримо умови поливу та освітлення для лимонів і мандаринів, щоб вони добре плодоносили.",
    author: "CitrusFan",
    replies: 31,
    lastActivity: "5 годин тому",
    isPinned: false,
    category: "Цитрусові дерева",
  },
  {
    id: 3,
    title: "Найпопулярніші ґрунтосуміші для екзотичних рослин",
    description:
      "Які суміші ви використовуєте для субтропічних квітів? Поділіться своїми рекомендаціями.",
    author: "SoilExpert",
    replies: 19,
    lastActivity: "1 день тому",
    isPinned: false,
    category: "Ґрунти та добрива",
  },
  {
    id: 4,
    title: "Як боротися зі шкідниками на гранаті?",
    description:
      "Мій гранат уражений дрібними комахами. Чи є натуральні способи захисту?",
    author: "PlantHelper",
    replies: 14,
    lastActivity: "2 дні тому",
    isPinned: false,
    category: "Хвороби та шкідники",
  },
];

export const ThreadList = () => {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState<boolean>(false);

  return (
    <ScrollArea className="h-[90vh] p-6 rounded-xl bg-gray-600/60 backdrop-blur-md text-primary-foreground">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-primary-foreground">
          Обговорення
        </h2>
        <Button
          onClick={() => setIsCreateDialogOpen(true)}
          className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer transition-colors"
        >
          <Plus className="h-4 w-4 mr-2" />
          Створити тему
        </Button>
      </div>
      <div className="space-y-3">
        {mockThreads.map((thread) => (
          <Card
            key={thread.id}
            className="hover:shadow-md transition-shadow cursor-pointer bg-gray-100/90"
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    {thread.isPinned && (
                      <Pin className="h-4 w-4 text-primary" />
                    )}
                    <h3 className="font-semibold text-lg text-card-foreground hover:text-primary transition-colors">
                      {thread.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {thread.description}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>
                      Автор:{" "}
                      <span className="font-medium">{thread.author}</span>
                    </span>
                    <Badge variant="secondary" className="text-xs">
                      {thread.category}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" />
                    <span>{thread.replies} відповідей</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{thread.lastActivity}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <CreateThreadDialog
        open={isCreateDialogOpen}
        onOpenChange={setIsCreateDialogOpen}
      />
    </ScrollArea>
  );
};
