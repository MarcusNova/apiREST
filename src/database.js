import moongose from 'mongoose';
import config from './config';
//Utilizamos moongose y empleamos el metodo connect para conectarnos a la base de datos
(async () => {
    try {
        const db = await moongose.connect(config.mongodb_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log('Database is connected to :', db.connection.name);
    } catch (error) {
        console.error(error);
    }
})();
