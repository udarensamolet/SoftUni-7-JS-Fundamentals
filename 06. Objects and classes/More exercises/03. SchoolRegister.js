function schoolRegister(input){
    class Grade{
        constructor(name){
            this.name = name;
        }
        students = [];
        scores = [];

        addStudent = (student, score) => {
            if (score >= 3){
                this.students.push(student);
                this.scores.push(score);
            }
        }

        get averageScore () {
            let sumScores = 0;
            for(let score of this.scores){
                sumScores += score;
            }
            return (sumScores / this.scores.length).toFixed(2);
        }
    }

    let grades = [];
    for (let entry of input){
        let tokens = entry.split(', ');
        let studentInfo = tokens[0].split(": ");
        let gradeInfo = tokens[1].split(": ");
        let scoreInfo = tokens[2].split(": ");

        let student = studentInfo[1];
        let grade = Number(gradeInfo[1]) + 1;
        let score = Number(scoreInfo[1]);


        let currentGrade = new Grade(grade);
        if (grades.length == 0){
            currentGrade.addStudent(student, score);
            grades.push(currentGrade);
        } else {
            let isModified = false;
            for (let grade of grades){
                if (grade.name == currentGrade.name){
                    grade.addStudent(student, score);
                    isModified = true;
                    break;
                }
            }
            if(!isModified){
                currentGrade.addStudent(student, score);
                grades.push(currentGrade);
            }
        }
    }

    let sortedGrades = grades.sort((a, b) => a.name - b.name);
    for (let grade of sortedGrades){
        if (grade.students.length > 0){
            console.log(`${grade.name} Grade `);
            console.log(`List of students: ${grade.students.join(', ')}`);
            console.log(`Average annual grade from last year: ${grade.averageScore}`);
            console.log("");
        }
    }
}