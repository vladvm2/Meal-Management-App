﻿using MealTrackWebAPI.Helpers;
using MealTrackWebAPI.Models;
using MealTrackWebAPI.Models.Authentication;
using MongoDB.Driver;
using System.Linq;

namespace MealTrackWebAPI.Services
{
    public class UserService
    {
        private readonly IMongoCollection<User> _users;

        public UserService(IMealTrackDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
     
            _users = database.GetCollection<User>("Users");
        }

        public User SignIn(string email,string password)
        {
            if(string.IsNullOrWhiteSpace(email) || string.IsNullOrWhiteSpace(password)) {
                throw new AppException("Email or password are empty");
            }

            User user = _users.Find(user => true).ToList().SingleOrDefault(user => string.Equals(user.Email,email));

            if(user == null || !string.Equals(user.Password,password)) {
                throw new AppException("Email or password is incorrect");
            }

            return user;
        }

        public User SignUp(User userIn)
        {
            if(_users.Find(user => true).ToList().Any(user => user.Email == userIn.Email)) {
                throw new AppException("Email already exists");
            }

            _users.InsertOne(userIn);

            return userIn;
        }

        public User Update(string id,User userIn)
        {
            User userFound = _users.Find(user => true).ToList().SingleOrDefault(user => user.Id == id);

            if(userFound == null) {
                throw new AppException("User not found");
            }

            userIn.Id = userFound.Id;

            if(string.IsNullOrWhiteSpace(userIn.ImagePath)) {
                userIn.ImagePath = userFound.ImagePath;
            }

            if(string.IsNullOrWhiteSpace(userIn.Password)) {
                userIn.Password = userFound.Password;
            }

            _users.ReplaceOne(user => user.Id == id,userIn);

            return userIn;
        }
    }
}