from django.urls import path
from .views import AccountView
from .views import AccountViewCreate

urlpatterns = [
    path('dcm/vailonthenhi', AccountView.as_view()),
    path('dcm/vailonthenhi/login', AccountViewCreate.as_view())
]