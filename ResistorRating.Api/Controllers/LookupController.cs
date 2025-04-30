using Microsoft.AspNetCore.Mvc;
using ResistorRating.Library.Contracts;
using ResistorRating.Library.Models;
using System.Linq;

namespace ResistorRating.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LookupController : ControllerBase
    {
        private readonly ILookupService _lookupService;
        
        public LookupController(ILookupService lookupService)
        {
            _lookupService = lookupService;
        }
        
        // GET: api/Lookup
        [HttpGet]
        public IQueryable<ElectronicColorRing> Get()
        {
            return _lookupService.GetAllColorRingTypes();
        }
    }
}
