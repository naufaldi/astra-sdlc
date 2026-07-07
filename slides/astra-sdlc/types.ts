export type GridCard = { title: string; body: string };
export type FlowStep = { label: string; detail: string };
export type CompareSide = { model: string; strengths: string[] };

export type CoverageRow = {
  section: string;
  lookFor: string;
  gptMark: string;
  glmMark: string;
};

export type CoverageExample = {
  section: string;
  gpt: string;
  glm: string;
};

export type SdlcCompare = {
  id: 'prd' | 'rfc' | 'code' | 'review';
  kicker: string;
  title: string;
  subtitle?: string;
  task: string;
  proprietary: CompareSide;
  openWeight: CompareSide;
  risk: string;
  compareNote?: string;
  demo: { title: string; subtitle: string; source: string; steps?: string[] };
};
