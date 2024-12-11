

// Destructuring

const course = {
    coursename: "JavaScript",
    price: "999",
    courseInstructor: "Abhiraj"
}

// course.courseInstructor

const {courseInstructor} = course ;

console.log ( courseInstructor ) ;

const { courseInstructor: Instructor } = course ;

console.log ( Instructor ) ;


