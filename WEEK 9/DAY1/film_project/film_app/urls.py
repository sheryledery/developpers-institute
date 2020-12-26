from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.homepage, name="homepage" ),
    path('addfilm/', views.create_film, name="addfilm"),
    path('adddirector/', views.create_director, name="adddirector"),
]
