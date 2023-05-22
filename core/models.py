from django.contrib.postgres.fields import ArrayField
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save

# Create your models here.


class CustomUser(AbstractUser):
    role = models.CharField(max_length=25,null=True)
    allocated_budget = models.IntegerField(default=0,null=True)

class Budget(models.Model):
    date = models.CharField(max_length=15)
    amount = models.IntegerField(default=0)
    
class AllocatedBudget(models.Model):
    idarah = models.CharField( max_length=50)
    allocator = models.ForeignKey("CustomUser" ,on_delete=models.CASCADE)
    amount = models.IntegerField(default=0)

class DepartmentProfile(models.Model):
    department_admin = models.ForeignKey(CustomUser,on_delete=models.CASCADE)
    total_budget = models.IntegerField(default=0)