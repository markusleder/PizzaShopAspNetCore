using System.Collections.Generic;
using System.Linq;
using PizzaShopWebApi.Models.Entities;
using PizzaShopWebApi.Services.Interfaces;
using PizzaShopWebApi.DataAccess;
using Microsoft.EntityFrameworkCore;

namespace PizzaShopWebApi.Services
{
    public class PizzaService : IPizzaService
    {
        private readonly PizzaShopDbContext _dbContext;

        public PizzaService(PizzaShopDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IEnumerable<Pizza> GetAll()
        {
            var pizzas = _dbContext.Pizzas.Include(p => p.Ingredients).ToList();
            return pizzas;
        }

        public Pizza GetPizza(int id)
        {
            var pizza = _dbContext.Pizzas.Include(p => p.Ingredients).FirstOrDefault(p => p.Id == id);
            return pizza;
        }
    }
}