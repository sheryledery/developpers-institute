from django.urls import path
from . import views

urlpatterns = [
  path('', views.home, name='home'),
  path('question/<int:id>/', views.question, name='question'),
  path('questions/', views.questions, name='questions'),
  path('questions/add/', views.add_question, name='add-question'),
  path('students/', views.students, name='students'),
  path('comingsoon/', views.comingsoon, name='comingsoon'),
]