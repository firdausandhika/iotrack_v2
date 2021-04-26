//   Toggle Navbar

// const menu = document.querySelector('#mobile-menu')
// const menuLinks = document.querySelector('.navbar-menu')

// menu.addEventListener('click', function() {
// 	menu.classList.toggle('is-active');
// 	menuLinks.classList.toggle('active');
// });

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

function sortTableCL(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("my-car-list");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;      
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function sortTableCLN(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("my-car-list");
  switching = true;

  dir = "asc";
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      //check if the two rows should switch place:
      if (dir == "asc") {
          if (Number(x.innerHTML) > Number(y.innerHTML)) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
          }
     } else if (dir == "desc") {
      if (Number(x.innerHTML) < Number(y.innerHTML)) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
          }
     }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;

      switchcount ++;    
    } else {
      if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
          }
      }
  }
}

$(document).ready(function(){
  $("#myFilter").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#my-car-list .r-item").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

// Change Car List View

function myCarTile(){
  $("#btn-car-tile").addClass("filter-active");
  $('#btn-car-list').removeClass("filter-active");
  $('#my-items').removeClass("hide");
  $('#my-items-table').addClass("hide");
}

function myCarList(){
  $("#btn-car-list").addClass("filter-active");
  $('#btn-car-tile').removeClass("filter-active");
  $('#my-items-table').removeClass("hide");
  $('#my-items').addClass("hide");
}


// Sort Track History

function sortTableNH(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myHistory");
    switching = true;

    dir = "asc";
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        //check if the two rows should switch place:
        if (dir == "asc") {
            if (Number(x.innerHTML) > Number(y.innerHTML)) {
            //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
            }
       } else if (dir == "desc") {
        if (Number(x.innerHTML) < Number(y.innerHTML)) {
            //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
            }
       }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;

        switchcount ++;    
      } else {
        if (switchcount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
            }
        }
    }
  }

// Search Statistic

  $(document).ready(function(){
    $("#mySearch1").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myStats .r-item").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

// Filter Car-Category

(() => {

    const filterContainer = document.querySelector(".filter-menu"),
    carItemsContainer = document.querySelector("#my-items"),
    carItems = document.querySelectorAll(".col-sm-3");
    // console.log(carItems)

    filterContainer.addEventListener("click", (event)=>{
        if (event.target.classList.contains("filter-item") &&
        !event.target.classList.contains("filter-active")){
        // deactivate existing active "filter-item"
        filterContainer.querySelector(".filter-active").classList.remove("filter-active");
        }
        // actiave new "filter-item"
        event.target.classList.add("filter-active");
        const target = event.target.getAttribute("data-target");
        carItems.forEach((item) =>{
            // console.log(item.getAttribute("data-category"));
            if (target === item.getAttribute("data-category") || target === "all"){
              item.classList.remove("hide");
              item.classList.add("show");
            }
            else{
                item.classList.remove("show");
                item.classList.add("hide");
            }
        })
    
    })

})();

// Filter Car-Category List

(() => {

  const filterContainer = document.querySelector(".filter-menu"),
  carItemsContainer = document.querySelector(".r-item"),
  carItems = document.querySelectorAll(".r-item");
  // console.log(carItems)

  filterContainer.addEventListener("click", (event)=>{
      if (event.target.classList.contains("filter-item") &&
      !event.target.classList.contains("filter-active")){
      // deactivate existing active "filter-item"
      filterContainer.querySelector(".filter-active").classList.remove("filter-active");
      }
      // actiave new "filter-item"
      event.target.classList.add("filter-active");
      const target = event.target.getAttribute("data-target");
      carItems.forEach((item) =>{
          // console.log(item.getAttribute("data-category"));
          if (target === item.getAttribute("data-category") || target === "all"){
            item.classList.remove("hide");
            item.classList.add("show");
          }
          else{
              item.classList.remove("show");
              item.classList.add("hide");
          }
      })
  
  })

})();

// Upload Image

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').css('background-image', 'url('+e.target.result +')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$("#imageUpload").change(function() {
    readURL(this);
});

// DOM
let rep=8
	for(var i=0;i<rep;i++){
		$(".list").append(
		`<div class="col-sm-3">
    <div class="card">
        <img src="img/car.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Car Id : VW22ND97</h5>
                <ul class="card-text">
                    <li><span>Car Name : </span>VW Kodok</li>
                    <li><span>Plate : </span>D122ND</li>
                    <li><span>Type : </span>Sedan</li>
                    <li><span>Status : </span><span class="rented">Rented</span></li>
                    <li><span>Release Year : </span>1997</li>
                </ul>
                <a href="#" class="btn-lil">More</a>
                <a href="#" class="btn-lil">Track</a>
        </div>
      </div>
    </div>`
	)
	}

// Show History

function showHistory() {
    var x = document.getElementById("history");
    var y = document.getElementById("inputId").value; 

    document.getElementById("carId").innerHTML = y;
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
// Search Car Tile
function mySearch() {
    var input, filter, cards, cardContainer, h5, title, i;
    input = document.getElementById("myFilter");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("my-items");
    cards = cardContainer.getElementsByClassName("col-sm-3");
    for (i = 0; i < cards.length; i++) {
        title = cards[i].querySelector(".card-body");
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}

function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myFilter");
  filter = input.value.toUpperCase();
  table = document.getElementById("my-items-list");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}











