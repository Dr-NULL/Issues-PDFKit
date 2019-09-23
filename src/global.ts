module Global {
    export module Path {
        export const root = __dirname.replace(/(.(?!(\\|\/)))+.$/gi, "\\")
        export const pdfFile = root + "test.pdf"
        
        const source = root + "source\\"
        export module Fonts {
            const fonts = source + "fonts\\"
            export const notoSansSinplif = fonts + "NotoSansSimplif.otf"
            export const notoSansTradit = fonts + "NotoSansTradit.otf"
            export const notoSerifTradit = fonts + "NotoSerifTradit.otf"
            export const code128 = fonts + "Code128.ttf"
        }
    }
}
export default Global