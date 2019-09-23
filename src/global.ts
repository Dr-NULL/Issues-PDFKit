module Global {
    export module Path {
        export const root = __dirname.replace(/(.(?!(\\|\/)))+.$/gi, "\\")
        export const source = root + "source\\"
        export const pdfFile = source + "test.pdf"
        
        export module Fonts {
            const fonts = source + "fonts\\"
            export const notoSansSinplif = fonts + "NotoSansSimplif.otf"
            export const notoSansTradit = fonts + "NotoSansTradit.otf"
            export const notoSerifTradit = fonts + "NotoSerifTradit.otf"
            export const code128 = fonts + "Code128.ttf"
            export const roboto = fonts + "Roboto.ttf"
        }
    }
}
export default Global