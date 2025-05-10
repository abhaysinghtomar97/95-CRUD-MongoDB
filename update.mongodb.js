use("CrundDb")

db.createCollection("courses")

let a=db.courses.updateOne({duration:5}, {$set:{duration : 2}})

console.log(a)