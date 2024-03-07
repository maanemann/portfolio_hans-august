
'use client'

import React from 'react';
import Phaser from 'phaser';

class PhaserGame extends React.Component {
  componentDidMount() {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 200 }
        }
      },
      scene: {
        preload: this.preload,
        create: this.create,
        update: this.update
      }
    };

    this.game = new Phaser.Game(config);
  }

  componentWillUnmount() {
    this.game.destroy(true);
  }

  preload() {
    // Load any game assets here
    // For example, you might load an image to use as your player character:
    this.load.image('player', 'assets/player.png');
  }

  create() {
    // Create game objects here
    // For example, you might create a player character like this:
    this.player = this.physics.add.sprite(100, 100, 'player');

    // And you could create a platform like this:
    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(400, 568, 'platform').setScale(2).refreshBody();

     // Add this line to create the cursors object
     this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    // Update game objects here
    // For example, you might move the player character when the arrow keys are pressed:
    if (this.cursors.left.isDown) { this.player.setVelocityX(-160); }
    else if (this.cursors.right.isDown) { this.player.setVelocityX(160); }
    else { this.player.setVelocityX(0); }
    if (this.cursors.up.isDown && this.player.body.touching.down) { this.player.setVelocityY(-330); }
  }

  render() {
    return <div id="phaser-game" />;
  }
}

export default PhaserGame;

// -----------------------------------

// import Phaser from 'phaser';

// class MyGame extends Phaser.Scene
// {
//     constructor ()
//     {
//         super();
//     }

//     preload ()
//     {
//         // Load any game assets here
//         // For example, you might load an image to use as your player character:
//         this.load.image('player', 'assets/player.png');
//     }

//     create ()
//     {
//         // Create your game objects here
//         // For example, you might create a player character like this:
//         this.player = this.physics.add.sprite(100, 100, 'player');

//         // And you could create a platform like this:
//         this.platforms = this.physics.add.staticGroup();
//         this.platforms.create(400, 568, 'platform').setScale(2).refreshBody();
//     }

//     update ()
//     {
//         // Update your game objects here
//         // For example, you might move the player character when the arrow keys are pressed:
//         if (this.cursors.left.isDown) { this.player.setVelocityX(-160); }
//         else if (this.cursors.right.isDown) { this.player.setVelocityX(160); }
//         else { this.player.setVelocityX(0); }
//         if (this.cursors.up.isDown && this.player.body.touching.down) { this.player.setVelocityY(-330); }
//     }
// }

// const config = {
//     type: Phaser.AUTO,
//     width: 800,
//     height: 600,
//     physics: {
//         default: 'arcade',
//         arcade: {
//             gravity: { y: 200 }
//         }
//     },
//     scene: MyGame
// };

// const game = new Phaser.Game(config);