from django.db import models
import datetime as dt
# Create your models here.
class BasicInfo(models.Model):
    name = models.CharField(max_length = 60 )
    DOB = models.DateTimeField(default = dt.datetime.now().strftime("%Y-%m-%d %H:%M:%S"), null = False)
