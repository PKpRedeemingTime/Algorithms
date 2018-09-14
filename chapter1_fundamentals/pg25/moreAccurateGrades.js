function moreAccurateGrades(score) {
    var grade = "";
    if(score > 92) {
        console.log("Score:",score,"Grade: A");
    }
    else if(score > 89 && score < 93) {
        console.log("Score:",score,"Grade: A-");
    }
    else if(score > 87 && score < 90) {
        console.log("Score:",score,"Grade: B+");
    }
    else if(score > 82 && score < 88) {
        console.log("Score:",score,"Grade: B");
    }
    else if(score > 79 && score < 83) {
        console.log("Score:",score,"Grade: B-");
    }
    else if(score > 77 && score < 80) {
        console.log("Score:",score,"Grade: C+");
    }
    else if(score > 72 && score < 78) {
        console.log("Score:",score,"Grade: C");
    }
    else if(score > 69 && score < 73) {
        console.log("Score:",score,"Grade: C-");
    }
    else if(score > 67 && score < 70) {
        console.log("Score:",score,"Grade: D+");
    }
    else if(score > 62 && score < 68) {
        console.log("Score:",score,"Grade: D");
    }
    else if(score > 59 && score < 63) {
        console.log("Score:",score,"Grade: D-");
    }
    else {
        console.log("Score:",score,"Grade: F");
    }
}

moreAccurateGrades(59);