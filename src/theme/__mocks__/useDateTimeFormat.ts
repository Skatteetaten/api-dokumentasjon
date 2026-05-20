const useDateTimeFormat = jest.fn(() => ({
  format: jest.fn((date: Date) => {
    const year = date.getFullYear();
    const month = date.toLocaleString("nb-NO", { month: "long", timeZone: "UTC" });
    const day = date.getUTCDate();
    return `${day} ${month} ${year}`;
  }),
}));

const useAlternatePageUtils = jest.fn(() => ({
  createUrl: jest.fn(({ locale }: { locale: string }) => `/api/${locale}`),
}));

export { useDateTimeFormat, useAlternatePageUtils };
