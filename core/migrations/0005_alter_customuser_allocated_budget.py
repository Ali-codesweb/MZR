# Generated by Django 4.1.3 on 2022-12-12 16:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_customuser_allocated_budget'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='allocated_budget',
            field=models.IntegerField(default=0, null=True),
        ),
    ]
