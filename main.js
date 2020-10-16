name_of_the_student_array=[];
function submit() {
    var display_student_array=[];
    for (var i=1 ; i<=4; i++){
        var name_of_the_student= document.getElementById("name_of_the_student_"+i).value ;
        console.log (name_of_the_student);
        name_of_the_student_array.push(name_of_the_student);

    }
    console.log (name_of_the_student_array);
    var len= name_of_the_student_array.length ;
    console.log (len) ;
    for (var j=0 ; j< len ; j ++){
        display_student_array.push("<h4> Name- "+name_of_the_student_array[j]+"</h4>") ;
        console.log (display_student_array)
    }
    console.log (display_student_array)
    document.getElementById("display_name_with_commas").innerHTML=display_student_array ;
    var remove_commas =display_student_array.join (" ") ;
    document.getElementById("display_name_without_commas").innerHTML=remove_commas ;
    document.getElementById("submit_button").style.display="none" ;
    document.getElementById("sort_button").style.display="inline-block" ;
}
function sorting() {
    name_of_the_student_array.sort() ;
    var display_student_array_sorting= [] ;
    var len= name_of_the_student_array.length ;
    console.log (len) ;
    for (var j=0 ; j< len ; j ++){
        display_student_array_sorting.push("<h4> Name- "+name_of_the_student_array[j]+"</h4>") ;
        console.log (display_student_array_sorting)
    }
    console.log (display_student_array_sorting)
    var remove_commas =display_student_array_sorting.join (" ") ;
    document.getElementById("display_name_without_commas").innerHTML=remove_commas ;

}
function newUpdate() {
    document.getElementById("display_name_without_commas").innerHTML="<h1> "+ name_of_the_student_array +"</h1>" ;
    
}