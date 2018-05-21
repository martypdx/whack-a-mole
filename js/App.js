/* exported App */
/* globals Countdown */

const gameAppTemplate = document.getElementById('game-app-template');
const duration = 30000;
const name = 'hello world';

class App {

    constructor(name) {
        this.name = name;
        //    this.duration =  duration is used only by timer.  Not necessary in app.
        this.score = 0;
    }

    startGame() {
        this.Countdown = new Countdown(this.duration, () => {
            // this function is called when the countdown has expired and game is over
        });
        this.sectionScoreTimer.appendChild(this.Countdown.render());
        // this.Moles = new Moles();
        console.log('section', this.sectionScoreTimer);
    }

    render() {
        // create dom for timer/score and board
        const dom = gameAppTemplate.content;
        this.sectionScoreTimer = dom.getElementById('section-score-timer');
        const sectionMoleBoard = dom.getElementById('section-mole-board');
        dom.appendChild(sectionMoleBoard);
        
        this.sectionScoreTimer = dom.getElementById('section-score-timer');
        // const sectionMoleBoard = dom.getElementById('section-mole-board');
        
        this.startGame();
        
        console.log('this section', this.sectionScoreTimer);
        
        dom.appendChild(this.sectionScoreTimer);

        // console.log('doodles', this.sectionScoreTimer);

        return dom;
        // start game
        //   this.startGame();
    }
}