from django.contrib.auth.models import User
from rest_framework import serializers
from core.models import Budget,AllocatedBudget


class BudgetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Budget
        fields = '__all__'
class AllocatedBudgetSerializer(serializers.ModelSerializer):
    class Meta:
        model = AllocatedBudget
        fields = '__all__'
