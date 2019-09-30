module Global {
    export module Path {
        export const root = __dirname.replace(/(.(?!(\\|\/)))+.$/gi, "\\")
        export const source = root + "source\\"
        export const pdfFile = source + "test.pdf"      //OUTPUT FILE
        
        export module Fonts {
            const fonts = source + "fonts\\"
            export const code128 = fonts + "Code128.ttf"
            export const notoSansSC = fonts + "NotoSansSC.otf"
            export const notoSerifSC = fonts + "NotoSerifSC.otf"
            export const pingFang = fonts + "PingFang.ttf"
            export const 方正黑体简体 = fonts + "方正黑体简体.ttf"
        }
    }
}
export default Global