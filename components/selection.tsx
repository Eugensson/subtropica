// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { RiPlantFill } from "react-icons/ri";
// import { GiStonePile } from "react-icons/gi";
// import { MdImageSearch, MdSpeakerNotes } from "react-icons/md";
// import { CircleX, Search, SearchX } from "lucide-react";

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// import {
//   CHARMS_DATA,
//   FUNCTIONS_DATA,
//   GROUPE_DATA,
//   PLACING_DATA,
//   PLANTS_DATA,
// } from "@/data";
// import { Plant } from "@/types";

// export const Selection = () => {
//   const [selectedPlants, setSelectedPlants] = useState<Plant[] | undefined>(
//     undefined
//   );
//   const [selectedFunc, setSelectedFunc] = useState("");
//   const [selectedPlace, setSelectedPlace] = useState("");
//   const [selectedCharm, setSelectedCharm] = useState("");
//   const [selectedGroupe, setSelectedGroupe] = useState("");

//   const handleFilter = () => {
//     const filtered = PLANTS_DATA.filter((plant) => {
//       const matchGroupe = selectedGroupe
//         ? plant.groupe.includes(selectedGroupe)
//         : true;
//       const matchAttractiveness = selectedCharm
//         ? plant.charms.includes(selectedCharm)
//         : true;
//       const matchFunctionality = selectedFunc
//         ? plant.functions.includes(selectedFunc)
//         : true;
//       const matchPlacement = selectedPlace
//         ? plant.placing.includes(selectedPlace)
//         : true;

//       return (
//         matchGroupe &&
//         matchAttractiveness &&
//         matchFunctionality &&
//         matchPlacement
//       );
//     }).sort((a, b) => a.title.localeCompare(b.title));

//     setSelectedPlants(filtered);
//   };

//   const resetFilters = () => {
//     setSelectedCharm("");
//     setSelectedFunc("");
//     setSelectedPlace("");
//     setSelectedGroupe("");
//     setSelectedPlants(undefined);
//   };

//   return (
//     <div className="container mx-auto max-w-365 grid grid-cols-[400px_1fr_70px] gap-8">
//       <div className="p-6 py-12 h-[90vh] rounded-xl bg-gray-600/60 backdrop-blur-md text-primary-foreground">
//         <h2 className="mb-6 text-xl font-semibold uppercase text-center">
//           Критерії пошуку:
//         </h2>
//         <ul className="space-y-4">
//           <li className="flex flex-col gap-3">
//             <Label className="text-xs sm:text-sm">
//               <TooltipProvider>
//                 <Tooltip>
//                   <TooltipTrigger className="cursor-help">
//                     Принади
//                   </TooltipTrigger>
//                   <TooltipContent>
//                     <p>найголовніші культиваційно-естетичні особливості</p>
//                   </TooltipContent>
//                 </Tooltip>
//               </TooltipProvider>
//             </Label>
//             <Select onValueChange={setSelectedCharm}>
//               <SelectTrigger className="w-full">
//                 <SelectValue placeholder="Оберіть із переліку" />
//               </SelectTrigger>
//               <SelectContent>
//                 {CHARMS_DATA.map(({ label, value }) => (
//                   <SelectItem key={label} value={value}>
//                     {label}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </li>
//           <li className="flex flex-col gap-3">
//             <Label className="text-xs sm:text-sm">
//               <TooltipProvider>
//                 <Tooltip>
//                   <TooltipTrigger className="cursor-help">
//                     Функції
//                   </TooltipTrigger>
//                   <TooltipContent>
//                     <p>застосування в озелененні</p>
//                   </TooltipContent>
//                 </Tooltip>
//               </TooltipProvider>
//             </Label>
//             <Select onValueChange={setSelectedFunc}>
//               <SelectTrigger className="w-full">
//                 <SelectValue placeholder="Оберіть із переліку" />
//               </SelectTrigger>
//               <SelectContent>
//                 {FUNCTIONS_DATA.map(({ label, value }) => (
//                   <SelectItem key={label} value={value}>
//                     {label}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </li>
//           <li className="flex flex-col gap-3">
//             <Label className="text-xs sm:text-sm">
//               <TooltipProvider>
//                 <Tooltip>
//                   <TooltipTrigger className="cursor-help">
//                     Розміщення
//                   </TooltipTrigger>
//                   <TooltipContent>
//                     <p>необхідний екотоп місць висадки</p>
//                   </TooltipContent>
//                 </Tooltip>
//               </TooltipProvider>
//             </Label>
//             <Select onValueChange={setSelectedPlace}>
//               <SelectTrigger className="w-full">
//                 <SelectValue placeholder="Оберіть із переліку" />
//               </SelectTrigger>
//               <SelectContent>
//                 {PLACING_DATA.map(({ label, value }) => (
//                   <SelectItem key={label} value={value}>
//                     {label}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </li>
//           <li className="flex flex-col gap-3">
//             <Label className="text-xs sm:text-sm">
//               <TooltipProvider>
//                 <Tooltip>
//                   <TooltipTrigger className="cursor-help">
//                     Габітус
//                   </TooltipTrigger>
//                   <TooltipContent>
//                     <p>вигляд</p>
//                   </TooltipContent>
//                 </Tooltip>
//               </TooltipProvider>
//             </Label>
//             <Select onValueChange={setSelectedGroupe}>
//               <SelectTrigger className="w-full">
//                 <SelectValue placeholder="Оберіть із переліку" />
//               </SelectTrigger>
//               <SelectContent>
//                 {GROUPE_DATA.map(({ label, value }) => (
//                   <SelectItem key={label} value={value}>
//                     {label}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </li>
//         </ul>
//         <div className="mt-10 flex items-center gap-4">
//           <Button
//             type="reset"
//             variant="destructive"
//             size="lg"
//             className="flex-1 cursor-pointer"
//             onClick={resetFilters}
//           >
//             <CircleX />
//             Очистити
//           </Button>
//           <Button
//             type="submit"
//             size="lg"
//             className="flex-1 cursor-pointer"
//             onClick={handleFilter}
//             disabled={
//               !selectedCharm &&
//               !selectedFunc &&
//               !selectedPlace &&
//               !selectedGroupe
//             }
//           >
//             <Search />
//             Підібрати
//           </Button>
//         </div>
//       </div>
//       <div className="p-6 pt-0 space-y-4 rounded-xl">
//         <Card className="w-[98%] p-6 bg-gray-600/60 backdrop-blur-md text-primary-foreground">
//           <h1 className="text-3xl font-bold tracking-widest uppercase text-center">
//             Каталог
//           </h1>
//           <p className="text-center">
//             Орієнтовний видовий перелік рекомендованих до масового озеленення
//             рослин відкритого ґрунту
//           </p>
//         </Card>

