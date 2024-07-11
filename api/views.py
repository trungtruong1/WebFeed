from django.shortcuts import render
from rest_framework import generics
from .serializers import AccountSerializer
from .models import Account
# Create your views here.

class AccountView(generics.ListAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer

class AccountViewCreate(generics.CreateAPIView):
    serializer_class = AccountSerializer