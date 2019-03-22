var x = 0;
var array = Array();
var level = 1;

function add_element_to_array(color)
{
  if(x<level){
    array[x] = color;
    //alert("Element: " + array[x] + " Added at index " + x);
    x++;
    buttonFunction();
  }
}

function remove_element_from_array(){
    if(array.length>(level-1)){
    array.pop();
    x--
    display_array();
    document.getElementById("send").innerHTML = '';
    document.getElementById("change").innerHTML = '';
    }
}

function buttonFunction(){
  document.getElementById("change").innerHTML = '<button onclick="remove_element_from_array()">Change</button>';
  document.getElementById("send").innerHTML = '<button onclick="send()">Send</button>';
}

function send(){
  level++;
  document.getElementById("send").innerHTML = '';
  document.getElementById("change").innerHTML = '';
  updateUsers()
  // for (var i=0; i < array.length; i++) {
  //   array[i].send(array.toString());
  // }
}

function updateUsers(){
  socket.emit("code", array);
}

function display_array()
{
   var e = "<hr/>";   
    
   for (var y=0; y<array.length; y++)
   {
     e +=  + y+1 + " = " + array[y] + "<br/>";
   }
   document.getElementById("result").innerHTML = e;
}
   