//         {selectedPlants && selectedPlants.length > 0 ? (
//           <ScrollArea className="h-120 pr-4">
//             <ul className="h-full grid grid-cols-1 gap-6">
//               {selectedPlants?.map((plant) => (
//                 <li key={plant.id}>
//                   <Card className="bg-gray-600/60 backdrop-blur-md text-primary-foreground">
//                     <CardHeader>
//                       <CardTitle className="flex items-center justify-between">
//                         <h2 className="text-2xl tracking-widest font-semibold uppercase">
//                           {plant.title}
//                         </h2>
//                         <Link
//                           href={`https://www.google.com/search?num=10&sca_esv=931f9483f46eed25&sxsrf=AHTn8zrfrBFOa-OTjQfcMLxf4ud0Ow4YEg:1747495325940&q=${plant.title}&udm=2&fbs=ABzOT_AHK5AnouJJKCp3GWxZwUCoTwqA-ockxzCdB1u0OyE70UeKrt54g_bmAOXbPzfQ3E3ngqCG7GezBwcFE0ACmqUZHjAxEPrTRTbkbX9NfOQl-I0mO5-XOhfgpTwJUDMu00a0pk6U8-vsNgTbr21I8WyfbjyxIsWNQL0m4EftXv0AuDIgIoR8f4giItudyWvk_gUELN4yTeiW8XlxzqNywNjWFxSF7yDRhPkoKr6bpzEOkHcrJHfz_NlxQfQYTFMX3Lx4SwxHDlVpaI2r1Vr2QXZMXfCD8w&sa=X&ved=2ahUKEwjB15ix56qNAxU3IxAIHf8MG84QtKgLegQIERAB&biw=1536&bih=695&dpr=1.25`}
//                           target="_blank"
//                           rel="noreferrer noopener"
//                         >
//                           <TooltipProvider>
//                             <Tooltip>
//                               <TooltipTrigger className="cursor-pointer">
//                                 <MdImageSearch className="text-3xl" />
//                               </TooltipTrigger>
//                               <TooltipContent>
//                                 <p>Переглянути зображення</p>
//                               </TooltipContent>
//                             </Tooltip>
//                           </TooltipProvider>
//                         </Link>
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent className="space-y-8">
//                       <div className="space-y-2">
//                         <h3 className="flex items-center gap-2 font-semibold text-green-500">
//                           <GiStonePile size={24} />
//                           Ґрунтосуміш (субстрат посадкової ями, змішаний зі
//                           складових у рівних пропорціях):
//                         </h3>
//                         <ul className="list-none list-inside flex flex-col justify-end gap-1">
//                           {plant.soilMix.map((sm, index) => (
//                             <li key={sm}>
//                               {sm}
//                               {index < plant.soilMix.length - 1 && " +"}
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                       <div className="space-y-2">
//                         <h3 className="flex items-center gap-2 font-semibold text-green-500">
//                           <RiPlantFill size={24} />
//                           <span>Догляд (нюанси агротехніки):</span>
//                         </h3>
//                         <ul className="list-none list-inside flex flex-col justify-end gap-1">
//                           {plant.care.map((cr, index) => (
//                             <li key={cr}>
//                               {cr}
//                               {index < plant.care.length - 1 && "+"}
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                       <div className="space-y-2">
//                         <h3 className="flex items-center gap-2 font-semibold text-green-500">
//                           <MdSpeakerNotes size={24} />
//                           Примітки (особливості, що можуть вплинути на
//                           використання рослини):
//                         </h3>
//                         <ul className="list-none list-inside flex flex-col justify-end gap-1">
//                           {plant.notes.map((nt) => (
//                             <li key={nt}>{nt}</li>
//                           ))}
//                         </ul>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </li>
//               ))}
//             </ul>
//           </ScrollArea>
//         ) : selectedPlants && selectedPlants.length === 0 ? (
//           <div className="w-[98%] h-120 flex flex-col items-center justify-center gap-4 p-6 bg-gray-600/60 backdrop-blur-md text-primary-foreground rounded-xl">
//             <p className="text-3xl font-bold flex items-center gap-2">
//               <SearchX size={30} />
//               Нічого не знайдено.
//             </p>
//             <span className="text-primary-foreground/80">
//               Задайте інші критерії пошуку.
//             </span>
//           </div>
//         ) : undefined}
//       </div>
//       <div />
//     </div>
//   );
// };

