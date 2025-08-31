export type HandbookItem = {
  chapter: string;
  title: string;
  target: string;
};

export type Charm = {
  label: string;
  value: string;
};

export type FunctionPlant = {
  label: string;
  value: string;
};

export type Placing = {
  label: string;
  value: string;
};

export type Groupe = {
  label: string;
  value: string;
};

export type Plant = {
  id: string;
  title: string;
  groupe: string;
  charms: string[];
  functions: string[];
  placing: string[];
  soilMix: string[];
  care: string[];
  notes: string[];
};
