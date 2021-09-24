from django.urls import path
from . import views

app_name = "main"

urlpatterns = [
    path('', views.index, name='index'),
    path('login/',views.login, name='login'),
    path('signup/',views.signup, name='signup')
]
