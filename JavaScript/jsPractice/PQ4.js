//Q4. Grade Calculator
//Conditional Statements 
/*
Use if...else if to determine the grade:
Marks	Grade
90–100	A
75–89	B
60–74	C
40–59	D
Below 40	Fail

Also handle marks outside the range 0–100 as invalid. */

function gradeCalc(marks) {
    if(marks < 0 || marks < 100){
        console.log("Enter Valid Marks")
    }
else if (marks >= 90) {
    console.log(`Marks: ${marks} and Grade: A`);
}else if(marks >= 75){
    console.log(`Marks: ${marks} and Grade: B`);
}else if (marks >= 60) {
    console.log(`Marks: ${marks} and Grade: C`);
}else if (marks >= 40) {
    console.log(`Marks: ${marks} and Grade: D`);
}else {
    console.log(`Marks: ${marks} and Grade: Fail`);
};
    
}

gradeCalc(95);


