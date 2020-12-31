/*
 * Init must be declared as an attribute of the Alloy tag TIGLView (eg: onInit="init")
 */
var spriteUid;
var posX;
var direction;
var width;
function init()
{
	/*
	* For Alloy project, at runtime "assets" folder become "Resources" folder
	*/
    spriteUid = this.addSprite({url: "Resources/sprite.png", x: 0, y: 50});
    this.setEntityPivotById(spriteUid, 128, 0);
    posX = 128;
    direction=-1;
}


/*
 * Resize must be declared as an attribute of the Alloy tag TIGLView (eg: onResize="resize")
 */ 
function resize(e)
{
    width = e.width;
}

/*
 * Loop must be declared as an attribute of the Alloy tag TIGLView (eg: onLoop="loop")
 */ 
function loop()
{
    this.setEntityPositionById(spriteUid, posX, 50);
    posX+=direction;
    if(posX<128)
    {
        direction = 1;
        this.setEntityScaleById(spriteUid, -1, 1);
    }
    if(posX>width - 128)
    {
        direction = -1;
        this.setEntityScaleById(spriteUid, 1, 1);
    }
    
}

$.win.open();