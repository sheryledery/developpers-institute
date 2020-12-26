from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse # pass view information into the browser
import json

with open('animals.json', 'r') as jsonfile:
    data = json.load(jsonfile)["animals"]


# takes a request, returns a response
# def animal(request, id):
#     response = f'my urls says: {id}'
#     return HttpResponse(response)

def animal(request, id):
    for x in data:
        if x ['id'] == id:
            winner = x
    return HttpResponse(winner)

# def family(request, id):
#     open()
#     return HttpResponse('ok')


def index(request):
    data = json.load(jsonfile)["animals"]
    return render(request, posts/homepage.html, context)

