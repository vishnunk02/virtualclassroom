# Generated by Django 5.0.2 on 2024-03-02 13:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('classapp', '0002_question'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='question',
            name='user',
        ),
    ]
