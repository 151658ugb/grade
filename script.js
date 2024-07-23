document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const score = parseInt(document.getElementById('score').value);
    let grade;

    if (score >= 80 && score <=100) {
        grade = '4.00';
    } else if (score >= 75 && score <= 79) {
        grade = '3.50';
    } else if (score >= 70 && score <= 74)  {
        grade = '3.00';
    } else if (score >= 65 && score <= 69) {
        grade = '2.50';
    } else if (score >= 60 && score <= 64) {
        grade = '2.00';
    } else if (score >= 55 && score <= 59) {
        grade = '1.50';
    } else if (score >= 50 && score <= 54) {
        grade = '1.00';   
    } else {
        grade = '0.00';
    }

    alert('ชื่อ : ' + firstName + '\nนามสกุล : ' + lastName + '\nคะแนน : ' + score + '\nเกรดของคุณคือ : ' + grade);
});