class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height
        


    def bark(self, message):
        print("{} {}".format(self.name, message))


    def jump(self):
        print("{} jumps {}cm high".format(self.name, self.height*2))
        

    def dogsperson(self):
        print("The dog's name is {} and his height is {}".format(self.name, self.height))


h1 = Dog("Bobby", 133)
h1.bark("goes woof !")
h1.jump()

davids_dog = Dog("Rex", 50)
davids_dog.dogsperson()

sarahs_dog = Dog("Teacup", 20)
sarahs_dog.dogsperson()


def biggers(self):
    if davids_dog.Dog.self.height > sarahs_dog.Dog.self.height :
        print(f"{davids_dog.dogsperson()}, and he is the bigger")
    else:
        print(f"{sarahs_dog.dogsperson()}, and he is the bigger")