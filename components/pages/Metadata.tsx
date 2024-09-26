import Head from "next/head";
import { basename, dirname, join } from "path";
import desktopIcons from "public/.index/desktopIcons.json";
import {
  HIGH_PRIORITY_ELEMENT,
  ICON_PATH,
  PACKAGE_DATA,
  USER_ICON_PATH,
} from "utils/constants";

const { alias, description } = PACKAGE_DATA;

const Metadata: FC = () => (
  <Head>
    <meta
      content="width=device-width, initial-scale=1, minimum-scale=1"
      name="viewport"
    />
    <meta content={description} name="description" />
    <title>{alias}</title>
    {desktopIcons?.map((icon) => (
      <link
        key={icon}
        as="image"
        href={
          icon.startsWith(ICON_PATH) || icon.startsWith(USER_ICON_PATH)
            ? join(dirname(icon), `48x48`, basename(icon)).replaceAll("\\", "/")
            : icon
        }
        rel="preload"
        {...HIGH_PRIORITY_ELEMENT}
      />
    ))}
  </Head>
);

export default Metadata;
