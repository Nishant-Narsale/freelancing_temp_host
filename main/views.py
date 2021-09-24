from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import auth
from django.contrib import messages

# Create your views here.
def index(request):
    context = {}
    return render(request, "index.html",context)


def login(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']

        user = auth.authenticate(username=username, password=password)
        if user is not None:
            auth.login(request, user)
            return redirect('main:index')
        else:
            messages.error(request,'Invalid Credentials.')
            return redirect('main:login')

    else:
        if request.user.is_authenticated:
            return redirect('main:index')
        context = {}
        return render(request, "login.html", context)


def signup(request):
    if request.method == "POST":
        username = request.POST['username']
        email = request.POST['email']
        password1 = request.POST['password1']
        password2 = request.POST['password2']

        if password1 == password2:
            if User.objects.filter(email = email).exists():
                messages.error(request,'Email Already Exists. Please go and sign up.')
                return redirect('main:signup')
            elif User.objects.filter(username = username).exists():
                messages.error(request,'Username Already Exists')
                return redirect('main:signup')
            else:
                #creating new user
                user = User.objects.create_user(username = username, password = password1, email = email)
                user.save()
                
                #logging in new user created
                user = auth.authenticate(username=username, password=password1)
                auth.login(request, user)
                return redirect('main:index')
        else:
            messages.error(request,'Password not matching...')
            return redirect('main:signup')

    else:
        if request.user.is_authenticated:
            return redirect('main:index')
        return render(request, 'signup.html')
