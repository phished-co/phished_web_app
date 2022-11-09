
// import path from 'path';
const fs = require('fs');


export default async function handler(req, res) {

    let listOfHandlebars = []
    fs.readdir("./templates/", (err, files) => {
        files.forEach(file => {
            let handlebarName = file.split(".")[0]
            listOfHandlebars.push(handlebarName)
        });
    });
    
    // console.log("yhis is the backend" + listOfHandlebars)
    // return listOfHandlebars
    // res.status(200).send('hiii')
}

///------add this to the file srverprobs or account .jsx----

//  const listOfTemplates = () =>{
//     axios.get('/api/emailTemplates')
//         .then(response => {
//           console.log( "this is the responce "+ response.data)
//         }).catch( err => {
//           console.log('Error: ',err)
//     })
//   }
// 
//   console.log(listOfTemplates())