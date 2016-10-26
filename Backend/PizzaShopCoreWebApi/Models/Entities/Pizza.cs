using System.Collections.Generic;

namespace PizzaShopWebApi.Models.Entities
{
    public class Pizza
    {
        public long Id { get; set; }

        public string Name { get; set; }

        public double Price { get; set; }

        public virtual ICollection<Ingredient> Ingredients { get; set; }
    }
}