class TowerOfHanoi {
  constructor(disks) {
    this.TowerA = new Array() // Stack A
    this.TowerB = new Array() // STack B
    this.TowerC = new Array() // Stack C
    this.amountOfDisk = disks
    for (let i = this.amountOfDisk; i > 0; i--) {
      this.TowerA.push(i)
    }
    this.ithMove = 0
  }

  play() {
    this.move(this.TowerA.length, this.TowerA, this.TowerC, this.TowerB)
  }

  move(n, fromTower, toTower, helperTower) {
    if (n == 1) {
      toTower.push(fromTower.pop())
      this.ithMove++;
      this.printTowers();
      return
    }

    this.move(n - 1, fromTower, helperTower, toTower)
    this.move(1, fromTower, toTower, helperTower)
    this.move(n - 1, helperTower, toTower, fromTower)
  }
  printTowers() {
    var lineMax = 0;
    if (this.TowerA.length >= this.TowerB.length && this.TowerA.length >= this.TowerC.length) {
      lineMax = this.TowerA.length - 1;
    } else if (this.TowerB.length >= this.TowerA.length && this.TowerB.length >= this.TowerC.length) {
      lineMax = this.TowerB.length - 1;
    } else {
      lineMax = this.TowerC.length - 1;
    }

    var string = "";
    for (let i = lineMax; i >= 0; i--) {
      string = "";
      if (this.TowerA.length - 1 >= i) {
        string += this.TowerA[i] + "     "
      } else {
        string += "      "
      }
      if (this.TowerB.length - 1 >= i) {
        string += this.TowerB[i] + "     "
      } else {
        string += "      "
      }
      if (this.TowerC.length - 1 >= i) {
        string += this.TowerC[i] + "     "
      } else {
        string += "      "
      }
      console.log(string);
    }
    console.log("---------- Move " + this.ithMove + "----------")
    if (this.TowerB.length == 0 && this.TowerA.length == 0) {
          console.log("Chayanon Maksakarn - 67130500071")
    }
  }
}

let game = new TowerOfHanoi(5)
game.play()
