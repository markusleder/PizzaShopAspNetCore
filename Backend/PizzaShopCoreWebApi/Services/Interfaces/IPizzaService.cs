using PizzaShopWebApi.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PizzaShopWebApi.Services.Interfaces
{
    public interface IPizzaService
    {
        IEnumerable<Pizza> GetAll();

        Pizza GetPizza(int id);

    }
}
