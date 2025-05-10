use("CrudDb")

db.createCollection("courses")

db.courses.deleteOne({
    duration:0
})