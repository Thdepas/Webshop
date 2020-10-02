# node-auth

## curl

```sh
curl -v -X POST localhost:3000/register -H 'Content-Type: application/json' \
 -d '{"email": "thdepas@gmail.com", "name": "Thomas", "password": "Secret12", "passwordConfirmation": "Secret12"  }'

 curl -X POST localhost:3000/register -H 'Content-Type: application/json' \
 -d '{"email": "thdepas@gmail.com",  "password": "Secret12"  }'
```

## docker && moongoose functions

```sh
docker exec -it node-auth_db_1 mongo -u admin -p secret auth

db
db.users.find({}).pretty()
create a new db_object: object.save()
find a db_objec by id: findById(id)
retrieve all db_objec: find()
update a db_objec by id: findByIdAndUpdate(id, data)
remove a db_objec: findByIdAndRemove(id)
remove all db_objec: deleteMany()
find all db_objec by title: find({ title: { $regex: new RegExp(title), $options: “i” } })

```

docker exec -it node-auth_cache_1 redis-cli -a secret

scan0
get
