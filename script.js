//Abby Steckel, Grade Calculator, Submitted 12/7

function calculateCurrentGrade() {
    clearData();
    var hwAvg = avg(convertToArray(document.getElementById("hwGrades").value));
    var quizAvg = avg(convertToArray(document.getElementById("quizGrades").value));
    var testAvg = avg(convertToArray(document.getElementById("testGrades").value));
    var midtermAvg = avg(convertToArray(document.getElementById("midtermGrades").value));
    var hwWeight = convertToNum(hwWeight = document.getElementById("hwWeight").value);
    var quizWeight = convertToNum(document.getElementById("quizWeight").value);
    var testWeight = convertToNum(document.getElementById("testWeight").value);
    var midtermWeight = convertToNum(document.getElementById("midtermWeight").value);
    if (!isNaN(hwAvg)) {
        document.getElementById("hwAvg").innerHTML = hwAvg;
    }
    colorRow(hwAvg, document.getElementById("hw"));
    validateGrade(hwAvg, document.getElementById("hwGrades"));
    if (!isNaN(quizAvg)) {
        document.getElementById("quizAvg").innerHTML = quizAvg;
    }
    colorRow(quizAvg, document.getElementById("quizzes"));
    validateGrade(quizAvg, document.getElementById("quizGrades"));
    if (!isNaN(testAvg)) {
        document.getElementById("testAvg").innerHTML = testAvg;
    }
    colorRow(testAvg, document.getElementById("tests"));
    validateGrade(testAvg, document.getElementById("testGrades"));
    if (!isNaN(midtermAvg)) {
        document.getElementById("midtermAvg").innerHTML = midtermAvg;
    }
    colorRow(midtermAvg, document.getElementById("midterms"));
    validateGrade(midtermAvg, document.getElementById("midtermGrades"));
    var currentGrade = 0;
    currentGrade += (hwAvg * hwWeight);
    currentGrade += (quizAvg * quizWeight);
    currentGrade += (testAvg * testWeight);
    currentGrade += (midtermAvg * midtermWeight);
    currentGrade /= (hwWeight + quizWeight + testWeight + midtermWeight);
    if (!isNaN(currentGrade)) {
        document.getElementById("currentGrade").innerHTML = Math.round(currentGrade);
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
    if(!isNaN(finalGradeNeeded)){
        var displayElement = document.getElementById("finalExamGradeNeeded");
        displayElement.innerHTML=Math.round(finalGradeNeeded);
        displayElement.style.display = 'block';
    }
}

function clearData(){
    document.getElementById("error").innerHTML="";
    var field1=document.getElementById("hwGrades");
    var field2=document.getElementById("quizGrades");
    var field3=document.getElementById("testGrades");
    var field4=document.getElementById("midtermGrades");
    field1.style.backgroundColor="";
    field2.style.backgroundColor="";
    field3.style.backgroundColor="";
    field4.style.backgroundColor="";
    document.getElementById("hwAvg").innerHTML="";
    document.getElementById("quizAvg").innerHTML="";
    document.getElementById("testAvg").innerHTML="";
    document.getElementById("midtermAvg").innerHTML="";
    document.getElementById("currentGrade").innerHTML="";
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
    console.log(str);
    var arr = str.split(",");
    for (var i=0; i<arr.length; i++){
        arr[i]=parseInt(arr[i]);
        console.log(arr[i]);
    }
    console.log(arr);
    return arr;
}

function avg(arr){
    var avg=0;
    for(var i=0; i<arr.length; i++){
        avg+=arr[i];
    }
    avg/=arr.length;
    return Math.round(avg);
}

function validateGrade(avg,textField){
    if(avg>105){
        document.getElementById("error").innerHTML="That's a lot of extra credit. Are you sure this grade is accurate?"
        textField.style.backgroundColor="yellow";
    }
    if(isNaN(avg)==true){
        document.getElementById("error").innerHTML="Please enter a number value.";
        textField.style.backgroundColor="yellow";
    }
}


