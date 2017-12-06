

function calculateCurrentGrade() {
    document.getElementById("error").innerHTML="";
    var gradeTable=document.getElementById("gradeTable");
    gradeTable.style.backgroundColor="";
    var hwAvg=avg(convertToArray(document.getElementById("hwGrades").value));
    var quizAvg=avg(convertToArray(document.getElementById("quizGrades").value));
    var testAvg=avg(convertToArray(document.getElementById("testGrades").value));
    var midtermAvg=avg(convertToArray(document.getElementById("midtermGrades").value));
    var hwWeight=convertToNum(hwWeight=document.getElementById("hwWeight").value);
    var quizWeight=convertToNum(document.getElementById("quizWeight").value);
    var testWeight=convertToNum(document.getElementById("testWeight").value);
    var midtermWeight=convertToNum(document.getElementById("midtermWeight").value);
    document.getElementById("hwAvg").innerHTML=hwAvg;
    colorRow(hwAvg,document.getElementById("hw"));
    validateGrade(hwAvg,document.getElementById("hwGrades"));
    document.getElementById("quizAvg").innerHTML=quizAvg;
    colorRow(quizAvg,document.getElementById("quizzes"));
    validateGrade(quizAvg,document.getElementById("quizGrades"));
    document.getElementById("testAvg").innerHTML=testAvg;
    colorRow(testAvg,document.getElementById("tests"));
    validateGrade(testAvg,document.getElementById("testGrades"));
    document.getElementById("midtermAvg").innerHTML=midtermAvg;
    colorRow(midtermAvg,document.getElementById("midterms"));
    validateGrade(midtermAvg,document.getElementById("midtermGrades"));
    var currentGrade=0;
    currentGrade+=(hwAvg*hwWeight);
    currentGrade+=(quizAvg*quizWeight);
    currentGrade+=(testAvg*testWeight);
    currentGrade+=(midtermAvg*midtermWeight);
    currentGrade/=(hwWeight+quizWeight+testWeight+midtermWeight);
    convertToString(currentGrade);
    if(currentGrade.length>3){
        if(currentGrade[3]<=5){
            currentGrade=currentGrade.substring(0,3);
        }else{
            currentGrade=currentGrade.substring(0,2);
            convertToNum(currentGrade[3]);
            currentGrade[3]+=1;
            convertToString(currentGrade[3]);
            currentGrade+=currentGrade[3];
        }
    }
    document.getElementById("currentGrade").innerHTML=convertToNum(currentGrade);
    if(currentGrade<=100 && currentGrade>=90){
        document.getElementById("message").innerHTML="Keep up the good work.";
    }
    if(currentGrade<90 && currentGrade>=80){
        document.getElementById("message").innerHTML="You've put in some good effort. Finish strong!";
    }
    if(currentGrade<80 && currentGrade>=70){
        document.getElementById("message").innerHTML="Think about how you can improve study habits for next semester.";
    }
    if(currentGrade<70){
        document.getElementById("message").innerHTML="It's not the end of the world. Better luck next time."
    }
}

function calcFinalExamGradeNeeded(){
    var desiredGrade=convertToNum(document.getElementById("desiredGrade").value);
    var finalWeight=convertToNum(document.getElementById("finalWeight").value);
    var hwAvg=avg(convertToArray(document.getElementById("hwGrades").value));
    var quizAvg=avg(convertToArray(document.getElementById("quizGrades").value));
    var testAvg=avg(convertToArray(document.getElementById("testGrades").value));
    var midtermAvg=avg(convertToArray(document.getElementById("midtermGrades").value));
    var hwWeight=convertToNum(hwWeight=document.getElementById("hwWeight").value);
    var quizWeight=convertToNum(document.getElementById("quizWeight").value);
    var testWeight=convertToNum(document.getElementById("testWeight").value);
    var midtermWeight=convertToNum(document.getElementById("midtermWeight").value);
    var finalGradeNeeded=desiredGrade*100;
    finalGradeNeeded-=(hwAvg*hwWeight+quizAvg*quizWeight+testAvg*testWeight+midtermAvg*midtermWeight);
    finalGradeNeeded/=finalWeight;
    document.getElementById("finalExamGradeNeeded").innerHTML=finalGradeNeeded;
}

function colorRow(av,row){
    if(av>=90){
        row.style.backgroundColor="green";
    }
    if(av>=80 && av<90){
        row.style.backgroundColor="blue";
    }
    if(av>=70 && av<80){
        row.style.backgroundColor="purple";
    }
    if(av>=60 && av<70){
        row.style.backgroundColor="orange";
    }
    if(av<60){
        row.style.backgroundColor="red";
    }
}

function convertToNum(str){
    var num=0;
    num=parseInt(str);
    return num;
}

function convertToArray(str){
    var arr = str.split(",");
    for (var i=0; i<arr.length; i++){
        arr[i]=parseInt(arr[i]);
    }
    console.log(arr);
    return arr;
}

function convertToString(num) {
    var output=num.toString();
    return output;
}

function avg(arr){
    var avg=0;
    for(var i=0; i<arr.length; i++){
        avg+=arr[i];
    }
    avg/=arr.length;
    console.log(avg);
    return avg;
}

function validateGrade(avg,textField){
    if(avg>105){
        document.getElementById("error").innerHTML="That's a lot of extra credit. Are you sure this grade is accurate?"
        textField.style.backgroundColor="yellow";
    }
    if(avg==NaN){
        document.getElementById("error").innerHTML="Please enter a number value."
    }
}


