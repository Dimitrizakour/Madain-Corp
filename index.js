
// fetch api
fetch('http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&category=[1,2,3]&pretty=true')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
             function appendData(data) {

            for (var i = 0; i < data.length; i++) {

                var fullname=document.getElementById("fullname").innerHTML= data[i].fname+" "+ data[i].lname;
                fullname = document.getElementById("fullname").innerText;

                var matches = fullname.match(/\b(\w)/g); 
                var acronym = matches.join('');
                var profileImage =  document.getElementById("profileImage").innerHTML=acronym;
                var category = document.getElementById("category").innerHTML= "Category"+data[i].category;

                
                var html ='<div class="card categoryspan '+data[i].category+'" id="card" style="width: 800px; margin:auto; background-color: rgb(221, 255, 183); margin-top:125px">';
                    html += '<div class="card-body " id="card-body">';
                    html += '<h1 id="fullname">'+data[i].fname+" "+ data[i].lname+'</h1>';
                    html += '<div id="profileImage">'+acronym+'</div>';
                    html += '<span id="category" > Category'+data[i].category+'</span>';
                    html += '</div>';
                    html += '</div>';

                   $('#container').append(html);
                }
            }
        
filter('all')
function filter(c) {
  var x, i;
  x = document.getElementsByClassName("categoryspan");
  if (c == "all") c = "";
  
  for (i = 0; i < x.length; i++) {
    AddClass(x[i], "hide");
    if (x[i].className.indexOf(c) > -1) RemoveClass(x[i], "hide");
  }
}

// Show filtered elements
function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button 
var btnContainer = document.getElementById("categories");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
