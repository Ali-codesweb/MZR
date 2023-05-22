from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path, re_path
from django.views.generic import TemplateView

from core.view.vice_manager import vice_manager,allocate_budget,list_budget
urlpatterns = [
    path('test/', vice_manager),
    path('allocate-budget/', allocate_budget),
    path('list-budget/', list_budget),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.MEDIA_ROOT)
