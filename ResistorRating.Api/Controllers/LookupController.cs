using Microsoft.AspNetCore.Mvc;
using ResistorRating.Library.Contracts;
using ResistorRating.Library.Models;

namespace ResistorRating.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class LookupController : ControllerBase
{
    private readonly ILookupService _lookupService;

    public LookupController(ILookupService lookupService)
    {
        _lookupService = lookupService;
    }

    [HttpGet]
    public ActionResult<IEnumerable<ElectronicColorRing>> Get()
    {
        return Ok(_lookupService.GetAllColorRingTypes());
    }
}
