from django.shortcuts import render
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.decorators import action
from django.contrib.auth import login, logout
from .models import Farmer
from .serializers import FarmerSerializer

class FarmerViewSet(viewsets.ModelViewSet):
    queryset = Farmer.objects.all()
    serializer_class = FarmerSerializer

    @action(detail=False, methods=['POST'])
    def login(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        # Implement your login logic here (e.g., using Django's built-in authentication)
        # You can use Django's authenticate() and login() functions

        if user is not None:
            login(request, user)
            return Response({'message': 'Login successful'})

        return Response({'message': 'Login failed'})

    @action(detail=False, methods=['POST'])
    def signup(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'message': 'Registration successful'})

    @action(detail=False, methods=['POST'])
    def verify_membership(self, request):
        email = request.data.get('email')
        organization_license = request.data.get('organization_license')

        # Implement your membership verification logic here

        if membership_verified:
            return Response({'message': 'Membership verified'})
        else:
            return Response({'message': 'Membership not verified'}, status=400)
