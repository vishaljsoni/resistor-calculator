using Microsoft.AspNetCore.Mvc;
using ResistorRating.Library.Contracts;
using ResistorRating.Library.Exceptions;
using ResistorRating.Library.Models;

namespace ResistorRating.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class OhmValueCalculatorController : ControllerBase
{
    private readonly IOhmValueCalculator _ohmValueCalculatorService;

    public OhmValueCalculatorController(IOhmValueCalculator ohmValueCalculator)
    {
        _ohmValueCalculatorService = ohmValueCalculator;
    }

    [HttpGet("{bandACode}/{bandDCode}/{bandBCode?}/{bandCCode?}")]
    [ProducesResponseType(typeof(CalculatedOhmForResistor), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public ActionResult<CalculatedOhmForResistor> Get(string bandACode, string bandDCode, string? bandBCode = "", string? bandCCode = "")
    {
        try
        {
            var result = _ohmValueCalculatorService.CalculateOhmValue(bandACode, bandDCode, bandBCode ?? string.Empty, bandCCode ?? string.Empty);
            return Ok(result);
        }
        catch (BandNotFoundException ex)
        {
            return BadRequest(new { message = ex.ExceptionMessage });
        }
        catch (WrongColorBandSelectedException ex)
        {
            return BadRequest(new { message = ex.ExceptionMessage });
        }
    }
}
