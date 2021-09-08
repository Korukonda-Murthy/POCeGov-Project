from django.db.models import fields
from rest_framework import serializers
from lotusapp.models import UserLogin,VehicleRegistration



class UserLoginSerializer(serializers.ModelSerializer):
     class Meta:
         model = UserLogin
         fields = '__all__'


class VehicleRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = VehicleRegistration
        fields = '__all__'
        """  fields =(
            'transaction_id',
            'create_date',
            'owner_first_name',
            'owner_family_name', 
            'owner_id_number',
            'owner_date_of_birth', 
            'owner_street_address',
            'owner_city',
            'owner_province',
            'owner_state',
            'owner_email_address',
            'owner_phone_number',
            'country_make', 
            'vehicle_make',
            'year_make',
            'vehicle_model',
            'vehicle_colour',
            'vin',
            'odometer_reading',
            'number_of_cylinders',
            'fuel_type',
            'body_type',
            'vehicle_usage',
            'date_purchased', 
            'seller_company_name',
            'seller_first_name',
            'seller_family_name',
            'seller_id_number',
            'seller_date_of_birth',
            'seller_email_address',
            'seller_phone_number',
            'seller_street_address',
            'seller_city',
            'seller_province',
            'seller_state'

              
                  )
 """