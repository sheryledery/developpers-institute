# Exercise 1 xp : Cats
# Consider this class

# class Cat:
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age
# Instantiate 3 Cat objects using our class
# Create a function that finds the oldest cat and returns the cat
# Print out: “The oldest cat is , and is years old.” using the method previously created


# Solution :

class Cat:
    def __init__(self, name, age):
        self.name = name
        self.age = age


def find_oldest(cat_list):
    oldest = cat_list[0]

    for cat in cat_list:
        if cat.age > oldest.age:
            oldest = cat

    return oldest_cat

list_of_cats = []
for i in range(10):
    name = chr(65 + 1)
    list_of_cats.append(Cat)

def findmax(numbers):
    biggest = numbers[0]

    for num in numbers:
        if num > biggest:
            biggest = num
    
    return biggest

findmax([1, 4, 17, 6, 8, 2])


c1 = Cat("Fluffy", 3)
c2 = Cat("Scruffy", 6)
c3 = Cat("Grumpy", 4)

oldest_cat = find_oldest([c1, c2, c3])
    
    



# Exercise 2 xp : Dogs
# Create a class Dog.
# In this class, create a method __init__, that takes two parameters : nameand height. This function instantiates two attributes, which values are the parameters.
# Create a method named bark that prints “ goes woof!”
# Create a method jump that prints the following “ jumps cm high!” where x is the height*2.
# Outside of the class, create an object davids_dog. His dog’s name is “Rex” and his height is 50cm.
# Print the details of his dog by calling the methods.
# Create an object sarahs_dog. Her dog’s name is “Teacup” and his height is 20cm.
# Print the details of her dog by calling the methods.
# Create an if statement outside of the class to check which dog is bigger. Print the name of the bigger dog.

# Solution :


# class Dog :
#     def __init__(self, name, height):
#         return ("goes woof !")



#  Exercise 4 xp :

# #6
# How to sort the animals
# animals = ["Ape", "Cat", "Bear", "Cougar", "Baboon", "Eel", "Emu", "Bat"]
# animals = sorted(animals)
# sorted_animals = {}
# key = 1
# starting_letter = animals[0][0]   #A
# for animal in animals:
# 	#check starting letter
# 	if animal[0] != starting_letter:
# 		key += 1
# 		starting_letter = animal[0]
# 	if key not in sorted_animals:
# 		sorted_animals[key] = animal
# 	else:  
# 		if not isinstance(sorted_animals[key], list):
# 			sorted_animals[key] = [sorted_animals[key]]
# 		sorted_animals[key].append(animal)
# print(sorted_animals)
# # {
# 	1: 'Ape', 
# 	2: ['Baboon', 'Bat', 'Bear'], 
# 	3: ['Cat', 'Cougar'], 
# 	4: ['Eel', 'Emu']
# }