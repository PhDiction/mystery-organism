// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Creates a object specimen
const pAequorFactory = (num, dnaArray) => {
  return {
    specimenNum: num,
    dna: dnaArray,
    // Selects and random base from 15 and changes it to another base
    mutate() {
      randomIndex = Math.floor(Math.random() * 15)
      let base = dnaArray[randomIndex];
      let newBase = returnRandBase();
      while (base === newBase) {
        newBase = returnRandBase();
      }
      dnaArray[randomIndex] = newBase
    },
    // Compares the DNA strands from the current specimen object and another
    compareDNA(pAequorObject) {
      let sum = 0;
      let percentage = 0;
      for (i=0; i<this.dna.length; i++) {
        if (this.dna[i] === pAequorObject.dna[i]) {
          sum += 2;
        }
      }
      percentage = ((sum / 30) * 100).toFixed(2);
      console.log(`specimen #${this.specimenNum} and specimen #${pAequorObject.specimenNum} have ${percentage}% DNA in common`);
    },
    // Finds the survival rate based on the dna strand containing 60% or above "C" or "G" bases.
    willLikelySurvive() {
      let sum = 0;
      let percentage = 0;
      for (i=0; i<this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G' ) {
          sum += 1;
        }
      }
      percentage = ((sum / 15) * 100).toFixed(2);
      if (percentage >= 60) {
        return true;
      } else {
        return false;
      }
    }
  }
}

//Builds a list of 30 specimen objects likely to survive
let survivors = []
let specimenNumber = 1
while (survivors.length < 31) {
  let specimen = pAequorFactory(specimenNumber, mockUpStrand());
  specimenNumber++;
  if (specimen.willLikelySurvive()) {
    survivors.push(specimen);
  }
}

console.log(survivors);




