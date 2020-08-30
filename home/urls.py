from django.conf.urls import url
from . import views

app_name = "base"
urlpatterns = [
        url("" , views.home , name = "home"),
]
