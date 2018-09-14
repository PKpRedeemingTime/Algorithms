function letterGrade(score) {
    var grade = "";
    if(score > 89) {
        console.log("Score:",score,"Grade: A");
    }
    else if(score > 79 && score < 90) {
        console.log("Score:",score,"Grade: B");
    }
    else if(score > 69 && score < 80) {
        console.log("Score:",score,"Grade: C");
    }
    else if(score > 59 && score < 70) {
        console.log("Score:",score,"Grade: D");
    }
    else {
        console.log("Score:",score,"Grade: F");
    }
}

letterGrade(23);