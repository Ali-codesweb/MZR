from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path, re_path
from django.views.generic import TemplateView


urlpatterns = [
    path('vice-manager/', include('core.url.vice_manager')),
    path('store-manager/', include('core.url.store_manager')),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.MEDIA_ROOT)
