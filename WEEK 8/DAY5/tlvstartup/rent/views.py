from django.shortcuts import render
from .models import Rental

# Create your views here.

def rentallist(request):
    
    #Calling the Model and asking for Data  (The model calls the DB)
    rentals = Rental.objects.all()

    #Calling the template and asking for html to be built
    html =  render(request, 'rentals.html', {'rentallist':rentals})

    return html


def rental(request):
    