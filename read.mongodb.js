use("CrudDb")

db.createCollection("courses")

let a = db.courses.findOne({
    title: "Python for Beginners"
})
let b = db.courses.find({
    duration: 5
})

console.log(a)
console.log(b)