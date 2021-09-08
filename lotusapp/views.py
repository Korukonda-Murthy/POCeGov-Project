from django.shortcuts import render
import smtplib
from email.message import EmailMessage

# Create your views here.
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from lotusapp import serializers

from lotusapp.models import UserLogin, VehicleRegistration
from lotusapp.serializers import UserLoginSerializer, VehicleRegistrationSerializer
from rest_framework.decorators import api_view




""" @api_view(['POST'])
def userRegistration(request):

    if request.method == 'POST':
        userResgistration_data = JSONParser().parse(request)
        userResgistration_serializer = UserLoginSerializer(data = userResgistration_data)
        if userResgistration_serializer.is_valid():
            userResgistration_serializer.save()
            return JsonResponse(userResgistration_serializer.data, status.HTTP_201_CREATED)
        return JsonResponse(userResgistration_serializer.errors, status = status.HTTP_400_BAD_REQUEST)    """

class userRegistration(APIView):
        def post(self, request, format=None):
                serializer = UserLoginSerializer(data=request.data)
                if serializer.is_valid():
                    serializer.save()
                    try:
                        curtEmail = serializer.data.get('user_email')
                        curtName = serializer.data.get('first_name')
                        emailMessge = "Hello"+" "+curtName +", \n \nYou have Successfully Registered For Vehicle Registration Portal,\n \nThank you!."
                        msg = EmailMessage()
                        msg.set_content(emailMessge)
                        msg['Subject'] = 'Lotus Pacific Portal Registration- Reg'
                        msg['From'] = "forpoctest@gmail.com"
                        msg['To'] = curtEmail
                            # Send the message via our own SMTP server.
                        server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
                        server.login("forpoctest@gmail.com", "forpoctest123")
                        server.send_message(msg)
                        server.quit()
                        print ("Email sent successfully!")
                    except Exception as ex:
                        print ("Something went wrong….",ex)

                    return Response(serializer.data, status=status.HTTP_201_CREATED)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


        def get(self,request):
            registered_user = UserLogin.objects.all()
            serializer = UserLoginSerializer(registered_user, many = True)
            return Response(serializer.data, status=status.HTTP_200_OK)


class VehicleRegistration(APIView):
    def post(self, request, format=None):
        serializer= VehicleRegistrationSerializer(data=request.data)
        if serializer.is_valid():
             serializer.save()
             return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)