

class Enemies
{
    constructor()
        {

// Enemies our player must avoid

    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x=-30;
    this.y=210;
    this.speed=Math.floor((Math.random() * 6));
        }

        update(dt) {
            // You should multiply any movement by the dt parameter
            // which will ensure the game runs at the same speed for
            // all computers.

          
                this.x+=this.speed+1;
           if (this.x>500)
           {
           this.x=30;
        
           }
           
        };

        render() {
            ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        };
}

var enemy1=new Enemies();
enemy1.x=-60;
enemy1.y=130;
var enemy5=new Enemies();
enemy5.x=40;
enemy5.y=130;

var enemy2=new Enemies();

enemy2.x=40;
enemy2.y=50;
var enemy4=new Enemies();

enemy4.x=-90;
enemy4.y=50;

var enemy3=new Enemies();


var allEnemies =[enemy1,enemy2,enemy3,enemy4,enemy5];   


class Player{

 
constructor(){
    
        // Variables applied to each of our instances go here,
        // we've provided one for you to get started
    
        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
    
        this.sprite = 'images/char-boy.png';
        

        this.x=200;
        this.y=290;
}

update ()
 {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

for(var i=0;i<allEnemies.length;i++)
{
   
    if(Math.abs(player.x-(allEnemies[i].x))<30&&player.y==allEnemies[i].y)//اطرح المسافه بينهم واخد المقياس واشوف لو ااقل من 30 
   { player.x=200;
    player.y=290;
}
 }
   
}
render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
handleInput(a)
{

    if(a=='up')
    {
        
        
      if(this.y<130)
        { 
            alert('congratulation');
            this.x=200;
            this.y=290;
           
        }
      
              this.y-=80;
        
    }
     else if(a=='left')
    {
        if(this.x==0)
        {
            this.x=0;
        }
        
        else{
            this.x-=100;
           }
        
    }
    else if(a=='down')
{
 
 if(this.y==370)
        { 
            this.y=370;
            
        }
        else
        this.y+=80;
   
}
else if(a=='right')
{ if(this.x==400)
    { 
        this.x=400;
        
    }
    else
        this.x+=100;

}
}
}
var player=new Player();

// Place the player object in a variable called player





function  reset(c)
{
    player=new Player(c);
}

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
