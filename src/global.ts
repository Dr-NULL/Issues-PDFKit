module Global {
    export module Path {
        export const root = __dirname.replace(/(.(?!(\\|\/)))+.$/gi, "\\")
        export const source = root + "source\\"
        export const pdfFile = source + "test.pdf"      //OUTPUT FILE
        
        export module Fonts {
            const fonts = source + "fonts\\"
            export const code128 = fonts + "Code128.ttf"
            export const notoSansSC = fonts + "NotoSansSC.otf"              //From https://fonts.google.com/
            export const notoSerifSC = fonts + "NotoSerifSC.otf"            //From https://fonts.google.com/
            export const notoSansCJKtc = fonts + "NotoSansCJKtc.otf"        //From https://www.google.com/get/noto/#sans-hant
            export const sourceHanSerifSC = fonts + "SourceHanSerifSC.otf"  //From https://github.com/adobe-fonts/source-han-serif/tree/release/OTF/SimplifiedChinese
            export const pingFang = fonts + "PingFang.ttf"                  //Powered by PDFKit dev team
            export const fZHei = fonts + "FZHei.ttf"                        //From http://www.foundertype.com/
        }
    }
}
export default Global