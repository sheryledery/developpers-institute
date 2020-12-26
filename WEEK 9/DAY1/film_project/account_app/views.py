from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm, AuthentificationForm



# Create your views here.

def signup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect(request, 'signup/')
        else:
            form = UserCreationForm()
        return render(request, 'signup.html', {'form': form})


def login(request):
    if request.method == 'POST':
        form = AuthentificationForm()
    else:
        form = AuthentificationForm()
    return render(request, 'login.html', {'form': form})


# def logout(request):
#     return render(request, 'logout.html')

