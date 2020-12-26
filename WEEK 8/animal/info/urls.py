
from django.urls import path, include
from . import views

urlpatterns = [
    path('animal/<int:id>', views.animal,)
]