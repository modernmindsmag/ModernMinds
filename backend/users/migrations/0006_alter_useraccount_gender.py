# Generated by Django 4.1.6 on 2023-03-06 21:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_alter_country_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='useraccount',
            name='gender',
            field=models.CharField(blank=True, choices=[('male', 'Male'), ('female', 'Female'), ('non-binary', 'Non-binary'), ('other', 'Other')], max_length=10, null=True),
        ),
    ]
