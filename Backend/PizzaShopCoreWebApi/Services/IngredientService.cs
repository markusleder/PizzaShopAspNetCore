using PizzaShopWebApi.DataAccess;
using PizzaShopWebApi.Models.Entities;
using PizzaShopWebApi.Services.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace PizzaShopWebApi.Services
{
    public class IngredientService : IIngredientService
    {
        private readonly PizzaShopDbContext _dbContext;

        public IngredientService(PizzaShopDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public IEnumerable<Ingredient> GetAll()
        {
            var ingredients = _dbContext.Ingredients.ToList();
            return ingredients;
        }

        public Ingredient GetIngredient(int id)
        {
            var ingredient = _dbContext.Ingredients.FirstOrDefault(i => i.Id == id);
            return ingredient;
        }
    }
}