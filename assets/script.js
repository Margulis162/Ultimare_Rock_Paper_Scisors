            //vars
            const RPSList = ["rock", "paper", "scissors"];
            const input = document.querySelector('input');
            const btn = document.getElementById('play');
            const rslt = document.getElementById('result');

            //default selection for input
            document.getElementById('rock').checked = true;
            //user input set to default
            let userPick = document.querySelector('input[name="pick"]:checked').value;

             
         

            //functions and snippets 

                //computer pseudorandom choice
                function computerPick() {
                    const randValueRPS = RPSList[Math.floor(Math.random()*RPSList.length)];
                    return randValueRPS
                }
                
                //game processor lol
                function game(){

                    //var
                    const compTurn = computerPick();
                    userPick = document.querySelector('input[name="pick"]:checked').value;

                    //I wanted to use a switch, since i never did before
                    switch(true){

                        //draw
                        case (userPick === compTurn) :
                            rslt.textContent ="It's a draw";
                            
                            break;

                        //loose
                        case (userPick === "rock" && compTurn === "paper"):
                        case (userPick === 'paper' && compTurn === 'scissors'):
                        case (userPick === 'scissors' && compTurn === 'rock'):
                        rslt.textContent = 'Computer Wins!';
                        
                            break;

                        //win
                        case (userPick === "rock" && compTurn === "scissors"):
                        case (userPick === 'paper' && compTurn === 'rock'):
                        case (userPick === 'scissors' && compTurn === 'paper'):
                        rslt.textContent = 'You Win!'
                        
                            break;


                
                    }

                    //the snippet which changes the images 
                    if(compTurn && userPick){

                        //vars
                        const initialImg = document.getElementById('imageInitial');
                        const newImgPlayer = document.getElementById('playerMove');
                        const newImgComputer = document.getElementById('computerMove')

                        initialImg.style.display = 'none';
                        newImgPlayer.style.display ='inline-block';
                        newImgComputer.style.display ='inline-block';

                        switch(true){
                            
                            case userPick === 'scissors':
                            document.getElementById('playerHand').src ='img/scissors_left.png';
                            break;

                            case userPick === 'rock':
                            document.getElementById('playerHand').src ='img/rock_left.png';
                            break;

                            case userPick === 'paper':
                            document.getElementById('playerHand').src ='img/paper_left.png';
                            break;
                        }

                            switch(true){
                            
                            case compTurn === 'scissors':
                            document.getElementById('computerHand').src ='img/scissors_right.png';
                            break;

                            case compTurn === 'rock':
                            document.getElementById('computerHand').src ='img/rock_right.png';
                            break;

                            case compTurn === 'paper':
                            document.getElementById('computerHand').src ='img/paper_right.png';
                            break;

                           
                            

                            
                        }
                    }
                }

              btn.addEventListener('click', game);