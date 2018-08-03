
const { join } = require('path');
let data = require(join(__dirname, '../data/data.json'));

module.exports.get = getHoteles;

function getHoteles(params) {

    let { name, estrellas } = params;
    return new Promise((resolve, reject) => {

        let result = data;

        if (name && name.length > 3) {
            let regExpStrign = `${name.toLowerCase()}`;
            result = result.filter((elem) => new RegExp(regExpStrign).test(elem.name.toLowerCase()));
        };

        if (estrellas) {
            
            result = result.filter(elem => {
                let stars = estrellas.split(",");
                
                for (let i in stars) {
                    if(elem.stars === parseInt(stars[i])) {
                        return true
                    }
                }
                return false
                
            });
        }

        if(!name && !estrellas){
            result={};
        }

        (resolve(result))
    });
}