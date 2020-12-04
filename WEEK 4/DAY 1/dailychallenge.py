# Daily Challenge : Build Up A String
# Using the input function, ask the user for a string. The string must be 10 characters long.
# If it’s less than 10 characters, print a message which states “string not long enough”
# If it’s more than 10 characters, print a message which states “string too long”
# Then, print the first and last characters of the given text
# Construct the string character by character: Print the first character, then the second, then the third, until the full string is printed
# Example:
# The user enters “Hello Word”
# Then, you have to construct the string character by character
# H
# He
# Hel
# … etc
# Hello World
# Swap some characters around then print the newly jumbled string (hint: look into the shuffle method)
# Example:
# Hlrolelwod

askstring = ("Enter a string, It has to be at least 10 characters long : ")
if len(askstring) > 10:
    print("string not long enough")
elif len(askstring) < 10:
    print("string too long")
else :
    print(askstring[0], askstring[-1])
for i in range(len(askstring)):
    print(askstring[0:i+1])
    
 import random
 print("original string :", askstring)
 final_str = "".join(random.sample(askstring, len(askstring)))
 print("shuffled string is :", final_str)
