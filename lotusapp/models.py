# Create your models here.
from django.db import models


class UserLogin(models.Model):
    user_id = models.BigAutoField(primary_key=True)
    create_date = models.DateTimeField(auto_now_add=True)
    user_email = models.CharField(max_length=64)
    user_password = models.CharField(max_length=64)
    first_name = models.CharField(max_length=32)
    family_name = models.CharField(max_length=32)

    class Meta:
        managed = False
        db_table = 'user_login'

class VehicleRegistration(models.Model):
    transaction_id = models.BigAutoField(primary_key=True)
    create_date = models.DateTimeField(auto_now_add=True)
    owner_first_name = models.CharField(max_length=32)
    owner_family_name = models.CharField(max_length=32)
    owner_id_number = models.CharField(max_length=32)
    owner_date_of_birth = models.DateField()
    owner_street_address = models.CharField(max_length=64, blank=True, null=True)
    owner_city = models.CharField(max_length=32, blank=True, null=True)
    owner_province = models.CharField(max_length=32, blank=True, null=True)
    owner_state = models.CharField(max_length=32, blank=True, null=True)
    owner_email_address = models.CharField(max_length=64)
    owner_phone_number = models.CharField(max_length=32, blank=True, null=True)
    country_make = models.CharField(max_length=32, blank=True, null=True)
    vehicle_make = models.CharField(max_length=32, blank=True, null=True)
    year_make = models.IntegerField(blank=True, null=True)
    vehicle_model = models.CharField(max_length=32, blank=True, null=True)
    vehicle_colour = models.CharField(max_length=32, blank=True, null=True)
    vin = models.CharField(max_length=32, blank=True, null=True)
    odometer_reading = models.IntegerField(blank=True, null=True)
    number_of_cylinders = models.IntegerField(blank=True, null=True)
    fuel_type = models.CharField(max_length=32, blank=True, null=True)
    body_type = models.CharField(max_length=32, blank=True, null=True)
    vehicle_usage = models.CharField(max_length=32, blank=True, null=True)
    date_purchased = models.DateField()
    seller_company_name = models.CharField(max_length=32, blank=True, null=True)
    seller_first_name = models.CharField(max_length=32, blank=True, null=True)
    seller_family_name = models.CharField(max_length=32, blank=True, null=True)
    seller_id_number = models.CharField(max_length=32, blank=True, null=True)
    seller_date_of_birth = models.DateField(blank=True, null=True)
    seller_email_address = models.CharField(max_length=64, blank=True, null=True)
    seller_phone_number = models.CharField(max_length=32, blank=True, null=True)
    seller_street_address = models.CharField(max_length=64, blank=True, null=True)
    seller_city = models.CharField(max_length=32, blank=True, null=True)
    seller_province = models.CharField(max_length=32, blank=True, null=True)
    seller_state = models.CharField(max_length=32, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'vehicle_registration'
