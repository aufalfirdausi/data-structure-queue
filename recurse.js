// Base case (kondisi penghentian rekursi)

//Recursive case (pemanggilan diri dengan masalah yang lebih kecil)

//Progress toward base case (memastikan masalah semakin mendekati base case)

//Combining results (menggabungkan hasil dari panggilan rekursif)

function human1() {
    return human2() ;
}

function human2() {
    return human3() ;
}

function human3() {
    return human4() ;
}

function human4() {
    return human5() ;
}

function human5() {
    return true;
}

//console.log(human1());

function goTuLunch(person) {
    if (person === 5) return true;
    console.log(person);
    return goTuLunch(person + 1);
}

console.log("outcome:", goTuLunch(1));