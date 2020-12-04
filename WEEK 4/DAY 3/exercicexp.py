# Exercise 1 xp : Convert Lists Into Dictionaries
# Convert the two following lists, into dictionaries.
# Hint: Use the zip method
# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]
# Expected output:
# {'Ten': 10, 'Twenty': 20, 'Thirty': 30}

# Solution :

# def Convert_dict(a):  
#     init = iter(keys)  
#     res_dct = dict(zip(init, init))  
#     return res_dct

# keys = ['Ten', 10, 'Twenty', 20, 'Thirty', 30]

# print(Convert_dict(keys))


# Exercise 2 xp : Cinemax #2
# “Continuation of Exercise Cinemax of Week4Day2 XP”

# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free
# if they are between 3 and 12, the ticket is $10;
# and if they are over age 12, the ticket is $15 .
# Here is the object you will work with : family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
# Using a for loop, the dictionary above, and the instructions, print out how much each family member will need to pay alongside their name
# After the loop print out the family’s total cost for the movies
# Bonus: let the user input the names and ages instead of using the provided family variable (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty)

# Solution :

# family = {'rick': 43, 'beth': 13, 'morty': 5, 'summer': 8}

# for name, age in family.items():
#     if age > 3 and age < 12:
#         print(f"{name} has to pay 10$")
#     if age < 3:
#         print(f"{name} free ticket !")
#     elif age >= 12: 
#         print(f"{name} has to pay 15$")

 
# print("The whole family has to pay 50$ for the movie")

#bonus 

# nameage = {}
# total = 0 

# while True:
#     askname = input("What is your name ?")
#     if askname == 'x':
#         break
#     askage = int(input("What is your age ?"))
#     nameage[askname] = askage

# for askname, askage in nameage.items():
#     if askage > 3 and askage < 12:
#         print(f"{askname} has to pay 10$")
#         total += 10
#     if askage < 3:
#         print(f"{askname} free ticket !")
#         total += 0
#     elif askage >= 12: 
#         print(f"{askname} has to pay 15$")
#         total += 15



# Exercise 3 xp : Zara
# Here is some information about a brand.
# name: Zara 
# creation_date: 1975 
# creator_name: Amancio Ortega Gaona 
# type_of_clothes: men, women, children, home 
# international_competitors: Gap, H&M, Benetton 
# number_stores: 7000 
# major_color: France -> blue, Spain -> red, US -> pink, green 
# Create a dictionary called brand, and translate the information above into keys and values.
# Change the number of stores to 2.
# Print a sentence that explains who the clients of Zara are.
# Add a key called country_creation with a value of Spain to brand
# If the key international_competitors is in the dictionary, add the store Desigual.
# Delete the information about the date of creation.
# Print the last international competitor.
# Print in a sentence, the major clothes’ colors in the US.
# Print the amount of key value pairs (length of the dictionary).
# Print only the keys of the dictionary.
# Create another dictionary called more_on_zara with the following information:
# creation_date: 1975 
# number_stores: 10 000 
# Use a method to add the information from the dictionary more_on_zara to the dictionary brand.
# Print the value of the key number_stores. What just happened ?


# Solution :


# #1
# brand = {
#     "name": "Zara",
#     "creation_date": 1975,
#     "creator_name": "Amancio Ortega Gaona",
#     "type_of_clothes": ["men", "women", "children", "home"],
#     "international_competitors": ["Gap", "H&M", "Benetton"],
#     "number_stores": 7000,
#     "major_color": ["France: blue", "Spain: red", "US: pink, green"],
#     }


# #2
# brand.update({"number_stores": 2})
# print(brand)

# #3
# print(f"Zara's clients are {brand['type_of_clothes']}")

# #4
# brand["country_creation"] = "Spain"
# print(brand)

# #5
# brand["international_competitors"].append("Desigual")
# print(brand) 

# #6
# brand.pop("creation_date")
# print(brand)

# #7
# print(brand['international_competitors'][-1])

# #8
# print(f"The major clothes’ colors in the {brand['major_color'][-1]}")

# #9
# print(len(brand)) #numbers of keys in the dictionary


# #10
# for key in brand.items() : 
#     print(key) #print only keys

# for value in brand.items() :
#     print(value) #print only values

# #11
# more_on_zara = {
#     "creation_date": 1975,
#     "number_stores": 10000,
#     }


# brand = more_on_zara(creation_date=1975,
#     number_stores= 10000)
# print(more_on_zara)



# Exercise 4 xp : Disney Characters
# Consider this list :

# users = [ "Mickey", "Minnie", "Donald","Ariel","Pluto"] 
# Analyse these results :

# #1/ print(disney_users_A) >> {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}

# #2/ print(disney_users_B) >> {0: "Mickey",1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}

# #3/ print(disney_users_C) >> {"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}
# Use a for loop to recreate the #1 result. Tip : don’t hardcode the numbers
# Use a for loop to recreate the #2 result. Tip : don’t hardcode the numbers
# Use a method to recreate the #3 result
# Hint: The 3rd result is in the alphabetical order
# Recreate the #1 result, only if:
# The characters’ names contain the letter “i”.
# The characters’ names start with the letter “m” or “p”.

# Solution :

# users = ["Mickey", "Minnie", "Donald","Ariel","Pluto"] 
# indices = list(range(len(users))) 

# disney_users_A = dict(zip(users, indices))
# print(disney_users_A)

# disney_users_B = dict(zip(indices, users))
# print(disney_users_B)

# disney_users_C = dict(zip(sorted(users), indices))
# print(disney_users_C)

# mylist = [name for name in users if "i" in name]

# disney_users_D = dict(zip(sorted(users), indices))
# print(disney_users_D)

# disney_users_D = {key: value for (key, value) in disney_users_A.items() if "i" in  key}
# print(disney_users_D)