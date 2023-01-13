﻿using MealTrackWebAPI.Models;
using MealTrackWebAPI.Models.Meal;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace MealTrackWebAPI.Services
{
    public class FoodService
    {
        private readonly IMongoCollection<Food> _foods;

        public FoodService(IMealTrackDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _foods = database.GetCollection<Food>("Food");
        }

        public List<Food> GetFoods() => _foods.Find(food => true).ToList();

        public Food Get(string id) => _foods.Find(food => food.Id == id).FirstOrDefault();
    }
}