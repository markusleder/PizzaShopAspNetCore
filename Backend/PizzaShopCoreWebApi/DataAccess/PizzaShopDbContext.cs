using PizzaShopWebApi.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace PizzaShopWebApi.DataAccess
{
    public class PizzaShopDbContext : DbContext
    {
        public PizzaShopDbContext(DbContextOptions options) : base(options)
        {
        }
        
        public virtual DbSet<Pizza> Pizzas { get; set; }
        public virtual DbSet<Ingredient> Ingredients { get; set; }
    }
}