export type GridCard = { title: string; body: string };
export type FlowStep = { label: string; detail: string };

export type SdlcCompare = {
  id: 'prd' | 'rfc' | 'code' | 'review';
  kicker: string;
  title: string;
  task: string;
  about: string;
  values: string;
  proprietary: { model: string };
  openWeight: { model: string };
  demo: { title: string; subtitle: string; source: string };
};
