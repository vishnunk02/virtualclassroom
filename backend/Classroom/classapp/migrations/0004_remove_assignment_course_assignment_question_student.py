# Generated by Django 5.0.2 on 2024-03-02 13:50

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('classapp', '0003_remove_question_user'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.RemoveField(
            model_name='assignment',
            name='course',
        ),
        migrations.AddField(
            model_name='assignment',
            name='question',
            field=models.ForeignKey(default=2, on_delete=django.db.models.deletion.CASCADE, to='classapp.question'),
            preserve_default=False,
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('course_key', models.CharField(max_length=5)),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='classapp.course')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
