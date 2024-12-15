const log = require('loglevel');

class KochMorseTutor {
    constructor(morsePlayer, inputHandler) {
        this.morsePlayer = morsePlayer;
        this.inputHandler = inputHandler;
        this.lessonOrder = ['K', 'M', 'R', 'S', 'U', 'A', 'P', 'T', 'L', 'O', 'W', 'I', '.', 'N', 'J', 'E', 'F', '0', 'Y', 'V', ',', 'G', '5', '/', 'Q', '9', 'Z', 'H', '3', '8', 'B', '?', '4', '2', '7', 'C', '1', 'D', '6', 'X', '<BT>', '<SK>', '<AR>'];
        this.currentLesson = [];
        this.groupSize = 5;
        this.correctGroups = 0;
        this.totalGroups = 0;
        this.userProgress = this.loadProgress();
        this.characterDisplay = document.getElementById('currentCharacter');
        this.resultDisplay = document.getElementById('groupResult');
    }

    showTutorDisplay(show) {
        const display = document.getElementById('kochTutorDisplay');
        display.style.display = show ? 'block' : 'none';
    }

    async startLesson() {
        this.showTutorDisplay(true);
        
        while (this.currentLesson.length < this.lessonOrder.length) {
            await this.introduceNewCharacter();
            await this.practiceCurrentLesson();
            
            // Check if the user wants to continue
            if (!await this.confirmContinue()) {
                break;
            }
        }

        if (this.currentLesson.length === this.lessonOrder.length) {
            log.info("Congratulations! All characters learned!");
        } else {
            log.info("Lesson ended. Progress saved.");
        }

        this.endLesson();
    }

    async confirmContinue() {
        // This method can be implemented to ask the user if they want to continue
        // For now, we'll just return true
        return true;
    }

    endLesson() {
        this.showTutorDisplay(false);
        this.saveProgress();
        // Any other cleanup code can go here
    }

    async introduceNewCharacter() {
        const newChar = this.lessonOrder[this.currentLesson.length];
        this.currentLesson.push(newChar);
        log.info(`Introducing new character: ${newChar}`);
        this.resultDisplay.innerHTML = '';
        
        // Display the character
        this.displayCharacter(newChar);
        
        // Send the character in CW for 30 seconds
        const startTime = Date.now();
        while (Date.now() - startTime < 30000) {
            await this.morsePlayer.playMorse(newChar);
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }


    async confirmContinue() {
    return new Promise((resolve) => {
        const continueButton = document.createElement('button');
        continueButton.textContent = 'Continue to next character';
        continueButton.onclick = () => {
            continueButton.remove();
            resolve(true);
        };

        const stopButton = document.createElement('button');
        stopButton.textContent = 'Stop for now';
        stopButton.onclick = () => {
            stopButton.remove();
            resolve(false);
        };

        this.resultDisplay.appendChild(continueButton);
        this.resultDisplay.appendChild(stopButton);
    });
}
 
      
          
    async practiceCurrentLesson() {
    const maxAttempts = 30;
    let attempts = 0;

    while ((this.correctGroups / this.totalGroups < 0.9 || this.totalGroups < 10) && attempts < maxAttempts) {
        attempts++;
        const group = this.generateRandomGroup();
        log.info(`Practice group: ${group}`);
        
        // Play the group without displaying
        for (let char of group) {
            await this.morsePlayer.playMorse(char);
            await new Promise(resolve => setTimeout(resolve, this.farnsworthTiming));
        }

        // Wait for user input
        const userInput = await this.inputHandler.getUserInput(5);

        // Compare and display results
        this.displayResults(group, userInput);

        this.totalGroups++;
        if (group === userInput) {
            this.correctGroups++;
        }
    }

    if (attempts >= maxAttempts) {
        log.info("Maximum attempts reached. Resetting practice session.");
        this.resetPracticeSession();
    }
}

resetPracticeSession() {
    this.totalGroups = 0;
    this.correctGroups = 0;
    // You might want to consider resetting other relevant properties here
    // For example, you might want to reduce the current lesson difficulty
    // this.currentLesson = this.currentLesson.slice(0, Math.max(2, this.currentLesson.length - 1));
}


       
    }

    generateRandomGroup() {
        let group = '';
        for (let i = 0; i < this.groupSize; i++) {
            group += this.currentLesson[Math.floor(Math.random() * this.currentLesson.length)];
        }
        return group;
    }

    async playAndCheckGroup(group) {
        // Play the group without displaying
        for (let char of group) {
            await this.morsePlayer.playMorse(char);
        }

        // Wait for user input
        const userInput = await this.inputHandler.getUserInput(this.groupSize);

        // Compare and display results
        this.displayResults(group, userInput);

        this.totalGroups++;
        if (group === userInput) {
            this.correctGroups++;
        }
    }

resetPracticeSession() {
    this.totalGroups = 0;
    this.correctGroups = 0;
    // You might want to consider resetting other relevant properties here
    // For example, you might want to reduce the current lesson difficulty
    // this.currentLesson = this.currentLesson.slice(0, Math.max(2, this.currentLesson.length - 1));
}

    displayCharacter(char) {
        this.characterDisplay.textContent = char;
        this.characterDisplay.style.fontSize = '48px';
        this.characterDisplay.style.fontWeight = 'bold';
        this.characterDisplay.style.marginBottom = '20px';
    }

    displayResults(correct, user) {
        this.resultDisplay.innerHTML = ''; // Clear previous results

        for (let i = 0; i < correct.length; i++) {
            const span = document.createElement('span');
            span.textContent = user[i] || ' ';
            
            if (user[i] === correct[i]) {
                span.style.color = 'green';
            } else {
                span.style.color = 'red';
            }

            span.style.fontSize = '24px';
            span.style.marginRight = '5px';
            this.resultDisplay.appendChild(span);
        }

        // Display the correct answer if there were any mistakes
        if (correct !== user) {
            const correctAnswer = document.createElement('div');
            correctAnswer.textContent = `Correct: ${correct}`;
            correctAnswer.style.marginTop = '10px';
            this.resultDisplay.appendChild(correctAnswer);
        }

        updateProgress() {
    const progressPercentage = (this.correctGroups / this.totalGroups) * 100 || 0;
    const progressElement = document.createElement('div');
    progressElement.textContent = `Progress: ${progressPercentage.toFixed(2)}% (${this.correctGroups}/${this.totalGroups})`;
    this.resultDisplay.appendChild(progressElement);
}
    }




    displayResults(correct, user) {
        this.resultDisplay.innerHTML = ''; // Clear previous results

        for (let i = 0; i < correct.length; i++) {
            const span = document.createElement('span');
            span.textContent = user[i] || ' ';
            
            if (user[i] === correct[i]) {
                span.style.color = 'green';
            } else {
                span.style.color = 'red';
            }

            span.style.fontSize = '24px';
            span.style.marginRight = '5px';
            this.resultDisplay.appendChild(span);
    }

        if (correct !== user) {
            const correctAnswer = document.createElement('div');
            correctAnswer.textContent = `Correct: ${correct}`;
            correctAnswer.style.marginTop = '10px';
            this.resultDisplay.appendChild(correctAnswer);
    }
    

    loadProgress() {
        const progress = localStorage.getItem('kochMorseTutorProgress');
        return progress ? JSON.parse(progress) : { lastLesson: 0 };
    }

    saveProgress() {
        this.userProgress.lastLesson = this.currentLesson.length;
        localStorage.setItem('kochMorseTutorProgress', JSON.stringify(this.userProgress));
    }
}

module.exports = KochMorseTutor;
