const yargs =  require('yargs')

const students = require('./students')

//add
yargs.command({
    command: 'add',
    describe:'Add Student',
    builder:{
        id:{
            describe:'The number of student',
            demandOption:true,
            type:'number'
        },
        sname:{
            describe:'The name of student',
            demandOption:true,
            type:'string'
        },

        degree:{
            describe:'array have all degrees in all class',
            demandOption:true,
            type:'array'
        },
        Total:{
            describe:'Total of all degree',
            // demandOption:false,
            type:'number'
        },
    },
    handler:()=>{
            students.addStudent(yargs.argv.id,yargs.argv.sname,yargs.argv.degree)
          }
})
//delete
yargs.command({
    command:'delete',
    describe:'Delete notes command',
    builder:{
        id:{
            describe:'This is body description in delete command',
            demandOption:true,
            type:'number'
        }
    },
    handler:()=>{
       students.deleteStudent(yargs.argv.id)
    }
})
//read
yargs.command({
    command:'read',
    describe:'Read notes command',
    builder:{
        id:{
            describe:'This is body description in read command',
            demandOption:true,
            type:'number'
        }
    },
    handler:()=>{
       students.readStudent(yargs.argv.id)
    }
})
//list
yargs.command({
    command:'list',
    describe:'List notes command',
    handler:()=>{
        students.listStudents()
    }
})

yargs.parse()