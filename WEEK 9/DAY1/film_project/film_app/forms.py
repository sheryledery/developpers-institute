from django import forms
from django.forms import ModelForm
from .models import Category, Film, Director, Country
  

class CountryForm(ModelForm):
    class Meta:
        model = Country
        fields = ['name']

class DirectorForm(ModelForm):
    class Meta:
        model = Director
        fields = ['first_name', 'last_name']

class CategoryForm(ModelForm):
    class Meta:
        model = Category
        fields = ['name']

class FilmForm(ModelForm):
    class Meta:
        model = Film
        fields = ['title', 'release_date', 'created_in_country', 'avaible_in_countries', 'category', 'director']