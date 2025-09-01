import { TrendingUp, Users, Calendar } from "lucide-react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const popularThreads = [
  { title: "Як правильно пересаджувати субтропічні пальми?", replies: 22 },
  { title: "Догляд за цитрусовими деревами вдома", replies: 31 },
  { title: "Найпопулярніші ґрунтосуміші для екзотичних рослин", replies: 19 },
];

const categories = [
  { name: "Цитрусові дерева", count: 38 },
  { name: "Пальми", count: 27 },
  { name: "Ґрунти та добрива", count: 33 },
  { name: "Хвороби та шкідники", count: 18 },
  { name: "Полив і мікроклімат", count: 45 },
];

export const ForumSidebar = () => {
  return (
    <ScrollArea className="h-[90vh] pr-4">
      <Card className="mb-2 gap-1 rounded-xl bg-gray-600/60 backdrop-blur-xl text-primary-foreground">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <TrendingUp className="size-5" />
            Популярні теми
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {popularThreads.map((thread, index) => (
            <div key={index} className="space-y-1">
              <h4 className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground cursor-pointer transition-colors line-clamp-2">
                {thread.title}
              </h4>
              <p className="text-xs text-primary-foreground/70">
                {thread.replies} відповідей
              </p>
            </div>
          ))}
        </CardContent>
      </Card>
      <Card className="mb-2 gap-1 rounded-xl bg-gray-600/60 backdrop-blur-xl text-primary-foreground">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Users className="size-5" />
            Категорії
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground cursor-pointer transition-colors">
                {category.name}
              </span>
              <span className="text-sm font-medium">{category.count}</span>
            </div>
          ))}
        </CardContent>
      </Card>
      <Card className="rounded-xl gap-1 bg-gray-600/60 backdrop-blur-md text-primary-foreground">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Calendar className="size-5" />
            Статистика
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between text-sm">
            <span>Всього тем:</span>
            <span className="font-medium">191</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Всього повідомлень:</span>
            <span className="font-medium">1,247</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Активних користувачів:</span>
            <span className="font-medium">89</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Нових сьогодні:</span>
            <span className="font-medium">12</span>
          </div>
        </CardContent>
      </Card>
    </ScrollArea>
  );
};
