const {sequelize} = require('./database')
const {Category} = require ('../models/category')
const {Part} = require('../models/part')

const categories = [
    {
        categoryName: 'Bars'
    },
    {
        categoryName: 'Body'
    },
    {
        categoryName: 'Fork'
    },
    {
        categoryName: 'Pedals'
    },
    {
        categoryName: 'Suspension'
    },
    {
        categoryName: 'Tires'
    },
]
const parts = [
    {
       imageURL:"https://i.ebayimg.com/images/g/9MEAAOSwVgZkKzzP/s-l400.jpg",
       brand: 'HUFFY',
       money: '2,999.00',
        categoryId: 1
    },
    {
        imageURL:"https://cdn.shopify.com/s/files/1/1081/9866/products/PNWComponents_RangeHandlebar_SafetyOrange.png?v=1649800271",
        brand: 'OneUp',
        money: '74.00',
        categoryId: 1
    },
    {
        imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxmvrsHYTRI0aOovG1arN9nppOMChav79dfFwAdR1LccIPelF4LiO8cimAbgwfVXdlvncd3XmkbzM&usqp=CAU&ec=48665698",
        brand: 'Yeti',
        money: '160.00',
        categoryId: 1
    },
    {
        imageURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEX///8zMzNYWFg2NjZCQkIAAAA8PDxNTU1RUVE5OTlfX19FRUU/Pz9bW1tISEg9PT0uLi4lJSW9vb0aGhoLCwsfHx9lZWUXFxcvLy8pKSlycnIUFBTw8PDIyMj5+fnc3NywsLCDg4Onp6fl5eV4eHjR0dFqamqTk5OhoaGJiYnh4eGVlZW5ubmvr6+yD3Y+AAAFBklEQVR4nO3YC3PTOBAHcPSwLfkVO7blyM6jThwnaZPv//Vu16FwdxwzDLSk3Px/yZRiStBqpdWKT58AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgf229PD5vHz2It7XebW7nr78d6z4IAi/Hl6fNbv24Yf06CuzpZYjDsiyUFU+vj7dhHhljoiRURdn0lc3G0355PPwxad2uj8vbaXC68MKGOknyJNE6td3rDxwCoewi4TCljOM4kybXtvClMNMwp/VDxrpdP2+u58vocqXmsPJEp6kNwzQ0MiNmev3RQy1WhWDKpjrJ6c9j59zkXEyxpsqXhY67y/m6ef4AsW7XuyWtxE5qSleeR1FEoaWWRl8oI+OcxkyPKYWL0Lz+nXVQV74Q1iqlKEplQ46TUsoZdSyOTaTtyjeV17K77K/Hw2+Odbs+HK/70+gM5YnCok0V5cnCKrG6p8baRZomkYykMfzUN03wJYefNvthMoqrDYeqKECaAnqnc+7zOVoKl9AH61AJX1Ve5Fn3cqO0vm9kh83tpZMJJcBXTRJxynQaWs6E4risDRfpgqKjBcoJavs6CKycBlpy/x4aTdNmuaf0i5oiLVeKA5y3bMjuH6Y1R6tTmsIosZYqk0+68+bwHtHtboMJS5+KpvQ+coYCovVFUk4Bo41H4VHKPFXIujG0lX6wbFDRvZ6Hzvi6b0qaPvpMmjde67wm5nWcJrxWOK95bn2RXpZvmszdfrIi5VmcQ9NR7GQ6L6qEdtlcVGg4vmnrvuB98/Oln09OOmBUHfQVTeV9cdy3Ky8SDjSnk8ZY3/bh5fomuTzuJ+9zmbnOhIswotoeM5NqTldBRb5q61bFw9se39vn4/J86SLf931V+pW4bwI71yVOpslt2Qdttz/+wr+y3pxM45WUUWZyN0W0OXIT5eGKHjZUJvoymS7n927BDtQ3nC9Or2gqGy/mrcG7k84gk6iyrQNzWf5EMne30VYily7Lho6OgFRmtqx67rcqYbgJ2f3uJmR92C3PgxFUlRpveblSkJImnKMsppfNjw5ou3saTN0LbTJuN0w8ukSLRhRBlQzn5cM7ju3hOuigt5RGLj5ZLKNUFFwEAqpup9t1+X1XKmguDOpSaGFoq9GhFBtKY17SHHX73eMbjC/Wy45rupJO0iBj2kUhRVk2Vdv3NWsrerVVxQ/ozfhxT+s8pVqVOdMNU+y6rjOLUPXqZffokL613tugSaTrZBRx7eOOj2qfWJG577jXYD5x+NGqYKHMuJGIusF1I4U3SV20/bR5dDDfs4lrT+eUzkYaLXW3tKu4DZp7LGL4CnP/lnsT/hKPo+Egu1FOnZNa+La6vEv/8FaexyBoC0okdZCMEsRtfjb/Gv9NNneB0g3jHHU30qOFKJry/IH23n9bX4KGupHczncUGjdzn+Ny8T+izOR0GbkAGxdrbUUlbo8e/g/Z7lXbtNTuKa4hck7f/PXztxTxHHdMr2mko49aME3X8lp+2O33rU1H3XvbUHktqMyoucqEdwt60dveu780SvhWIMq6OH3o7fet7XIUfB3r6YRoSNmUXzUzOjqoWaAus66S06/0eo9z2OxPHR2NfCGY72Gfrzx8KZtvndTqObrIHf/o//0CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4g/0F7ftmQ+9rp9MAAAAASUVORK5CYII=",
        brand: 'Deity',
        money: '179.00',
        categoryId: 1
    },
    {
        imageURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAw1BMVEX///8AAADNzssjJiRERkX19vgOEQ/IyscYGxny8/YRFBMLDgwbHhz7+/z9/f+vsrXU2N0ABQCUl5SOkY/e4ecsLy04OzmZnJpobG51eH0gIyE/Qj+qrKrs8PbR09BSU1HFyMzP0NS1t7uRk5abnqIuMi++wL60trRJSknl5eXc3NxhZWdZXF40NzZucG6Ii4mnqa1OUVUeIieAg4aeoZ6HiY5laG0rLysvMjiusa51eXiVmJ1NUE2Fh4ReX10QFxBERkz0uXbJAAAEU0lEQVR4nO3XC1OqaBwG8IOCAmp4AwFv3ERuKoRax9T8/p9q/y+knuZsOzbtrp2Z5zcVpKU8PO+lfvwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4mgfLitr9cCxJQuvh3hfzFQ+CFEa2r3iuq28N+/pEP7WUVPFTp24xtt2mvGHIArfud7k3KSJZTvqyMeLs9FwVax1OOxnZVkuMx+uPOetU+akolkPhKN2FXaCTPgUes4Lv33BRk+VQTbmeZJpqNuVGh2M6nUajVpPpYzFUH+lxTrj8Vtrtdnul7mBNcRXnXOUF5VW8lD3k0VnbivqS9P8U3JLCfvuXTIaSukNRlGW5QXlkitSoNUo1lpG+51hYmRtfXqNdr9d935/Pf/4cjUbr9WDQLVHc0Uhxirxt20md8Xgs6cI2d4+bqRd4mbJ1HJduqTXuh5LwD5f5GaymNht63sagTPxQU2dPT1VimmZTVD1vGVBTlK1x1mlQgzVZbJrVqqrOZguNPF9fUqq8Uy8DXxNTZIaOlNdXU5Gvuvw+sHTX06Wk287ynZIp2Sbz2gYVTfdBEj47noXQtlhNxjaZZgF/NdS0hapWTWqNEnXKEcmVwWRZFE0WarYoMmlDwvNBsE9iI7fev0NLkCRaXcIomkx+D1wkZpEpsRlzwXLJTbmE23Gxy6WJHngnPY/zJE5jN7E24zEb1tTqbeFaff/FiBPmWHydBpSrjHWeZGfnptQy0iXR9Bgvc3c9mlt2dNtoagmCVOS9Bp68We5fJ5Vl58AdKeFhzw04ntvTmy+5YER3eecb/f6YYZM3/PvJel6yHqS+s9GTWNf1mMbjQq02P8xUDr4y0n5KkQyKlDq+HUUfvMtnsMBvFUf+8RhFO819yqvea32vKU3ZPHa68x53GHAxx68Wg0GqWHaRk6Us12XLMq7Sl/KoxzFLlwQLs9b5NRINvSc29hZFUUVL0+MyX3np3K9E4b836T8MTHHtaJ4Oovyw5kfDvVqJXNEfvfbkVX0xXw9obe6mjt0u26SkbcfSrywlN95OKV3zbbmXm9ViQhU9saKObOTRwj65ceT9d4Fpi6LEtMnk6XQUTSeVuj8fDXqrlZs6Fm05bF5a7WKOJTHNuMw1ivOMn4lvzcnmTBvy+zKTf/NsuoeWFBXTtUIh173VYdXz0nTtpm5aE5uLE396FMXGVnvOzPO6yDVEdTHkpzvFvnFt+gaEsAhZVnnId4dVvo+5Gs21Dlvpay8bmSvzNWRTpfKmufVdK/uQELLlt8I2GtpkBt14Vy3Rrt30NieNDrRCFmNz6fw55b0jRec9hm2pFe26i2fasDjS5/64Du99oV/QCqP6RTD9zXG5ntz7Gr+uVWykZDKxz3810BnbqMPv/s8ZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Nn+Atwil8eNzNCjAAAAAElFTkSuQmCC",
        brand: 'ProTaper',
        money: '131.00',
        categoryId: 1
    },
    {
        imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiL8eeX9-aQm7Z-3niZj5fuVccvwim2_jNz997JlIKyA&usqp=CAU&ec=48665698" ,
        brand: 'HUFFY',
        money: '15,000.00',
        categoryId: 2
    },
    {
         imageURL:"https://www.competitivecyclist.com/images/items/900/YTI/YTIR16N/RAWGRE.jpg" ,
        brand: 'Yeti',
        money: '2,399.99',
        categoryId: 2
    },
    {
         imageURL:"https://www.sefiles.net/merchant/500/images/large/61739512952212.jpg" ,
        brand: 'Trek',
        money: '2,499.99',
        categoryId: 2
    },
    {
         imageURL:"https://p.vitalmtb.com/photos/products/18937/photos/36897/s1600_Santa_Cruz_Nomad_Carbon_CC_2019_Frame_Black_Olive.jpg?VersionId=aT5aM2GVLKYZLCY6PKT8JVOw2BhujLib" ,
        brand: 'Santa Cruz',
        money: '2,199.99',
        categoryId: 2
    },
    {
         imageURL:"https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/11/2021/12/mbr270.hot_stuff.image002-601x400.jpg" ,
        brand: 'NukeProof',
        money: '3,199.99',
        categoryId: 2
    },
    {
        imageURL:"https://m.media-amazon.com/images/I/61QJwIkhx4L._AC_UF1000,1000_QL80_.jpg",
        brand: 'basket',
        money: '7,999.99',
        categoryId: 3
    },
    {
        imageURL:"https://www.ridefox.com/img/family/bike/my21-38/38-factory-grip2-black-2.jpg",
        brand: 'Fox 38',
        money: '1,199.99',
        categoryId: 3
    },
    {
        imageURL:"https://cdn.shopify.com/s/files/1/0349/7357/products/FK6157_fd35cfd3-2f78-4336-bd19-cec3c6ac6e4c_x1024.jpg?v=1674889502",
        brand: 'RoxShox',
        money: '489.99',
        categoryId: 3
    },
    {
        imageURL:"https://www.sram.com/globalassets/image-hierarchy/sram-product-root-images/suspension---forks/suspension---forks/fs-rudy-ultimate-a1/productassets_fs-rudy-ult-a1_fg/fs-rudy-ult-700-s-40-snd-45t-a1-c-3q-v-v02.png?w=856&quality=80&format=jpg",
        brand: 'Rudy',
        money: '839.99',
        categoryId: 3
    },
    {   
        imageURL: "https://m.media-amazon.com/images/I/61iuUFLbtvL._AC_UF1000,1000_QL80_.jpg",
        brand: 'ROCKBROS',
        money: '30.99',
        categoryId: 4
    },
    {
        imageURL: "https://cdn.shopify.com/s/files/1/0276/0199/3803/products/Canfield-Crampon-Mountain-Bronze-Shopify.jpg?v=1672345359",
        brand: 'Canfield',
        money: '159.99',
        categoryId: 4
    },
    {
        imageURL: "https://cdn.shopify.com/s/files/1/0357/3930/4074/products/PD0008_grande.jpg?v=1603845413",
        brand: 'RACEFACE',
        money: '119.99',
        categoryId: 4
    },
    {
        imageURL: "https://i.ebayimg.com/images/g/RRgAAOSwCVlgu78m/s-l1600.jpg",
        brand: 'HUFFY',
        money: '999.99',
        categoryId: 4
    },
    {
        imageURL: "https://ep1.pinkbike.org/p4pb18453939/p4pb18453939.jpg",
        brand: 'Yoshimura',
        money: '189.99',
        categoryId: 4
    },
    {
        brand: 'duel suspension',
        money: 'free',
        categoryId: 5
    },
    {
        brand: 'hardtail',
        money: 'free',
        categoryId: 5
    },
    {
        brand: 'Maxis  29 in.',
        money: '74.99',
        categoryId: 6
    },
    {
        brand: 'Maxis  27.5 in',
        money: '84.99',
        categoryId: 6
    },
    {
        brand: 'Maxis  26 in',
        money: '89.99',
        categoryId: 6
    },
    {
        brand: 'Maxis  32 in',
        money: '94.99',
        categoryId: 6
    },
]

const seedDatabase = async () => {
    await Category.bulkCreate(categories)
    await Part.bulkCreate(parts)
}

module.exports = {
    seedDatabase
}