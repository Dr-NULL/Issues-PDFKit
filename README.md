# Issue Report - PDFKit

This is an example project which generate and PDF Document. The problem is than PDFKit has an strange behavior when inserts chinese characters.

## Details:
- When inserts some characters (like "产品名"), the texts which inserted next only shows a few characters.
- Some normal characters such two-dots ":" doesn't rendered by PDFKit.

## Remarks:

That issues only ocurs with fonts with chinese characters, like:
- [NotoSans SC Font](https://fonts.google.com/specimen/Noto+Sans+SC).
- [NotoSans TC Font](https://fonts.google.com/specimen/Noto+Sans+TC).
- [NotoSerif TS Font](https://fonts.google.com/specimen/Noto+Serif+TC).

## How to run the Test:

### Prerequisites:
- Windows 10 x64 bits
- [Node.js v10.16.3](https://nodejs.org/dist/v10.16.3/node-v10.16.3-x64.msi)
- Typescript: ```npm install -g typescript```

### Prepare the project:

Execute these commands, line by line, pressing enter after every line ending:
```
npm update
tsc
npm test
```