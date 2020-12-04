import faker
from random import randint
class Person:
	def __init__(self, name, age, country):
		self.name = name
		self.age = age
		self.country = country
	def __repr__(self):
		return f"Person: {self.name}"
	def __str__(self):
		return f"Hello, I'm a {self.__repr__()}"
	def save(self):
		data = f"{self.name},{self.age},{self.country}\n"
		with open("myfile", "a") as f:
			f.write(data)
# GENERATE AND SAVE 10,000 FAKE PEOPLE
myfaker = faker.Faker()
for i in range(10000):
	Person(myfaker.first_name(), randint(1,85), myfaker.country()).save()