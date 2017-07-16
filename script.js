function getToDoList() {
	var http = new XMLHttpRequest();
 	http.onreadystatechange = function() {
 		if (this.readyState == 4 && this.status == 200) {
 			console.log(this.responseText);
 			var parsedJson = JSON.parse(this.response);
 			var listsHtml = "";
 			parsedJson.lists.forEach(function (item){
 				listsHtml = listsHtml + `<li class="list-item" draggable="true">
				<div class="item-text item1">${item.listsText}</div>  
				<button class="delete-btn">Delete</button>
				<button class="edit-btn">Edit</button>
			</li>`
 			})
 			document.getElementById("todo-listid").innerHTML=listsHtml;	
 		}
 	};
 	http.open("GET", "http://demo0341182.mockable.io/get-lists", true);
 	http.send();
}

getToDoList();