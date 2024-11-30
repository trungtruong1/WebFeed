from django.urls import path
from .views import AccountView
from .views import AccountViewCreate
from . import views

urlpatterns = [
    path('dcm/vailonthenhi', AccountView.as_view()),
    path('dcm/vailonthenhi/login', AccountViewCreate.as_view()),
    path('auth/login/', views.get_user_access, name='get_user_access')
]