var Letter = (letter) => {
    this.current = "_";
    this.theLetters = letter;
    this.showsLetter = false;
    this.letterin = (let) => {
        if(this.theLetters === let){
            this.current = this.theLetters;
            return true;
        }
            return false;
    }
    this.letterShows = () => {
        return this.current;
    }
}

module.exports = Letter;