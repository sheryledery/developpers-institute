# Exercise 1 xp : What Are You Learning ?
# Write a function called display_message() that prints one sentence telling everyone what you are learning about in this chapter.
# Call the function, and make sure the message displays correctly.

# Solution :

# def display_message():
#     print("Today we learned function !")
# display_message()


# Exercise 2 xp : What’s Your Favorite Book ?
# Write a function called favorite_book() that accepts one parameter, title.
# The function should print a message, such as “One of my favorite books is Alice in Wonderland”.
# Call the function, making sure to include a book title as an argument in the function call.

# Solution :

# def favorite_book(title='book title'):
#     print('One of my favorite books is Alice in Wonderland')
# favorite_book(title='book title')


# Exercise 3 xp :
# Write a function that accepts one parameter (a number X) and returns the value of X+XX+XXX+XXXX.

# Solution :


# def digit_sum_from_letters(x):
#     a = int("%s" % x)
#     b = int("%s%s" % (x,x))
#     c = int("%s%s%s" % (x,x,x))
#     d = int("%s%s%s%s" % (x,x,x,x))
#     return a+b+c+d
# print(digit_sum_from_letters(9))


# Exercise 4 xp : Some Geography
# Write a function called describe_city() that accepts the name of a city and its country.
# The function should print a simple sentence, such as “Reykjavik is in Iceland”.
# Give the parameter for the country a default value.
# Call your function for three different cities, at least one of which is not in the default country.

# Solution :

# def describe_city(city, country="france"):
#     print(f"{city} is in {country}")


# describe_city("Paris")
# describe_city("Tel aviv", "Israel")
# describe_city("Milan", "Italy")


# Exercise 5 xp : Let’s Create Some Personalized Shirts !
# Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
# The function should print a sentence summarizing the size of the shirt and the message printed on it.
# Call the function once using positional arguments to make a shirt.
# Call the function a second time using keyword arguments.
# Modify the make_shirt() function so that shirts are large by default with a message that reads I love Python.
# Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

# Solution :

# #1,2
# def make_shirt(size="large", printedtext="'I love Python'"):
#     print(f"The size is {size} and the message is {printedtext}")

# #3
# make_shirt("medium", "'I'm the boss'")
# #4
# make_shirt(size="large", printedtext="'You are the boss'")
# #5
# make_shirt()
# #6
# make_shirt()
# make_shirt(size="medium")
# make_shirt(size="small", printedtext="'Hi everyone'")


# Exercise 6 xp : Magicians …
# Make a list of magician’s names.
# Pass the list to a function called show_magicians(), which prints the name of each magician in the list.
# Write a function called make_great() that modifies the list of magicians by adding the phrase "the Great" to each magician’s name.
# Call show_magicians() to see that the list has actually been modified.

# Solution :

# #1
# names = ["Harry Potter", "Ron Weasley", "Hermione Granger"]

# #2
# def show_magicians(magicians):
#     for mag in magicians:
#         print(mag)
# show_magicians(names)

# #3
# def make_great(mag):
#     for mags in range(0, len(mag)):
#         mag[mags] = 'The great ' + mag[mags]

#     return mag

# show_magicians(names)
# new_names = make_great(names)
# show_magicians(new_names)



# Exercise 7 xp : When Will I Retire ?
# The point of the exercise is to check is a person can retire depending on his age and his gender.
# Note : Retirement age in Israel is 67 for men, and 62 for women (born after April, 1947).

# Create a function get_age(year, month, day)
# Hard-code the current year and month in your code (there are better ways of doing this, but for now it will be enough.)
# After calculating the age of a person, the function should return it (the age is an integer).
# Create a function can_retire(gender, date_of_birth).
# It should call the get_age function (with what arguments?) in order to receive an age back.
# Now it has all the information it needs in order to determine if the person with the given gender and date of birth is able to retire or not.
# Calculate. You may need to do a little more hard-coding here.
# Return True if the person can retire, and False if he/she can’t.
# Some Hints

# Ask for the user’s gender as “m” or “f”.
# Ask for the user’s date of birth in the form “yyyy/mm/dd”, eg. “1993/09/21”.
# Call can_retire to get a definite value for whether the person can or can’t retire.
# Display a message to the user informing them whether they can retire or not.
# As always, test your code to ensure it works.


# Solution :

from datetime import date 
local_dt = datetime.now()
print(local_dt)

datetime.now(year=2020, month=11, day=11)
retiremindate = [date(1953, 1, 1), date(1958, 1, 1)]

print(retiremindate[0].year)
print(retiremindate[0].month)
print(retiremindate[0].day)


def get_age(year, month, day):
    for men and women in datetime:
        print(input(datetime))
    if  men >= local_dt.year - 67 and women >= local_dt.year - 62 :
        print("You can retire !")
    else:
        print("You have to wait..")

get_age(year=1988, month=2, day=5)
            
      




#   def show_magicians(magicians):
#     for mag in magicians:
#         print(mag)
# show_magicians(names)

# #3
# def make_great(mag):
#     for mags in range(0, len(mag)):
#         mag[mags] = 'The great ' + mag[mags]

#     return mag

# show_magicians(names)
# new_names = make_great(names)
# show_magicians(new_names)


