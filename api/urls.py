from os import name
from django.urls import path
from . import views

app_name = "api"

urlpatterns = [
    path('',views.ApiOverview, name='ApiOverview'),
    path('jobs/', views.jobApi, name='jobApi'),
    path('jobs/<int:id>', views.specificJobApi, name='specificJobApi'),
    path('skill/', views.skillApi, name='SkillApi'),
    path('jobs/category/<str:category>/', views.jobCategoryApi, name='jobCategoryApi'),
    path('users/',views.ExtendedUserApi,name='userApi')
]