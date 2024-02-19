const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.get('/list-files', (req, res) => {
  const folderPath = path.join(__dirname); // 修改为实际文件夹路径
  const files = [];
   console.log(folderPath);
  function traverseFolder(folderPath) {
    const items = fs.readdirSync(folderPath);
    items.forEach(item => {
      const itemPath = path.join(folderPath, item);
      const stats = fs.statSync(itemPath);
      if (stats.isDirectory()) {
        traverseFolder(itemPath);
      } else if (stats.isFile()) {
        files.push(item);
      }
    });
  }

  traverseFolder(folderPath);
  res.json({ files });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})




