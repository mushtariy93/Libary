const http= require('node:http');
const fs=require('node:fs');
const path=require('path');

require("dotenv").config();
const PORT=process.env.PORT;
const HOST=process.env.HOST;

const creatViewPage = (page) => {
  return path.resolve(__dirname, "views", `${page}.html`);
};

const server=http.createServer((req,res)=>{
   // console.log("Serverga so`rov keldi");
 let filePage = "";
  res.setHeader("Content-Type", "text/html");

  switch (req.url) {
    case "/":
      filePage = creatViewPage("index");
      break;
    case "/Adabiyotlar":
      filePage = creatViewPage("Adabiyotlar");
      break;
    case "/Maqolalar":
      filePage = creatViewPage("Maqolalar");
      break;
    case "/Dissertatsiyalar":
      filePage = creatViewPage("Dissertatsiyalar");
      break;
    case "/Monografiyala":
      filePage = creatViewPage("Monografiyala");
      break;
    case "/Muassasalar":
      filePage = creatViewPage("Muassasalar");
      break;
    case "/Mualliflar":
      filePage = creatViewPage("Mualliflar");
      break;
    case "/Jurnallar":
      filePage = creatViewPage("Jurnallar");
      break;
    default:
      filePage = creatViewPage("error");
      res.statusCode = 404;
      break;
  }

  console.log(filePage);
  if(filePage !=""){
    fs.readFile(filePage,(err,page)=>{
         if (err) {
           console.log("Sahifani yuklashda xatolik");
           res.statusCode = 500;
           res.end("Sahifani yuklashda xatolik-500");
         } else {
           res.end(page);
         }
        

    });
  }
});

server.listen(PORT, HOST, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server${PORT}-da ishga tushdi`);
  }
});



