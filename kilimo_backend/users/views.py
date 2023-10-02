from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth.models import login, authenticate
from .models import CustomUser
from django.contrib.auth.forms import UserCreationForm
from .forms import CustomUserCreationForm



# api authentication models starts here
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from rest_framework.authtoken.models import Token



def register(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)

            token, created = Token.objects.get_or_create(user=user)
            return redirect('profile')  # Redirect to profile page after successful registration
    else:
        form = CustomUserCreationForm()

    return render(request, 'users/register.html', {'form': form})





# def profile(request):
#     return render(request, 'users/profile.html')        
# # Create your views here.

# def home(request):  
#     return render(request, 'users/home.html')       


# def about(request):

#     return render(request, 'users/about.html')

# def contact(request):

#     return render(request, 'users/contact.html')







