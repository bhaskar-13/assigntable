  document.getElementById("submit").onclick = function () {
  document.getElementById("table").style.display = "block";

  let table = document.getElementById("table");
  let row = table.insertRow(-1);
  let Firstname= row.insertCell(0);
  let LastName = row.insertCell(1);
  let  Pincode= row.insertCell(2); 
  let  Gender=row.insertCell(3);
  let  ChoiceOfFood=row.insertCell(4);
  let  state=row.insertCell(5);
  let country=row.insertCell(6);

  Firstname.innerHTML = document.getElementById("fname").value;
  LastName.innerHTML = document.getElementById("lname").value;
  Pincode.innerHTML = document.getElementById("pin").value;
  state.innerHTML=document.getElementById("state").value;
  country.innerHTML=document.getElementById("country").value;

  function displayRadioValue() {
    var ele = document.getElementsByName('gender');
      
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        {
        Gender.innerHTML= ele[i].value;
        }
    }
}

displayRadioValue();


  function selectValue()
  {  let arr=[];
    for (var option of document.getElementById('choiceOfFood').options)
    {
        if (option.selected) {
            arr.push(option.value);
        }
    }
    ChoiceOfFood.innerHTML=arr;
  }
 
selectValue();

}


