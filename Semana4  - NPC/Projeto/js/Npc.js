function Npc(id, origin, sprite) {
    Entity.call(this, id, origin, sprite);
    this.team = Math.floor(Math.random());
    this.health = Math.floor(Math.random() * 100);
    this.trackSpeed = (3 + Math.floor(Math.random() * 5)) / 1000;
 
}

Npc.prototype = Object.create(Entity.prototype);
Npc.prototype.constructor = Entity;

Npc.prototype.draw = function() {
    Entity.prototype.draw.apply(this, arguments);

    var width = this.bbMax.x - this.bbMin.x
    var height = this.bbMax.y - this.bbMin.y;

  


    if (this.colliding)
        draw.drawRectangle(this.colliding ? "#FF0000" : "#000000", this.origin.x, this.origin.y, width, height, 1);
    //draw.drawRectangle("#000000", this.origin.x, this.origin.y - 3 - 5, width, 5, 1);
    //draw.drawFilledRectangle(draw.rgb2hex(255 - 255 * this.health / 100, 255 * this.health / 100, 0), this.origin.x, this.origin.y - 3 - 5, width * this.health / 100, 5);

    //draw.drawLine("black", this.origin.x, this.origin.y, this.origin.x + vel.x * speed, this.origin.y + vel.y * speed, 2);


    var vel = this.velocity.clone().normalize();
    var speed = this.velocity.clone().length() * 1000;

}