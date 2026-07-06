export type GridCard = { title: string; body: string };
export type FlowStep = { label: string; detail: string };
export type CompareSide = { model: string; strengths: string[] };

export type SdlcCompare = {
  id: 'prd' | 'rfc' | 'code' | 'review';
  kicker: string;
  title: string;
  task: string;
  proprietary: CompareSide;
  openWeight: CompareSide;
  risk: string;
  demo: { title: string; subtitle: string; source: string };
};
