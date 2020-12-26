from django.shortcuts import render
from django.http import HttpResponse
from .models import Animal, Families

# Create your views here.

def animal(request, id):
    animal = Animal.objects.get(id=id)
    return HttpResponse(f"name: {animal.name}, legs: {animal.legs}, weight: {animal.weight}, height: {animal.height}, speed: {animal.speed}, family: {animal.family}")

def family(request, id):
    family = Families.objects.get(id=id)
    return HttpResponse(f"Family: {family.name}")

def animals(request):
    animals = Animal.objects.all()
    return HttpResponse(f"Animals: {animals.name}")

