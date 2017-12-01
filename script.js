

function calculateCurrentGrade() {
    var hwAvg=avg(convertToArray(document.getElementById("hwGrades").value));
    var quizAvg=avg(convertToArray(document.getElementById("quizGrades").value));
    var testAvg=avg(convertToArray(document.getElementById("testGrades").value));
    var midtermAvg=avg(convertToArray(document.getElementById("midtermGrades").value));
    var hwWeight=convertToNum(hwWeight=document.getElementById("hwWeight").value);
    var quizWeight=convertToNum(document.getElementById("quizWeight").value);
    var testWeight=convertToNum(document.getElementById("testWeight").value);
    var midtermWeight=convertToNum(document.getElementById("midtermWeight").value);
    document.getElementById("hwAvg").innerHTML=hwAvg;
    document.getElementById("quizAvg").innerHTML=quizAvg;
    document.getElementById("testAvg").innerHTML=testAvg;
    document.getElementById("midtermAvg").innerHTML=midtermAvg;
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

}

function calcFinalExamGradeNeeded(){
    var currentGrade=document.getElementById("currentGrade").innerHTML;
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

