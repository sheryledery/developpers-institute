# Exercise 1 xp : Built-In Functions
# Python has many built-in functions, and if you do not know how to use it, you can read document online.
# But Python has a built-in document function for every built-in functions.

# Write a program to print some Python built-in functions documents, such as abs(), int(), raw_input().
# And add documentation for your own function

# Solution :



# x = -3 
# abs(x)
# print(abs(x))

# x = -34
# int(x)
# print(int(x))

# x = -12
# raw_input(x)
# print(raw_input(x))


# Exercise 2 xp : Currencies
# Recreate these results
# Hint : When you add 2 currencies, if they don’t have the same label raise an error
# >>> c1 = Currency('dollar', 5)
# >>> c2 = Currency('dollar', 10)
# >>> c4 = Currency('shekel', 1)
# >>> c3 = Currency('shekel', 10)
# >>> str(c1)
# '5 dollars'
# >>> int(c1)
# 5
# >>> repr(c1)
# '5 dollars'
# >>> c1 + 5
# 10
# >>> c1 + c2
# 15
# >>> c1 
# 5 dollars
# >>> c1 += 5
# >>> c1
# 10 dollars
# >>> c1 += c2
# >>> c1
# 20 dollars
# >>> c1 + c3
# TypeError: Cannot add between Currency type <dollar> and <shekel>

# Solution :


# class Currency():

#     def __init__(self, label, num):
#         self.label = label
#         self.num = num
        

#     def __str__(self):
#         return f"{self.num} {self.label}"
    
#     def __int__(self):
#         return self.num

#     def __add__(self, other):
#         if isinstance(other, int):
#             return other + self.num

#         elif isinstance(other, Currency):
#             if self.label == other.label:
#                 return other.num + self.num
#             else:
#                 raise TypeError(f"Cannot add between Currency type {self.label} and {other.label}  ")

#     def __iadd__(self, other):
#         if isinstance(other, Currency):
#             return other == Currency
        


# Exercise 3 xp :
# 1.Create a function that displays the amount of time left from now until January 1st.
# (Example: the 1st January is in 10 days and 10:34:01hours)

# Solution :

# import time
# time.time()


# >>> from datetime import date, time, datetime
# >>> date(year=2020, month=1, day=31)
# datetime.date(2020, 1, 31)
# >>> time(hour=13, minute=14, second=31)
# datetime.time(13, 14, 31)
# >>> datetime(year=2020, month=1, day=31, hour=13, minute=14, second=31)
# datetime.datetime(2020, 1, 31, 13, 14, 31)


# >>> from datetime import date, time, datetime
# >>> today = date.today()
# >>> today
# datetime.date(2020, 1, 24)
# >>> now = datetime.now()
# >>> now
# datetime.datetime(2020, 1, 24, 14, 4, 57, 10015)
# >>> current_time = time(now.hour, now.minute, now.second)
# >>> datetime.combine(today, current_time)
# datetime.datetime(2020, 1, 24, 14, 4, 57)


# >>> from datetime import date
# >>> date.fromisoformat("2020-01-31")
# datetime.date(2020, 1, 31)


# >>> date_string = "01-31-2020 14:45:37"
# >>> format_string = "%m-%d-%Y %H:%M:%S"


# >>> from datetime import datetime
# >>> datetime.strptime(date_string, format_string)
# datetime.datetime(2020, 1, 31, 14, 45, 37)