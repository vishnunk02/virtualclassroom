# Generated by Django 5.0.2 on 2024-03-04 10:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('classapp', '0004_remove_assignment_course_assignment_question_student'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='student',
            name='course_key',
        ),
    ]