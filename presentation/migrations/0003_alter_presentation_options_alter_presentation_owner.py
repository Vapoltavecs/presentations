# Generated by Django 4.0.4 on 2022-04-17 03:27

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('presentation', '0002_alter_presentation_presentation'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='presentation',
            options={'verbose_name': 'Презентация', 'verbose_name_plural': 'Презентации'},
        ),
        migrations.AlterField(
            model_name='presentation',
            name='owner',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='owner', to=settings.AUTH_USER_MODEL),
        ),
    ]
