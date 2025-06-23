using Microsoft.AspNetCore.Mvc;
using ResistorRating.Library.Contracts;
using ResistorRating.Library.Exceptions;
using ResistorRating.Library.Models;

namespace ResistorRating.Api.Core.Controllers
{
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
        public ActionResult<CalculatedOhmForResistor> Get(string bandACode, string bandDCode, string bandBCode = "", string bandCCode = "")
        {
            try
            {
                var result = _ohmValueCalculatorService.CalculateOhmValue(bandACode, bandDCode, bandBCode, bandCCode);
                return Ok(result);
            }
            catch (BandNotFoundException ex)
            {
                return BadRequest(new { message = ex.ExceptionMessage, reason = "Color band not found." });
            }
            catch (WrongColorBandSelectedException ex)
            {
                return BadRequest(new { message = ex.ExceptionMessage, reason = "Wrong Color band selected. We can't rate the resistor." });
            }
        }
    }
}
