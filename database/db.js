

const mongoose = require('mongoose')

const DB_URI = "mongodb+srv://prayush:Prayushtony@cluster0.0fkkuww.mongodb.net/?retryWrites=true&w=majority"

// const ConnectDB = async () => {
//     await mongoose.connect(DB_URI)
//         .then(() => {
//             console.log('Connected to MongoDB')

//         })
//         .catch((err) => console.log(err))
// }

// const ConnectDB = async () => {
//     new mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
//         if (err) throw err;
//         const dbo = db.db('test');
//         dbo.collection('products').aggregate([
//             {
//                 $lookup: {
//                     from: "Category",
//                     localField: "Category",
//                     foreignField: "Name",
//                     as: "anthing"

//                 }
//             }
//         ]).toArray((err,res)=>{
//             if(err) throw err;
//             console.log(JSON.stringify(res))
//             db.close()
//         })
//     })

// }

const ConnectDB = async () => {
    await mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, async (err, result) => {
        if (err) console.log(err)
        else {
            console.log('Connected to MongoDB')
            const dbo = await mongoose.connection.db.collection('products').aggregate(
                {
                    $lookeup: {
                        from: "Category",
                        localField: "Name",
                        foreignField: "Category",
                        as: "anthing"
                    }
                }
        ).toArray((err,res)=>{
                if(err) console.log(err);
                else{
                    // console.log.log(JSON.stringify(res))
                    console.log('This is First         - ',JSON.stringify(res[0]) , );
                    console.log( 'This second Data       - ',JSON.stringify(res[1]) ,)
                    console.log( 'This is Third Data    -     ',JSON.stringify(res[2]) )
                
                    global.z=JSON.stringify(res[0])

                    global.y=JSON.stringify(res[1])

                    global.x=JSON.stringify(res[2])

                    
                }
            })
            
        }

    })
}






module.exports = ConnectDB


