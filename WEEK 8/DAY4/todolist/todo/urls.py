from django.urls import path
from . import views 

urlpatterns = [
    path('todos/', views.display_todos, name='todos'),
    path('addtask', views.add_task, name='addtask'),
]