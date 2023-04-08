using Microsoft.AspNetCore.Mvc;
using MovieApi.Data;

namespace MovieApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private JoelHiltonMovieCollectionContext context;
        public MovieController(JoelHiltonMovieCollectionContext temp){
            context = temp;
        }
        public IEnumerable<Movie> Get()
        {
            var x = context.Movies.ToArray();
            return context.Movies.Where(m=>m.Edited == "Yes").OrderBy(m => m.Title).ToArray();
        }
    }
}
