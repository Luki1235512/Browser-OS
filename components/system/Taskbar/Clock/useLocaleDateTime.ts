import { useTheme } from "styled-components";
import { DEFAULT_LOCALE } from "utils/constants";

type LocaleTimeDate = {
  date: string;
  time: string;
  dateTime: string;
};

const useLocaleDateTime = (now: Date): LocaleTimeDate => {
  const { formatDate, formatTime } = useTheme();
  const formattedDate = new Intl.DateTimeFormat(
    DEFAULT_LOCALE,
    formatDate
  ).format(now);
  const day = new Intl.DateTimeFormat(DEFAULT_LOCALE, {
    weekday: "long",
  }).format(now);
  const date = `${formattedDate}\n${day}`;
  const time = new Intl.DateTimeFormat(DEFAULT_LOCALE, formatTime).format(now);
  const dateTime = now.toISOString();

  return { date, time, dateTime };
};

export default useLocaleDateTime;
