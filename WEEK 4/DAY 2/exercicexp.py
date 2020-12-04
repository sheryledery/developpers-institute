
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

name = input("sheryl")
for in name:
    print("Enter an another name")

  name = "sheryl"
while i = name:
  print(i)
 