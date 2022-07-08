const fs = require("fs");

const addStudent = (id, sname, degree) => {
  const students = loadStudents();
  const duplicateID = students.find((el) => {
    return el.id === id;
  });
  let total = 0;
  for (let i = 0; i < degree.length; i++) {
    total += degree[i];
  }

  if (!duplicateID) {
    students.push({
      id,
      sname,
      degree,
      total,
    });
    saveStudents(students);
    console.log("Saved Successfully");
  } else {
    console.log("Error");
  }
};

const loadStudents = () => {
  try {
    const data = fs.readFileSync("students.json").toString();
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
};
const saveStudents = (students) => {
  const saveData = JSON.stringify(students);
  console.log(saveData);
  fs.writeFileSync("students.json", saveData);
};

const deleteStudent = (id) => {
  const students = loadStudents();

  const studentsToKeep = students.filter((el) => {
    return el.id !== id;
  });
  if (students.length !== studentsToKeep.length) {
    saveStudents(studentsToKeep);
    console.log("Deleted sucessfully");
  } else {
    console.log("No ID is found");
  }
};

const readStudent = (id) =>{
    const students = loadStudents()
    const student = students.find((el)=>{
        return el.id === id
    })
    if(student){
        console.log("Name: " + student.sname +" ,Total of degree: "+ student.total)
    }
    else {
        console.log('Not found')
    }
}

const listStudents = () =>{
    const students = loadStudents()
    students.forEach((el)=>{
        console.log(el.sname)
    })
}

module.exports = {
  addStudent,
  deleteStudent,
  readStudent,
  listStudents,
};