"use client";

import Link from "next/link";
import { useState } from "react";
import { RiPlantFill } from "react-icons/ri";
import { GiStonePile } from "react-icons/gi";
import { MdImageSearch, MdSpeakerNotes } from "react-icons/md";
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

import {
  CHARMS_DATA,
  FUNCTIONS_DATA,
  GROUPE_DATA,
  PLACING_DATA,
  PLANTS_DATA,
} from "@/data";
import { Plant } from "@/types";

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
      <div className="p-6 py-12 h-[90vh] rounded-xl bg-gray-600/60 backdrop-blur-md text-primary-foreground">
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
            <Select value={selectedCharm} onValueChange={setSelectedCharm}>
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
            <Select value={selectedFunc} onValueChange={setSelectedFunc}>
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
            <Select value={selectedPlace} onValueChange={setSelectedPlace}>
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
            <Select value={selectedGroupe} onValueChange={setSelectedGroupe}>
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
            <CircleX /> Очистити
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
            <Search /> Підібрати
          </Button>
        </div>
      </div>

      <div className="p-6 pt-0 space-y-4 rounded-xl">
        <Card className="w-[98%] p-6 bg-gray-600/60 backdrop-blur-md text-primary-foreground">
          <h1 className="text-3xl font-bold tracking-widest uppercase text-center">
            Каталог
          </h1>
          <p className="text-center">
            Орієнтовний видовий перелік рекомендованих до масового озеленення
            рослин відкритого ґрунту
          </p>
        </Card>

        {selectedPlants && selectedPlants.length > 0 ? (
          <ScrollArea className="h-120 pr-4">
            <ul className="h-full grid grid-cols-1 gap-6">
              {selectedPlants.map((plant) => (
                <li key={plant.id}>
                  <Card className="bg-gray-600/60 backdrop-blur-md text-primary-foreground">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <h2 className="text-2xl tracking-widest font-semibold uppercase">
                          {plant.title}
                        </h2>
                        <Link
                          href={`https://www.google.com/search?q=${plant.title}`}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger className="cursor-pointer">
                                <MdImageSearch className="text-3xl" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Переглянути зображення</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-8">
                      <div className="space-y-2">
                        <h3 className="flex items-center gap-2 font-semibold text-green-500">
                          <GiStonePile size={24} /> Ґрунтосуміш:
                        </h3>
                        <ul className="list-none list-inside flex flex-col gap-1">
                          {plant.soilMix.map((sm, i) => (
                            <li key={sm}>
                              {sm}
                              {i < plant.soilMix.length - 1 && " +"}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h3 className="flex items-center gap-2 font-semibold text-green-500">
                          <RiPlantFill size={24} /> Догляд:
                        </h3>
                        <ul className="list-none list-inside flex flex-col gap-1">
                          {plant.care.map((cr, i) => (
                            <li key={cr}>
                              {cr}
                              {i < plant.care.length - 1 && "+"}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h3 className="flex items-center gap-2 font-semibold text-green-500">
                          <MdSpeakerNotes size={24} /> Примітки:
                        </h3>
                        <ul className="list-none list-inside flex flex-col gap-1">
                          {plant.notes.map((nt) => (
                            <li key={nt}>{nt}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </li>
              ))}
            </ul>
          </ScrollArea>
        ) : selectedPlants && selectedPlants.length === 0 ? (
          <div className="w-[98%] h-120 flex flex-col items-center justify-center gap-4 p-6 bg-gray-600/60 backdrop-blur-md text-primary-foreground rounded-xl">
            <p className="text-3xl font-bold flex items-center gap-2">
              <SearchX size={30} /> Нічого не знайдено.
            </p>
            <span className="text-primary-foreground/80">
              Задайте інші критерії пошуку.
            </span>
          </div>
        ) : null}
      </div>

      <div />
    </div>
  );
};
