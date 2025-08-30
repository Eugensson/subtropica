"use client";

import { useState } from "react";
import { CircleX, Search, SearchX } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Plant } from "@/types";
import {
  CHARMS_DATA,
  FUNCTIONS_DATA,
  GROUPE_DATA,
  PLACING_DATA,
  PLANTS_DATA,
} from "@/data";

export const Selection = () => {
  const [selectedPlants, setSelectedPlants] = useState<Plant[] | undefined>(
    undefined
  );
  const [selectedFunc, setSelectedFunc] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");
  const [selectedCharm, setSelectedCharm] = useState("");
  const [selectedGroupe, setSelectedGroupe] = useState("");

  const handleFilter = () => {
    const filtered = PLANTS_DATA.filter((plant) => {
      const matchGroupe = selectedGroupe
        ? plant.groupe.includes(selectedGroupe)
        : true;
      const matchAttractiveness = selectedCharm
        ? plant.charms.includes(selectedCharm)
        : true;
      const matchFunctionality = selectedFunc
        ? plant.functions.includes(selectedFunc)
        : true;
      const matchPlacement = selectedPlace
        ? plant.placing.includes(selectedPlace)
        : true;

      return (
        matchGroupe &&
        matchAttractiveness &&
        matchFunctionality &&
        matchPlacement
      );
    }).sort((a, b) => a.title.localeCompare(b.title));

    setSelectedPlants(filtered);
  };

  const resetFilters = () => {
    setSelectedCharm("");
    setSelectedFunc("");
    setSelectedPlace("");
    setSelectedGroupe("");
    setSelectedPlants(undefined);
  };

  return (
    <div className="container mx-auto max-w-365 grid grid-cols-[400px_1fr_70px] gap-8">
      <div className="p-6 py-12 h-[90vh] rounded-xl bg-gray-500/60 backdrop-blur-sm text-white">
        <h2 className="mb-6 text-xl font-semibold uppercase text-center">
          Критерії пошуку:
        </h2>
        <ul className="space-y-4">
          <li className="flex flex-col gap-3">
            <Label className="text-xs sm:text-sm">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    Принади
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>найголовніші культиваційно-естетичні особливості</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <Select onValueChange={setSelectedCharm}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Оберіть із переліку" />
              </SelectTrigger>
              <SelectContent>
                {CHARMS_DATA.map(({ label, value }) => (
                  <SelectItem key={label} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </li>
          <li className="flex flex-col gap-3">
            <Label className="text-xs sm:text-sm">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    Функції
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>застосування в озелененні</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <Select onValueChange={setSelectedFunc}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Оберіть із переліку" />
              </SelectTrigger>
              <SelectContent>
                {FUNCTIONS_DATA.map(({ label, value }) => (
                  <SelectItem key={label} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </li>
          <li className="flex flex-col gap-3">
            <Label className="text-xs sm:text-sm">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    Розміщення
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>необхідний екотоп місць висадки</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <Select onValueChange={setSelectedPlace}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Оберіть із переліку" />
              </SelectTrigger>
              <SelectContent>
                {PLACING_DATA.map(({ label, value }) => (
                  <SelectItem key={label} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </li>
          <li className="flex flex-col gap-3">
            <Label className="text-xs sm:text-sm">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    Габітус
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>вигляд</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <Select onValueChange={setSelectedGroupe}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Оберіть із переліку" />
              </SelectTrigger>
              <SelectContent>
                {GROUPE_DATA.map(({ label, value }) => (
                  <SelectItem key={label} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </li>
        </ul>
        <div className="mt-10 flex items-center gap-4">
          <Button
            type="reset"
            variant="destructive"
            size="lg"
            className="flex-1 cursor-pointer"
            onClick={resetFilters}
          >
            <CircleX />
            Очистити
          </Button>
          <Button
            type="submit"
            size="lg"
            className="flex-1 cursor-pointer"
            onClick={handleFilter}
            disabled={
              !selectedCharm &&
              !selectedFunc &&
              !selectedPlace &&
              !selectedGroupe
            }
          >
            <Search />
            Підібрати
          </Button>
        </div>
      </div>
      <div className="p-6 pt-0 space-y-4 rounded-xl">
        <Card className="w-[98%] p-6 bg-gray-500/60 backdrop-blur-sm text-white">
          <h1 className="text-3xl font-bold uppercase text-center">
            Інтерактивний каталог
          </h1>
          <p className="text-center">
            Орієнтовний видовий перелік рекомендованих до масового озеленення
            рослин відкритого ґрунту
          </p>
        </Card>

        {selectedPlants && selectedPlants.length > 0 ? (
          <ScrollArea className="h-120 pr-4">
            <ul className="h-full grid grid-cols-1 gap-6">
              {selectedPlants?.map((plant) => (
                <li key={plant.id}>
                  <Card className="bg-gray-500/60 backdrop-blur-sm text-white">
                    <CardHeader>
                      <CardTitle>{plant.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p>{plant.groupe}</p>
                      <p>{plant.charms}</p>
                      <p>{plant.functions}</p>
                      <p>{plant.placing}</p>
                      <p>{plant.soilMix}</p>
                      <p>{plant.care}</p>
                      <p>{plant.notes}</p>
                    </CardContent>
                  </Card>
                </li>
              ))}
            </ul>
          </ScrollArea>
        ) : selectedPlants && selectedPlants.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center gap-4">
            <p className="text-3xl font-bold flex items-center gap-2">
              <SearchX size={30} />
              Нічого не знайдено.
            </p>
            <span className="text-muted-foreground">
              Задайте інші критерії пошуку.
            </span>
          </div>
        ) : undefined}
      </div>
      <div />
    </div>
  );
};
