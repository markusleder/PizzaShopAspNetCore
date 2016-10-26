using PizzaShopWebApi.Models.Entities;
using System.Collections.Generic;

namespace PizzaShopWebApi.Services.Interfaces
{
    public interface IIngredientService
    {
        IEnumerable<Ingredient> GetAll();

        Ingredient GetIngredient(int id);

    }
}
