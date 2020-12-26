from django.urls import path
from . import views

urlpatterns = [
    path('rent/rental/', views.rentallist, name='rentallist'),
    path('rent/rental/<pk>', views.Rental, name='rental'),
]
