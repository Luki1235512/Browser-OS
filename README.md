My attempt on creating operating system mockup in browser

![image](https://user-images.githubusercontent.com/49656590/236868869-c41fbc98-54d8-4a5b-bac3-4020186fca30.png)

## Demo
Check out the live demo of the application [here](https://cute-os.vercel.app/).

##### Development
```
yarn build:fs
yarn dev
```

##### Production

```
yarn build
yarn start
```

### Docker

- [Docker Desktop](https://www.docker.com/products/docker-desktop)

```
docker build -t cute-os .
docker run -dp 3000:3000 --rm --name cute-os cute-os
```

## Running Tests
To run the tests for this application, you can use the following command:
```
npm/yarn test
```
# System 💻

### [File System](https://github.com/jvilk/BrowserFS)

- File Explorer
  - Back, Forward, Recent locations, Address bar, Search
- [Drag & Drop](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API) File Support (internal & external)
  - Loading progress dialog
- ZIP ([write support](https://www.npmjs.com/package/fflate)), [ZIP](https://github.com/jvilk/BrowserFS/blob/master/src/backend/ZipFS.ts)/[ISO](https://github.com/jvilk/BrowserFS/blob/master/src/backend/IsoFS.ts) read support, [7Z/GZ/RAR/TAR/etc. extract](https://github.com/use-strict/7z-wasm) support
- Writes to [IndexedDb](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
- Group selection/manipulation & drag to sort
- Dynamic and auto cached icons for [music](https://github.com/Borewit/music-metadata-browser), images & video
- Context Menus
  - Cut, Copy, Create shortcut, Delete, Rename
  - [Add file(s)](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications), [Map directory](https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API)
  - Open with, Open file/folder location, Open in new window
  - Download, Add to archive, Extract here, Set as wallpaper, Convert audio/video/photo/spreadsheets
  - Sort by, New Folder, New Text Document
- Keyboard Shortcuts
  - CTRL+C, CTRL+V, CTRL+X, CTRL+A, Delete
  - F2, F5, Backspace, Arrows, Enter
  - SHIFT+CTRL+R, SHIFT+F10, SHIFT+F12
- File information tooltips
- Allow sorting by name, date, type or extension
  - Persists states

### Windows

- [Resizable and Draggable](https://github.com/bokuweb/react-rnd)
- Minimize, Maximize & Close
- Persists size/position/maximized states
- [Animates](https://www.framer.com/motion/) opening and closing

### Start Menu

- Expandable Sidebar
  - Apps list, Documents shortcut, Power (clears session)
- Spotlight visual effect
- Folder support
- Keyboard shortcut opens with **_SHIFT+ESC_**

### Taskbar

- [Peek](https://github.com/bubkoo/html-to-image) hover preview of windows
- Focused window indicator

### Clock

- Runs in a [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
- NTP server time mode ([ntp.js](http://www.ntpjs.org/))
- Synced to system clock on load
- Date tooltip

### Wallpaper

- Dynamic animated wallpapers ([OffscreenCanvas](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas)/[Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers))
  - [Vanta.js](https://www.vantajs.com/)
  - [Hexells](https://znah.net/hexells/)
- Set via images (Fill, Fit, Stretch, Tile, Center)
- [Astronomy Picture of the Day](https://api.nasa.gov/#apod)

### URL

- Query parameter loading
  - Examples:
    - `/?url=/favicon.ico`
    - `/?app=TinyMCE`

# Apps 🛠️

### [BoxedWine](http://www.boxedwine.org/) (**_.exe, .zip_**)

- Runs 16/32-bit Windows applications

### Browser (**_.htm, .html_**)

- Loads websites (_w/HTTP header support_)
- Bookmark bar
- Favicon support
- Back/Forward & Reload
- Google search via Address bar

### [DevTools](https://eruda.liriliri.io/)

- Console, Elements, Network, Resources, Sources, DOM
- Activate from Start Menu or **_SHIFT+F12_**

### [js-dos](https://js-dos.com/) (**_.exe, .jsdos, .zip_**)

- DOS emulator
- Automatic save states on close
  - /Users/Public/Snapshots
- Automatic window resize

### [Marked](https://marked.js.org/) (**_.md_**)

- Markdown Viewer

### [Monaco Editor](https://microsoft.github.io/monaco-editor/)

- Code/text editor
- Supports all file types
- Save files via **_CTRL+S_**
- Line count, cursor position, language id
- [Prettier](https://prettier.io/) formatting
  - json, js/ts, css/sass/less, html, markdown

### [PDF](https://mozilla.github.io/pdf.js/) (**_.pdf_**)

- Renders PDF's
- Page current/count & Zoom

### Photos

- [Supported Formats](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#supported_image_formats)
- Fullscreen & [Zoom](https://github.com/anvaka/panzoom)

### [Ruffle](https://ruffle.rs/) (**_.swf, .spl_**)

- Flash Player emulator

### [Terminal](https://xtermjs.org/)

- File system support
- Autocomplete & history
- Command list via `help`
- [Git support](https://isomorphic-git.org/) (checkout & clone)
- [Python support](https://pyodide.org/) (**_.py_**)
- [WebAssembly Package Manager](https://wapm.io/)
  - Ex: `wapm cowsay moo` ([\#](https://wapm.io/package/cowsay))
- [Weather information](https://wttr.in/)
- [eSheep](https://adrianotiger.github.io/web-esheep/)
- Activate from Start Menu or **_SHIFT+F10_**

### [TinyMCE](https://www.tiny.cloud/tinymce/) (**_.whtml_**)

- Read & WYSIWYG modes
- File save support

### [Virtual x86](https://copy.sh/v86/) (**_.img, .iso_**)

- x86 emulator
- Automatic save states on close
  - /Users/Public/Snapshots
- Automatic window resize

### [Video Player](https://videojs.com/)

- [Supported Formats](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Video_codecs)
- Plays [YouTube](https://github.com/videojs/videojs-youtube) videos/shortcuts

### [Webamp](https://webamp.org/) (**_.mp3, .wsz_**)

- Winamp audio player
- [Skin support](https://skins.webamp.org/)
