# Mini-Project - Tic Tac Toe
# Create a TicTacToe game in python, where two users can play together.

# Here Are The Rules:
# The game is played on a grid that’s 3 squares by 3 squares.
# Players take turns putting their marks (O or X) in empty squares.
# The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.
# When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.
# Hint
# To do this project, you basically need to program four functions: * display_board() – To display Tic Tac Toe board (GUI). * player_input(player) – To get input position from the player. * check_win() – To check winner of the game. * play() – More like the main function, which calls above function for gameplay.

# Tips : Consider The Following:
# What actions will need to happen every turn to make this program work?
# With the question above in mind, think about how to break up your code into smaller pieces (functions)
# Remember to follow the single responsibility principle! each function should do one thing and do it well!

# Solution :


#the board

theBoard = {'7': ' ' , '8': ' ' , '9': ' ' ,
            '4': ' ' , '5': ' ' , '6': ' ' ,
            '1': ' ' , '2': ' ' , '3': ' ' }

#display tic tac toe board        
def display_board(board):
    print(board['7'] + '|' + board['8'] + '|' + board['9'])
    print('-+-+-')
    print(board['4'] + '|' + board['5'] + '|' + board['6'])
    print('-+-+-')
    print(board['1'] + '|' + board['2'] + '|' + board['3'])



#main function, which calls above function for gameplay
def play():
    turn = 'X'
    count = 0
    
    for i in range(10):
            printBoard(display_board)
            print("It's your turn," + turn + ".Move to which place?")

            move = input()        

            if display_board[move] == ' ':
                display_board[move] = turn
                count += 1
            else:
                print("That place is already filled.\nMove to which place?")
                continue

            

# Now we will check if player X or O has won,for every move after 5 moves. 
        if count >= 5:
            if display_board['7'] == display_board['8'] == display_board['9'] != ' ': # across the top
                printBoard(display_board)
                print("\nGame Over.\n")                
                print(" **** " +turn + " won. ****")                
                break
            elif display_board['4'] == display_board['5'] == display_board['6'] != ' ': # across the middle
                printBoard(display_board)
                print("\nGame Over.\n")                
                print(" **** " +turn + " won. ****")
                break
            elif display_board['1'] == display_board['2'] == display_board['3'] != ' ': # across the bottom
                printBoard(display_board)
                print("\nGame Over.\n")                
                print(" **** " +turn + " won. ****")
                break
            elif display_board['1'] == display_board['4'] == display_board['7'] != ' ': # down the left side
                printBoard(display_board)
                print("\nGame Over.\n")                
                print(" **** " +turn + " won. ****")
                break
            elif display_board['2'] == display_board['5'] == display_board['8'] != ' ': # down the middle
                printBoard(display_board)
                print("\nGame Over.\n")                
                print(" **** " +turn + " won. ****")
                break
            elif display_board['3'] == display_board['6'] == display_board['9'] != ' ': # down the right side
                printBoard(display_board)
                print("\nGame Over.\n")                
                print(" **** " +turn + " won. ****")
                break 
            elif display_board['7'] == display_board['5'] == display_board['3'] != ' ': # diagonal
                printBoard(display_board)
                print("\nGame Over.\n")                
                print(" **** " +turn + " won. ****")
                break
            elif display_board['1'] == display_board['5'] == display_board['9'] != ' ': # diagonal
                printBoard(display_board)
                print("\nGame Over.\n")                
                print(" **** " +turn + " won. ****")
                break 

        # If neither X nor O wins and the board is full, we'll declare the result as 'tie'.
        if count == 9:
            print("\nGame Over.\n")                
            print("It's a Tie!!")

        # we have to change the player after every move.
        if turn =='X':
            turn = 'O'
        else:
            turn = 'X' 



board_keys = []

for key in display_board:
    board_keys.append(key)
    
restart = input("Do want to play Again?(y/n)")

    if restart == "y" or restart == "Y":  
        for key in board_keys:
            display_board[key] = " "

        game()

        
