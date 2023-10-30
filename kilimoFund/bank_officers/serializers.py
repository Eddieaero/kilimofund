from rest_framework import serializers
from .models import Message, Guidelines

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'

class GuidelinesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guidelines
        fields = '__all__'
