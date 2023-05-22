from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework_simplejwt.tokens import AccessToken
from core.models import CustomUser

class UserSerializerToken(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)
    first_name = serializers.SerializerMethodField(read_only=True)
    last_name = serializers.SerializerMethodField(read_only=True)

    class Meta:
        fields = ['id', 'username', 'first_name', 'last_name',
                  'name', 'email']
        model = CustomUser

    def get_name(self, obj):
        name = obj.first_name + obj.last_name
        if name == '':
            name = obj.username
        return name

    # def get_isAdmin(self, obj):
    #     return obj.is_staff

    def get_first_name(self, obj):
        return obj.first_name

    def get_last_name(self, obj):
        return obj.last_name


class UserSerializerWithToken(serializers.ModelSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    name = serializers.SerializerMethodField(read_only=True)
    # isAdmin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = CustomUser
        fields = ['id','username', 'name', 'first_name',
                  'last_name', 'token','role','allocated_budget']

    def get_token(self, obj):
        token = AccessToken.for_user(obj)
        return str(token)

    def get_name(self, obj):
        name = obj.first_name + obj.last_name
        if name == '':
            name = obj.username
        return name

    # def get_isAdmin(self, obj):
    #     return obj.is_staff
