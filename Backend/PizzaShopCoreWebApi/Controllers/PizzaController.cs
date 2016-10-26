using System.Web.Http;
using Microsoft.AspNetCore.Mvc;
using PizzaShopWebApi.Services.Interfaces;

namespace PizzaShopWebApi.Controllers
{
    public class PizzaController : Controller
    {
        private readonly IPizzaService _pizzaService;

        public PizzaController(IPizzaService pizzaService)
        {
            _pizzaService = pizzaService;
        }

        [HttpGet]
        [Route("api/pizzashop/pizzas")]
        public IActionResult GetAll()
        {
            var pizzas = _pizzaService.GetAll();

            return this.Ok(pizzas);
        }

        [HttpGet]
        [Route("api/pizzashop/pizzas/{id}")]
        public IActionResult GetPizza([FromUri] int id)
        {
            var pizza = _pizzaService.GetPizza(id);

            if (pizza != null)
            {
                return this.Ok(pizza);
            }
            return this. NotFound();
        }
    }
}
