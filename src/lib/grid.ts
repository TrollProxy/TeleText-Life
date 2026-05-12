export const GRID_COLUMNS = 40;
export const GRID_ROWS = 25;

export const fitLine = (text: string): string =>
  text.length > GRID_COLUMNS ? text.slice(0, GRID_COLUMNS) : text.padEnd(GRID_COLUMNS, ' ');

export const normalizeLines = (lines: string[]): string[] => {
  const filled = lines.map(fitLine);
  while (filled.length < GRID_ROWS) filled.push(' '.repeat(GRID_COLUMNS));
  return filled.slice(0, GRID_ROWS);
};
