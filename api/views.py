from django.shortcuts import render
from rest_framework import generics
from .serializers import AccountSerializer
from .models import Account
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from django.views.decorators.csrf import csrf_exempt
# Create your views here.


@require_http_methods(["POST", "GET"])
def get_user_access(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        print(data)
        username = data['username']
        password = data['password']

        account = Account.objects.filter(username=username, password=password) 

        if account:
            return JsonResponse({'message': 'POST request received', 'status': 'success'}, status=200)
        else:
            return JsonResponse({'message': 'POST request received', 'status': 'failed'}, status=401)
        
    elif request.method == 'GET':
        return JsonResponse({'message': 'GET request received'})

@csrf_exempt
@require_http_methods(["POST", "GET"])
def register_user(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data['username']
        password = data['password']
        # email = data['email']
        
        if Account.objects.filter(username=username).exists():
            return JsonResponse({'message': 'Username already exists', 'status': 'failed'}, status=400)

        # if Account.objects.filter(email=email).exists():
        #     return JsonResponse({'message': 'Email already exists', 'status': 'failed'}, status=400)
        
        account = Account.objects.create(username=username, password=password)
        account.save()

        return JsonResponse({'message': 'Account created successfully', 'status': 'success'}, status=200)
        
    elif request.method == 'GET':
        data = json.loads(request.body)
        print(data)
        return JsonResponse({'message': 'GET request received'})

class AccountView(generics.ListAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer

class AccountViewCreate(generics.CreateAPIView):
    serializer_class = AccountSerializer