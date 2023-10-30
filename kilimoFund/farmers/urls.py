from django.urls import path
from .views import signup, login, verify_membership

app_name = 'kilimoFund'

urlpatterns = [
    path('signup/', signup, name='farmer-signup'),
    path('login/', login, name='farmer-login'),
    path('verify-membership/', verify_membership, name='verify-membership'),
]
