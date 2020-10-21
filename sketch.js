var title,input,button,hello,db,gs,pc

function setup(){
  createCanvas (1200,600)
    
  db = firebase.database()

  db.ref("gameState").on("value",function(data){
    gs = data.val()
  })
 
  db.ref("playerCount").on("value",function(data){
   pc = data.val()
  })

  title = createElement("h1","Car Racing Game")
  title.position(500,45)

  input = createInput("Enter Your Name")
  input.position(520,250);

  button = createButton("Submit")
  button.position(570,285)
  button.mousePressed(enterPlayer)
}

function draw(){
  background("yellow")
}

function enterPlayer(){
  var name = input.value()
  fill("red")
  hello = createElement("h3","Hello "+name+" Waiting For Players")
  hello.position(480,250);
  
  input.hide()
  button.hide()

}