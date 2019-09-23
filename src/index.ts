import PDFDocument from "pdfkit"
import * as fs from "fs"

import Global from "./global"
import mm from "./mm"

//New Document
console.clear()
console.log("--> Creating new Testing Document...")
const dcto = new PDFDocument({ size: [ mm(150), mm(100) ], margin: mm(0) })
dcto.pipe(fs.createWriteStream(Global.Path.pdfFile))

//Title
dcto.font(Global.Path.Fonts.notoSansSinplif)
dcto.fontSize(10)
dcto.text(
    "冷冻去骨牛肉 / Frozen Boneless Beef / Carne Bovina sin Hueso Congelada", 
    mm(2), mm(1),
    {
        width: mm(145)
    }
)

//Thats the Issue ↓↓↓
dcto.fontSize(7)
dcto.text("产品名:", 
    mm(2), mm(7)
)
dcto.text(
    "Product Name:",
    mm(2), mm(10)
)
dcto.text(
    "Nombre Producto:",
    mm(2), mm(13)
)
//Thats the Issue ↑↑↑

console.log("--> Document Done!")
dcto.end()