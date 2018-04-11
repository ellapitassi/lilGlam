var Promise = require("bluebird");
var { User, Product } = require('./models');
var db = require('./index');



const products = 
    [{id: 0, name: 'hair dryer', price: 30.00}, 
    {id: 1, name: 'hair brush', price: 15.00}, 
    {id: 2, name: 'nail polish', price: 10.00}]

const users =     
[{id: 0, name: 'Polly', email: 'polly@me.com'}, 
{id: 1, name: 'Frank',  email: 'frank@me.com'}]


const seed = () =>
    Promise.all(products.map(product =>
    Product.create(product))
  )
  .then(() =>
  Promise.all(users.map(user =>
    User.create(user))
  )
);

const main = () => {
    console.log('syncing db...');
    db.sync({force: true})
    .then(() => {
        console.log('seeding database...')
        return seed()
    })
    .catch(err => {
        console.log('Error while seeding');
        console.log(err.stack);
      })
    .then(() => {
        db.close();
        return null;
    });
  };
  
  main();
