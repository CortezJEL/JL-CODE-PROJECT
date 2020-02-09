var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["046968e2-29d2-4c58-96ce-75f0194d78e4","9fc09977-e103-4dc7-84da-31144257f564","68ce45d7-9050-400a-b6c6-109bc8bbaf28","bc5b12fb-5719-461f-b99e-33bcb5216f2d","79573c06-2d33-45d1-afd0-252af6db6514","2b7b69bc-b9b4-4df6-ae6a-9569456a7d7c","92d7aa72-d715-4e5b-9df0-12e15bfbdbcd","d236b4e3-5aaf-40f6-9faa-1a1fdd343048"],"propsByKey":{"046968e2-29d2-4c58-96ce-75f0194d78e4":{"name":"bullet","sourceUrl":null,"frameSize":{"x":9,"y":9},"frameCount":7,"looping":true,"frameDelay":4,"version":"z0r7xz5mmzTRm1PoQ0J1wN61x0ng1.U_","loadedFromSource":true,"saved":true,"sourceSize":{"x":27,"y":27},"rootRelativePath":"assets/046968e2-29d2-4c58-96ce-75f0194d78e4.png"},"9fc09977-e103-4dc7-84da-31144257f564":{"name":"lose","sourceUrl":null,"frameSize":{"x":640,"y":640},"frameCount":1,"looping":true,"frameDelay":12,"version":"CbvgbBzwkX23VHNrIfHvXSENOS57qfZe","loadedFromSource":true,"saved":true,"sourceSize":{"x":640,"y":640},"rootRelativePath":"assets/9fc09977-e103-4dc7-84da-31144257f564.png"},"68ce45d7-9050-400a-b6c6-109bc8bbaf28":{"name":"black","sourceUrl":null,"frameSize":{"x":1,"y":1},"frameCount":1,"looping":true,"frameDelay":12,"version":"fLWvBxnHV5iKIlTArpVrBBijbycU9v59","loadedFromSource":true,"saved":true,"sourceSize":{"x":1,"y":1},"rootRelativePath":"assets/68ce45d7-9050-400a-b6c6-109bc8bbaf28.png"},"bc5b12fb-5719-461f-b99e-33bcb5216f2d":{"name":"enemy2","sourceUrl":null,"frameSize":{"x":93,"y":84},"frameCount":1,"looping":true,"frameDelay":12,"version":"gDrNWR3qsVPknXP.dyT7GIo4YBQ.bryb","loadedFromSource":true,"saved":true,"sourceSize":{"x":93,"y":84},"rootRelativePath":"assets/bc5b12fb-5719-461f-b99e-33bcb5216f2d.png"},"79573c06-2d33-45d1-afd0-252af6db6514":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":82,"y":84},"frameCount":1,"looping":true,"frameDelay":12,"version":"F.f0MrJP36VruqyGVvO_k6O3xMoq.ZFs","loadedFromSource":true,"saved":true,"sourceSize":{"x":82,"y":84},"rootRelativePath":"assets/79573c06-2d33-45d1-afd0-252af6db6514.png"},"2b7b69bc-b9b4-4df6-ae6a-9569456a7d7c":{"name":"player","sourceUrl":null,"frameSize":{"x":17,"y":17},"frameCount":1,"looping":true,"frameDelay":12,"version":"6_PyWbLIL..1Djpr9MZ3bCeDEzgCspme","loadedFromSource":true,"saved":true,"sourceSize":{"x":17,"y":17},"rootRelativePath":"assets/2b7b69bc-b9b4-4df6-ae6a-9569456a7d7c.png"},"92d7aa72-d715-4e5b-9df0-12e15bfbdbcd":{"name":"logo","sourceUrl":null,"frameSize":{"x":737,"y":104},"frameCount":1,"looping":true,"frameDelay":12,"version":"RZFJ3XFK1dlEbN_rpmcKW8.YLtv4i4Ox","loadedFromSource":true,"saved":true,"sourceSize":{"x":737,"y":104},"rootRelativePath":"assets/92d7aa72-d715-4e5b-9df0-12e15bfbdbcd.png"},"d236b4e3-5aaf-40f6-9faa-1a1fdd343048":{"name":"loading","sourceUrl":null,"frameSize":{"x":269,"y":60},"frameCount":5,"looping":true,"frameDelay":20,"version":"ADmsiVXQIRzOuWC8ZO6zWP65ner.fDoG","loadedFromSource":true,"saved":true,"sourceSize":{"x":269,"y":300},"rootRelativePath":"assets/d236b4e3-5aaf-40f6-9faa-1a1fdd343048.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// THIS CODE BELONGS TO JOHNNY L. \\
// YOU MUST REQUEST PERMISSION TO USE. \\
// PLEASE REPORT ANY ERRORS! \\

var start = true;
var startTimer = 0;
var Game = createSprite(200,200);
Game.setAnimation("black");
Game.scale = 0.5;
var logo = createSprite(200,200);
logo.setAnimation("logo");
logo.scale = 0.5;
var loading = createSprite(200,250);
loading.setAnimation("loading");
loading.scale = 0.6;
var pause = false;
var pauseOver = false;
var gameOver = false;
var enemyGoCounter = 119;
var enemyNumber = null;
var enemyGo = false;
var edgeCounterGo = false;
var edgeCounter = null;
var enemyAppear = false;
var bullet1 = createSprite(200,335);
bullet1.setAnimation("bullet");
var bullet2 = createSprite(200,335);
bullet2.setAnimation("bullet");
var bullet3 = createSprite(200,335);
bullet3.setAnimation("bullet");
var bullet4 = createSprite(200,335);
bullet4.setAnimation("bullet");
var bullet5 = createSprite(200,335);
bullet5.setAnimation("bullet");
var bullet6 = createSprite(200,335);
bullet6.setAnimation("bullet");
var player = createSprite(200,350);
player.setAnimation("player");
player.scale = 2.5;
var enemy1 = createSprite(50,50);
enemy1.setAnimation("enemy1");
enemy1.scale = 0.25;
var enemy2 = createSprite(100,50);
enemy2.setAnimation("enemy2");
enemy2.scale = 0.25;
var enemy3 = createSprite(150,50);
enemy3.setAnimation("enemy1");
enemy3.scale = 0.25;
var enemy4 = createSprite(200,50);
enemy4.setAnimation("enemy2");
enemy4.scale = 0.25;
var enemy5 = createSprite(250,50);
enemy5.setAnimation("enemy1");
enemy5.scale = 0.25;
var enemy6 = createSprite(300,50);
enemy6.setAnimation("enemy2");
enemy6.scale = 0.25;
var enemy7 = createSprite(350,50);
enemy7.setAnimation("enemy1");
enemy7.scale = 0.25;
var bullet1Go = false;
World.frameRate = 30;
var bullet2Go = false;
World.frameRate = 30;
var bullet3Go = false;
World.frameRate = 30;
var bullet4Go = false;
World.frameRate = 30;
var bullet5Go = false;
World.frameRate = 30;
var bullet6Go = false;
World.frameRate = 30;
var playerAlive = true;
var enemy1Alive = true;
var enemy2Alive = true;
var enemy3Alive = true;
var enemy4Alive = true;
var enemy5Alive = true;
var enemy6Alive = true;
var enemy7Alive = true;
var roundNumber = 1;
var score = 0;
var nextRoundTimerGo = true;
var nextRoundTimer = null;
var lose = createSprite(200,175);
lose.setAnimation("lose");
lose.visible = false;
lose.scale = 0.25;
var livesLeft = 3;
var lives3 = createSprite(40,385);
lives3.setAnimation("player");
lives3.scale = 1;
var lives2 = createSprite(15,385);
lives2.setAnimation("player");
lives2.scale = 1;
var lifeLostTimerGo = false;
var lifeLostTimer = null;
var lifeLostRoundTimerGo = false;
var lifeLostRoundTimer = null;
World.frameRate = 30;
function draw() {
  if (keyDown("left_arrow") && player.x > 23|| keyDown("a") && player.x > 23) {
    if (pause === false && start === false) {
      player.x = player.x - 4;
    }
  }
  if (keyDown("right_arrow") && player.x < 377|| keyDown("d") && player.x < 377) {
    if (pause === false && start === false) {
      player.x = player.x + 4;
    }
  }
  if (bullet1.y == 800) {
    bullet1.x = player.x;
  }
  if (bullet2.y == 800) {
    bullet2.x = player.x;
  }
  if (bullet3.y == 800) {
    bullet3.x = player.x;
  }
  if (bullet4.y == 800) {
    bullet4.x = player.x;
  }
  if (bullet5.y == 800) {
    bullet5.x = player.x;
  }
  if (bullet6.y == 800) {
    bullet6.x = player.x;
  }
  if (bullet1.y == 800 && pause === false) {
    if (keyWentDown("space")) {
      if (nextRoundTimerGo === false && lose.visible === false && lifeLostRoundTimerGo === false && lifeLostTimerGo === false && start === false) {
        bullet1Go = true;
        bullet1.y = 335;
        bullet1.x = player.x;
      }
    }
  }
  if (bullet1.y < 335 && bullet2.y == 800 && pause === false) {
    if (keyWentDown("space")) {
      if (nextRoundTimerGo === false && lose.visible === false && lifeLostRoundTimerGo === false && lifeLostTimerGo === false && start === false) {
        bullet2Go = true;
        bullet2.y = 335;
        bullet2.x = player.x;
      }
    }
  }
  if (bullet1.y < 335 && bullet2.y < 335 && bullet3.y == 800 && pause === false) {
    if (keyWentDown("space")) {
      if (nextRoundTimerGo === false && lose.visible === false && lifeLostRoundTimerGo === false && lifeLostTimerGo === false && start === false) {
        bullet3Go = true;
        bullet3.y = 335;
        bullet3.x = player.x;
      }
    }
  }
    if (bullet1.y < 335 && bullet2.y < 335 && bullet3.y < 335 && bullet4.y == 800 && pause === false) {
    if (keyWentDown("space")) {
      if (nextRoundTimerGo === false && lose.visible === false && lifeLostRoundTimerGo === false && lifeLostTimerGo === false && start === false) {
        bullet4Go = true;
        bullet4.y = 335;
        bullet4.x = player.x;
      }
    }
  }
    if (bullet1.y < 335 && bullet2.y < 335 && bullet3.y < 335 && bullet4.y < 335 && bullet5.y == 800 && pause === false) {
    if (keyWentDown("space")) {
      if (nextRoundTimerGo === false && lose.visible === false && lifeLostRoundTimerGo === false && lifeLostTimerGo === false && start === false) {
        bullet5Go = true;
        bullet5.y = 335;
        bullet5.x = player.x;
      }
    }
  }
      if (bullet1.y < 335 && bullet2.y < 335 && bullet3.y < 335 && bullet4.y < 335 && bullet5.y < 335 && bullet6.y == 800 && pause === false) {
    if (keyWentDown("space")) {
      if (nextRoundTimerGo === false && lose.visible === false && lifeLostRoundTimerGo === false && lifeLostTimerGo === false && start === false) {
        bullet6Go = true;
        bullet6.y = 335;
        bullet6.x = player.x;
      }
    }
  }

  if (bullet1Go === true) {
    bullet1.y = bullet1.y - 5;
  }
  if (bullet2Go === true) {
    bullet2.y = bullet2.y - 5;
  }
  if (bullet3Go === true) {
    bullet3.y = bullet3.y - 5;
  }
  if (bullet4Go === true) {
    bullet4.y = bullet4.y - 5;
  }
  if (bullet5Go === true) {
    bullet5.y = bullet5.y - 5;
  }
  if (bullet6Go === true) {
    bullet6.y = bullet6.y - 5;
  }
  if (bullet1.y <= 0) {
    bullet1Go = false;
    bullet1.y = 800;
    bullet1.x = player.x;
  }
  if (bullet2.y <= 0) {
    bullet2Go = false;
    bullet2.y = 800;
    bullet2.x = player.x;
  }
  if (bullet3.y <= 0) {
    bullet3Go = false;
    bullet3.y = 800;
    bullet3.x = player.x;}
  if (bullet4.y <= 0) {
    bullet4Go = false;
    bullet4.y = 800;
    bullet4.x = player.x;}
  if (bullet5.y <= 0) {
    bullet5Go = false;
    bullet5.y = 800;
    bullet5.x = player.x;}
  if (bullet6.y <= 0) {
    bullet6Go = false;
    bullet6.y = 800;
    bullet6.x = player.x;}
  if (bullet1.isTouching(enemy1) && enemy1Alive === true) {
     enemy1Alive = false;
     enemy1.visible = false;
     bullet1Go = false;
     bullet1.y = 800;
     score = score + 50;
  }
  if (bullet2.isTouching(enemy1) && enemy1Alive === true) {
     enemy1Alive = false;
     enemy1.visible = false;
     bullet2Go = false;
     bullet2.y = 800;
     score = score + 50;
  }
  if (bullet3.isTouching(enemy1) && enemy1Alive === true) {
     enemy1Alive = false;
     enemy1.visible = false;
     bullet3Go = false;
     bullet3.y = 800;
     score = score + 50;
  }
  if (bullet4.isTouching(enemy1) && enemy1Alive === true) {
     enemy1Alive = false;
     enemy1.visible = false;
     bullet4Go = false;
     bullet4.y = 800;
     score = score + 50;
  }
  if (bullet5.isTouching(enemy1) && enemy1Alive === true) {
     enemy1Alive = false;
     enemy1.visible = false;
     bullet5Go = false;
     bullet5.y = 800;
     score = score + 50;
  }
  if (bullet6.isTouching(enemy1) && enemy1Alive === true) {
     enemy1Alive = false;
     enemy1.visible = false;
     bullet6Go = false;
     bullet6.y = 800;
     score = score + 50;
  }
  if (bullet1.isTouching(enemy2) && enemy2Alive === true) {
     enemy2Alive = false;
     enemy2.visible = false;
     bullet1Go = false;
     bullet1.y = 800;
     score = score + 50;
  }
  if (bullet2.isTouching(enemy2) && enemy2Alive === true) {
     enemy2Alive = false;
     enemy2.visible = false;
     bullet2Go = false;
     bullet2.y = 800;
     score = score + 50;
  }
  if (bullet3.isTouching(enemy2) && enemy2Alive === true) {
     enemy2Alive = false;
     enemy2.visible = false;
     bullet3Go = false;
     bullet3.y = 800;
     score = score + 50;
  }
  if (bullet4.isTouching(enemy2) && enemy2Alive === true) {
     enemy2Alive = false;
     enemy2.visible = false;
     bullet4Go = false;
     bullet4.y = 800;
     score = score + 50;
  }
  if (bullet5.isTouching(enemy2) && enemy2Alive === true) {
     enemy2Alive = false;
     enemy2.visible = false;
     bullet5Go = false;
     bullet5.y = 800;
     score = score + 50;
  }
  if (bullet6.isTouching(enemy2) && enemy2Alive === true) {
     enemy2Alive = false;
     enemy2.visible = false;
     bullet6Go = false;
     bullet6.y = 800;
     score = score + 50;
  }
  if (bullet1.isTouching(enemy3) && enemy3Alive === true){
     enemy3Alive = false;
     enemy3.visible = false;
     bullet1Go = false;
     bullet1.y = 800;
     score = score + 50;
  }
  if (bullet2.isTouching(enemy3) && enemy3Alive === true){
     enemy3Alive = false;
     enemy3.visible = false;
     bullet2Go = false;
     bullet2.y = 800;
     score = score + 50;
  }
  if (bullet3.isTouching(enemy3) && enemy3Alive === true){
     enemy3Alive = false;
     enemy3.visible = false;
     bullet3Go = false;
     bullet3.y = 800;
     score = score + 50;
  }
  if (bullet4.isTouching(enemy3) && enemy3Alive === true){
     enemy3Alive = false;
     enemy3.visible = false;
     bullet4Go = false;
     bullet4.y = 800;
     score = score + 50;
  }
  if (bullet5.isTouching(enemy3) && enemy3Alive === true){
     enemy3Alive = false;
     enemy3.visible = false;
     bullet5Go = false;
     bullet5.y = 800;
     score = score + 50;
  }
  if (bullet6.isTouching(enemy3) && enemy3Alive === true){
     enemy3Alive = false;
     enemy3.visible = false;
     bullet6Go = false;
     bullet6.y = 800;
     score = score + 50;
  }
  if (bullet1.isTouching(enemy4) && enemy4Alive === true){
     enemy4Alive = false;
     enemy4.visible = false;
     bullet1Go = false;
     bullet1.y = 800;
     score = score + 50;
  }
  if (bullet2.isTouching(enemy4) && enemy4Alive === true){
     enemy4Alive = false;
     enemy4.visible = false;
     bullet2Go = false;
     bullet2.y = 800;
     score = score + 50;
  }
  if (bullet3.isTouching(enemy4) && enemy4Alive === true){
     enemy4Alive = false;
     enemy4.visible = false;
     bullet3Go = false;
     bullet3.y = 800;
     score = score + 50;
  }
if (bullet4.isTouching(enemy4) && enemy4Alive === true){
     enemy4Alive = false;
     enemy4.visible = false;
     bullet4Go = false;
     bullet4.y = 800;
     score = score + 50;
  }
  if (bullet5.isTouching(enemy4) && enemy4Alive === true){
     enemy4Alive = false;
     enemy4.visible = false;
     bullet5Go = false;
     bullet5.y = 800;
     score = score + 50;
  }
  if (bullet6.isTouching(enemy4) && enemy4Alive === true){
     enemy4Alive = false;
     enemy4.visible = false;
     bullet6Go = false;
     bullet6.y = 800;
     score = score + 50;
  }
  if (bullet1.isTouching(enemy5) && enemy5Alive === true){
     enemy5Alive = false;
     enemy5.visible = false;
     bullet1Go = false;
     bullet1.y = 800;
     score = score + 50;
  }
  if (bullet2.isTouching(enemy5) && enemy5Alive === true){
     enemy5Alive = false;
     enemy5.visible = false;
     bullet2Go = false;
     bullet2.y = 800;
     score = score + 50;
  }
  if (bullet3.isTouching(enemy5) && enemy5Alive === true){
     enemy5Alive = false;
     enemy5.visible = false;
     bullet3Go = false;
     bullet3.y = 800;
     score = score + 50;
  }
  if (bullet4.isTouching(enemy5) && enemy5Alive === true){
     enemy5Alive = false;
     enemy5.visible = false;
     bullet4Go = false;
     bullet4.y = 800;
     score = score + 50;
  }
  if (bullet5.isTouching(enemy5) && enemy5Alive === true){
     enemy5Alive = false;
     enemy5.visible = false;
     bullet5Go = false;
     bullet5.y = 800;
     score = score + 50;
  }
  if (bullet6.isTouching(enemy5) && enemy5Alive === true){
     enemy5Alive = false;
     enemy5.visible = false;
     bullet6Go = false;
     bullet6.y = 800;
     score = score + 50;
  }
  if (bullet1.isTouching(enemy6) && enemy6Alive === true){
     enemy6Alive = false;
     enemy6.visible = false;
     bullet1Go = false;
     bullet1.y = 800;
     score = score + 50;
  }
  if (bullet2.isTouching(enemy6) && enemy6Alive === true){
     enemy6Alive = false;
     enemy6.visible = false;
     bullet2Go = false;
     bullet2.y = 800;
     score = score + 50;
  }
  if (bullet3.isTouching(enemy6) && enemy6Alive === true){
     enemy6Alive = false;
     enemy6.visible = false;
     bullet3Go = false;
     bullet3.y = 800;
     score = score + 50;
  }
  if (bullet4.isTouching(enemy6) && enemy6Alive === true){
     enemy6Alive = false;
     enemy6.visible = false;
     bullet4Go = false;
     bullet4.y = 800;
     score = score + 50;
  }
  if (bullet5.isTouching(enemy6) && enemy6Alive === true){
     enemy6Alive = false;
     enemy6.visible = false;
     bullet5Go = false;
     bullet5.y = 800;
     score = score + 50;
  }
  if (bullet6.isTouching(enemy6) && enemy6Alive === true){
     enemy6Alive = false;
     enemy6.visible = false;
     bullet6Go = false;
     bullet6.y = 800;
     score = score + 50;
  }
  if (bullet1.isTouching(enemy7) && enemy7Alive === true){
     enemy7Alive = false;
     enemy7.visible = false;
     bullet1Go = false;
     bullet1.y = 800;
     score = score + 50;
  }
  if (bullet2.isTouching(enemy7) && enemy7Alive === true){
     enemy7Alive = false;
     enemy7.visible = false;
     bullet2Go = false;
     bullet2.y = 800;
     score = score + 50;
  }
  if (bullet3.isTouching(enemy7) && enemy7Alive === true){
     enemy7Alive = false;
     enemy7.visible = false;
     bullet3Go = false;
     bullet3.y = 800;
     score = score + 50;
  }
  if (bullet4.isTouching(enemy7) && enemy7Alive === true){
     enemy7Alive = false;
     enemy7.visible = false;
     bullet4Go = false;
     bullet4.y = 800;
     score = score + 50;
  }
  if (bullet5.isTouching(enemy7) && enemy7Alive === true){
     enemy7Alive = false;
     enemy7.visible = false;
     bullet5Go = false;
     bullet5.y = 800;
     score = score + 50;
  }
  if (bullet6.isTouching(enemy7) && enemy7Alive === true){
     enemy7Alive = false;
     enemy7.visible = false;
     bullet6Go = false;
     bullet6.y = 800;
     score = score + 50;
  }
  if (playerAlive === true && pause === false) {
    enemyGoCounter = enemyGoCounter + 1;
  }
  if (enemyGoCounter == 120 && pause === false) {
    enemyGoCounter = 0;
    enemyGo = true;
    enemyNumber = Math.round(randomNumber(1,7));
  }
  if (enemyGo === true && enemyNumber == 1 && enemy1Alive === true && enemy1.y == 50) {
    enemy1.y = 50.1;
  }
  if (enemyGo === true && enemyNumber == 1 && enemy1Alive === false) {
    enemyNumber = Math.round(randomNumber(1,7));
  }
  if (enemyGo === true && enemy1.y > 50) {
    if (player.y - enemy1.y > 100 && enemy1Alive === true) {
      enemy1.pointTo(player.x,player.y + 15);
      enemy1.rotation = enemy1.rotation + 90;
      if (roundNumber < 13) {
        enemy1.setSpeedAndDirection(roundNumber + 5,enemy1.rotation - 90);
      } else {
        enemy1.setSpeedAndDirection(18,enemy1.rotation - 90);
      }
    }
    if (enemy1.y > 420) {
      enemyNumber = Math.round(1,7);
      edgeCounterGo = true;
    }
  }
  if (nextRoundTimerGo === true) {
    enemy1.setSpeedAndDirection(0,null);
    enemy1.x = 50;
    enemy1.rotation = 0;
  }
  if (enemyGo === true && enemyNumber == 2 && enemy2Alive === true && enemy2.y == 50) {
    enemy2.y = 50.1;
  }
  if (enemyGo === true && enemyNumber == 2 && enemy2Alive === false) {
    enemyNumber = Math.round(randomNumber(1,7));
  }
  if (enemyGo === true && enemy2.y > 50) {
    if (player.y - enemy2.y > 100 && enemy2Alive === true) {
      enemy2.pointTo(player.x,player.y + 15);
      enemy2.rotation = enemy2.rotation + 90;
      if (roundNumber < 13) {
        enemy2.setSpeedAndDirection(roundNumber + 5,enemy2.rotation - 90);
      } else {
        enemy2.setSpeedAndDirection(18,enemy2.rotation - 90);
      }
    }
    if (enemy2.y > 420) {
      enemyNumber = Math.round(1,7);
      edgeCounterGo = true;
    }
  }
  if (nextRoundTimerGo === true) {
    enemy2.setSpeedAndDirection(0,null);
    enemy2.x = 100;
    enemy2.rotation = 0;
  }
  if (enemyGo === true && enemyNumber == 3 && enemy3Alive === true && enemy3.y == 50) {
    enemy3.y = 50.1;
  }
  if (enemyGo === true && enemyNumber == 3 && enemy3Alive === false) {
    enemyNumber = Math.round(randomNumber(1,7));
  }
  if (enemyGo === true && enemy3.y > 50) {
    if (player.y - enemy3.y > 100 && enemy3Alive === true) {
      enemy3.pointTo(player.x,player.y + 15);
      enemy3.rotation = enemy3.rotation + 90;
      if (roundNumber < 13) {
        enemy3.setSpeedAndDirection(roundNumber + 5,enemy3.rotation - 90);
      } else {
        enemy3.setSpeedAndDirection(18,enemy3.rotation - 90);
      }
    }
    if (enemy3.y > 420) {
      enemyNumber = Math.round(1,7);
      edgeCounterGo = true;
    }
  }
  if (nextRoundTimerGo === true) {
    enemy3.setSpeedAndDirection(0,null);
    enemy3.x = 150;
    enemy3.rotation = 0;
  }
 if (enemyGo === true && enemyNumber == 4 && enemy4Alive === true && enemy4.y == 50) {
    enemy4.y = 50.1;
  }
  if (enemyGo === true && enemyNumber == 4 && enemy4Alive === false) {
    enemyNumber = Math.round(randomNumber(1,7));
  }
  if (enemyGo === true && enemy4.y > 50) {
    if (player.y - enemy4.y > 100 && enemy4Alive === true) {
      enemy4.pointTo(player.x,player.y + 15);
      enemy4.rotation = enemy4.rotation + 90;
      if (roundNumber < 13) {
        enemy4.setSpeedAndDirection(roundNumber + 5,enemy4.rotation - 90);
      } else {
        enemy4.setSpeedAndDirection(18,enemy4.rotation - 90);
      }
    }
    if (enemy4.y > 420) {
      enemyNumber = Math.round(1,7);
      edgeCounterGo = true;
    }
  }
  if (nextRoundTimerGo === true) {
    enemy4.setSpeedAndDirection(0,null);
    enemy4.x = 200;
    enemy4.rotation = 0;
  }
  if (enemyGo === true && enemyNumber == 5 && enemy5Alive === true && enemy5.y == 50) {
    enemy5.y = 50.1;
  }
  if (enemyGo === true && enemyNumber == 5 && enemy5Alive === false) {
    enemyNumber = Math.round(randomNumber(1,7));
  }
  if (enemyGo === true && enemy5.y > 50) {
    if (player.y - enemy5.y > 100 && enemy5Alive === true) {
      enemy5.pointTo(player.x,player.y + 15);
      enemy5.rotation = enemy5.rotation + 90;
      if (roundNumber < 13) {
        enemy5.setSpeedAndDirection(roundNumber + 5,enemy5.rotation - 90);
      } else {
        enemy5.setSpeedAndDirection(18,enemy5.rotation - 90);
      }
    }
    if (enemy5.y > 420) {
      enemyNumber = Math.round(1,7);
      edgeCounterGo = true;
    }
  }
  if (nextRoundTimerGo === true) {
    enemy5.setSpeedAndDirection(0,null);
    enemy5.x = 250;
    enemy5.rotation = 0;
  }
  if (enemyGo === true && enemyNumber == 6 && enemy6Alive === true && enemy6.y == 50) {
    enemy6.y = 50.1;
  }
  if (enemyGo === true && enemyNumber == 6 && enemy6Alive === false) {
    enemyNumber = Math.round(randomNumber(1,7));
  }
  if (enemyGo === true && enemy6.y > 50) {
    if (player.y - enemy6.y > 100 && enemy6Alive === true) {
      enemy6.pointTo(player.x,player.y + 15);
      enemy6.rotation = enemy6.rotation + 90;
      if (roundNumber < 13) {
        enemy6.setSpeedAndDirection(roundNumber + 5,enemy6.rotation - 90);
      } else {
        enemy6.setSpeedAndDirection(18,enemy6.rotation - 90);
      }
    }
    if (enemy6.y > 420) {
      enemyNumber = Math.round(1,7);
      edgeCounterGo = true;
    }
  }
  if (nextRoundTimerGo === true) {
    enemy6.setSpeedAndDirection(0,null);
    enemy6.x = 300;
    enemy6.rotation = 0;
  }
  if (enemyGo === true && enemyNumber == 7 && enemy7Alive === true && enemy7.y == 50) {
    enemy7.y = 50.1;
  }
  if (enemyGo === true && enemyNumber == 7 && enemy7Alive === false) {
    enemyNumber = Math.round(randomNumber(1,7));
  }
  if (enemyGo === true && enemy7.y > 50) {
    if (player.y - enemy7.y > 100 && enemy7Alive === true) {
      enemy7.pointTo(player.x,player.y + 15);
      enemy7.rotation = enemy7.rotation + 90;
      if (roundNumber < 13) {
        enemy7.setSpeedAndDirection(roundNumber + 5,enemy7.rotation - 90);
      } else {
        enemy7.setSpeedAndDirection(18,enemy7.rotation - 90);
      }
    }
    if (enemy7.y > 420) {
      enemyNumber = Math.round(1,7);
      edgeCounterGo = true;
    }
  }
  if (nextRoundTimerGo === true) {
    enemy7.setSpeedAndDirection(0,null);
    enemy7.x = 350;
    enemy7.rotation = 0;
  }
  if (edgeCounterGo === true) {
    edgeCounter = edgeCounter + 1;
  }
  if (edgeCounter == 60) {
    edgeCounterGo = false;
    edgeCounter = null;
    enemyAppear = true;
  }
  if (enemyAppear === true) {
    if (enemy1.y > 420) {
      enemy1.setSpeedAndDirection(0,null);
      enemy1.y = 0;
      enemy1.x = 50;
    }
    if (enemy2.y > 420) {
      enemy2.setSpeedAndDirection(0,null);
      enemy2.y = 0;
      enemy2.x = 100;
    }
    if (enemy3.y > 420) {
      enemy3.setSpeedAndDirection(0,null);
      enemy3.y = 0;
      enemy3.x = 150;
    }
    if (enemy4.y > 420) {
      enemy4.setSpeedAndDirection(0,null);
      enemy4.y = 0;
      enemy4.x = 200;
    }
    if (enemy5.y > 420) {
      enemy5.setSpeedAndDirection(0,null);
      enemy5.y = 0;
      enemy5.x = 250;
    }
    if (enemy6.y > 420) {
      enemy6.setSpeedAndDirection(0,null);
      enemy6.y = 0;
      enemy6.x = 300;
    }
    if (enemy7.y > 420) {
      enemy7.setSpeedAndDirection(0,null);
      enemy7.y = 0;
      enemy7.x = 350;
    }
  }
  if (enemy1.y < 50 && pause === false) {
    enemyAppear = false;
    enemy1.y = enemy1.y + 2;
    enemy1.pointTo(enemy1.x + 1,enemy1.y);
    if (enemyNumber == 1) {
      enemyNumber = Math.round(randomNumber(1,7));
    }
  }
  if (enemy2.y < 50 && pause === false) {
    enemyAppear = false;
    enemy2.y = enemy2.y + 2;
    enemy2.pointTo(enemy2.x + 1,enemy2.y);
    if (enemyNumber == 2) {
      enemyNumber = Math.round(randomNumber(1,7));
    }
  }
  if (enemy3.y < 50 && pause === false) {
    enemyAppear = false;
    enemy3.y = enemy3.y + 2;
    enemy3.pointTo(enemy3.x + 1,enemy3.y);
    if (enemyNumber == 3) {
      enemyNumber = Math.round(randomNumber(1,7));
    }
  }
  if (enemy4.y < 50 && pause === false) {
    enemyAppear = false;
    enemy4.y = enemy4.y + 2;
    enemy4.pointTo(enemy4.x + 1,enemy4.y);
    if (enemyNumber == 4) {
      enemyNumber = Math.round(randomNumber(1,7));
    }
  }
  if (enemy5.y < 50 && pause === false) {
    enemyAppear = false;
    enemy5.y = enemy5.y + 2;
    enemy5.pointTo(enemy5.x + 1,enemy5.y);
    if (enemyNumber == 5) {
      enemyNumber = Math.round(randomNumber(1,7));
    }
  }
  if (enemy6.y < 50 && pause === false) {
    enemyAppear = false;
    enemy6.y = enemy6.y + 2;
    enemy6.pointTo(enemy6.x + 1,enemy6.y);
    if (enemyNumber == 6) {
      enemyNumber = Math.round(randomNumber(1,7));
    }
  }
  if (enemy7.y < 50 && pause === false) {
    enemyAppear = false;
    enemy7.y = enemy7.y + 2;
    enemy7.pointTo(enemy7.x + 1,enemy7.y);
    if (enemyNumber == 7) {
      enemyNumber = Math.round(randomNumber(1,7));
    }
  }
  if (player.isTouching(enemy1) && enemy1Alive === true) {
    playerAlive = false;
    player.visible = false;
  }
  if (player.isTouching(enemy2) && enemy2Alive === true) {
    playerAlive = false;
    player.visible = false;
  }
  if (player.isTouching(enemy3) && enemy3Alive === true) {
    playerAlive = false;
    player.visible = false;
  }
  if (player.isTouching(enemy4) && enemy4Alive === true) {
    playerAlive = false;
    player.visible = false;
  }
  if (player.isTouching(enemy5) && enemy5Alive === true) {
    playerAlive = false;
    player.visible = false;
  }
  if (player.isTouching(enemy6) && enemy6Alive === true) {
    playerAlive = false;
    player.visible = false;
  }
  if (player.isTouching(enemy7) && enemy7Alive === true) {
    playerAlive = false;
    player.visible = false;
  }
  enemyAppear;
  if (playerAlive === false) {
    livesLeft = livesLeft - 1;
    playerAlive = true;
    if (livesLeft > 0) {
      lifeLostTimerGo = true;
      player.visible = false;
      enemy1.y = 600;
      enemy2.y = 600;
      enemy3.y = 600;
      enemy4.y = 600;
      enemy5.y = 600;
      enemy6.y = 600;
      enemy7.y = 600;
      bullet1.y = 800;
      bullet2.x = 800;
      bullet3.y = 800;
      bullet4.x = 800;
      bullet5.y = 800;
      bullet6.x = 800;
      bullet1Go = false;
      bullet2Go = false;
      bullet3Go = false;
      bullet4Go = false;
      bullet5Go = false;
      bullet6Go = false;
    }
    if (livesLeft === 0) {
      gameOver = true;
    }
  }
  if (lifeLostTimerGo === true) {
    lifeLostTimer = lifeLostTimer + 1;
    edgeCounter = 0;
    enemy1.y = 600;
    enemy2.y = 600;
    enemy3.y = 600;
    enemy4.y = 600;
    enemy5.y = 600;
    enemy6.y = 600;
    enemy7.y = 600;
  }
  if (lifeLostTimer == 30) {
    lifeLostTimerGo = false;
    lifeLostTimer = 0;
    lifeLostRoundTimerGo = true;
    player.x = 200;
    if (livesLeft == 2) {
      lives3.visible = false;
    }
    if (livesLeft == 1) {
      lives2.visible = false;
    }
  }
  if (gameOver === true) {
    bullet1.y = 800;
    bullet2.y = 800;
    bullet3.y = 800;
    bullet4.y = 800;
    bullet5.y = 800;
    bullet6.y = 800;
    lose.visible = true;
    player.y = 600;
    enemy1.y = 600;
    enemy2.y = 600;
    enemy3.y = 600;
    enemy4.y = 600;
    enemy5.y = 600;
    enemy6.y = 600;
    enemy7.y = 600;
  }
  if (enemy1Alive === true) {
    enemy1.visible = true;
  }
  if (enemy2Alive === true) {
    enemy2.visible = true;
  }
  if (enemy3Alive === true) {
    enemy3.visible = true;
  }
  if (enemy4Alive === true) {
    enemy4.visible = true;
  }
  if (enemy5Alive === true) {
    enemy5.visible = true;
  }
  if (enemy6Alive === true) {
    enemy6.visible = true;
  }
  if (enemy7Alive === true) {
    enemy7.visible = true;
  }
  if (enemy1Alive === false && enemy2Alive === false && enemy3Alive === false && enemy4Alive === false && enemy5Alive === false && enemy6Alive === false && enemy7Alive === false && lose.visible === false) {
    bullet1.y = 800;
    bullet2.y = 800;
    bullet3.y = 800;
    bullet4.y = 800;
    bullet5.y = 800;
    bullet6.y = 800;
    nextRoundTimerGo = true;
    roundNumber = roundNumber + 1;
    score = score + 50*roundNumber;
    enemyGo = false;
    edgeCounter = 0;
  }
  if (nextRoundTimerGo === true || lifeLostRoundTimerGo === true) {
    pause = false;
  }
  background("black");
  drawSprites();
  if (startTimer < 210) {
    startTimer = startTimer + 1;
    bullet1.y = 800;
    bullet2.y = 800;
    bullet3.y = 800;
    bullet4.y = 800;
    bullet5.y = 800;
    bullet6.y = 800;
  }
  if (startTimer == 210) {
    start = false;
  }
if (start === true) {
    background("black");
    logo.visible = true;
	loading.visible = true;
    drawSprites();
  } else {
    logo.visible = false;
	loading.visible = false;
  }
  if (lifeLostRoundTimerGo === true && gameOver === false) {
    lifeLostRoundTimer = lifeLostRoundTimer + 1;
    stroke("white");
    fill("white");
    textSize(20);
    textFont("Bungee");
    text("Round " + roundNumber,165,200);
    enemyGoCounter = 0;
    enemy1Alive = true;
    enemy2Alive = true;
    enemy3Alive = true;
    enemy4Alive = true;
    enemy5Alive = true;
    enemy6Alive = true;
    enemy7Alive = true;
    player.visible = true;
    player.y = 350;
    enemy1.y = 600;
    enemy2.y = 600;
    enemy3.y = 600;
    enemy4.y = 600;
    enemy5.y = 600;
    enemy6.y = 600;
    enemy7.y = 600;
    bullet1Go = false;
    bullet2Go = false;
    bullet3Go = false;
    bullet4Go = false;
    bullet5Go = false;
    bullet6Go = false;
  }
  if (lifeLostRoundTimer == 60) {
    lifeLostRoundTimerGo = false;
    lifeLostRoundTimer = 0;
  }
  if (nextRoundTimerGo === true && start === false && gameOver === false) {
    nextRoundTimer = nextRoundTimer + 1;
    stroke("white");
    fill("white");
    textSize(20);
    textFont("Bungee");
    text("Round " + roundNumber,165,200);
    enemyGoCounter = 0;
    enemy1Alive = true;
    enemy2Alive = true;
    enemy3Alive = true;
    enemy4Alive = true;
    enemy5Alive = true;
    enemy6Alive = true;
    enemy7Alive = true;
    player.visible = true;
    player.y = 350;
    enemy1.y = 50;
    enemy2.y = 50;
    enemy3.y = 50;
    enemy4.y = 50;
    enemy5.y = 50;
    enemy6.y = 50;
    enemy7.y = 50;
    bullet1Go = false;
    bullet2Go = false;
    bullet3Go = false;
    bullet4Go = false;
    bullet5Go = false;
    bullet6Go = false;
  }
  if (nextRoundTimer == 60) {
    nextRoundTimerGo = false;
    nextRoundTimer = 0;
    enemyGoCounter = 119;
  }
  if (lose.visible === false) {
    fill("white");
    noStroke();
    textSize(10);
    textFont("Bungee");
    textAlign("left","up");
    text("SCORE: " + score,5,15);
  }
  if (lose.visible === true) {
    textSize(15);
    fill("white");
    stroke("white");
    textFont("Bungee");
    textAlign("center","center");
    text("SCORE: " + score,200,220);
    text("PRESS R TO RETRY",200,240);
  }
  if (keyDown("r") && lose.visible === true) {
    score = 0;
    roundNumber = 1;
    livesLeft = 3;
    lives3.visible = true;
    lives2.visible = true;
    lose.visible = false;
    player.visible = true;
    player.y = 350;
    player.x = 200;
    playerAlive = true;
    enemy1Alive = true;
    enemy1.y = 50;
    enemy2Alive = true;
    enemy2.y = 50;
    enemy3Alive = true;
    enemy3.y = 50;
    enemy4Alive = true;
    enemy4.y = 50;
    enemy5Alive = true;
    enemy5.y = 50;
    enemy6Alive = true;
    enemy6.y = 50;
    enemy7Alive = true;
    enemy7.y = 50;
    gameOver = false;
    nextRoundTimerGo = true;
    start = true;
    startTimer = 0;
   
  }
  if (keyWentDown("e")) {
    if (pause === false && nextRoundTimerGo === false && lifeLostRoundTimerGo === false && lose.visible === false) {
      pause = true;
    } else {
      pause = false;
      pauseOver = true;
    }
  }
  if (pause === true) {
    bullet1Go = false;
    bullet2Go = false;
    bullet3Go = false;
    bullet4Go = false;
    bullet5Go = false;
    bullet6Go = false;
    enemy1.setSpeed(0);
    enemy2.setSpeed(0);
    enemy3.setSpeed(0);
    enemy4.setSpeed(0);
    enemy5.setSpeed(0);
    enemy6.setSpeed(0);
    enemy7.setSpeed(0);
    edgeCounterGo = false;
    textSize(18);
    textAlign(CENTER,CENTER);
    text("pause",200,200);
    enemyGoCounter = 60;
  }
  if (pauseOver === true) {
    pauseOver = false;
    if (bullet1.y < 800) {
      bullet1Go = true;
    }
    if (bullet2.y < 800) {
      bullet2Go = true;
    }
    if (bullet3.y < 800) {
      bullet3Go = true;
    }
    if (bullet4.y < 800) {
      bullet4Go = true;
    }
    if (bullet5.y < 800) {
      bullet5Go = true;
    }
    if (bullet6.y < 800) {
      bullet6Go = true;
    }
    edgeCounterGo = true;
    if (enemy1.y > 250) {
      if (roundNumber < 13) {
        enemy1.setSpeedAndDirection(roundNumber + 5,enemy1.rotation - 90);
      } else {
        enemy1.setSpeedAndDirection(18,enemy1.rotation - 90);
      }
    }
    if (enemy2.y > 250) {
      if (roundNumber < 13) {
        enemy2.setSpeedAndDirection(roundNumber + 5,enemy2.rotation - 90);
      } else {
        enemy2.setSpeedAndDirection(18,enemy2.rotation - 90);
      }
    }
    if (enemy3.y > 250) {
      if (roundNumber < 13) {
        enemy3.setSpeedAndDirection(roundNumber + 5,enemy3.rotation - 90);
      } else {
        enemy3.setSpeedAndDirection(18,enemy3.rotation - 90);
      }
    }
    if (enemy4.y > 250) {
      if (roundNumber < 13) {
        enemy4.setSpeedAndDirection(roundNumber + 5,enemy4.rotation - 90);
      } else {
        enemy4.setSpeedAndDirection(18,enemy4.rotation - 90);
      }
    }
    if (enemy5.y > 250) {
      if (roundNumber < 13) {
        enemy5.setSpeedAndDirection(roundNumber + 5,enemy5.rotation - 90);
      } else {
        enemy5.setSpeedAndDirection(18,enemy5.rotation - 90);
      }
    }
    if (enemy6.y > 250) {
      if (roundNumber < 13) {
        enemy6.setSpeedAndDirection(roundNumber + 5,enemy6.rotation - 90);
      } else {
        enemy6.setSpeedAndDirection(18,enemy6.rotation - 90);
      }
    }
    if (enemy7.y > 250) {
      if (roundNumber < 13) {
        enemy7.setSpeedAndDirection(roundNumber + 5,enemy7.rotation - 90);
      } else {
        enemy7.setSpeedAndDirection(18,enemy7.rotation - 90);
      }
    }
  }
   if (keyWentDown("i")) {
    player.debug = true;
    enemy1.debug = true;
    enemy2.debug = true;
    enemy3.debug = true;
    enemy4.debug = true;
    enemy5.debug = true;
    enemy6.debug = true;
    enemy7.debug = true;
    bullet1.debug = true;
    bullet2.debug = true;
    bullet3.debug = true;
    bullet4.debug = true;
    bullet5.debug = true;
    bullet6.debug = true;
    lives3.debug = true;
    lives2.debug = true;
  }
  if (keyWentDown("l")) {
     livesLeft = 0;
     gameOver = true;
     start = false;
     Game.visible = false;
     lives3.visible = false;
     lives2.visible = false;
     nextRoundTimer = 0;
     lifeLostTimer = 0;
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
