from django.contrib.auth import login, authenticate
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import Farmer, LoanApplication
from rest_framework import status
from .serializers import FarmerSerializer, LoanApplicationSerializer
from rest_framework.permissions import IsAuthenticated

@api_view(['POST'])
def signup(request):
    if request.method == 'POST':
        serializer = FarmerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Registration successful'})
        return Response(serializer.errors, status=400)

@api_view(['POST'])
def login(request):
    if request.method == 'POST':
        email = request.data.get('email')
        password = request.data.get('password')
        user = authenticate(request, username=email, password=password)
        if user is not None:
            login(request, user)
            return Response({'message': 'Login successful'})
        return Response({'message': 'Login failed'}, status=400)

@api_view(['POST'])
@login_required
def verify_membership(request):
    email = request.data.get('email')
    organization_license = request.data.get('organization_license')

    # Implement your membership verification logic here

    if membership_verified:
        return Response({'message': 'Membership verified'})
    return Response({'message': 'Membership not verified'}, status=400)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_loan_application(request):
    serializer = LoanApplicationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(farmer=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def list_loan_applications(request):
    loan_applications = LoanApplication.objects.filter(farmer=request.user)
    serializer = LoanApplicationSerializer(loan_applications, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)