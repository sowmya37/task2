console.log("delete details page")
var delete_data=document.getElementById("delete_data")


delete_data.onclick=function() {
	localStorage.removeItem("users");
}
