from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from .forms import DirectorForm, FilmForm, CountryForm, CategoryForm
from .models import Category, Film, Director, Country
from .forms import CategoryForm, FilmForm, DirectorForm, CountryForm
# Create your views here.

def homepage(request):
    form = FilmForm()
    return render(request, 'homepage.html', {'form': form, 'datafilm': Film.objects.all() })


def create_film(request):
    if request.method == 'POST':
        form = FilmForm(request.POST).save()
        return redirect('/addfilm')
    else:
        form = FilmForm()
    return render(request, 'film/addfilm.html', {'form': form, 'datafilm': Film.objects.all() })

    


def create_director(request):
    if request.method == 'POST':
        form = DirectorForm(request.POST).save()
        return redirect('/adddirector')
    else:
        form = DirectorForm()
    return render(request, 'director/addDirector.html', {'form': form})

   