var array_name = ["Mummy Pig","Daddy Pig","Peppa Pig","George Pig","Grany pig","Grandpa Pig"];
console.log(array_name);

var array_image = ["Mummy_Pig.png","Daddy_Pig.png","peppa.png","George.png","granny-pig.png","Grandpa_Pig-0.png"];
console.log(array_image);

var count = 0;
console.log(count);

function change_all(){
    var current_name = array_name[count];
    var current_image = array_image[count];
    document.getElementById("name_family").innerHTML = current_name;
    document.getElementById("pic").src = current_image;
    count= count+1;
    console.log(count);
    if(count==6)
    {
        count=0;
        console.log("back to 0");
    }

}
