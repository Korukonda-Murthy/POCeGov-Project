""" from django.conf.urls import url
from django.urls.conf import path 
from lotusapp import views


urlpatterns = [ 
    #url(r'^api/registration$', views.userRegistration),
    path('api/registration/', views.userRegistration.as_view()),
] """