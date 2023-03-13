import config from 'next.config';
import { useRouter } from 'next/router';
import { useTheme } from 'styled-components';

type LocaleTimeDate = {
  date: string;
  time: string;
  dateTime: string;
};

const useLocaleTimeDate = (now: Date): LocaleTimeDate => {
  const { locale = config.i18n.defaultLocale } = useRouter() || {};
  const { formatDate, formatTime } = useTheme();

  return {
    date: new Intl.DateTimeFormat(locale, formatDate).format(now),
    time: new Intl.DateTimeFormat(locale, formatTime).format(now),
    dateTime: now.toISOString()
  };
};

export default useLocaleTimeDate;
