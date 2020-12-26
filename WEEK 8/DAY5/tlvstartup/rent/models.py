from django.db import models
import datetime
# Create your models here.

class Customer(models.Model):
    firstname = models.CharField(max_length=40)
    lastname = models.CharField(max_length=40)
    email = models.CharField(max_length=80)
    phone = models.IntegerField()
    address = models.CharField(max_length=80)
    city = models.CharField(max_length=40)
    country = models.CharField(max_length=40)

    def __str__(self):
        return self.firstname


class VehicleType(models.Model):
    name = models.CharField(max_length=40)

class VehicleSize(models.Model):
    name = models.CharField(max_length=40)
    
class Vehicle(models.Model):
    vehicletype = models.ForeignKey(VehicleType, on_delete=models.CASCADE, related_name="type" )
    datecreated = models.DateField()
    realcost = models.IntegerField()
    size = models.ForeignKey(VehicleSize, on_delete=models.CASCADE, related_name="size")

class Rental(models.Model):
    rentaldate = models.DateField()
    returndate = models.DateField()
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name="customer")
    vehicle = models.ForeignKey(Vehicle, on_delete=models.CASCADE, related_name="vehicle")

class RentalRate(models.Model):
    dailyrate = models.IntegerField()
    vehicletype = models.ForeignKey(VehicleType, on_delete=models.CASCADE, related_name="vtype")
    vehiclesize = models.ForeignKey(VehicleSize, on_delete=models.CASCADE, related_name="vsize")



