import config from 'next.config';
import { useRouter } from 'next/router';
import { useTheme } from 'styled-components';

type LocaleTimeDate = {
  date: string;
  time: string;
  dateTime: string;
};

const useLocaleDateTime = (now: Date): LocaleTimeDate => {
  const { locale = config.i18n.defaultLocale } = useRouter() || {};
  const { formatDate, formatTime } = useTheme();

  const date = new Intl.DateTimeFormat(locale, formatDate).format(now);
  const time = new Intl.DateTimeFormat(locale, formatTime).format(now);
  const dateTime = now.toISOString();

  return { date, time, dateTime };
};

export default useLocaleDateTime;
