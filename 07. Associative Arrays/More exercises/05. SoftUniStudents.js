function softuniStudents(input){
    let courses = [];
    for (let i = 0; i < input.length; i++){
        let token = input[i];
        if (token.includes(" with email ")){
            let tokensStudent = token.split(" ");
            let user = tokensStudent[0].slice(0, tokensStudent[0].indexOf("["));
            let credits = Number(tokensStudent[0].slice(tokensStudent[0].indexOf("[") + 1, tokensStudent[0].indexOf("]")));
            let mail = tokensStudent[3];
            let course = tokensStudent[5];
            let student = {};
            student.user = user;
            student.credits = credits;
            student.mail = mail;

            if (courses.some(x => x.name == course)){
                let currCourse = courses.find(x => x.name == course);
                if (currCourse.capacity > 0){
                    currCourse.students.push(student);
                    currCourse.capacity--;
                }
            }
        } else if (token.includes(": ")){
            let tokensCourse = token.split(": ");
            let name = tokensCourse[0];
            let capacity = Number(tokensCourse[1]);

            let course = {};
            course.name = name;
            course.capacity = capacity;
            if (!courses.some(x => x.name == name)){
                courses.push(course);
                course.students = [];
            } else {
                let currCourse = courses.find(x => x.name == name);
                let currCapacity = currCourse.capacity;
                currCourse.capacity = currCapacity + capacity;
            }
        }
    }

    let sortedCourseByStudentsCount = Array.from(courses.values()).sort((a, b) => b.students.length - a.students.length);
    for (let course of sortedCourseByStudentsCount){
        console.log(`${course.name}: ${course.capacity} places left`);
        let sortedStudentsByCredits = Array.from(course.students.values()).sort((a, b) => b.credits - a.credits);
        for (let student of sortedStudentsByCredits){
            console.log(`--- ${student.credits}: ${student.user}, ${student.mail}`);
        }
    }
}