export const userRoles = [
  {label: "Candidato", value: "job-seeker"},
  {label: "Recrutador", value: "recruiter"},
];

export const jobTypes = [
  { label: "Período Integral", value: "full-time" },
  { label: "Meio período", value: "part-time" },
  { label: "Contrato", value: "contract" },
  { label: "Estágio", value: "internship" },
];

export const jobStatuses = [
  { label: "Open", value: "open" },
  { label: "Closed", value: "closed" },
  { label: "Paused", value: "paused" },
];

export const jobStatusesClasses: Record<string, string> = {
  open: "py-1 px-3 bg-green-100 text-green-800 border border-green-500 rounded-md w-max uppercase text-xs font-medium",
  closed: "py-1 px-3 bg-red-100 text-red-800 border border-red-500 rounded-md w-max uppercase text-xs font-medium",
  paused: "py-1 px-3 bg-yellow-100 text-yellow-800 border border-yellow-500 rounded-md w-max uppercase text-xs font-medium"
}