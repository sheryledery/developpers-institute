from django import forms
from django.forms import ModelForm
from django.contrib.auth.models import User


class SignupForm(ModelForm):
    class Meta:
        model = User
        fields = ['username', 'password1', 'password2']

class LoginForm(ModelForm):
    class Meta:
        model = User
        fields = ['username', 'password']


