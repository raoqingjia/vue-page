// https://www.npmjs.com/package/pdf2html
// npm install officegen --save

const pdf2html = require('pdf2html'); // 生产 html 乱码生成txt格式没问题
const officegen = require('officegen');
// const docx = officegen('docx');//word
// const pptx = officegen('pptx');//pptx
const fs = require('fs');

toHtml();

async function toHtml() {
  const content = await pdf2html.text('input.pdf'); //  pdf2html 生成txt

// Create an empty Word object:
  let docx = officegen('docx')
// Officegen calling this function after finishing to generate the docx document:
  docx.on('finalize', function(written) {
    console.log(
      'Finish to create a Microsoft Word document.'
    )
  })

// Officegen calling this function to report errors:
  docx.on('error', function(err) {
    console.log(err)
  })

  const txt = docx.createP({ align: 'center' })
  txt.addText( content , { blod: true, font_face: '宋体', font_size: 12 })

  let out = fs.createWriteStream('example.docx')

  out.on('error', function(err) {
    console.log(err)
  })

// Async call to generate the output file:
  docx.generate(out)

  // docx.on('finalize', function (written) {
  //   console.log('Finish to create Word file.\nTotal bytes created: ' + written + '\n');
  // });
  //
  // docx.on('error', function (err) {
  //   console.log(err);
  // });
  //
  // fs.writeFile('./output.txt', result, (err) => {
  //   if (err) throw err;
  //   console.log('文件已生成');
  // })

}
