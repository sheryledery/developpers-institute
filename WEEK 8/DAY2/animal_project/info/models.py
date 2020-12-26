from django.db import models

# Create your models here.
class Animal(models.Model):
    name = models.CharField(max_length=30)
    legs = models.IntegerField()
    weight = models.IntegerField()
    height = models.IntegerField()
    speed = models.IntegerField()
    family = models.IntegerField()

    def __str__(self):
        return self.Animal


class Families(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.Families



def __repr__(self):
    return f"name: {self.name}, legs: {self.legs}, weight: {self.weight}, height: {self.height}, speed: {self.speed}, family: {self.family}"