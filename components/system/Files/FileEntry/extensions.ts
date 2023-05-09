type Extensions = {
  [extensions: string]: {
    icon: string;
    process: string[];
  };
};

const extensions: Extensions = {
  ".img": {
    icon: "image",
    process: ["V86"],
  },
  ".iso": {
    icon: "image",
    process: ["FileExplorer", "V86"],
  },
  ".jsdos": {
    icon: "compressed",
    process: ["JSDOS"],
  },
  ".mp3": {
    icon: "music",
    process: ["Webamp"],
  },
  ".swf": {
    icon: "unknown",
    process: ["Ruffle"],
  },
  ".wsz": {
    icon: "music",
    process: ["Webamp"],
  },
  ".zip": {
    icon: "compressed",
    process: ["FileExplorer", "JSDOS"],
  },
};

export default extensions;
