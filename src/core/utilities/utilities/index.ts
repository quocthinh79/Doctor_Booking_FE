export const messError = (error: any) =>
  error?.["response"]?.["data"]?.["mess"];

export function getRange(start: number, end: number): number[] {
  const range: number[] = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  return range;
}
