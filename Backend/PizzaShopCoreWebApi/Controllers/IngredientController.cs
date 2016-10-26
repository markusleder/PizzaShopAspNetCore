using PizzaShopWebApi.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Web.Http;

namespace PizzaShopWebApi.Controllers
{
    public class IngredientController : Controller
    {
        private readonly IIngredientService _ingredientService;

        public IngredientController(IIngredientService ingredientService)
        {
            _ingredientService = ingredientService;
        }

        [HttpGet]
        [Route("api/pizzashop/ingredients")]
        public IActionResult GetAll()
        {
            var ingredients = _ingredientService.GetAll();

            return this.Ok(ingredients);
        }

        [HttpGet]
        [Route("api/pizzashop/ingredients/{id}")]
        public IActionResult GetIngredient([FromUri] int id)
        {
            var ingredient = _ingredientService.GetIngredient(id);

            if (ingredient != null)
            {
                return this.Ok(ingredient);
            }
            return this.NotFound();
        }
    }
}
