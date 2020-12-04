
# Exercise 1 xp : Favorite Numbers
# Create a set called my_fav_numbers with your favorites numbers.
# Add two new numbers to it.
# Remove the last one.
# Create a set called friend_fav_numbers with your friend’s favorites numbers.
# Concatenate my_fav_numbers and friend_fav_numbers to our_fav_numbers.

# Solution :

# my_fav_numbers = {5, 10, 12, 17, 24, 27, 31}
# my_fav_numbers.add(26)
# my_fav_numbers.add(52)
# print(my_fav_numbers)
# my_fav_numbers.remove(31)
# print(my_fav_numbers)
# friend_fav_numbers = {3, 13, 14, 30}
# our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
# print(our_fav_numbers)


# Exercise 2 xp : Tuple
# Given a tuple with integers is it possible to add more integers to the tuple?

# Solution :

# thistuple = (1, 8, 12)
# print(thistuple)
# Once a tuple is created, you cannot add items to it. Tuples are unchangeable.
# thistuple[3] = "orange" # This will raise an error


# Exercise 3 xp : Print A Range Of Numbers
# Use a for loop to print the numbers from 1 to 20, inclusive.

# Solution :

# for x in range(1, 21):
#   print(x)

# Exercise 4 xp : Floats
# Recap – What is a float? What is the difference between an integer and a float?
# Can you think of another way of generating a sequence of floats?
# Create a list containing the sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 without hard-coding the sequence.

# Solution :

# 1) Integers and floating points are separated by the presence or absence of a decimal point. For instance, 5 is an integer whereas 5.0 is a floating-point number.
# 2) a list
# 3) x = [1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5] # we use a list

# Exercise 5 xp : Shopping List
# Consider this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];

# Remove “Banana” from the list.
# Remove “Blueberries” from the list.
# Put “Kiwi” at the end of the list.
# Add “Apples” at the beginning of the list.
# Count how many apples are in the basket.
# Empty the basket.
# Print(basket)

# Solution :

# basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# #1
# basket.remove("Banana")
# print(basket)
# #2
# basket.remove("Blueberries")
# print(basket)
# #3
# basket.append("Kiwi")
# print(basket)
# #4
# basket.insert(1, "Apples")
# print(basket)
# #5
# basket.count("Apples")
# print(basket)
# #6
# basket.clear()
# print(basket)


# Exercise 6 xp : Loop
# Write a while loop that will keep asking the user for input until the input is the same as your name.

# Solution :

# name = "sheryl"
# askname = input("Enter a new name")
# while askname != name:
#     askname = input("Enter a new name")
 

#  Exercise 7 xp:
# Given a list, use a while loop to print out every element which has an even index.

# Solution :

# i = 0
# numbers = [0, 1, 2, 3, 4, 5, 6]

# while i < 7:
#     if i % 2 == 0:
#         print(i)
#     i += 1
   

# Exercise 8 xp:
# Make a list of the multiples of 3 from 3 to 30. Use a for loop to print the numbers in your list.

# Solution :

# for x in range(3,31,3):
#     print(x)


# Exercise 9 xp:
# Use a for loop to find numbers between 1500 and 2700, which are divisible by 7 and multiples of 5.

# Solution :

# list = range(1500, 2700)
# for number in list:
#     if number % 7 == 0 and number % 5==0:
#         print(number)



# Exercise 13 xp : Who Is Under 16?
# This time you have a list of users, and you want to remove every user that is below 16 years old.

# Write a program that ask every user their age, and if they are less than 16 years old, remove them from the list.
# At the end, print the final list

# Solution :

# users = ["adam", "bob", "charlie", "dave", "eddy"]
# users_over_16 = []

# for user in users:
#     age = int(input(f"Hi{user}, how old are you ?"))
#     if age >= 16:
#         users_over_16.append(user)

# print(users_over_16)



# for i in range(len(users)):
#     age = int(input(f"Hi {user[i]}, how old are you ?"))
#     if age < 16:
#         users.remove(user)
#         i -= 1 #removing from list while looping through