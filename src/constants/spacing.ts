export const spacing = {
  x1: '2px',
  x2: '4px',
  x3: '6px',
  x4: '8px',
  x5: '10px',
  x6: '12px',
  x7: '14px',
  x8: '16px',
  x9: '18px',
  x10: '20px',
  x11: '22px',
} as const;

export type Spacing = (typeof spacing)[keyof typeof spacing];
