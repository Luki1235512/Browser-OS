type V86Image = {
  async?: boolean;
  size?: number;
  url: string;
  use_parts?: boolean;
};

type V86ImageType = "cdrom" | "fda" | "hda";

export type V86ImageConfig = Partial<Record<V86ImageType, V86Image>>;

const SUPPORTED_FLOPPY_TYPES = new Set([
  160, 180, 200, 320, 360, 400, 720, 1200, 1440, 1722, 2880,
]);

const isFloppyImage = (size: number): boolean =>
  // eslint-disable-next-line no-bitwise
  (SUPPORTED_FLOPPY_TYPES.has(size >> 10) && (size & 0x3ff) === 0) ||
  size === 512;

export const getImageType = (size: number): string =>
  isFloppyImage(size) ? "fda" : "hda";
