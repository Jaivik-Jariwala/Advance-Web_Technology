from django.contrib import admin
from django.contrib import User, Group
from .models import Profile

class ProfileInline(admin.StackedInline):
    model =Profile

class UserAdmin(admin.ModelAdmin):
    model = User
    fields = ["username"]
    inlines = [ProfileInline]

admin.site.unregister(User)
admin.site.register(User, UserAdmin)
admin.unregister(Group)
