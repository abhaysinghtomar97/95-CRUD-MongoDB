use("CrudDb");

db.createCollection("courses");


db.courses.insertOne({
    title: "Python for Beginners",
    description: "Learn the basics of MongoDB",
    duration: 5,
    instructor: "Abhay",
})
