from rest_framework import serializers
from .models import *


class BankOfficerSerializer(serializers.ModelSerializer):
    class Meta:
        model = BankOfficer
        fields = '__all__'


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'

class GuidelinesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guidelines
        fields = '__all__'
