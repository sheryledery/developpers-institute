# Ternary

# *args **kwargs

# Map, Filter, Reduce, lambda

# dunder methods

# Decorators
# property
# staticmethod
# class level attributes
# classmethod


class Person:

	used_names = set()

	def __init__(self, name, age):
		if name in self.used_names:
			name = input("That name is taken. Enter another name: ")

		self.name = name
		self.age = age
		self.used_names.add(name)

	@classmethod
	def fromYear(cls, name, birth_year):
		THIS_YEAR = 2020
		return cls(name, THIS_YEAR - birth_year)

	@property
	def professional_name(self):
		return "Mr " + self.name

	
class Man(Person):

	sex = "Male"

	@staticmethod
	def get_nicknames():
		return ["Bro", "Dude", "Buddy"]





def square(x):
	return x*x

squares = list(map(square, [1,2,3,4,5]))
squares = list(map(lambda x: x*x, [1,2,3,4,5]))


def isEven(x):
	if x % 2 == 0:
		return True
	return False

evens = list(filter(isEven, [1,2,3,4,5,6,7,8,9,10]))
evens = list(filter(lambda x: True if x % 2 == 0 else False, [1,2,3,4,5,6,7,8,9,10]))
text = list(filter(lambda x: True if isinstance(x, str) else False, [1, 2, "a", "b", 3, "c"]))

from functools import reduce

def addnums(a, b):
	return a + b

total = reduce(addnums, [1,2,3,4,5])
total = reduce(lambda a, b: a + b, [1,2,3,4,5])



#packing args
def display(*args):
	print(args)

# also packing args
def letters():
	return "a", "b", "c", "d", "e"
#f, *m, l = get_letter()

#unpacking
def takethree(this,that,other):
	print(this,that,other)

# nums = [1,2,3]
# takethree(*nums)

#packing kwargs
def show(**kwargs):
	print(kwargs)

#unpacking kwargs
mydict = {
	'this': 'WOOF',
	'that': 'MEOW',
	'other': 'QUACK'
}

# takethree(**mydict)