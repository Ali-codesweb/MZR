from django.contrib import admin
from .models import CustomUser,Budget,AllocatedBudget
# Register your models here.
admin.site.register(CustomUser)
admin.site.register(Budget)
admin.site.register(AllocatedBudget)