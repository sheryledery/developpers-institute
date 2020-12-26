from django.db import models
from django.forms import ModelForm
from datetime import datetime
from django import forms

# Create your models here.


class Country(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    

class Category(models.Model):
    name = models.CharField(max_length=40)

    def __str__(self):
        return self.name
    

class Director(models.Model):
    first_name = models.CharField(max_length=40)
    last_name = models.CharField(max_length=40)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
    

class Film(models.Model):
    title = models.CharField(max_length=40)
    release_date = models.DateTimeField(default=datetime.now)
    created_in_country = models.ForeignKey(Country, on_delete=models.CASCADE, related_name="created_in_country", max_length=100)
    avaible_in_countries = models.ManyToManyField(Country, related_name="avaible_in_countries", max_length=100)
    category = models.ManyToManyField(Category, max_length=100)
    director = models.ManyToManyField(Director, max_length=100)

    def __str__(self):
        return self.title
    
