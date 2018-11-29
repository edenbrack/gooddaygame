var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-game', { preload: preload, create: create });

function main() {
}

function preload() {
    game.load.image('kitchen', 'images/kitchen.png');
    game.load.image('diningroom', 'images/diningroom.png');
    game.load.image('party', 'images/xmas.png');
    game.load.spritesheet('character', 'images/sprite.png', 32, 63, 7);
}

function create() {
    var bgParty = game.add.image(0, 0, 'party');
    
    var mySprite = game.add.sprite(0, 0, 'character');
    mySprite.scale.setTo(5, 5);
    
//     mySprite.frame = 0;
    
//     mySprite.animations.add('right', [1, 2, 3, 4, 5, 6], 10, true);
    
//     mySprite.animations.play('right');
    
//     mySprite.animations.stop();
    
//     mySprite.frame = 0;
    var key = game.input.keyboard.createCursorKeys();
}

function update() {

    if (key.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        mySprite.x -= 4;
    }
    else if (key.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        mySprite.x += 4;
//         mySprite.animations.play('right');
    }

}
