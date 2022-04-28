db.product.find({$and: [{product_price:{$gt:400}},{product_price:{$lt:800}}]});//2

db.product.find({$or: [{product_price:{$lt:400}},{product_price:{$gt:600}}]});//3

db.product.find({product_price:{$gt:500}}).limit(4);//4

db.product.find({},{product_name:1,product_material:1});//5

db.product.find({id:{$eq:10}});//notworking//6

db.product.find({},{product_name:1,product_material:1});//7

db.product.find();//1

db.product.find({product_material:"Soft"});//8

db.product.find({$and: [{product_color:"indigo"},{product_price:492}]}});//9

db.product.remove({})//10
